//=============================================================================
// RPG Maker MZ - Alternative Save Screen (with Delete feature)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Alternative save/load screen layout with delete file option.
 * @author Yoji Ojima + Delete feature added
 *
 * @help AltSaveScreen.js
 *
 * This plugin changes the layout of the save/load screen.
 * It puts the file list on the top and the details on the bottom.
 *
 * Press the Delete key (or your assigned key) to delete the selected save file.
 * 
 * Key bindings:
 * - Save: Enter/Space
 * - Load: Enter/Space
 * - Delete: Delete key (or the key mapped to 'shift' in your controls)
 */

(() => {
    // =========================================================================
    // 1. Scene_File modifications (Save/Load scene)
    // =========================================================================
    const _Scene_File_create = Scene_File.prototype.create;
    Scene_File.prototype.create = function() {
        _Scene_File_create.apply(this, arguments);
        this._listWindow.height = this._listWindow.fittingHeight(3);
        const x = 0;
        const y = this._listWindow.y + this._listWindow.height;
        const width = Graphics.boxWidth;
        const height = Graphics.boxHeight - y;
        const rect = new Rectangle(x, y, width, height);
        const statusWindow = new Window_SavefileStatus(rect);
        this._listWindow.mzkp_statusWindow = statusWindow;
        this.addWindow(statusWindow);
        
        // Add delete handler to the list window
        this._listWindow.setHandler('delete', this.onDelete.bind(this));
    };

    const _Scene_File_start = Scene_File.prototype.start;
    Scene_File.prototype.start = function() {
        _Scene_File_start.apply(this, arguments);
        this._listWindow.ensureCursorVisible();
        this._listWindow.callUpdateHelp();
    };

    // New method: Handle delete command
    Scene_File.prototype.onDelete = function() {
        const savefileId = this.savefileId();
        if (this.isSavefileEnabled(savefileId)) {
            const confirmed = window.confirm(`Are you sure you want to delete Save File ${savefileId}?`);
            if (confirmed) {
                this.executeDelete(savefileId);
                this._listWindow.refresh();
                if (this._helpWindow) {
                    this._helpWindow.setText("Save file deleted.");
                }
            }
        }
        this.activateListWindow();
    };

    // New method: Actually delete the save file
    Scene_File.prototype.executeDelete = function(savefileId) {
        // Remove from DataManager's global info
        if (DataManager._globalInfo) {
            DataManager._globalInfo[savefileId] = null;
            DataManager.saveGlobalInfo();
        }
        
        // Delete the actual file
        if (StorageManager.isLocalMode()) {
            try {
                // For local mode (desktop)
                const fs = require('fs');
                const path = require('path');
                // Try to get the save path
                let saveDir = '';
                if (typeof process !== 'undefined' && process.mainModule) {
                    const base = path.dirname(process.mainModule.filename);
                    saveDir = path.join(base, 'save');
                } else {
                    saveDir = 'save';
                }
                const savePath = path.join(saveDir, `file${savefileId}.rmmzsave`);
                if (fs.existsSync(savePath)) {
                    fs.unlinkSync(savePath);
                }
            } catch (e) {
                console.error("Failed to delete local save file:", e);
            }
        } else {
            // For web mode
            const saveKey = StorageManager.webStorageKey(savefileId);
            localStorage.removeItem(saveKey);
        }
        
        // Also clear the savefile info cache
        if (DataManager._savefileInfo) {
            DataManager._savefileInfo[savefileId] = null;
        }
        
        // Force a reload of global info
        DataManager.loadGlobalInfo();
    };

    // Override to also refresh the status window after delete
    const _Scene_File_onSavefileOk = Scene_File.prototype.onSavefileOk;
    Scene_File.prototype.onSavefileOk = function() {
        _Scene_File_onSavefileOk.call(this);
        // If we're in load mode and loaded a file, no need to refresh
    };

    // Also refresh status window when cursor moves
    const _Window_SavefileList_callUpdateHelp =
        Window_SavefileList.prototype.callUpdateHelp;
    Window_SavefileList.prototype.callUpdateHelp = function() {
        _Window_SavefileList_callUpdateHelp.apply(this, arguments);
        if (this.active && this.mzkp_statusWindow) {
            this.mzkp_statusWindow.setSavefileId(this.savefileId());
        }
    };

    // =========================================================================
    // 2. Modify Window_SavefileList to handle delete key
    // =========================================================================
    Window_SavefileList.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_SavefileList.prototype.maxCols = function() {
        return 4;
    };

    Window_SavefileList.prototype.itemHeight = function() {
        return this.lineHeight() * 2 + 16;
    };

    // Override the update method to handle delete key
    const _Window_SavefileList_update = Window_SavefileList.prototype.update;
    Window_SavefileList.prototype.update = function() {
        _Window_SavefileList_update.call(this);
        if (this.active) {
            // Check for delete key (key code 46) or Shift key (often mapped to delete in RPG Maker)
            if (Input.isTriggered("shift") || Input.isTriggered("delete")) {
                if (this.callHandler("delete")) {
                    Input.update();
                }
            }
        }
    };

    // =========================================================================
    // 3. Window_SavefileStatus (unchanged, just for reference)
    // =========================================================================
    function Window_SavefileStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_SavefileStatus.prototype = Object.create(Window_Base.prototype);
    Window_SavefileStatus.prototype.constructor = Window_SavefileStatus;

    Window_SavefileStatus.prototype.initialize = function(rect) {
        Window_Base.prototype.initialize.call(this, rect);
        this._savefileId = 1;
    };

    Window_SavefileStatus.prototype.setSavefileId = function(id) {
        this._savefileId = id;
        this.refresh();
    };

    Window_SavefileStatus.prototype.refresh = function() {
        const info = DataManager.savefileInfo(this._savefileId);
        const rect = this.contents.rect;
        this.contents.clear();
        this.resetTextColor();
        this.drawTitle(this._savefileId, rect.x, rect.y);
        if (info) {
            this.drawContents(info, rect);
        }
    };

    Window_SavefileStatus.prototype.drawTitle = function(savefileId, x, y) {
        if (savefileId === 0) {
            this.drawText(TextManager.autosave, x, y, 180);
        } else {
            this.drawText(TextManager.file + " " + savefileId, x, y, 180);
        }
    };

    Window_SavefileStatus.prototype.drawContents = function(info, rect) {
        const bottom = rect.y + rect.height;
        const playtimeY = bottom - this.lineHeight();
        this.drawText(info.title, rect.x + 192, rect.y, rect.width - 192);
        this.drawPartyfaces(info.faces, rect.x, bottom - 144);
        this.drawText(info.playtime, rect.x, playtimeY, rect.width, "right");
    };

    Window_SavefileStatus.prototype.drawPartyfaces = function(faces, x, y) {
        if (faces) {
            for (let i = 0; i < faces.length; i++) {
                const data = faces[i];
                this.drawFace(data[0], data[1], x + i * 150, y);
            }
        }
    };
})();