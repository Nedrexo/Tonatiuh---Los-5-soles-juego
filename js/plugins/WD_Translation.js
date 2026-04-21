//=============================================================================
// Plugin Name: WinterDream Translation
// Author: Winthorp Darkrites (Winter Dream Games Creator)
// Description: Allow you to translate the game
// Terms of Use: By using this plugin you agree at our ToU (https://drive.google.com/file/d/1lG2Lep2Unme80ghZD7-fA-hPGWKLsiR7/view)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Allow you to translate the game
 * @author Winthorp Darkrites
 * @url https://ko-fi.com/winterdream
 * @base WD_Core
 * @orderAfter WD_Core
 * 
 * @param defaultCombatMiss
 * @parent defaultLanguage
 * @text Miss (Combat)
 * @desc Default language "Miss" in combat, usually hardcoded in the engine
 * @default Miss
 * 
 * @param defaultOptionOn
 * @parent defaultLanguage
 * @text Options "ON"
 * @desc Default language "ON" toggle in the options scene, usually hardcoded in the engine
 * @default ON
 * 
 * @param defaultOptionOff
 * @parent defaultLanguage
 * @text Options "OFF"
 * @desc Default language "OFF" toggle in the options scene, usually hardcoded in the engine
 * @default OFF
 * 
 * @param mainTranslation
 * @type struct<mainTrans>[]
 * @text Other Languages Translations
 * @desc Translate your Project!
 * @default []
 * 
 * @command --line1--
 * @text === JSON DATABASE ===
 * @desc Commands to manipulate JSONs
 * 
 * @command createAllNewJSON
 * @text Write All Translation JSON (Will overwrite existings!)
 * @desc Create all nine JSON start data in data/WD_Translation. Warning: This will overwrite the existing file
 * 
 * @command createNewJSON 
 * @text Write a new Translation JSON (Will overwrite existing!)
 * @desc Creates a new, ready to be translated, file in data/WD_Translation. Warning: This will overwrite the existing file
 * 
 * @arg dataType
 * @text Data Type
 * @desc Select the data type you want to create
 * @default 0
 * @type select
 * @option Actors
 * @value 0
 * @option Classes
 * @value 1
 * @option Enemies
 * @value 2
 * @option Items
 * @value 3
 * @option Armors
 * @value 4
 * @option Weapons
 * @value 5
 * @option Skills
 * @value 6
 * @option States
 * @value 7
 * @option Map Names
 * @value 8
 *
 * @command createTextCodeTranslations
 * @text Create Text Translation JSON (Will overwrite existing!)
 * @desc Create the JSON with all the game Text Data
 * 
 * @command updateTextCodeTranslations
 * @text Update Text Translation JSON
 * @desc Update the Text Data JSON with new translations while leaving old one intact
 * 
 * @help WD_Translation.js
 *
 * This Plugins help you translate your game in different languages and is capable of
 * autoselecting the matching language package to the user machine language (if available).
 * 
 * Important note: This plugin needs WD_Core to work, it's a free plugin that you can
 * download on my pages linked below. In Rpg Maker Plugin list, WD_Core need to be above
 * this plugin
 * 
 * There are different translation methods for different text data of the game, here is a
 * little guide on how to successfuly translate everything.
 * 
 * PRO TIP BEFORE STARTING: Do your language pack at the END of your project, it's a lot 
 * easier to translate all the data in one go instead of doing continuos changes to the
 * plugin files!
 * 
 * STEP 0 - Installation: Really important!!! The plugin will crash without it! Unzip the
 * "Unzip in data folder.zip" and place it in data! 
 * You should have (your project)/data/WD_Translation/ with 10 json inside. Of course 
 * install the WD_Translation.js as usual in the plugin folder
 * 
 * STEP 1 - Setup the Default Language: The default language is your vanilla project, it uses
 * all the Text Data that you set up in the RPG Maker editor as it is, without any changes.
 * The only extra option I added is the "Combat Miss", normally RPG Maker would use an hard
 * coded string for it (for example "Miss" in english) that's not editable.
 * Now you can set it, just try to stay in a small range of letters to avoid text compression.
 * 
 * STEP 2 - Create the language packages: The second step is opening the "Other Language Translations"
 * field in the Plugin Parameters and start translating. The first field is the target language 
 * and then you have all the various system terms, parameters and so on!
 * 
 * STEP 3 - Database JSON creation: Dynamic database like Items, Monsters or Maps will need to
 * be handled via JSON. Doing this only before wrapping up your project is warmly recommended.
 * First of all you need to setup the WD_Translation folder in your project data folder, the
 * download on Itch or Ko-Fi already provide a premade folder with blank JSONs. Then, inside
 * the game, create a temporary event and use the command "Write a new translation JSON" once
 * for every JSON you need to create (usually you need all of them unless your project skips
 * certain mechanics, only "Map Names" isn't always useful, if you are not displaying the map
 * informations just skip it). Now you have JSON files in the WD_Translation folder with all
 * the languages you created so far (that's why it's IMPORTANT to 100% complete STEP 2 before
 * STEP 3) and the relevant translation informations (for example items have the name and the
 * description, all the rest of the data is skipped as it has nothing to do with multilanguage).
 * Use a program like Notepad++ or VScode to open them and manually translate the entries.
 * When the user changes the language the plugin will load those JSON (so leave every file there
 * even if it's empty!), search for the correct language and edit the $data... file of RPG
 * Maker to the new language. If there is no matching language, the default RPG Maker file will
 * be left in place (or reset if changed before)
 * 
 * STEP 4 - Text String JSON and translation: Creating a text translation can be long, but I 
 * tried to keep it as comfortable and easy as possible. First, tag EVERY text you want to 
 * translate with ||WDT...|| add an UNIQUE alphanumeric code in place of ...(example: ||WDTReid000||)
 * You can do it for name box, standard dialogue, choices, scrolling text (tag only the first
 * sentence of the scrolling text), change actor name, change actor nickname and change actor
 * profile. (NOTE: For the change Actor name/nick/profile, the plugin will Remember the changes
 * from this point onward). Now use the "Create Text Translation JSON" command and the plugin
 * will copy the codes in TextString.json, tagging what kind of RMMZ command uses it and ordering
 * it by map, event and event page! Use a program like Notepad++ or VScode to open it and translate
 * 
 * 
 * You can find more scripts and games on my Ko-Fi page:
 * https://ko-fi.com/winterdream
 * and on my Itch.io page:
 * https://winterdreamgamescreator.itch.io/
 * And if you want a direct line with me, you can join my Discord:
 * https://discord.gg/gaa2E2pJ
 *
 * By using this plugin you accept the Terms of Use (https://drive.google.com/file/d/1l_GadoZh3ylSvRm4hAoT2WOUXTpePpHf/view?usp=sharing)
 * //////////////////////////////////////////////////
 * VERSION 1.1:
 * - Removed from this plugin the control over the language (Both from plugin commands and options menu). The language
 *   control is now moved over to WD_Core to coordinate all WinterDream plugins translations from a single source.
 * VERSION 1.0:
 * - Initial Release
 * //////////////////////////////////////////////////
 *
 */
/*~struct~languageSelection:
 * @param language
 * @text Language
 * @type select
 * @default English
 * @option 	Abkhazian
 * @option 	Afar
 * @option 	Afrikaans
 * @option 	Akan
 * @option 	Albanian
 * @option 	Amharic
 * @option 	Arabic
 * @option 	Aragonese
 * @option 	Armenian
 * @option 	Assamese
 * @option 	Avaric
 * @option 	Avestan
 * @option 	Aymara
 * @option 	Azerbaijani
 * @option 	Bambara
 * @option 	Bashkir
 * @option 	Basque
 * @option 	Belarusian
 * @option 	Bengali
 * @option 	Bislama
 * @option 	Bosnian
 * @option 	Breton
 * @option 	Bulgarian
 * @option 	Burmese
 * @option 	Catalan, Valencian
 * @option 	Chamorro
 * @option 	Chechen
 * @option 	Chichewa, Chewa, Nyanja
 * @option 	Chinese
 * @option 	Church Slavonic, Old Slavonic, Old Church Slavonic
 * @option 	Chuvash
 * @option 	Cornish
 * @option 	Corsican
 * @option 	Cree
 * @option 	Croatian
 * @option 	Czech
 * @option 	Danish
 * @option 	Divehi, Dhivehi, Maldivian
 * @option 	Dutch, Flemish
 * @option 	Dzongkha
 * @option 	English
 * @option 	Esperanto
 * @option 	Estonian
 * @option 	Ewe
 * @option 	Faroese
 * @option 	Fijian
 * @option 	Finnish
 * @option 	French
 * @option 	Western Frisian
 * @option 	Fulah
 * @option 	Gaelic, Scottish Gaelic
 * @option 	Galician
 * @option 	Ganda
 * @option 	Georgian
 * @option 	German
 * @option 	Greek, Modern (1453–)
 * @option 	Kalaallisut, Greenlandic
 * @option 	Guarani
 * @option 	Gujarati
 * @option 	Haitian, Haitian Creole
 * @option 	Hausa
 * @option 	Hebrew
 * @option 	Herero
 * @option 	Hindi
 * @option 	Hiri Motu
 * @option 	Hungarian
 * @option 	Icelandic
 * @option 	Ido
 * @option 	Igbo
 * @option 	Indonesian
 * @option 	Interlingua (International Auxiliary Language Association)
 * @option 	Interlingue, Occidental
 * @option 	Inuktitut
 * @option 	Inupiaq
 * @option 	Irish
 * @option 	Italian
 * @option 	Japanese
 * @option 	Javanese
 * @option 	Kannada
 * @option 	Kanuri
 * @option 	Kashmiri
 * @option 	Kazakh
 * @option 	Central Khmer
 * @option 	Kikuyu, Gikuyu
 * @option 	Kinyarwanda
 * @option 	Kirghiz, Kyrgyz
 * @option 	Komi
 * @option 	Kongo
 * @option 	Korean
 * @option 	Kuanyama, Kwanyama
 * @option 	Kurdish
 * @option 	Lao
 * @option 	Latin
 * @option 	Latvian
 * @option 	Limburgan, Limburger, Limburgish
 * @option 	Lingala
 * @option 	Lithuanian
 * @option 	Luba-Katanga
 * @option 	Luxembourgish, Letzeburgesch
 * @option 	Macedonian
 * @option 	Malagasy
 * @option 	Malay
 * @option 	Malayalam
 * @option 	Maltese
 * @option 	Manx
 * @option 	Maori
 * @option 	Marathi
 * @option 	Marshallese
 * @option 	Mongolian
 * @option 	Nauru
 * @option 	Navajo, Navaho
 * @option 	North Ndebele
 * @option 	South Ndebele
 * @option 	Ndonga
 * @option 	Nepali
 * @option 	Norwegian
 * @option 	Norwegian Bokmål
 * @option 	Norwegian Nynorsk
 * @option 	Occitan
 * @option 	Ojibwa
 * @option 	Oriya
 * @option 	Oromo
 * @option 	Ossetian, Ossetic
 * @option 	Pali
 * @option 	Pashto, Pushto
 * @option 	Persian
 * @option 	Polish
 * @option 	Portuguese
 * @option 	Punjabi, Panjabi
 * @option 	Quechua
 * @option 	Romanian, Moldavian, Moldovan
 * @option 	Romansh
 * @option 	Rundi
 * @option 	Russian
 * @option 	Northern Sami
 * @option 	Samoan
 * @option 	Sango
 * @option 	Sanskrit
 * @option 	Sardinian
 * @option 	Serbian
 * @option 	Shona
 * @option 	Sindhi
 * @option 	Sinhala, Sinhalese
 * @option 	Slovak
 * @option 	Slovenian
 * @option 	Somali
 * @option 	Southern Sotho
 * @option 	Spanish, Castilian
 * @option 	Sundanese
 * @option 	Swahili
 * @option 	Swati
 * @option 	Swedish
 * @option 	Tagalog
 * @option 	Tahitian
 * @option 	Tajik
 * @option 	Tamil
 * @option 	Tatar
 * @option 	Telugu
 * @option 	Thai
 * @option 	Tibetan
 * @option 	Tigrinya
 * @option 	Tonga (Tonga Islands)
 * @option 	Tsonga
 * @option 	Tswana
 * @option 	Turkish
 * @option 	Turkmen
 * @option 	Twi
 * @option 	Uighur, Uyghur
 * @option 	Ukrainian
 * @option 	Urdu
 * @option 	Uzbek
 * @option 	Venda
 * @option 	Vietnamese
 * @option 	Volapük
 * @option 	Walloon
 * @option 	Welsh
 * @option 	Wolof
 * @option 	Xhosa
 * @option 	Sichuan Yi, Nuosu
 * @option 	Yiddish
 * @option 	Yoruba
 * @option 	Zhuang, Chuang
 * @option 	Zulu
 */
/*~struct~mainTrans:
 * @param language
 * @text Translation Language
 * @desc Create the translations packages for System
 * @type struct<languageSelection>
 * @default {"language":"English"}
 * 
 * @param systemTranslation
 * @type struct<sysTrans>
 * @text System Text Translation
 * @desc Translate the System Text
 * @default {"gameTitle":"Your Game Title","currency":"RMMZ Dollars","combatMiss":"Miss","optionOn":"ON","optionOff":"OFF","optionLanguage":"Select Language:","level":"Level","levelA":"Lv","hp":"HP","hpA":"HP","mp":"MP","mpA":"MP","tp":"TP","tpA":"TP","exp":"EXP","expA":"EXP","fight":"Fight","escape":"Escape","attack":"Attack","guard":"Guard","item":"Item","skill":"Skill","equip":"Equip","status":"Status","formation":"Formation","save":"Save","gameEnd":"Game End","options":"Options","weapon":"Weapon","armor":"Armor","keyItem":"Key Item","equip2":"Equip","optimize":"Optimize","clear":"Clear","newGame":"New Game","continue_":"Continue","toTitle":"To Title","cancel":"Cancel","buy":"Buy","sell":"Sell","alwaysDash":"Always Dash","commandRemember":"Command Remember","touchUI":"Touch UI","bgmVolume":"BGM Volume","bgsVolume":"BGS Volume","meVolume":"ME Volume","seVolume":"SE Volume","possession":"Possession","expTotal":"Current %1","expNext":"To Next %1","saveMessage":"Which file would you like to save to?","loadMessage":"Which file would you like to load?","file":"File","autosave":"Autosave","partyName":"%1's Party","emerge":"%1 emerged!","preemptive":"%1 got the upper hand!","surprise":"%1 was surprised!","escapeStart":"%1 has started to escape!","escapeFailure":"However, it was unable to escape!","victory":"%1 was victorious!","defeat":"%1 was defeated.","obtainExp":"%1 %2 received!","obtainGold":"%1\\G found!","obtainItem":"%1 found!","levelUp":"%1 is now %2 %3!","obtainSkill":"%1 learned!","useItem":"%1 uses %2!","criticalToEnemy":"An excellent hit!!","criticalToActor":"A painful blow!!","actorDamage":"%1 took %2 damage!","actorRecovery":"%1 recovered %2 %3!","actorGain":"%1 gained %2 %3!","actorLoss":"%1 lost %2 %3!","actorDrain":"%1 was drained of %2 %3!","actorNoDamage":"%1 took no damage!","actorNoHit":"Miss! %1 took no damage!","enemyDamage":"%1 took %2 damage!","enemyRecovery":"%1 recovered %2 %3!","enemyGain":"%1 gained %2 %3!","enemyLoss":"%1 lost %2 %3!","enemyDrain":"%1 was drained of %2 %3!","enemyNoDamage":"%1 took no damage!","enemyNoHit":"Miss! %1 took no damage!","evasion":"%1 evaded the attack!","magicEvasion":"%1 nullified the magic!","magicReflection":"%1 reflected the magic!","counterAttack":"%1 made a counterattack!","substitute":"%1 protected %2!","buffAdd":"%1’s %2 went up!","debuffAdd":"%1’s %2 went down!","buffRemove":"%1’s %2 returned to normal!","actionFailure":"There was no effect on %1!"}
 * 
 * @param parametersTranslation
 * @type struct<paramTrans>
 * @text Parameters Translation
 * @desc Translate the Parameters
 * @default {"maxHP":"Max HP","maxMP":"Max MP","atk":"Attack","def":"Defense","matk":"M. Attack","mdef":"M. Defense","agi":"Agility","luk":"Luck","hit":"Hit","eva":"Evasion"}
 * 
 * @param elementsTranslation
 * @type struct<simpleField>[]
 * @text Elements Translation
 * @desc Elements translation (array must be the same length as original)
 * @default ["{\"trans\":\"Physical\"}","{\"trans\":\"Fire\"}","{\"trans\":\"Ice\"}","{\"trans\":\"Thunder\"}","{\"trans\":\"Water\"}","{\"trans\":\"Earth\"}","{\"trans\":\"Wind\"}","{\"trans\":\"Light\"}","{\"trans\":\"Darkness\"}"]
 * 
 * @param skillTypeTranslation
 * @type struct<simpleField>[]
 * @text Skill Type Translation
 * @desc Skill Type translation (array must be the same length as original)
 * @default ["{\"trans\":\"Magic\"}","{\"trans\":\"Special\"}"]
 * 
 * @param weaponTypeTranslation
 * @type struct<simpleField>[]
 * @text Weapon Type Translation
 * @desc Weapon Type translation (array must be the same length as original)
 * @default ["{\"trans\":\"Dagger\"}","{\"trans\":\"Sword\"}","{\"trans\":\"Flail\"}","{\"trans\":\"Axe\"}","{\"trans\":\"Whip\"}","{\"trans\":\"Staff\"}","{\"trans\":\"Bow\"}","{\"trans\":\"Crossbow\"}","{\"trans\":\"Gun\"}","{\"trans\":\"Claw\"}","{\"trans\":\"Glove\"}","{\"trans\":\"Spear\"}"]
 * 
 * @param armorTypeTranslation
 * @type struct<simpleField>[]
 * @text Armor Type Translation
 * @desc Armor Type translation (array must be the same length as original)
 * @default ["{\"trans\":\"General Armor\"}","{\"trans\":\"Magic Armor\"}","{\"trans\":\"Light Armor\"}","{\"trans\":\"Heavy Armor\"}","{\"trans\":\"Small Shield\"}","{\"trans\":\"Large Shield\"}"]
 * 
 * @param equipTypeTranslation
 * @type struct<simpleField>[]
 * @text Equipment Type Translation
 * @desc Equipment Type translation (array must be the same length as original)
 * @default ["{\"trans\":\"Weapon\"}","{\"trans\":\"Shield\"}","{\"trans\":\"Head\"}","{\"trans\":\"Body\"}","{\"trans\":\"Accessory\"}"]
 * 
 */
/*~struct~sysTrans:
 * @param gameTitle
 * @text Game Title
 * @default Your Game Title
 * 
 * @param currency
 * @text Currency
 * @default RMMZ Dollars
 * 
 * @param combatMiss
 * @text Miss (Combat)
 * @default Miss
 * 
 * @param optionOn
 * @text Option ON
 * @default ON
 * 
 * @param optionOff
 * @text Option OFF
 * @default OFF
 * 
 * @param optionLanguage
 * @text Option Select Language
 * @default Select Language:
 * 
 * @param level
 * @text Level
 * @default Level
 * 
 * @param levelA
 * @text Level (Abbreviated)
 * @default Lv
 * 
 * @param hp
 * @text HP
 * @default HP
 * 
 * @param hpA
 * @text HP (Abbreviated)
 * @default HP
 * 
 * @param mp
 * @text MP
 * @default MP
 * 
 * @param mpA
 * @text MP (Abbreviated)
 * @default MP
 * 
 * @param tp
 * @text TP
 * @default TP
 * 
 * @param tpA
 * @text TP (Abbreviated)
 * @default TP
 * 
 * @param exp
 * @text EXP
 * @default EXP
 * 
 * @param expA
 * @text EXP (Abbreviated)
 * @default EXP
 * 
 * @param fight
 * @text Fight
 * @default Fight
 * 
 * @param escape
 * @text Escape
 * @default Escape
 * 
 * @param attack
 * @text Attack
 * @default Attack
 * 
 * @param guard
 * @text Guard
 * @default Guard
 * 
 * @param item
 * @text Item
 * @default Item
 * 
 * @param skill
 * @text Skill
 * @default Skill
 * 
 * @param equip
 * @text Equip (Menu)
 * @default Equip
 * 
 * @param status
 * @text Status
 * @default Status
 * 
 * @param formation
 * @text Formation
 * @default Formation
 * 
 * @param save
 * @text Save
 * @default Save
 * 
 * @param gameEnd
 * @text Game End
 * @default Game End
 * 
 * @param options
 * @text Options
 * @default Options
 * 
 * @param weapon
 * @text Weapon
 * @default Weapon
 * 
 * @param armor
 * @text Armor
 * @default Armor
 * 
 * @param keyItem
 * @text Key Item
 * @default Key Item
 * 
 * @param equip2
 * @text Equip (Inventory)
 * @default Equip
 * 
 * @param optimize
 * @text Optimize
 * @default Optimize
 * 
 * @param clear
 * @text Clear
 * @default Clear
 * 
 * @param newGame
 * @text New Game
 * @default New Game
 * 
 * @param continue_
 * @text Continue
 * @default Continue
 * 
 * @param toTitle
 * @text To Title
 * @default To Title
 * 
 * @param cancel
 * @text Cancel
 * @default Cancel
 * 
 * @param buy
 * @text Buy
 * @default Buy
 * 
 * @param sell
 * @text Sell
 * @default Sell
 * 
 * @param alwaysDash
 * @text Always Dash
 * @default Always Dash
 * 
 * @param commandRemember
 * @text Command Remember
 * @default Command Remember
 * 
 * @param touchUI
 * @text Touch UI
 * @default Touch UI
 * 
 * @param bgmVolume
 * @text BGM Volume
 * @default BGM Volume
 * 
 * @param bgsVolume
 * @text BGS Volume
 * @default BGS Volume
 * 
 * @param meVolume
 * @text ME Volume
 * @default ME Volume
 * 
 * @param seVolume
 * @text SE Volume
 * @default SE Volume
 * 
 * @param possession
 * @text Possession
 * @default Possession
 * 
 * @param expTotal
 * @text Exp Total
 * @default Current %1
 * 
 * @param expNext
 * @text Exp Next
 * @default To Next %1
 * 
 * @param saveMessage
 * @text Save Message
 * @default Which file would you like to save to?
 * 
 * @param loadMessage
 * @text Load Message
 * @default Which file would you like to load?
 * 
 * @param file
 * @text File
 * @default File
 * 
 * @param autosave
 * @text Autosave
 * @default Autosave
 * 
 * @param partyName
 * @text Party Name
 * @default %1's Party
 * 
 * @param emerge
 * @text Emerge
 * @default %1 emerged!
 * 
 * @param preemptive
 * @text Preemptive
 * @default %1 got the upper hand!
 * 
 * @param surprise
 * @text Surprise
 * @default %1 was surprised!
 * 
 * @param escapeStart
 * @text Escape Start
 * @default %1 has started to escape!
 * 
 * @param escapeFailure
 * @text Escape Failure
 * @default However, it was unable to escape!
 * 
 * @param victory
 * @text Victory
 * @default %1 was victorious!
 * 
 * @param defeat
 * @text Defeat
 * @default %1 was defeated.
 * 
 * @param obtainExp
 * @text Obtain Exp
 * @default %1 %2 received!
 * 
 * @param obtainGold
 * @text Obtain Gold
 * @default %1\G found!
 * 
 * @param obtainItem
 * @text Obtain Item
 * @default %1 found!
 * 
 * @param levelUp
 * @text Level Up
 * @default %1 is now %2 %3!
 * 
 * @param obtainSkill
 * @text Obtain Skill
 * @default %1 learned!
 * 
 * @param useItem
 * @text Use Item
 * @default %1 uses %2!
 * 
 * @param criticalToEnemy
 * @text Critical To Enemy
 * @default An excellent hit!!
 * 
 * @param criticalToActor
 * @text Critical To Actor
 * @default A painful blow!!
 * 
 * @param actorDamage
 * @text Actor Damage
 * @default %1 took %2 damage!
 * 
 * @param actorRecovery
 * @text Actor Recovery
 * @default %1 recovered %2 %3!
 * 
 * @param actorGain
 * @text Actor Gain
 * @default %1 gained %2 %3!
 * 
 * @param actorLoss
 * @text Actor Loss
 * @default %1 lost %2 %3!
 * 
 * @param actorDrain
 * @text Actor Drain
 * @default %1 was drained of %2 %3!
 * 
 * @param actorNoDamage
 * @text Actor No Damage
 * @default %1 took no damage!
 * 
 * @param actorNoHit
 * @text Actor No Hit
 * @default Miss! %1 took no damage!
 * 
 * @param enemyDamage
 * @text Enemy Damage
 * @default %1 took %2 damage!
 * 
 * @param enemyRecovery
 * @text Enemy Recovery
 * @default %1 recovered %2 %3!
 * 
 * @param enemyGain
 * @text Enemy Gain
 * @default %1 gained %2 %3!
 * 
 * @param enemyLoss
 * @text Enemy Loss
 * @default %1 lost %2 %3!
 * 
 * @param enemyDrain
 * @text Enemy Drain
 * @default %1 was drained of %2 %3!
 * 
 * @param enemyNoDamage
 * @text Enemy No Damage
 * @default %1 took no damage!
 * 
 * @param enemyNoHit
 * @text Enemy No Hit
 * @default Miss! %1 took no damage!
 * 
 * @param evasion
 * @text Evasion
 * @default %1 evaded the attack!
 * 
 * @param magicEvasion
 * @text Magic Evasion
 * @default %1 nullified the magic!
 * 
 * @param magicReflection
 * @text Magic Reflection
 * @default %1 reflected the magic!
 * 
 * @param counterAttack
 * @text Counter Attack
 * @default %1 made a counterattack!
 * 
 * @param substitute
 * @text Substitute
 * @default %1 protected %2!
 * 
 * @param buffAdd
 * @text Buff Add
 * @default %1’s %2 went up!
 * 
 * @param debuffAdd
 * @text Debuff Add
 * @default %1’s %2 went down!
 * 
 * @param buffRemove
 * @text Buff Remove
 * @default %1’s %2 returned to normal!
 * 
 * @param actionFailure
 * @text Action Failure
 * @default There was no effect on %1!
 */
/*~struct~paramTrans:
 * @param maxHP
 * @text Max HP
 * @default Max HP
 * 
 * @param maxMP
 * @text Max MP
 * @default Max MP
 * 
 * @param atk
 * @text Attack
 * @default Attack
 * 
 * @param def
 * @text Defense
 * @default Defense
 * 
 * @param matk
 * @text Magic Attack
 * @default M. Attack
 * 
 * @param mdef
 * @text Magic Defense
 * @default M. Defense
 * 
 * @param agi
 * @text Agility
 * @default Agility
 * 
 * @param luk
 * @text Luck
 * @default Luck
 * 
 * @param hit
 * @text Hit
 * @default Hit
 * 
 * @param eva
 * @text Evasion
 * @default Evasion
 */
/*~struct~simpleField:
 * @param trans
 * @text Translation
 * @default
 */
 
//Pushing Plugin JSON in DataManager
var $dataWDTransActors = null;
var $dataWDTransClasses = null;
var $dataWDTransEnemies = null;
var $dataWDTransItems = null;
var $dataWDTransArmors = null;
var $dataWDTransWeapons = null;
var $dataWDTransSkills = null;
var $dataWDTransStates = null;
var $dataWDTransMapInfos = null;
var $dataWDTransTextStrings = null;

DataManager._databaseFiles.push({name: '$dataWDTransActors', src: 'WD_Translation/Actors.json'});
DataManager._databaseFiles.push({name: '$dataWDTransClasses', src: 'WD_Translation/Classes.json'});
DataManager._databaseFiles.push({name: '$dataWDTransEnemies', src: 'WD_Translation/Enemies.json'});
DataManager._databaseFiles.push({name: '$dataWDTransItems', src: 'WD_Translation/Items.json'});
DataManager._databaseFiles.push({name: '$dataWDTransArmors', src: 'WD_Translation/Armors.json'});
DataManager._databaseFiles.push({name: '$dataWDTransWeapons', src: 'WD_Translation/Weapons.json'});
DataManager._databaseFiles.push({name: '$dataWDTransSkills', src: 'WD_Translation/Skills.json'});
DataManager._databaseFiles.push({name: '$dataWDTransStates', src: 'WD_Translation/States.json'});
DataManager._databaseFiles.push({name: '$dataWDTransMapInfos', src: 'WD_Translation/MapInfos.json'});
DataManager._databaseFiles.push({name: '$dataWDTransTextStrings', src: 'WD_Translation/TextStrings.json'});
DataManager._databaseFiles.push({name: '$dataWDTransSettings', src: 'WD_Translation/SavedProperties.json'});

!function(){class i{constructor(a=0){for(const e of v)this[e.language]=this.usefulTranslationData(a)}usefulTranslationData(a=0){let e=[null];switch(a){case 0:for(const n of $dataActors)null!==n&&e.push({name:n.name,nickname:n.nickname,profile:n.profile});break;case 1:for(const r of $dataClasses)null!==r&&e.push({name:r.name});break;case 2:for(const s of $dataEnemies)null!==s&&e.push({name:s.name});break;case 3:for(const o of $dataItems)null!==o&&e.push({name:o.name,description:o.description});break;case 4:for(const i of $dataArmors)null!==i&&e.push({name:i.name,description:i.description});break;case 5:for(const l of $dataWeapons)null!==l&&e.push({name:l.name,description:l.description});break;case 6:for(const u of $dataSkills)null!==u&&e.push({name:u.name,description:u.description,message1:u.message1,message2:u.message2});break;case 7:for(const c of $dataStates)null!==c&&e.push({name:c.name,message1:c.message1,message2:c.message2,message3:c.message3,message4:c.message4});break;case 8:var t=g();0<t.length&&(e=e.concat(t))}return e}}var a=PluginManager.parameters("WD_Translation"),e=window.WD_Interplugin_Core.requireDefaultLanguage();const v=function(a){let e=JSON.parse(a);for(let a=0;a<e.length;a++)e[a]=JSON.parse(e[a]),e[a].systemTranslation=JSON.parse(e[a].systemTranslation),e[a].parametersTranslation=JSON.parse(e[a].parametersTranslation),e[a].parametersTranslation=[e[a].parametersTranslation.maxHP,e[a].parametersTranslation.maxMP,e[a].parametersTranslation.atk,e[a].parametersTranslation.def,e[a].parametersTranslation.matk,e[a].parametersTranslation.mdef,e[a].parametersTranslation.agi,e[a].parametersTranslation.luk,e[a].parametersTranslation.hit,e[a].parametersTranslation.eva],e[a].elementsTranslation=t(e[a].elementsTranslation),e[a].skillTypeTranslation=t(e[a].skillTypeTranslation),e[a].weaponTypeTranslation=t(e[a].weaponTypeTranslation),e[a].armorTypeTranslation=t(e[a].armorTypeTranslation),e[a].equipTypeTranslation=t(e[a].equipTypeTranslation);return function(a){const n=a;!function a(){if($dataSystem)for(const t of n){var e=t.language;if(t.elementsTranslation.length!==$dataSystem.elements.length)throw new Error("WD_Translation: Translation Elements Array doesn't match original Elements Array for language: "+e);if(t.skillTypeTranslation.length!==$dataSystem.skillTypes.length)throw new Error("WD_Translation: Translation Skill Types Array doesn't match original Skill Type Array for language: "+e);if(t.weaponTypeTranslation.length!==$dataSystem.weaponTypes.length)throw new Error("WD_Translation: Translation Weapons Array doesn't match original Weapons Array for language: "+e);if(t.armorTypeTranslation.length!==$dataSystem.armorTypes.length)throw new Error("WD_Translation: Translation Armors Array doesn't match original Armors Array for language: "+e);if(t.equipTypeTranslation.length!==$dataSystem.equipTypes.length)throw new Error("WD_Translation: Translation Equipment Array doesn't match original Equipment Array for language: "+e)}else requestAnimationFrame(a)}()}(e=function(a){for(const e of a)e.language=JSON.parse(e.language),e.language=e.language.language;return a}(e)),e;function t(a){var e=JSON.parse(a).map(a=>JSON.parse(a)),t=[""];for(let a=0;a<e.length;a++)t.push(e[a].trans);return t}}(a.mainTranslation),T={defaultLanguage:e,defaultHardcode:{defaultCombatMiss:a.defaultCombatMiss,defaultOptionOn:a.defaultOptionOn,defaultOptionOff:a.defaultOptionOff},isForced:!1,forcedLanguage:"",runningDefault:!0,currentLanguageData:null,originalDataFiles:[$dataActors,$dataClasses,$dataEnemies,$dataItems,$dataArmors,$dataWeapons,$dataSkills,$dataStates,$dataMapInfos]},D={wdStatSkill:!1};let y=[];function n(a){null!=(e=$gameSystem.loadWdTranslationSettings())&&(T.defaultHardcode=e.defaultHardcode,y=e.actorsInGameChanges);var e={data:null,language:T.defaultLanguage},e=(T.currentLanguageData=window.WD_Interplugin_Core.forceLanguage(e,v,a),T.currentLanguageData.language===T.defaultLanguage?(T.runningDefault=!0,T.isForced=!1,T.forcedLanguage="",document.title=$dataSystem.gameTitle,r(0,void 0,!0),r(1,void 0,!0),r(2,void 0,!0),r(3,void 0,!0),r(4,void 0,!0),r(5,void 0,!0),r(6,void 0,!0),r(7,void 0,!0)):(T.isForced=!0,T.forcedLanguage=a,T.runningDefault=!1,document.title=T.currentLanguageData.systemTranslation.gameTitle,r(0,T.currentLanguageData.language,!1),r(1,T.currentLanguageData.language,!1),r(2,T.currentLanguageData.language,!1),r(3,T.currentLanguageData.language,!1),r(4,T.currentLanguageData.language,!1),r(5,T.currentLanguageData.language,!1),r(6,T.currentLanguageData.language,!1),r(7,T.currentLanguageData.language,!1)),m(),h(),JSON.stringify(T,null,4)),a=require("fs"),t=require("path"),n=t.dirname(process.mainModule.filename),n=(t=t.join(n,"data/WD_Translation/"))+"SavedProperties.json";a.existsSync(t)||a.mkdirSync(t),a.writeFileSync(n,e)}function r(a=0,e="English",t=!1){let n=null,r=null,s=null;switch(a){case 0:n=$dataActors,r=$dataWDTransActors.hasOwnProperty(e)?$dataWDTransActors[e]:T.originalDataFiles[a],s=0;break;case 1:n=$dataClasses,r=$dataWDTransClasses.hasOwnProperty(e)?$dataWDTransClasses[e]:T.originalDataFiles[a],s=1;break;case 2:n=$dataEnemies,r=$dataWDTransEnemies.hasOwnProperty(e)?$dataWDTransEnemies[e]:T.originalDataFiles[a],s=1;break;case 3:n=$dataItems,r=$dataWDTransItems.hasOwnProperty(e)?$dataWDTransItems[e]:T.originalDataFiles[a],s=2;break;case 4:n=$dataArmors,r=$dataWDTransArmors.hasOwnProperty(e)?$dataWDTransArmors[e]:T.originalDataFiles[a],s=2;break;case 5:n=$dataWeapons,r=$dataWDTransWeapons.hasOwnProperty(e)?$dataWDTransWeapons[e]:T.originalDataFiles[a],s=2;break;case 6:n=$dataSkills,r=$dataWDTransSkills.hasOwnProperty(e)?$dataWDTransSkills[e]:T.originalDataFiles[a],s=3;break;case 7:n=$dataStates,r=$dataWDTransStates.hasOwnProperty(e)?$dataWDTransStates[e]:T.originalDataFiles[a],s=4;break;case 8:n=$dataMapInfos,r=$dataWDTransMapInfos.hasOwnProperty(e)?$dataWDTransMapInfos[e]:T.originalDataFiles[a],s=1;break;default:throw new Error("WD_Translation: Error in translateDataJSON function! Unexpected mode argument: "+a)}if(t&&(r=T.originalDataFiles[a]),1===a){var o=PluginManager._scripts,i={wdStatSkillFlag:!1};for(let a=0;a<o.length;a++)"WD_StatsAndSkills"===o[a]&&(i.wdStatSkillFlag=!0);i.wdStatSkillFlag&&(u=window.WD_Interplugin_StatsAndSkills.pingWdTranslation(!0),D.wdStatSkill=u.isFlagged)}var l={isActive:!1,maxI:-1};if(1===a&&D.wdStatSkill&&n.length!==r.length){var u=window.WD_Interplugin_StatsAndSkills.pingWdTranslation(!1);for(let a=0;a<n.length;a++)l["id"+a]=a,l.maxI=a;for(const d of u.data)l["id"+d.id]=d.reference,l.maxI=d.id>l.maxI?d.id:l.maxI;l.isActive=!0}switch(s){case 0:for(let a=1;a<n.length;a++)null!==n[a]&&null!==r[a]&&(n[a].name=r[a].name,n[a].nickname=r[a].nickname,n[a].profile=r[a].profile);break;case 1:if(1===a&&l.isActive)for(let a=1;a<n.length;a++)null!==n[a]&&(l.hasOwnProperty("id"+a)?n[a].name=r[l["id"+a]].name:n[a].name=r[1].name);else for(let a=1;a<n.length;a++)null!==n[a]&&null!==r[a]&&(n[a].name=r[a].name);break;case 2:for(let a=1;a<n.length;a++)null!==n[a]&&null!==r[a]&&(n[a].name=r[a].name,n[a].description=r[a].description);break;case 3:for(let a=1;a<n.length;a++)null!==n[a]&&null!==r[a]&&(n[a].name=r[a].name,n[a].description=r[a].description,n[a].message1=r[a].message1,n[a].message2=r[a].message2);break;case 4:for(let a=1;a<n.length;a++)null!==n[a]&&null!==r[a]&&(n[a].name=r[a].name,n[a].message1=r[a].message1,n[a].message2=r[a].message2,n[a].message3=r[a].message3,n[a].message4=r[a].message4);break;default:throw new Error("WD_Translation: Error in translateDataJSON function! Unexpected action argument: "+s)}if(0===a){var c={isDefault:t||T.runningDefault,language:t||T.runningDefault?T.defaultLanguage:T.currentLanguageData.language};if(0<y.length)for(const m of $dataActors)if(m){const p=m.id;var g=y.filter(a=>a.actorID===p);if(0<g.length)for(const f of g){let a="";switch(a=!c.isDefault&&f.data.hasOwnProperty(c.language)?f.data[c.language]:f.data.default,f.code){case 320:m.name=a;break;case 324:m.nickname=a;break;case 325:m.profile=a}}}}}function t(a,e){switch(a){case"basic":switch(e){case 0:return T.currentLanguageData.systemTranslation.level;case 1:return T.currentLanguageData.systemTranslation.levelA;case 2:return T.currentLanguageData.systemTranslation.hp;case 3:return T.currentLanguageData.systemTranslation.hpA;case 4:return T.currentLanguageData.systemTranslation.mp;case 5:return T.currentLanguageData.systemTranslation.mpA;case 6:return T.currentLanguageData.systemTranslation.tp;case 7:return T.currentLanguageData.systemTranslation.tpA;case 8:return T.currentLanguageData.systemTranslation.exp;case 9:return T.currentLanguageData.systemTranslation.expA;default:throw new Error("WD_Translation: Invalid param in TextManager method basic ("+e+")")}case"command":switch(e){case 0:return T.currentLanguageData.systemTranslation.fight;case 1:return T.currentLanguageData.systemTranslation.escape;case 2:return T.currentLanguageData.systemTranslation.attack;case 3:return T.currentLanguageData.systemTranslation.guard;case 4:return T.currentLanguageData.systemTranslation.item;case 5:return T.currentLanguageData.systemTranslation.skill;case 6:return T.currentLanguageData.systemTranslation.equip;case 7:return T.currentLanguageData.systemTranslation.status;case 8:return T.currentLanguageData.systemTranslation.formation;case 9:return T.currentLanguageData.systemTranslation.save;case 10:return T.currentLanguageData.systemTranslation.gameEnd;case 11:return T.currentLanguageData.systemTranslation.options;case 12:return T.currentLanguageData.systemTranslation.weapon;case 13:return T.currentLanguageData.systemTranslation.armor;case 14:return T.currentLanguageData.systemTranslation.keyItem;case 15:return T.currentLanguageData.systemTranslation.equip2;case 16:return T.currentLanguageData.systemTranslation.optimize;case 17:return T.currentLanguageData.systemTranslation.clear;case 18:return T.currentLanguageData.systemTranslation.newGame;case 19:return T.currentLanguageData.systemTranslation.continue_;case 21:return T.currentLanguageData.systemTranslation.toTitle;case 22:return T.currentLanguageData.systemTranslation.cancel;case 24:return T.currentLanguageData.systemTranslation.buy;case 25:return T.currentLanguageData.systemTranslation.sell;default:throw new Error("WD_Translation: Invalid param in TextManager method command ("+e+")")}case"message":switch(e){case"alwaysDash":return T.currentLanguageData.systemTranslation.alwaysDash;case"commandRemember":return T.currentLanguageData.systemTranslation.commandRemember;case"touchUI":return T.currentLanguageData.systemTranslation.touchUI;case"bgmVolume":return T.currentLanguageData.systemTranslation.bgmVolume;case"bgsVolume":return T.currentLanguageData.systemTranslation.bgsVolume;case"meVolume":return T.currentLanguageData.systemTranslation.meVolume;case"seVolume":return T.currentLanguageData.systemTranslation.seVolume;case"possession":return T.currentLanguageData.systemTranslation.possession;case"expTotal":return T.currentLanguageData.systemTranslation.expTotal;case"expNext":return T.currentLanguageData.systemTranslation.expNext;case"saveMessage":return T.currentLanguageData.systemTranslation.saveMessage;case"loadMessage":return T.currentLanguageData.systemTranslation.loadMessage;case"file":return T.currentLanguageData.systemTranslation.file;case"autosave":return T.currentLanguageData.systemTranslation.autosave;case"partyName":return T.currentLanguageData.systemTranslation.partyName;case"emerge":return T.currentLanguageData.systemTranslation.emerge;case"preemptive":return T.currentLanguageData.systemTranslation.preemptive;case"surprise":return T.currentLanguageData.systemTranslation.surprise;case"escapeStart":return T.currentLanguageData.systemTranslation.escapeStart;case"escapeFailure":return T.currentLanguageData.systemTranslation.escapeFailure;case"victory":return T.currentLanguageData.systemTranslation.victory;case"defeat":return T.currentLanguageData.systemTranslation.defeat;case"obtainExp":return T.currentLanguageData.systemTranslation.obtainExp;case"obtainGold":return T.currentLanguageData.systemTranslation.obtainGold;case"obtainItem":return T.currentLanguageData.systemTranslation.obtainItem;case"levelUp":return T.currentLanguageData.systemTranslation.levelUp;case"obtainSkill":return T.currentLanguageData.systemTranslation.obtainSkill;case"useItem":return T.currentLanguageData.systemTranslation.useItem;case"criticalToEnemy":return T.currentLanguageData.systemTranslation.criticalToEnemy;case"criticalToActor":return T.currentLanguageData.systemTranslation.criticalToActor;case"actorDamage":return T.currentLanguageData.systemTranslation.actorDamage;case"actorRecovery":return T.currentLanguageData.systemTranslation.actorRecovery;case"actorGain":return T.currentLanguageData.systemTranslation.actorGain;case"actorLoss":return T.currentLanguageData.systemTranslation.actorLoss;case"actorDrain":return T.currentLanguageData.systemTranslation.actorDrain;case"actorNoDamage":return T.currentLanguageData.systemTranslation.actorNoDamage;case"actorNoHit":return T.currentLanguageData.systemTranslation.actorNoHit;case"enemyDamage":return T.currentLanguageData.systemTranslation.enemyDamage;case"enemyRecovery":return T.currentLanguageData.systemTranslation.enemyRecovery;case"enemyGain":return T.currentLanguageData.systemTranslation.enemyGain;case"enemyLoss":return T.currentLanguageData.systemTranslation.enemyLoss;case"enemyDrain":return T.currentLanguageData.systemTranslation.enemyDrain;case"enemyNoDamage":return T.currentLanguageData.systemTranslation.enemyNoDamage;case"enemyNoHit":return T.currentLanguageData.systemTranslation.enemyNoHit;case"evasion":return T.currentLanguageData.systemTranslation.evasion;case"magicEvasion":return T.currentLanguageData.systemTranslation.magicEvasion;case"magicReflection":return T.currentLanguageData.systemTranslation.magicReflection;case"counterAttack":return T.currentLanguageData.systemTranslation.counterAttack;case"substitute":return T.currentLanguageData.systemTranslation.substitute;case"buffAdd":return T.currentLanguageData.systemTranslation.buffAdd;case"debuffAdd":return T.currentLanguageData.systemTranslation.debuffAdd;case"buffRemove":return T.currentLanguageData.systemTranslation.buffRemove;case"actionFailure":return T.currentLanguageData.systemTranslation.actionFailure;default:throw new Error("WD_Translation: Invalid param in TextManager method message ("+e+")")}default:throw new Error("WD_Translation: Invalid method in TextManager ("+a+")")}}function g(){var e=require("fs"),a=require("path"),t=a.dirname(process.mainModule.filename),n=a.join(t,"data/"),r=[];try{var s=e.readdirSync(n),o=s.filter(a=>a.includes("Map")&&!a.includes("MapInfos")),i=n+s.filter(a=>a.includes("MapInfos"))[0],l=e.readFileSync(i,{encoding:"utf8"}),u=JSON.parse(l);for(let a=0;a<o.length;a++){var c=n+o[a],g=e.readFileSync(c,{encoding:"utf8"}),d=JSON.parse(g),m=parseInt(function(a){let e=String(a);return e=(e=e.replace("Map","")).replace(".json","")}(o[a])),p=d.displayName,f=function(a,e){for(const t of e)if(null!==t&&t.id===a)return t.name;return""}(m,u);r.push({id:m,displayName:p,mapNameDoNotTranslate:f})}return r}catch(a){throw new Error("WD_Translation: Error loading map files! Error: "+a)}}function s(a){var e=require("fs"),t=require("path"),n=t.dirname(process.mainModule.filename),r=t.join(n,"data/"),s=[null];try{var o=r+e.readdirSync(r).filter(a=>a.includes("MapInfos"))[0],i=e.readFileSync(o,{encoding:"utf8"});for(const y of JSON.parse(i))if(null!==y){let a="";var l=r+("Map"+(a=100<=y.id?y.id:10<=y.id?"0"+y.id:"00"+y.id)+".json"),u=e.readFileSync(l,{encoding:"utf8"});s.push(JSON.parse(u))}{var c=s;var g=a;const h={code:"",line:0,lastCode:0},S=null===g?new Set:g;let l=[];for(let n=1;n<c.length;n++)for(let t=1;t<c[n].events.length;t++)if(null!==c[n].events[t])for(let e=0;e<c[n].events[t].pages.length;e++){h.line=0,h.code="";for(let a=0;a<c[n].events[t].pages[e].list.length;a++){var d=c[n].events[t].pages[e].list[a];if(101===d.code)h.line=0,h.code="",h.lastCode=0,5<=d.parameters.length&&d.parameters[4].includes("||WDT")&&D(d.parameters[4],n,t,e,d.code);else if(401===d.code)d.parameters[0].includes("||WDT")||0<h.line&&401===h.lastCode?D(d.parameters[0],n,t,e,d.code):(h.line=0,h.code="",h.lastCode=0);else if(102===d.code){h.line=0,h.code="",h.lastCode=0;for(const L of d.parameters[0])L.includes("||WDT")&&D(L,n,t,e,d.code)}else 402===d.code?(h.line=0,h.code="",h.lastCode=0,d.parameters[1].includes("||WDT")&&D(d.parameters[1],n,t,e,d.code)):405===d.code?d.parameters[0].includes("||WDT")||0<h.line&&405===h.lastCode?D(d.parameters[0],n,t,e,d.code):(h.line=0,h.code="",h.lastCode=0):320===d.code||324===d.code||325===d.code?(h.line=0,h.code="",h.lastCode=0,d.parameters[1].includes("||WDT")&&D(d.parameters[1],n,t,e,d.code)):(h.line=0,h.code="",h.lastCode=0)}}for(let e=0;e<$dataCommonEvents.length;e++)if($dataCommonEvents[e]){var m=""===$dataCommonEvents[e].name?"Common Event "+e:"Common Event "+e+": "+$dataCommonEvents[e].name,p=null,f=null;h.line=0,h.code="";for(let a=0;a<$dataCommonEvents[e].list.length;a++){var T=$dataCommonEvents[e].list[a];if(101===T.code)h.line=0,h.code="",h.lastCode=0,5<=T.parameters.length&&T.parameters[4].includes("||WDT")&&D(T.parameters[4],m,p,f,T.code);else if(401===T.code)T.parameters[0].includes("||WDT")||0<h.line&&401===h.lastCode?D(T.parameters[0],m,p,f,T.code):(h.line=0,h.code="",h.lastCode=0);else if(102===T.code){h.line=0,h.code="",h.lastCode=0;for(const W of T.parameters[0])W.includes("||WDT")&&D(W,m,p,f,T.code)}else 402===T.code?(h.line=0,h.code="",h.lastCode=0,T.parameters[1].includes("||WDT")&&D(T.parameters[1],m,p,f,T.code)):405===T.code?T.parameters[0].includes("||WDT")||0<h.line&&405===h.lastCode?D(T.parameters[0],m,p,f,T.code):(h.line=0,h.code="",h.lastCode=0):320===T.code||324===T.code||325===T.code?(h.line=0,h.code="",h.lastCode=0,T.parameters[1].includes("||WDT")&&D(T.parameters[1],m,p,f,T.code)):(h.line=0,h.code="",h.lastCode=0)}}function D(a,e,t,n,r){var s=a.match(/\|\|WDT[a-zA-Z0-9]+\|\|/);if(405===r)if(0<h.line){var o="MultiLine - Line "+h.line;l.push({code:h.code,textString:a,type:o,mapId:e,eventId:t,pageNumber:n,typeCode:r}),h.line++}else{if(null===s)throw new Error("WD_Translation: Found no match in the string: "+a+"! Check the ||WDT(code)|| tag");if(1<s.length)throw new Error("WD_Translation: Found more than one match in the string: "+a+"! Please use only one code per string");var o=s[0],i=a.replace(o,"");S.has(o)||(l.push({code:o,textString:i,type:"MultiLine - Start Line",mapId:e,eventId:t,pageNumber:n,typeCode:r}),S.add(o),h.code=o,h.lastCode=r,h.line++)}else if(401===r)if(0<h.line){i="Dialogue - Line "+h.line;l.push({code:h.code,textString:a,type:i,mapId:e,eventId:t,pageNumber:n,typeCode:r}),h.line++}else{if(null===s)throw new Error("WD_Translation: Found no match in the string: "+a+"! Check the ||WDT(code)|| tag");if(1<s.length)throw new Error("WD_Translation: Found more than one match in the string: "+a+"! Please use only one code per string");o=s[0],i=a.replace(o,"");S.has(o)||(l.push({code:o,textString:i,type:"Dialogue - Start Line",mapId:e,eventId:t,pageNumber:n,typeCode:r}),S.add(o),h.code=o,h.lastCode=r,h.line++)}else{if(null===s)throw new Error("WD_Translation: Found no match in the string: "+a+"! Check the ||WDT(code)|| tag");if(1<s.length)throw new Error("WD_Translation: Found more than one match in the string: "+a+"! Please use only one code per string");i=s[0],o=a.replace(i,"");if(!S.has(i)){let a="";101===r?a="Name Box":401===r?a="Dialogue Box":102===r||402===r?a="Choice Box":320===r?a="Change Actor Name":324===r?a="Change Actor Nickname":325===r&&(a="Change Actor Profile"),l.push({code:i,textString:o,type:a,mapId:e,eventId:t,pageNumber:n,typeCode:r}),S.add(i)}}}!function(a,e){if(e||0!==a.length){var t=e?{default:a}:$dataWDTransTextStrings;if(e)for(const o of v)t[o.language]=a;else{t.default=t.default.concat(a),t.default.sort((a,e)=>a.mapId!==e.mapId?a.mapId-e.mapId:a.eventId!==e.eventId?a.eventId-e.eventId:a.pageNumber-e.pageNumber);for(const i of v)t.hasOwnProperty(i.language)?(t[i.language]=t[i.language].concat(a),t[i.language].sort((a,e)=>a.mapId!==e.mapId?a.mapId-e.mapId:a.eventId!==e.eventId?a.eventId-e.eventId:a.pageNumber-e.pageNumber)):(t[i.language]=JSON.parse(JSON.stringify(t.default)),t[i.language]=t[i.language].concat(a),t[i.language].sort((a,e)=>a.mapId!==e.mapId?a.mapId-e.mapId:a.eventId!==e.eventId?a.eventId-e.eventId:a.pageNumber-e.pageNumber))}var e=JSON.stringify(t,null,4),n=require("fs"),r=require("path"),s=r.dirname(process.mainModule.filename),r=r.join(s,"data/WD_Translation/"),s=r+"TextStrings.json";n.existsSync(r)||n.mkdirSync(r),n.writeFileSync(s,e)}}(l,null===g);return}}catch(a){throw new Error("WD_Translation: Error loading map files! Error: "+a)}}function o(a,e){if(a){var t=a.match(/\|\|WDT[a-zA-Z0-9]+\|\|/);if(null===t)return a;if(1<t.length)throw new Error("WD_Translation: Found more than one match in the string: "+a+"! Please use only one code per string");var n=t[0],t=T.runningDefault?"default":T.currentLanguageData.language,t=$dataWDTransTextStrings.hasOwnProperty(t)?$dataWDTransTextStrings[t]:$dataWDTransTextStrings.default,r={isFound:!1,text:""};if(t)for(const s of t)if(s.code===n&&s.typeCode===e){r.isFound=!0,r.text=s.textString;break}return r.isFound?r.text:a.replace(n,"")}}function l(e){var t=[],n=[];for(const a of e[0])t.push(o(a,102));for(let a=0;a<e.length;a++)0===a?n.push(t):n.push(e[a]);return n}function u(a,e,t,n){var r={isTranslating:!1,text:"",wdCode:null};let s=null;if(a){if(e){if(null===(s=a.match(/\|\|WDT[a-zA-Z0-9]+\|\|/)))return r.text=a,r;if(1<s.length)throw new Error("WD_Translation: Found more than one match in the string: "+a+"! Please use only one code per string");r.isTranslating=!0,r.wdCode=s[0]}var o=e?s[0]:n,n=T.runningDefault?"default":T.currentLanguageData.language,n=$dataWDTransTextStrings.hasOwnProperty(n)?$dataWDTransTextStrings[n]:$dataWDTransTextStrings.default,i={isFound:!1,text:""},l=e?"MultiLine - Start Line":"MultiLine - Line "+t;if(n)for(const u of n)if(u.code===o&&u.type===l){i.isFound=!0,i.text=u.textString;break}r.text=i.isFound?i.text:a.replace(o,"")}else r.text=void 0;return r}function c(a,e,t,n){var r={isTranslating:!1,text:"",wdCode:null};let s=null;if(a){if(e){if(null===(s=a.match(/\|\|WDT[a-zA-Z0-9]+\|\|/)))return r.text=a,r;if(1<s.length)throw new Error("WD_Translation: Found more than one match in the string: "+a+"! Please use only one code per string");r.isTranslating=!0,r.wdCode=s[0]}var o=e?s[0]:n,n=T.runningDefault?"default":T.currentLanguageData.language,n=$dataWDTransTextStrings.hasOwnProperty(n)?$dataWDTransTextStrings[n]:$dataWDTransTextStrings.default,i={isFound:!1,text:""},l=e?"Dialogue - Start Line":"Dialogue - Line "+t;if(n)for(const u of n)if(u.code===o&&u.type===l){i.isFound=!0,i.text=u.textString;break}r.text=i.isFound?i.text:a.replace(o,"")}else r.text=void 0;return r}function d(a,e,t){if(e){var n=e.match(/\|\|WDT[a-zA-Z0-9]+\|\|/);if(null!==n){if(1<n.length)throw new Error("WD_Translation: Found more than one match in the string: "+e+"! Please use only one code per string");var r=n[0],s={};for(const u in $dataWDTransTextStrings){var o={isFound:!1,text:""};for(const c of $dataWDTransTextStrings[u])if(c.code===r&&c.typeCode===t){o.isFound=!0,o.text=c.textString;break}o.isFound&&(s[u]=o.text)}if(0<Object.keys(s).length){var i={actorID:a,code:t,data:s},l={isFound:!1,index:null};for(let a=0;a<y.length;a++)if(y[a].actorID===i.actorID&&y[a].code===i.code){l.isFound=!0,l.index=a;break}l.isFound&&y.splice(l.index,1),y.push(i),h()}}}}function m(){if($gameActors)for(const e of $gameActors._data){var a;e&&(a=e._actorId,e.setName($dataActors[a].name),e.setNickname($dataActors[a].nickname),e.setProfile($dataActors[a].profile))}}PluginManager.registerCommand("WD_Translation","createNewJSON",function(a){var a=parseInt(a.dataType),e=["Actors","Classes","Enemies","Items","Armors","Weapons","Skills","States","MapInfos"][a],a=new i(a),a=JSON.stringify(a,null,4),t=require("fs"),n=require("path"),r=n.dirname(process.mainModule.filename),n=n.join(r,"data/WD_Translation/"),r=n+e+".json";t.existsSync(n)||t.mkdirSync(n),t.writeFileSync(r,a)}),PluginManager.registerCommand("WD_Translation","createAllNewJSON",function(){var e=["Actors","Classes","Enemies","Items","Armors","Weapons","Skills","States","MapInfos"];for(let a=0;a<=8;a++){var t=a,n=e[t],t=new i(t),t=JSON.stringify(t,null,4),r=require("fs"),s=require("path"),o=s.dirname(process.mainModule.filename),s=s.join(o,"data/WD_Translation/"),o=s+n+".json";r.existsSync(s)||r.mkdirSync(s),r.writeFileSync(o,t)}}),PluginManager.registerCommand("WD_Translation","createTextCodeTranslations",function(){s(null)}),PluginManager.registerCommand("WD_Translation","updateTextCodeTranslations",function(){if(!$dataWDTransTextStrings.hasOwnProperty("default"))throw new Error("WD_Translation: Unable to find current data in TextStrings.json, please make sure to have created it with Create Text Translation JSON command before updating");var a=new Set;for(const e of $dataWDTransTextStrings.default)a.has(e.code)||a.add(e.code);s(a)}),PluginManager.registerCommand("WD_Translation","forceLanguage",function(a){a=JSON.parse(a.forceLanguage).language;window.WD_Interplugin_Core.legacyTranslationForceLanguage(a)});var p=PluginManager._scripts,f={coreFound:!1,coreIndex:-1,thisIndex:-1};for(let a=0;a<p.length;a++)"WD_Core"===p[a]&&(f.coreFound=!0,f.coreIndex=a),"WD_Translation"===p[a]&&(f.thisIndex=a);if(!f.coreFound)throw new Error("WD_Translation: The plugin WD_Core has not been found! WD_Core is needed to run this plugin, please dowload on Itch or Ko-fi for free (see help file)");if(f.thisIndex<f.coreIndex)throw new Error("WD_Translation: The plugin WD_Core is loaded after this plugin, please move the plugin WD_Core ABOVE this plugin in the Rpg Maker Plugin Manager");if(!window.WD_Interplugin_Core.requiredCoreVersion({major:1,minor:3,hotfix:0}))throw new Error("WD_Translation: WinterDream Core 1.3.0 or higher is required, please update to the last version");function h(){$gameSystem.saveWdTranslationSettings()}!function a(){var e,t;DataManager.isDatabaseLoaded()&&StorageManager.forageKeysUpdated()&&$dataWDTransActors&&$dataWDTransArmors&&$dataWDTransClasses&&$dataWDTransEnemies&&$dataWDTransItems&&$dataWDTransMapInfos&&$dataWDTransSkills&&$dataWDTransStates&&$dataWDTransWeapons&&$dataActors&&$dataArmors&&$dataClasses&&$dataEnemies&&$dataItems&&$dataMapInfos&&$dataSkills&&$dataStates&&$dataSystem&&$dataWeapons&&$gameSystem&&$dataWDTransTextStrings&&$dataWDTransSettings?(T.originalDataFiles=JSON.parse(JSON.stringify([$dataActors,$dataClasses,$dataEnemies,$dataItems,$dataArmors,$dataWeapons,$dataSkills,$dataStates,$dataMapInfos])),(t=window.WD_Interplugin_Core)&&L((t=t.requireCurrentLanguage()).isForced,t.language),function(){var a=require("fs"),e=(t=require("path")).dirname(process.mainModule.filename),t=t.join(e,"data/WD_Translation/SavedProperties.json"),e=a.readFileSync(t,{encoding:"utf8"}),n=JSON.parse(e);for(const r in T)if(!n.hasOwnProperty(r))return;for(const s in T)T[s]=n[s]}(),e=(t=WD_Interplugin_Core.requireCurrentLanguage()).isForced,t=t.language,(T.isForced=e)?T.forcedLanguage=t:T.forcedLanguage=null,t===T.defaultLanguage?T.runningDefault=!0:T.runningDefault=!1,n(t)):requestAnimationFrame(a)}(),Game_System.prototype.saveWdTranslationSettings=function(){var a={defaultHardcode:JSON.parse(JSON.stringify(T.defaultHardcode)),actorsInGameChanges:JSON.parse(JSON.stringify(y))};this._wdTranslationSavefile=a},Game_System.prototype.loadWdTranslationSettings=function(){return this._wdTranslationSavefile||null},Scene_Title.prototype.drawGameTitle=function(){var a=Graphics.height/4,e=Graphics.width-40,t=(T.runningDefault?$dataSystem:T.currentLanguageData.systemTranslation).gameTitle,n=this._gameTitleSprite.bitmap;n.fontFace=$gameSystem.mainFontFace(),n.outlineColor="black",n.outlineWidth=8,n.fontSize=72,n.drawText(t,20,a,e,48,"center")},TextManager.basic=function(a){return T.runningDefault?$dataSystem.terms.basic[a]||"":t("basic",a)},TextManager.command=function(a){return T.runningDefault?$dataSystem.terms.commands[a]||"":t("command",a)},TextManager.message=function(a){return T.runningDefault?$dataSystem.terms.messages[a]||"":t("message",a)},TextManager.param=function(a){return T.runningDefault?$dataSystem.terms.params[a]||"":T.currentLanguageData.parametersTranslation[a]},Window_StatusBase.prototype.actorSlotName=function(a,e){a=a.equipSlots();return(T.runningDefault?$dataSystem.equipTypes:T.currentLanguageData.equipTypeTranslation)[a[e]]},Window_SkillType.prototype.makeCommandList=function(){if(this._actor)for(const e of this._actor.skillTypes()){var a=(T.runningDefault?$dataSystem.skillTypes:T.currentLanguageData.skillTypeTranslation)[e];this.addCommand(a,"skill",!0,e)}},Window_ActorCommand.prototype.addSkillCommands=function(){for(const e of this._actor.skillTypes()){var a=(T.runningDefault?$dataSystem.skillTypes:T.currentLanguageData.skillTypeTranslation)[e];this.addCommand(a,"skill",!0,e)}},Sprite_Damage.prototype.createMiss=function(){var a=this.fontSize(),e=Math.floor(3*a),t=this.createChildSprite(e,a),n=T.runningDefault?T.defaultHardcode.defaultCombatMiss:T.currentLanguageData.systemTranslation.combatMiss;t.bitmap.drawText(n,0,0,e,a,"center"),t.dy=0},Object.defineProperty(TextManager,"currencyUnit",{get:function(){return T.runningDefault?$dataSystem.currencyUnit:T.currentLanguageData.systemTranslation.currency},configurable:!0}),Game_Interpreter.prototype.command101=function(a){let e=0,t=!1,n=null;if($gameMessage.isBusy())return!1;for($gameMessage.setFaceImage(a[0],a[1]),$gameMessage.setBackground(a[2]),$gameMessage.setPositionType(a[3]),$gameMessage.setSpeakerName(o(a[4],101));401===this.nextEventCode();){this._index++;let a="";var r;0===e?(r=c(this.currentCommand().parameters[0],!0,0,null),t=r.isTranslating,a=r.text,n=r.wdCode):a=0<e&&t?c(this.currentCommand().parameters[0],!1,e,n).text:this.currentCommand().parameters[0],$gameMessage.add(a),e++}switch(this.nextEventCode()){case 102:this._index++;var s=l(this.currentCommand().parameters);this.setupChoices(s);break;case 103:this._index++,this.setupNumInput(this.currentCommand().parameters);break;case 104:this._index++,this.setupItemChoice(this.currentCommand().parameters)}return this.setWaitMode("message"),!0},Game_Interpreter.prototype.command102=function(a){return!$gameMessage.isBusy()&&(a=l(a),this.setupChoices(a),this.setWaitMode("message"),!0)},Game_Interpreter.prototype.command105=function(a){let e=0,t=!1,n=null;if($gameMessage.isBusy())return!1;for($gameMessage.setScroll(a[0],a[1]);405===this.nextEventCode();){this._index++;let a="";var r;0===e?(r=u(this.currentCommand().parameters[0],!0,0,null),t=r.isTranslating,a=r.text,n=r.wdCode):a=0<e&&t?u(this.currentCommand().parameters[0],!1,e,n).text:this.currentCommand().parameters[0],$gameMessage.add(a),e++}return this.setWaitMode("message"),!0},Game_Interpreter.prototype.command320=function(a){var e=o(a[1],320),a=(d(a[0],a[1],320),$gameActors.actor(a[0]));return a&&a.setName(e),!0},Game_Interpreter.prototype.command324=function(a){var e=o(a[1],324),a=(d(a[0],a[1],324),$gameActors.actor(a[0]));return a&&a.setNickname(e),!0},Game_Interpreter.prototype.command325=function(a){var e=o(a[1],325),a=(d(a[0],a[1],325),$gameActors.actor(a[0]));return a&&a.setProfile(e),!0},Window_Options.prototype.booleanStatusText=function(a){var e=T.runningDefault?T.defaultHardcode.defaultOptionOn:T.currentLanguageData.systemTranslation.optionOn,t=T.runningDefault?T.defaultHardcode.defaultOptionOff:T.currentLanguageData.systemTranslation.optionOff;return a?e:t},Window_MapName.prototype.refresh=function(){var a;this.contents.clear(),this.getMapNameTrans()&&(a=this.innerWidth,this.drawBackground(0,0,a,this.lineHeight()),this.drawText(this.getMapNameTrans(),0,0,a,"center"))},Window_MapName.prototype.getMapNameTrans=function(){if(!T.runningDefault&&$dataWDTransMapInfos.hasOwnProperty(T.currentLanguageData.language)){var a=$dataWDTransMapInfos[T.currentLanguageData.language],e=$gameMap._mapId;for(const t of a)if(null!==t&&t.id===e)return t.displayName}return $gameMap.displayName()};const S=DataManager.loadGame;function L(a,e){T.isForced=a,T.forcedLanguage=a?e:null,e===T.defaultLanguage?T.runningDefault=!0:T.runningDefault=!1,n(e)}DataManager.loadGame=function(a){return S.call(this,a).then(a=>(m(),a))},window.WD_Interplugin_Multilanguage={returnLanguageSettings:function(){var a={isForced:T.isForced,forcedLanguage:T.forcedLanguage};return a},importCoreDirectives:L}}();