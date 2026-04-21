//=============================================================================
// Plugin Name: WinterDream Core Plugin
// Author: Winthorp Darkrites (Winter Dream Games Creator)
// Description: This is a parent plugin that handles the common basic functions of other plugins
// Terms of Use: By using this plugin you agree at our ToU (https://drive.google.com/file/d/1lG2Lep2Unme80ghZD7-fA-hPGWKLsiR7/view)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc This is a parent plugin that handles the common basic functions of other plugins
 * @author Winthorp Darkrites
 * @url https://ko-fi.com/winterdream
 *
 * @param line1
 * @text ==== TEXT SETTINGS ====
 * @desc The settings dedicated to the Text Options
 * @default ====
 * 
 * @param autoWrapMin
 * @parent line1
 * @text AutoWrap Minimum Font Size
 * @desc The minimum font size the AutoWrap can shrink the text
 * @default 8
 * @type number
 * @min 1
 * 
 * @param autoSizeMin
 * @parent line1
 * @text Auto Text Size Minimum Font Size
 * @desc The minimum font size the Auto Text Size can shrink the text
 * @default 5
 * @type number
 * @min 1
 * 
 * @param line2
 * @text ==== LANGUAGE SETTINGS ====
 * @desc The settings dedicated to the Lamnguages and Translations
 * @default ====
 * 
 * @param defaultLanguage
 * @parent line2
 * @text Default Language
 * @desc The default language of your game
 * @type struct<languageSelection>
 * @default {"language":"English"}
 * 
 * @param otherLanguages
 * @parent line2
 * @text Available Languages
 * @type select[]
 * @default []
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
 * 
 * @param optionsLanguageFlag
 * @parent line2
 * @type boolean
 * @text Add Language Selection
 * @desc Add Language Selection in Options Menu
 * @default true
 * 
 * @param defaultOptionLanguage
 * @parent defaultLanguage
 * @text Options "Select Language"
 * @desc Default language "Select Language" field in the options scene
 * @default Select Language:
 * 
 * @param transOptionLanguage
 * @parent defaultLanguage
 * @text Translated "Select Language"
 * @desc The translation package for "Select Language" in the menu
 * @default []
 * @type struct<menuTrans>[]
 * 
 * @param line3
 * @text ==== GRAPHICS SETTINGS ====
 * @desc The settings dedicated to the Graphics
 * @default ====
 * 
 * @param addPixiFlag
 * @parent line3
 * @text Add PIXI Filters? (See help file)
 * @type boolean
 * @default false
 * @desc See Description
 * 
 * @command --line1--
 * @text === LANGUAGE ===
 * @desc Commands to manipulate language
 * 
 * @command forceLanguage
 * @text Force selected language
 * @desc Will force the selected language pack, if it exist, or revert to Default language (if no language pack is fitting)
 * 
 * @arg forceLanguage
 * @text Desired Language
 * @desc The language pack to search
 * @type struct<languageSelection>
 * @default {"language":"English"}
 * 
 *
 * @help WD_Core.js
 * 
 * This plugin centralize a series of functions that are common on most
 * WinterDream plugins. Since version 1.3.0, the Core is the center of 
 * the Language Control and coordinates all WD plugins with a single 
 * menu in the game options. If you don't want to use the menu command
 * you can use plugin commands or the exposed functions listed below!
 * 
 * You can find more scripts and games on my Ko-Fi page:
 * https://ko-fi.com/winterdream
 * and on my Itch.io page:
 * https://winterdreamgamescreator.itch.io/
 * And if you want a direct line with me, you can join my Discord:
 * https://discord.gg/AZR38kGG4F
 * 
 * This plugin handles the most common functions in the WinterDream
 * plugins. If by any chance you need them for your game or your
 * plugins, feel free to use them! Here is a list:
 * 
 * //LANGUAGE
 * - window.WD_Interplugin_Core.resolveLanguage(defaultTextObject,translationObjectsArray)
 *   Return the best translation pack possible (user selected language OR auto language >>
 *   default language if no pack fits the best choice).
 *   Objects in the Translation Array must have the property "language" while default Text
 *   doesn't need the language flag anymore
 * //TEXT
 * - window.WD_Interplugin_Core.realTextDimensions(window,string,font)
 *   This function calculates the width and height of a TextEx with the current font
 *   settings of the Window (base RMMZ function resets the font before calculating).
 *   This function calls for some window_base functions so be sure to feed the 
 *   current Window object as first argument, the text Ex string as second
 *   Returns an object with width and height properties
 * - window.WD_Interplugin_Core.drawTextExSize(currentWindow, text, x, y, width, font)
 *   This function works as drawTextEX but it forces a certain fontSize (while the base
 *   RMMZ drawTextEx reset the font). Of course be sure to feed as first arguement the
 *   current Window object for it to work, then the string, the starting X, the starting
 *   Y, the maximum width and the desired font size
 * - window.WD_Interplugin_Core.autoWrap(currentWindow, startX, startY, width, height, 
 *   string, initalFontSize, alignment)
 *   This function auto wrap the given string (allows RMMZ codes) into the given area
 *   set with start X, start Y, width and height. The string will be broken in new lines
 *   using spaces as possible "cuts". (You can still manually insert a line break with the
 *   usual \n command). If this isn't enough to fit in the space, the function will then
 *   try to shrink the font size to a suitable size and repeat the line breaking process.
 * - window.WD_Interplugin_Core.semiWrap(currentWindow, startX, startY, width,string, 
 *   initalFontSize, alignment, canDraw)
 *   This function is similar to AutoWrap but doesn't care about the height, instead it
 *   breaks the text to fit the width, draw it and returns an object with the width and 
 *   height of the text. If canDraw is set to false, it will only measure the text
 * 
 * Deprecated functions:
 * - window.WD_Interplugin_Core.improvedTextExAligner(window,string,alignment)
 *   This has been replaced in the AutoWrap with a more specific pixel guided
 *   function, that returns X and Y adjustment for every line. It does still work
 *   but it is not as efficient. It's still in use in the SemiWrap if you need
 *   to know how big the text is, but that is obsolete with the AutoWrap autocenter
 *   feature
 * - window.WD_Interplugin_Core.textExAligner(string,alignment)
 *   It has been replaced by improvedTextExAligner, way more precise and complete. This
 *   old function will continue to work to avoid compatibility problems with your
 *   projects and older WinterDream plugins but it's advised to use improvedTextExAligner
 *   from now on.
 * - window.WD_Interplugin_Core.translateData(defaultTextObject,translationObjectsArray)
 *   This plugin auto-detects the language on the user system, if he finds a matching
 *   value he will return the text object matching the user settings, if not, he will
 *   return the default text Object. Every text object must include a "language" property
 *   (including the Default text Object) with one of the 183 supported languages (see
 *   below for the complete list). The other properties are up to you and should 
 *   include the text strings.
 * - window.WD_Interplugin_Core.forceLanguage(defaultTextObject,translationObjectsArray,language)
 *   Works as Translate Data but instead of auto-detecting the user language it will try
 *   to force a language among the availables one.
 *   First it will check if the forced language is the defaultText, if not it will check
 *   if the language is in the translation array pack. If it doesn't find a matching 
 *   criteria it will return the default text. Like above, every text pack must include
 *   a language property that needs to match with the below list.
 * 
 * The Core also introduces two new Classes that you can use both via script or in your
 * plugins:
 * 
 * - WD_FloatingText: This class mimics the damage text in the RMMZ battle but you can use
 *   it to show whatever text you want. To use it you need to create it as a sprite, for 
 *   example const sprite = new WD_FloatingText(text,false,false), then add it to the game
 *   as any other Sprite. The arguments are text (the text string you want to display) and
 *   two booleans: isPositive and isNegative, the first will flash the text green, the second
 *   will flash the text red. The Sprite, like the RMMZ damage sprite, will autodestroy once
 *   the animation is done.
 * - WD_Gauge: This is a gauge that mimics RMMZ gauges but it's not linked to the usual
 *   parameters (hp, mp or tp). To create it simply call it, for example:
 *   const gauge = new WD_Gauge(thisWindow,placementObj,dataObj,colorObj)
 *   The arguments are: 
 *   - The window object were the gauge needs to be drawn
 *   - A placement object with the following properties: x, y, width, height
 *   - A data object with the following properties: text, currentValue, maxValue
 *   - An optional color object (if you don't insert this obj the gauge will use RMMZ HP
 *     gauge standard colors) with the following properties (in hex string): gaugeColor1, 
 *     gaugeColor2, gaugeBack, labelMainColor, labelOutlineColor.
 * - WD_Sprite_Gauge: Similar to WD_Gauge but instead of using the window contents it generates
 *   a new sprite and add it as a child to the window. Useful if you have sprites on the window
 *   that would cover the window contents
 * 
 * //PIXI FILTERS - READ THIS//
 * This plugin can extend the PIXI filters selection for RPG Maker MZ. The work isn't mine,
 * it comes from FilterControllerMZ.js by Tsukimi under MIT license.
 * The option to enable those filters has been given to be able to use some of my works 
 * if you don't have Tsukimi plugin and you do not want to download it for some reasons.
 * My advice is to use FilterControllerMZ.js that has a better option to use the filters
 * while leaving WD_Core add filter disabled.
 * 
 * LANGUAGE DETECTOR SUPPORTED VALUES:
 *    	Abkhazian
 *  	Afar
 *  	Afrikaans
 *  	Akan
 *  	Albanian
 *  	Amharic
 *  	Arabic
 *  	Aragonese
 *  	Armenian
 *  	Assamese
 *  	Avaric
 *  	Avestan
 *  	Aymara
 *  	Azerbaijani
 *  	Bambara
 *  	Bashkir
 *  	Basque
 *  	Belarusian
 *  	Bengali
 *  	Bislama
 *  	Bosnian
 *  	Breton
 *  	Bulgarian
 *  	Burmese
 *  	Catalan, Valencian
 *  	Chamorro
 *  	Chechen
 *  	Chichewa, Chewa, Nyanja
 *  	Chinese
 *  	Church Slavonic, Old Slavonic, Old Church Slavonic
 *  	Chuvash
 *  	Cornish
 *  	Corsican
 *  	Cree
 *  	Croatian
 *  	Czech
 *  	Danish
 *  	Divehi, Dhivehi, Maldivian
 *  	Dutch, Flemish
 *  	Dzongkha
 *  	English
 *  	Esperanto
 *  	Estonian
 *  	Ewe
 *  	Faroese
 *  	Fijian
 *  	Finnish
 *  	French
 *  	Western Frisian
 *  	Fulah
 *  	Gaelic, Scottish Gaelic
 *  	Galician
 *  	Ganda
 *  	Georgian
 *  	German
 *  	Greek, Modern (1453–)
 *  	Kalaallisut, Greenlandic
 *  	Guarani
 *  	Gujarati
 *  	Haitian, Haitian Creole
 *  	Hausa
 *  	Hebrew
 *  	Herero
 *  	Hindi
 *  	Hiri Motu
 *  	Hungarian
 *  	Icelandic
 *  	Ido
 *  	Igbo
 *  	Indonesian
 *  	Interlingua (International Auxiliary Language Association)
 *  	Interlingue, Occidental
 *  	Inuktitut
 *  	Inupiaq
 *  	Irish
 *  	Italian
 *  	Japanese
 *  	Javanese
 *  	Kannada
 *  	Kanuri
 *  	Kashmiri
 *  	Kazakh
 *  	Central Khmer
 *  	Kikuyu, Gikuyu
 *  	Kinyarwanda
 *  	Kirghiz, Kyrgyz
 *  	Komi
 *  	Kongo
 *  	Korean
 *  	Kuanyama, Kwanyama
 *  	Kurdish
 *  	Lao
 *  	Latin
 *  	Latvian
 *  	Limburgan, Limburger, Limburgish
 *  	Lingala
 *  	Lithuanian
 *  	Luba-Katanga
 *  	Luxembourgish, Letzeburgesch
 *  	Macedonian
 *  	Malagasy
 *  	Malay
 *  	Malayalam
 *  	Maltese
 *  	Manx
 *  	Maori
 *  	Marathi
 *  	Marshallese
 *  	Mongolian
 *  	Nauru
 *  	Navajo, Navaho
 *  	North Ndebele
 *  	South Ndebele
 *  	Ndonga
 *  	Nepali
 *  	Norwegian
 *  	Norwegian Bokmål
 *  	Norwegian Nynorsk
 *  	Occitan
 *  	Ojibwa
 *  	Oriya
 *  	Oromo
 *  	Ossetian, Ossetic
 *  	Pali
 *  	Pashto, Pushto
 *  	Persian
 *  	Polish
 *  	Portuguese
 *  	Punjabi, Panjabi
 *  	Quechua
 *  	Romanian, Moldavian, Moldovan
 *  	Romansh
 *  	Rundi
 *  	Russian
 *  	Northern Sami
 *  	Samoan
 *  	Sango
 *  	Sanskrit
 *  	Sardinian
 *  	Serbian
 *  	Shona
 *  	Sindhi
 *  	Sinhala, Sinhalese
 *  	Slovak
 *  	Slovenian
 *  	Somali
 *  	Southern Sotho
 *  	Spanish, Castilian
 *  	Sundanese
 *  	Swahili
 *  	Swati
 *  	Swedish
 *  	Tagalog
 *  	Tahitian
 *  	Tajik
 *  	Tamil
 *  	Tatar
 *  	Telugu
 *  	Thai
 *  	Tibetan
 *  	Tigrinya
 *  	Tonga (Tonga Islands)
 *  	Tsonga
 *  	Tswana
 *  	Turkish
 *  	Turkmen
 *  	Twi
 *  	Uighur, Uyghur
 *  	Ukrainian
 *  	Urdu
 *  	Uzbek
 *  	Venda
 *  	Vietnamese
 *  	Volapük
 *  	Walloon
 *  	Welsh
 *  	Wolof
 *  	Xhosa
 *  	Sichuan Yi, Nuosu
 *  	Yiddish
 *  	Yoruba
 *  	Zhuang, Chuang
 *  	Zulu
 *
 * By using this plugin you accept the Terms of Use (https://drive.google.com/file/d/1l_GadoZh3ylSvRm4hAoT2WOUXTpePpHf/view?usp=sharing)
 * //////////////////////////////////////////////////
 * VERSION 1.3:
 * - Moved language translation control to the Core. The Core is now responsible
 *   for selecting the default language and displaying language options in the menu.
 *   It coordinates all other WinterDream plugins that include a language pack.
 *   Choosing a language now updates it across all plugins.
 * - Added a fallback for autoWrap and semiWrap in the event that the text doesn't
 *   fit at the minimum font size. The fallback will try to break down the words
 *   and if that's still not enough it will add an elipsis at the end of the text
 * VERSION 1.2:
 * - Added the WD_Sprite_Gauge class to add Gauges over windows with sprites
 * - Several tweaks to avoid crash when a Gauge is removed while updating
 * VERSION 1.1:
 * - Added the AutoWrap functionality. The Core will break the sentence automatically in lines
 *   and will align the text to your given values fitting it to the given height and width.
 * - Auto Text Size function is added to Core, is a lighter version of the Auto Wrap that will
 *   not break the sentence in lines but will only try to fit it into the given width and height.
 *   It will be used to give a choice to devs on how the plugins will handle their text as I'm
 *   assuming not everyone likes to see their sentence modified.
 * - To address both the above functions font size shrink limits, two parameters have been added
 *   to the Plugin.
 * - Added SemiWrap function, similar to AutoWrap but it does only break the text by width and returns
 *   the text size after drawing it
 * - Fixed a bug in the drawTextEx and measureText function
 * - Added optional extension of the PIXI.filters (not needed if you already use Tsukimi filters plugin)
 * VERSION 1.0:
 * - Initial Release
 * //////////////////////////////////////////////////
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
/*~struct~menuTrans:
 * @param language
 * @text Translation Language
 * @desc Create the translations packages for System
 * @type struct<languageSelection>
 * @default {"language":"English"}
 * 
 * @param optionLanguage
 * @text Option Select Language
 * @default Select Language:
*/

class WD_Gauge{constructor(e,a={x:0,y:0,width:0,height:0},n={text:"",currentValue:0,maxValue:0},t={gaugeColor1:"#e08040",gaugeColor2:"#f0c040",gaugeBack:"#202040",labelMainColor:"#84aaff",labelOutlineColor:"rgba(0, 0, 0, 0.6)",valueColor:"#ffffff"}){this.targetWindow=e,this.coordinates=a,this.data=n,this.colors=this.buildColors(t,e),this.currentState={text:this.data.text,currentValue:this.data.currentValue,maxValue:this.data.maxValue,targetValue:null,targetMaxValue:null},this.duration=0,this.isBusy=!1,this.gaugeSpeed=.1,this.drawGauge(),this.drawLabel()}updateGauge(e={text:"",currentValue:0,maxValue:0}){""!==e.text&&(this.currentState.text=e.text);var a=this.currentState.currentValue,n=this.currentState.maxValue;a===e.currentValue&&n===e.maxValue||this.updateTargetValue(e.currentValue,e.maxValue),this.updateGaugeAnimation()}removeGauge(){var e=this.coordinates.x,a=this.coordinates.y,n=this.coordinates.width,t=this.coordinates.height,o=this.gaugeRate(),o=Math.floor((n-2)*o),i=t-2;this.targetWindow.contents.clearRect(e,a,n,t),this.targetWindow.contents.clearRect(e+1,a+1,o,i),this.currentState.currentValue=null,this.currentState.maxValue=null}isPlaying(){return this.isBusy}setGaugeSpeed(e){isNaN(e)||(this.gaugeSpeed=e)}buildColors(e){return{gaugeColor1:""!==e.gaugeColor1&&null!=e.gaugeColor1?e.gaugeColor1:this.targetWindow.contents.textColor,gaugeColor2:""!==e.gaugeColor2&&null!=e.gaugeColor2?e.gaugeColor2:this.targetWindow.contents.outlineColor,gaugeBack:""!==e.gaugeBack&&null!=e.gaugeBack?e.gaugeBack:ColorManager.gaugeBackColor(),labelMainColor:""!==e.labelMainColor&&null!=e.labelMainColor?e.labelMainColor:ColorManager.systemColor(),labelOutlineColor:""!==e.labelOutlineColor&&null!=e.labelOutlineColor?e.labelOutlineColor:ColorManager.outlineColor(),valueColor:""!==e.valueColor&&null!=e.valueColor?e.valueColor:ColorManager.normalColor()}}drawGauge(){var e=this.coordinates.x,a=this.coordinates.y,n=this.coordinates.width,t=this.coordinates.height,o=this.gaugeRate(),o=Math.floor((n-2)*o),i=t-2,r=this.colors.gaugeBack,s=this.colors.gaugeColor1,u=this.colors.gaugeColor2;this.targetWindow.contents.fillRect(e,a,n,t,r),this.targetWindow.contents.gradientFillRect(e+1,a+1,o,i,s,u)}gaugeRate(){var e=this.currentState.currentValue,a=this.currentState.maxValue;return 0<a?1<(e=e/a)?1:e:0}drawLabel(){var e=this.textRefiner(this.currentState.text),a=this.labelOutlineWidth()/2,n=this.labelY(),t=this.bitmapWidth(),o=this.textHeight();this.setupLabelFont(),this.targetWindow.contents.drawText(e,a,n,t,o,"left"),this.targetWindow.resetFontSettings(),this.targetWindow.resetTextColor()}updateTargetValue(e,a){this.currentState.targetValue=e,this.currentState.targetMaxValue=a,isNaN(this.currentState.currentValue)?(this.currentState.currentValue=e,this.currentState.maxValue=a,this.redraw()):this.duration=20}updateGaugeAnimation(){var e;0<this.duration&&(e=this.duration,this.currentState.currentValue=(this.currentState.currentValue*(e-1)+this.currentState.targetValue)/e,this.currentState.maxValue=(this.currentState.maxValue*(e-1)+this.currentState.targetMaxValue)/e,this.duration--,this.redraw())}redraw(){this.isBusy=!0,this.removeForRedraw();var e=this.currentState.currentValue;isNaN(e)?this.isBusy=!1:(this.drawGauge(),this.drawLabel(),this.checkDuration())}checkDuration(){const e=this;var a=this.gaugeSpeed;0<this.duration?this.waitSeconds(a).then(function(){e.updateGaugeAnimation()}).catch(function(e){throw new Error("WD_Core: Error in the Gauge Duration function! Erorr: "+e)}):this.isBusy=!1}waitSeconds(a){return new Promise(function(e){setTimeout(function(){e()},1e3*a)})}removeForRedraw(){var e=this.coordinates.x,a=this.coordinates.y,n=this.coordinates.width,t=this.coordinates.height,o=this.gaugeRate(),o=Math.floor((n-2)*o),i=t-2;this.targetWindow.contents.clearRect(e,a,n,t),this.targetWindow.contents.clearRect(e+1,a+1,o,i)}labelOutlineWidth(){return 3}labelY(){return 3}bitmapWidth(){return 128}textHeight(){return 24}setupLabelFont(){this.targetWindow.contents.fontFace=this.labelFontFace(),this.targetWindow.contents.fontSize=this.labelFontSize(),this.targetWindow.contents.textColor=this.labelColor(),this.targetWindow.contents.outlineColor=this.labelOutlineColor(),this.targetWindow.contents.outlineWidth=this.labelOutlineWidth()}labelFontFace(){return $gameSystem.mainFontFace()}labelFontSize(){return $gameSystem.mainFontSize()-2}labelColor(){return this.colors.labelMainColor}labelOutlineColor(){return this.colors.labelOutlineColor}labelOutlineWidth(){return 3}textRefiner(e){let a=String(e);return a=(a=a.replaceAll("_VALUE_",this.currentState.currentValue)).replaceAll("_MAX_",this.currentState.maxValue)}}class WD_Sprite_Gauge{constructor(e,a={x:0,y:0,width:0,height:0},n={text:"",currentValue:0,maxValue:0},t={gaugeColor1:"#e08040",gaugeColor2:"#f0c040",gaugeBack:"#202040",labelMainColor:"#84aaff",labelOutlineColor:"rgba(0, 0, 0, 0.6)",valueColor:"#ffffff"}){this.targetWindow=e,this.coordinates=a,this.data=n,this.colors=this.buildColors(t,e),this.currentState={text:this.data.text,currentValue:this.data.currentValue,maxValue:this.data.maxValue,targetValue:null,targetMaxValue:null},this.duration=0,this.isBusy=!1,this.gaugeSpeed=.1,this.gaugeSprite=null,this.gaugeExternalFlag=!1,this.removedGauge=!0,this.drawGauge(),this.drawLabel()}updateAndShow(e,a={x:0,y:0,width:0,height:0},n={text:"",currentValue:0,maxValue:0},t={gaugeColor1:"#e08040",gaugeColor2:"#f0c040",gaugeBack:"#202040",labelMainColor:"#84aaff",labelOutlineColor:"rgba(0, 0, 0, 0.6)",valueColor:"#ffffff"}){this.gaugeSprite&&!this.removedGauge?(this.updateGauge(n),this.updatePlacement(a.x,a.y)):(this.targetWindow=e,this.coordinates=a,this.data=n,this.colors=this.buildColors(t,e),this.currentState={text:this.data.text,currentValue:this.data.currentValue,maxValue:this.data.maxValue,targetValue:null,targetMaxValue:null},this.duration=0,this.isBusy=!1,this.gaugeSpeed=.1,this.gaugeSprite=null,this.gaugeExternalFlag=!1,this.removedGauge=!0,this.drawGauge(),this.drawLabel())}updateGauge(e={text:"",currentValue:0,maxValue:0}){""!==e.text&&(this.currentState.text=e.text);var a=this.currentState.currentValue,n=this.currentState.maxValue;a===e.currentValue&&n===e.maxValue||this.updateTargetValue(e.currentValue,e.maxValue),this.updateGaugeAnimation()}updatePlacement(e,a){this.gaugeSprite&&!this.removedGauge&&(this.gaugeSprite.x=e,this.gaugeSprite.y=a)}removeGauge(){this.gaugeSprite&&this.gaugeSprite.parent&&(this.removedGauge=!0,this.gaugeSprite.parent.removeChild(this.gaugeSprite),this.gaugeSprite=null)}isPlaying(){return this.isBusy}setGaugeSpeed(e){isNaN(e)||(this.gaugeSpeed=e)}buildColors(e){return{gaugeColor1:""!==e.gaugeColor1&&null!=e.gaugeColor1?e.gaugeColor1:this.targetWindow.contents.textColor,gaugeColor2:""!==e.gaugeColor2&&null!=e.gaugeColor2?e.gaugeColor2:this.targetWindow.contents.outlineColor,gaugeBack:""!==e.gaugeBack&&null!=e.gaugeBack?e.gaugeBack:ColorManager.gaugeBackColor(),labelMainColor:""!==e.labelMainColor&&null!=e.labelMainColor?e.labelMainColor:ColorManager.systemColor(),labelOutlineColor:""!==e.labelOutlineColor&&null!=e.labelOutlineColor?e.labelOutlineColor:ColorManager.outlineColor(),valueColor:""!==e.valueColor&&null!=e.valueColor?e.valueColor:ColorManager.normalColor()}}drawGauge(){var e=this.coordinates.x,a=this.coordinates.y,n=this.coordinates.width,t=this.coordinates.height,o=this.gaugeRate(),o=Math.floor((n-2)*o),i=t-2,r=this.colors.gaugeBack,s=this.colors.gaugeColor1,u=this.colors.gaugeColor2;this.gaugeSprite=new Sprite(new Bitmap(n,t)),this.gaugeSprite.x=e,this.gaugeSprite.y=a,this.gaugeSprite.bitmap.fillRect(0,0,n,t,r),this.gaugeSprite.bitmap.gradientFillRect(1,1,o,i,s,u),this.targetWindow.addChild(this.gaugeSprite),this.removedGauge=!1}drawGaugeContents(){var e,a,n,t,o,i,r;this.removedGauge||(e=this.coordinates.width,a=this.coordinates.height,n=this.gaugeRate(),n=Math.floor((e-2)*n),t=a-2,o=this.colors.gaugeBack,i=this.colors.gaugeColor1,r=this.colors.gaugeColor2,this.gaugeSprite.bitmap.fillRect(0,0,e,a,o),this.gaugeSprite.bitmap.gradientFillRect(1,1,n,t,i,r))}gaugeRate(){var e=this.currentState.currentValue,a=this.currentState.maxValue;return 0<a?1<(e=e/a)?1:e:0}drawLabel(){var e,a,n,t,o;this.removedGauge||(e=this.textRefiner(this.currentState.text),a=this.labelOutlineWidth()/2,n=this.labelY(),t=this.bitmapWidth(),o=this.textHeight(),this.setupLabelFont(),this.gaugeSprite.bitmap.drawText(e,a,n,t,o,"left"))}updateTargetValue(e,a){this.currentState.targetValue=e,this.currentState.targetMaxValue=a,isNaN(this.currentState.currentValue)?(this.currentState.currentValue=e,this.currentState.maxValue=a,this.redraw()):this.duration=20}updateGaugeAnimation(){var e;0<this.duration&&this.gaugeSprite&&this.gaugeSprite.bitmap&&!this.removedGauge?(e=this.duration,this.currentState.currentValue=(this.currentState.currentValue*(e-1)+this.currentState.targetValue)/e,this.currentState.maxValue=(this.currentState.maxValue*(e-1)+this.currentState.targetMaxValue)/e,this.duration--,this.redraw()):(this.duration=0,this.isBusy=!1)}redraw(){var e;this.removedGauge||(this.isBusy=!0,this.gaugeSprite.bitmap.clear(),e=this.currentState.currentValue,isNaN(e)?this.isBusy=!1:(this.drawGaugeContents(),this.drawLabel(),this.checkDuration()))}checkDuration(){const a=this;var e=this.gaugeSpeed;this&&!this.removedGauge&&0<this.duration?this.waitSeconds(e).then(function(){a&&a.gaugeSprite&&a.gaugeSprite.bitmap&&!a.removedGauge&&a.updateGaugeAnimation()}).catch(function(e){console.warn("WD_Core: Gauge Duration aborted safely:",e),a.isBusy=!1}):this.isBusy=!1}waitSeconds(a){return new Promise(function(e){setTimeout(function(){e()},1e3*a)})}labelOutlineWidth(){return 3}labelY(){return 3}bitmapWidth(){return 128}textHeight(){return 24}setupLabelFont(){this.removedGauge||(this.gaugeSprite.bitmap.fontFace=this.labelFontFace(),this.gaugeSprite.bitmap.fontSize=this.labelFontSize(),this.gaugeSprite.bitmap.textColor=this.labelColor(),this.gaugeSprite.bitmap.outlineColor=this.labelOutlineColor(),this.gaugeSprite.bitmap.outlineWidth=this.labelOutlineWidth())}labelFontFace(){return $gameSystem.mainFontFace()}labelFontSize(){return $gameSystem.mainFontSize()-2}labelColor(){return this.colors.labelMainColor}labelOutlineColor(){return this.colors.labelOutlineColor}labelOutlineWidth(){return 3}textRefiner(e){let a=String(e);return a=(a=a.replaceAll("_VALUE_",this.currentState.currentValue)).replaceAll("_MAX_",this.currentState.maxValue)}}class WD_FloatingText extends Sprite{constructor(e={text:"",positiveFlash:!1,negativeFlash:!1}){super(),this._duration=90,this._flashColor=[0,0,0,0],this._flashDuration=0,this._colorType=0,this._textObj=e,this.setup(),(this._textObj.positiveFlash||this._textObj.negativeFlash)&&this.criticalEffect(this._textObj.positiveFlash),this.wdCode="WD_FloatingText"}setup(){var e=this.stringApproxWidth(this._textObj.text),a=this.fontSize(),e=Math.floor(a*e),n=this.createChildSprite(e,a);n.bitmap.drawText(this._textObj.text,0,0,e,a,"center"),n.dy=0}stringApproxWidth(e){var e=String(e).length,a=Graphics.width,e=Math.floor(e/5*3)<=0?1:Math.floor(e/5*3),n=($gameSystem.mainFontSize()+4)*e;return n<=a/4?e:n<=a/2?Math.floor(e/3*2):n<=.75*a?Math.floor(e/2):n<a?Math.floor(e/3):Math.floor(e/4)}criticalEffect(e){this._flashColor=e?[0,255,0,160]:[255,0,0,160],this._flashDuration=60}createChildSprite(e,a){var n=new Sprite;return n.bitmap=this.createBitmap(e,a),n.anchor.x=.5,n.anchor.y=1,n.y=-40,n.ry=n.y,this.addChild(n),n}createBitmap(e,a){e=new Bitmap(e,a);return e.fontFace=this.fontFace(),e.fontSize=this.fontSize(),e.textColor=this.damageColor(),e.outlineColor=this.outlineColor(),e.outlineWidth=this.outlineWidth(),e}fontFace(){return $gameSystem.numberFontFace()}fontSize(){return $gameSystem.mainFontSize()+4}damageColor(){return ColorManager.textColor(this._colorType)}outlineColor(){return"rgba(0, 0, 0, 0.7)"}outlineWidth(){return 4}update(){if(Sprite.prototype.update.call(this),0<this._duration){this._duration--;for(const e of this.children)this.updateChild(e)}this.updateFlash(),this.updateOpacity()}updateChild(e){e.dy+=.5,e.ry+=e.dy,0<=e.ry&&(e.ry=0,e.dy*=-.6),e.y=Math.round(e.ry),e.setBlendColor(this._flashColor)}updateFlash(){var e;0<this._flashDuration&&(e=this._flashDuration--,this._flashColor[3]*=(e-1)/e)}updateOpacity(){this._duration<10&&(this.opacity=255*this._duration/10)}destroy(e){for(const a of this.children)a.bitmap&&a.bitmap.destroy();Sprite.prototype.destroy.call(this,e)}isPlaying(){return 0<this._duration}}!function(){var e=PluginManager.parameters("WD_Core");const n=JSON.parse(e.defaultLanguage).language,w={autoWrap:e.autoWrapMin||8,autoSize:e.autoSizeMin||5},a={isActive:"true"===e.optionsLanguageFlag,defaultString:e.defaultOptionLanguage,transStrings:function(e){if(!e)return[];var e=JSON.parse(e),a=[];for(const t of e){var n=JSON.parse(t);n.language=JSON.parse(n.language),a.push({language:n.language.language,string:n.optionLanguage})}return a}(e.transOptionLanguage)},t=(e=e.otherLanguages)?JSON.parse(e):[],o={major:1,minor:3,hotfix:0};const i=new class{constructor(){this.defaultLanguage=n,this.availableLanguages=t,this.runningDefault=!0,this.forcedLanguage={isForced:!1,forcedLanguage:null},this.currentLanguage=n,this._isBooted=!1}boot(){this._isBooted||(this._isBooted=!0,this.loadSettings())}loadSettings(){ConfigManager.wdLanguageForced&&ConfigManager.wdCurrentLanguage?this.applyUserSelectedLanguage(ConfigManager.wdCurrentLanguage,!1):this.getUserLanguage()}saveSettings(){ConfigManager.wdCurrentLanguage=this.currentLanguage,ConfigManager.wdLanguageForced=this.forcedLanguage.isForced,ConfigManager.save()}applyUserSelectedLanguage(e,a=!0){this.forcedLanguage={isForced:!0,forcedLanguage:e},this.currentLanguage=e,this.runningDefault=this.currentLanguage===this.defaultLanguage,this.interPluginImpulse(),a&&this.saveSettings()}applyAutoLanguage(e,a=!0){this.forcedLanguage={isForced:!1,forcedLanguage:null},this.currentLanguage=e,this.runningDefault=this.currentLanguage===this.defaultLanguage,this.interPluginImpulse(),a&&this.saveSettings()}interPluginImpulse(){var e=window.WD_Interplugin_Multilanguage;e&&"function"==typeof e.importCoreDirectives&&e.importCoreDirectives(this.forcedLanguage.isForced,this.currentLanguage)}getUserLanguage(){var e=navigator.languages||[],a=s(this.defaultLanguage),n=this.availableLanguages.map(e=>s(e));let t=!1;for(const o of e){if(o.includes(a)){t=!0,this.applyAutoLanguage(this.defaultLanguage);break}for(const i of n)if(o.includes(i)){t=!0,this.applyAutoLanguage(u(i));break}if(t)break}t||this.applyAutoLanguage(this.defaultLanguage)}};function r(e,a){for(const o of navigator.languages){var n=s(e.language);if(o.includes(n))return e;for(const i of a){var t=s(i.language);if(o.includes(t))return i}}return e}function s(e){for(const a of[{name:"Abkhazian",code:"ab"},{name:"Afar",code:"aa"},{name:"Afrikaans",code:"af"},{name:"Akan",code:"ak"},{name:"Albanian",code:"sq"},{name:"Amharic",code:"am"},{name:"Arabic",code:"ar"},{name:"Aragonese",code:"an"},{name:"Armenian",code:"hy"},{name:"Assamese",code:"as"},{name:"Avaric",code:"av"},{name:"Avestan",code:"ae"},{name:"Aymara",code:"ay"},{name:"Azerbaijani",code:"az"},{name:"Bambara",code:"bm"},{name:"Bashkir",code:"ba"},{name:"Basque",code:"eu"},{name:"Belarusian",code:"be"},{name:"Bengali",code:"bn"},{name:"Bislama",code:"bi"},{name:"Bosnian",code:"bs"},{name:"Breton",code:"br"},{name:"Bulgarian",code:"bg"},{name:"Burmese",code:"my"},{name:"Catalan, Valencian",code:"ca"},{name:"Chamorro",code:"ch"},{name:"Chechen",code:"ce"},{name:"Chichewa, Chewa, Nyanja",code:"ny"},{name:"Chinese",code:"zh"},{name:"Church Slavonic, Old Slavonic, Old Church Slavonic",code:"cu"},{name:"Chuvash",code:"cv"},{name:"Cornish",code:"kw"},{name:"Corsican",code:"co"},{name:"Cree",code:"cr"},{name:"Croatian",code:"hr"},{name:"Czech",code:"cs"},{name:"Danish",code:"da"},{name:"Divehi, Dhivehi, Maldivian",code:"dv"},{name:"Dutch, Flemish",code:"nl"},{name:"Dzongkha",code:"dz"},{name:"English",code:"en"},{name:"Esperanto",code:"eo"},{name:"Estonian",code:"et"},{name:"Ewe",code:"ee"},{name:"Faroese",code:"fo"},{name:"Fijian",code:"fj"},{name:"Finnish",code:"fi"},{name:"French",code:"fr"},{name:"Western Frisian",code:"fy"},{name:"Fulah",code:"ff"},{name:"Gaelic, Scottish Gaelic",code:"gd"},{name:"Galician",code:"gl"},{name:"Ganda",code:"lg"},{name:"Georgian",code:"ka"},{name:"German",code:"de"},{name:"Greek, Modern (1453–)",code:"el"},{name:"Kalaallisut, Greenlandic",code:"kl"},{name:"Guarani",code:"gn"},{name:"Gujarati",code:"gu"},{name:"Haitian, Haitian Creole",code:"ht"},{name:"Hausa",code:"ha"},{name:"Hebrew",code:"he"},{name:"Herero",code:"hz"},{name:"Hindi",code:"hi"},{name:"Hiri Motu",code:"ho"},{name:"Hungarian",code:"hu"},{name:"Icelandic",code:"is"},{name:"Ido",code:"io"},{name:"Igbo",code:"ig"},{name:"Indonesian",code:"id"},{name:"Interlingua (International Auxiliary Language Association)",code:"ia"},{name:"Interlingue, Occidental",code:"ie"},{name:"Inuktitut",code:"iu"},{name:"Inupiaq",code:"ik"},{name:"Irish",code:"ga"},{name:"Italian",code:"it"},{name:"Japanese",code:"ja"},{name:"Javanese",code:"jv"},{name:"Kannada",code:"kn"},{name:"Kanuri",code:"kr"},{name:"Kashmiri",code:"ks"},{name:"Kazakh",code:"kk"},{name:"Central Khmer",code:"km"},{name:"Kikuyu, Gikuyu",code:"ki"},{name:"Kinyarwanda",code:"rw"},{name:"Kirghiz, Kyrgyz",code:"ky"},{name:"Komi",code:"kv"},{name:"Kongo",code:"kg"},{name:"Korean",code:"ko"},{name:"Kuanyama, Kwanyama",code:"kj"},{name:"Kurdish",code:"ku"},{name:"Lao",code:"lo"},{name:"Latin",code:"la"},{name:"Latvian",code:"lv"},{name:"Limburgan, Limburger, Limburgish",code:"li"},{name:"Lingala",code:"ln"},{name:"Lithuanian",code:"lt"},{name:"Luba-Katanga",code:"lu"},{name:"Luxembourgish, Letzeburgesch",code:"lb"},{name:"Macedonian",code:"mk"},{name:"Malagasy",code:"mg"},{name:"Malay",code:"ms"},{name:"Malayalam",code:"ml"},{name:"Maltese",code:"mt"},{name:"Manx",code:"gv"},{name:"Maori",code:"mi"},{name:"Marathi",code:"mr"},{name:"Marshallese",code:"mh"},{name:"Mongolian",code:"mn"},{name:"Nauru",code:"na"},{name:"Navajo, Navaho",code:"nv"},{name:"North Ndebele",code:"nd"},{name:"South Ndebele",code:"nr"},{name:"Ndonga",code:"ng"},{name:"Nepali",code:"ne"},{name:"Norwegian",code:"no"},{name:"Norwegian Bokmål",code:"nb"},{name:"Norwegian Nynorsk",code:"nn"},{name:"Occitan",code:"oc"},{name:"Ojibwa",code:"oj"},{name:"Oriya",code:"or"},{name:"Oromo",code:"om"},{name:"Ossetian, Ossetic",code:"os"},{name:"Pali",code:"pi"},{name:"Pashto, Pushto",code:"ps"},{name:"Persian",code:"fa"},{name:"Polish",code:"pl"},{name:"Portuguese",code:"pt"},{name:"Punjabi, Panjabi",code:"pa"},{name:"Quechua",code:"qu"},{name:"Romanian, Moldavian, Moldovan",code:"ro"},{name:"Romansh",code:"rm"},{name:"Rundi",code:"rn"},{name:"Russian",code:"ru"},{name:"Northern Sami",code:"se"},{name:"Samoan",code:"sm"},{name:"Sango",code:"sg"},{name:"Sanskrit",code:"sa"},{name:"Sardinian",code:"sc"},{name:"Serbian",code:"sr"},{name:"Shona",code:"sn"},{name:"Sindhi",code:"sd"},{name:"Sinhala, Sinhalese",code:"si"},{name:"Slovak",code:"sk"},{name:"Slovenian",code:"sl"},{name:"Somali",code:"so"},{name:"Southern Sotho",code:"st"},{name:"Spanish, Castilian",code:"es"},{name:"Sundanese",code:"su"},{name:"Swahili",code:"sw"},{name:"Swati",code:"ss"},{name:"Swedish",code:"sv"},{name:"Tagalog",code:"tl"},{name:"Tahitian",code:"ty"},{name:"Tajik",code:"tg"},{name:"Tamil",code:"ta"},{name:"Tatar",code:"tt"},{name:"Telugu",code:"te"},{name:"Thai",code:"th"},{name:"Tibetan",code:"bo"},{name:"Tigrinya",code:"ti"},{name:"Tonga (Tonga Islands)",code:"to"},{name:"Tsonga",code:"ts"},{name:"Tswana",code:"tn"},{name:"Turkish",code:"tr"},{name:"Turkmen",code:"tk"},{name:"Twi",code:"tw"},{name:"Uighur, Uyghur",code:"ug"},{name:"Ukrainian",code:"uk"},{name:"Urdu",code:"ur"},{name:"Uzbek",code:"uz"},{name:"Venda",code:"ve"},{name:"Vietnamese",code:"vi"},{name:"Volapük",code:"vo"},{name:"Walloon",code:"wa"},{name:"Welsh",code:"cy"},{name:"Wolof",code:"wo"},{name:"Xhosa",code:"xh"},{name:"Sichuan Yi, Nuosu",code:"ii"},{name:"Yiddish",code:"yi"},{name:"Yoruba",code:"yo"},{name:"Zhuang, Chuang",code:"za"},{name:"Zulu",code:"zu"}])if(a.name===e)return a.code;throw new Error("WD_Core: Unable to find the language code for "+e)}function u(e){for(const a of[{name:"Abkhazian",code:"ab"},{name:"Afar",code:"aa"},{name:"Afrikaans",code:"af"},{name:"Akan",code:"ak"},{name:"Albanian",code:"sq"},{name:"Amharic",code:"am"},{name:"Arabic",code:"ar"},{name:"Aragonese",code:"an"},{name:"Armenian",code:"hy"},{name:"Assamese",code:"as"},{name:"Avaric",code:"av"},{name:"Avestan",code:"ae"},{name:"Aymara",code:"ay"},{name:"Azerbaijani",code:"az"},{name:"Bambara",code:"bm"},{name:"Bashkir",code:"ba"},{name:"Basque",code:"eu"},{name:"Belarusian",code:"be"},{name:"Bengali",code:"bn"},{name:"Bislama",code:"bi"},{name:"Bosnian",code:"bs"},{name:"Breton",code:"br"},{name:"Bulgarian",code:"bg"},{name:"Burmese",code:"my"},{name:"Catalan, Valencian",code:"ca"},{name:"Chamorro",code:"ch"},{name:"Chechen",code:"ce"},{name:"Chichewa, Chewa, Nyanja",code:"ny"},{name:"Chinese",code:"zh"},{name:"Church Slavonic, Old Slavonic, Old Church Slavonic",code:"cu"},{name:"Chuvash",code:"cv"},{name:"Cornish",code:"kw"},{name:"Corsican",code:"co"},{name:"Cree",code:"cr"},{name:"Croatian",code:"hr"},{name:"Czech",code:"cs"},{name:"Danish",code:"da"},{name:"Divehi, Dhivehi, Maldivian",code:"dv"},{name:"Dutch, Flemish",code:"nl"},{name:"Dzongkha",code:"dz"},{name:"English",code:"en"},{name:"Esperanto",code:"eo"},{name:"Estonian",code:"et"},{name:"Ewe",code:"ee"},{name:"Faroese",code:"fo"},{name:"Fijian",code:"fj"},{name:"Finnish",code:"fi"},{name:"French",code:"fr"},{name:"Western Frisian",code:"fy"},{name:"Fulah",code:"ff"},{name:"Gaelic, Scottish Gaelic",code:"gd"},{name:"Galician",code:"gl"},{name:"Ganda",code:"lg"},{name:"Georgian",code:"ka"},{name:"German",code:"de"},{name:"Greek, Modern (1453–)",code:"el"},{name:"Kalaallisut, Greenlandic",code:"kl"},{name:"Guarani",code:"gn"},{name:"Gujarati",code:"gu"},{name:"Haitian, Haitian Creole",code:"ht"},{name:"Hausa",code:"ha"},{name:"Hebrew",code:"he"},{name:"Herero",code:"hz"},{name:"Hindi",code:"hi"},{name:"Hiri Motu",code:"ho"},{name:"Hungarian",code:"hu"},{name:"Icelandic",code:"is"},{name:"Ido",code:"io"},{name:"Igbo",code:"ig"},{name:"Indonesian",code:"id"},{name:"Interlingua (International Auxiliary Language Association)",code:"ia"},{name:"Interlingue, Occidental",code:"ie"},{name:"Inuktitut",code:"iu"},{name:"Inupiaq",code:"ik"},{name:"Irish",code:"ga"},{name:"Italian",code:"it"},{name:"Japanese",code:"ja"},{name:"Javanese",code:"jv"},{name:"Kannada",code:"kn"},{name:"Kanuri",code:"kr"},{name:"Kashmiri",code:"ks"},{name:"Kazakh",code:"kk"},{name:"Central Khmer",code:"km"},{name:"Kikuyu, Gikuyu",code:"ki"},{name:"Kinyarwanda",code:"rw"},{name:"Kirghiz, Kyrgyz",code:"ky"},{name:"Komi",code:"kv"},{name:"Kongo",code:"kg"},{name:"Korean",code:"ko"},{name:"Kuanyama, Kwanyama",code:"kj"},{name:"Kurdish",code:"ku"},{name:"Lao",code:"lo"},{name:"Latin",code:"la"},{name:"Latvian",code:"lv"},{name:"Limburgan, Limburger, Limburgish",code:"li"},{name:"Lingala",code:"ln"},{name:"Lithuanian",code:"lt"},{name:"Luba-Katanga",code:"lu"},{name:"Luxembourgish, Letzeburgesch",code:"lb"},{name:"Macedonian",code:"mk"},{name:"Malagasy",code:"mg"},{name:"Malay",code:"ms"},{name:"Malayalam",code:"ml"},{name:"Maltese",code:"mt"},{name:"Manx",code:"gv"},{name:"Maori",code:"mi"},{name:"Marathi",code:"mr"},{name:"Marshallese",code:"mh"},{name:"Mongolian",code:"mn"},{name:"Nauru",code:"na"},{name:"Navajo, Navaho",code:"nv"},{name:"North Ndebele",code:"nd"},{name:"South Ndebele",code:"nr"},{name:"Ndonga",code:"ng"},{name:"Nepali",code:"ne"},{name:"Norwegian",code:"no"},{name:"Norwegian Bokmål",code:"nb"},{name:"Norwegian Nynorsk",code:"nn"},{name:"Occitan",code:"oc"},{name:"Ojibwa",code:"oj"},{name:"Oriya",code:"or"},{name:"Oromo",code:"om"},{name:"Ossetian, Ossetic",code:"os"},{name:"Pali",code:"pi"},{name:"Pashto, Pushto",code:"ps"},{name:"Persian",code:"fa"},{name:"Polish",code:"pl"},{name:"Portuguese",code:"pt"},{name:"Punjabi, Panjabi",code:"pa"},{name:"Quechua",code:"qu"},{name:"Romanian, Moldavian, Moldovan",code:"ro"},{name:"Romansh",code:"rm"},{name:"Rundi",code:"rn"},{name:"Russian",code:"ru"},{name:"Northern Sami",code:"se"},{name:"Samoan",code:"sm"},{name:"Sango",code:"sg"},{name:"Sanskrit",code:"sa"},{name:"Sardinian",code:"sc"},{name:"Serbian",code:"sr"},{name:"Shona",code:"sn"},{name:"Sindhi",code:"sd"},{name:"Sinhala, Sinhalese",code:"si"},{name:"Slovak",code:"sk"},{name:"Slovenian",code:"sl"},{name:"Somali",code:"so"},{name:"Southern Sotho",code:"st"},{name:"Spanish, Castilian",code:"es"},{name:"Sundanese",code:"su"},{name:"Swahili",code:"sw"},{name:"Swati",code:"ss"},{name:"Swedish",code:"sv"},{name:"Tagalog",code:"tl"},{name:"Tahitian",code:"ty"},{name:"Tajik",code:"tg"},{name:"Tamil",code:"ta"},{name:"Tatar",code:"tt"},{name:"Telugu",code:"te"},{name:"Thai",code:"th"},{name:"Tibetan",code:"bo"},{name:"Tigrinya",code:"ti"},{name:"Tonga (Tonga Islands)",code:"to"},{name:"Tsonga",code:"ts"},{name:"Tswana",code:"tn"},{name:"Turkish",code:"tr"},{name:"Turkmen",code:"tk"},{name:"Twi",code:"tw"},{name:"Uighur, Uyghur",code:"ug"},{name:"Ukrainian",code:"uk"},{name:"Urdu",code:"ur"},{name:"Uzbek",code:"uz"},{name:"Venda",code:"ve"},{name:"Vietnamese",code:"vi"},{name:"Volapük",code:"vo"},{name:"Walloon",code:"wa"},{name:"Welsh",code:"cy"},{name:"Wolof",code:"wo"},{name:"Xhosa",code:"xh"},{name:"Sichuan Yi, Nuosu",code:"ii"},{name:"Yiddish",code:"yi"},{name:"Yoruba",code:"yo"},{name:"Zhuang, Chuang",code:"za"},{name:"Zulu",code:"zu"}])if(a.code===e)return a.name;throw new Error("WD_Core: Unable to find the language name for "+e)}function l(e,a,n){var t=n,n=e.language;if(t!==n)for(const o of a)if(o.language===t)return o;return e}function c(e,a){if(!i.runningDefault)for(const n of a)if(n.language===i.currentLanguage)return n;return e}function v(e,a){let n=e;for(const t of a)n=n.replaceAll(t,"!xxxxxXXXWDSEP_AGENTXXXxxxx!");return n.split("!xxxxxXXXWDSEP_AGENTXXXxxxx!")}function g(a){var n,t=a.length;let o=0,i=0,r="",s="Running",u="Waiting",l=!1;for(let e=0;e<t;e++)if("Waiting"===u?"Running"===s?"Running"===s&&"\\"!==a[e]||(s="Locked"):"Locked"===s?s="Locked"!==s||"V"!==a[e]&&"v"!==a[e]?"Locked"!==s||"I"!==a[e]&&"i"!==a[e]?"Locked"!==s||"N"!==a[e]&&"n"!==a[e]?"Locked"!==s||"P"!==a[e]&&"p"!==a[e]?"Locked"!==s||"G"!==a[e]&&"g"!==a[e]?"Locked"!==s||"C"!==a[e]&&"c"!==a[e]?"Locked"!==s||"{"!==a[e]&&"}"!==a[e]&&"$"!==a[e]&&"."!==a[e]&&"|"!==a[e]&&"!"!==a[e]&&">"!==a[e]&&"<"!==a[e]&&"^"!==a[e]?"Locked"===s&&"\\"===a[e]?(o-=1,"Running"):"Locked"!==s||"F"!==a[e]&&"f"!==a[e]?"Running":"FontPt1":(o-=2,"Running"):"Color":(n=TextManager.currencyUnit,o=o-2+n.length,"Running"):"PartyOrPos":"Actor":"Icon":"Variable":"Running"!==s&&"Locked"!==s&&"FontPt1"!==s&&"["===a[e]?u="Running":s="PartyOrPos"!==s||"X"!==a[e]&&"x"!==a[e]?"PartyOrPos"!==s||"Y"!==a[e]&&"y"!==a[e]?"FontPt1"!==s||"S"!==a[e]&&"s"!==a[e]?"Running":"FontSize":"PosY":"PosX":isNaN(parseInt(a[e]))?"]"===a[e]&&0===i||isNaN(parseInt(a[e]))&&"]"!==a[e]?("PosX"!==s&&"PosY"!==s&&"FontSize"!==s?o-=2:o-=3,s="Running",u="Waiting",i=0,r=""):"]"===a[e]&&0!==i&&(l=!0):(i++,r+=a[e]),l){switch(s){case"Variable":var c=$gameVariables.value(parseInt(r)).toString().length;o=o-4-i+c;break;case"Icon":o=o-4-i+2;break;case"Actor":PartyOrPos;var c=$dataActors,g=parseInt(r);o=g<=c.length-1&&0<g?(g=c[g].name,o-4-i+g.length):o-4-i;break;case"PartyOrPos":var g=$gameParty,d=$dataActors,h=parseInt(r);o=h<=d.length-1&&0<h&&g._actors.includes(h)?(d=d[h].name,o-4-i+d.length):o-4-i;break;case"Color":o=o-4-i;break;case"PosX":case"PosY":case"FontSize":o=o-5-i}s="Running",u="Waiting",i=0,r=""}return t+o}function d(a,e){var n=e.toLowerCase();if(a.includes("\n")||a.includes("↵")||a.includes("\\n")){var t=v(a,["\n","↵","\\n"]);let e=0;var o=[];for(const r of t)g(r)>e&&(e=g(r));for(let a=0;a<t.length;a++)if(g(t[a])<e){var i=e-g(t[a]);switch(n){case"left":o.push(t[a]);break;case"center":for(let e=i;0<e;e--)e%2==0?t[a]=t[a]+" ":t[a]=" "+t[a];o.push(t[a]);break;case"right":for(let e=i;0<e;e--)t[a]=" "+t[a];o.push(t[a])}}else o.push(t[a]);return o.join("\n")}return a}function h(e,a){return y(e,a,e.contents.fontSize).width}function C(o,e,a){var i=a.toLowerCase();if(e.includes("\n")||e.includes("\\n")||e.includes("↵")){var r=v(e,["\n","↵","\\n"]);let t=0;var s=[];for(const n of r)h(o,n)>t&&(t=h(o,n));for(let n=0;n<r.length;n++)if(h(o,r[n])<t){t,h(o,r[n]);let a=0,e=r[n];for(;h(o,e)<t;)e+=" ",a++;switch(i){case"left":s.push(r[n]);break;case"center":for(let e=a;0<e;e--)e%2==0?r[n]=r[n]+" ":r[n]=" "+r[n];s.push(r[n]);break;case"right":for(let e=a;0<e;e--)r[n]=" "+r[n];s.push(r[n])}}else s.push(r[n]);return s.join("\n")}return e}function y(e,a,n){e.resetFontSettings(),e.contents.fontSize=n;n=e.createTextState(a,0,0,0);return n.drawing=!1,e.processAllText(n),{width:n.outputWidth,height:n.outputHeight}}function k(e,a,n,t,o,i){e.resetFontSettings(),e.contents.fontSize=i;i=e.createTextState(a,n,t,o);return e.processAllText(i),i.outputWidth}function m(u,o,i,l,r,e,s,c){var g=y(u,e,s);if(g.width<=l&&g.height<=r){var a=M(u,e,c,l);for(let e=0;e<a.length;e++)k(u,a[e].text,o+a[e].xMod,i+a[e].fontHeight*e,l,s)}else{var d=(g=e).includes("\n")||g.includes("\\n")||g.includes("↵")?v(g,["\n","\\n","↵"]):[g];let n=null,t=!1,a=s;for(let e=s;e>=w.autoWrap;e--){var h={string:"",valid:!0};if(t){if(y(u,n,e).height<=r){a=e;break}n=null,t=!1}for(let a=0;a<d.length;a++){var m=function(e,r){const s=[],a=e.split(" ");return function t(o){var i=o;for(let n=o.length-1;0<=n;n--){let a="";for(let e=0;e<=n;e++)a+=o[e],e<n&&(a+=" ");if(y(u,a,r).width<=l){if(s.push({string:a,blocks:n}),n+1===o.length)break;{let e=n;for(;0<=e;)i.splice(e,1),e--;t(i);break}}}}(a),s}(d[a],e);if(0<m.length){var f=d[a].split(" ").length;let e=m.length;for(const C of m)e+=C.blocks;if(e===f){let a="";for(let e=0;e<m.length;e++)a+=m[e].string,e+1<m.length&&(a+="\n");h.string=""===h.string?h.string+a:h.string+"\n"+a}else h.valid=!1}else h.valid=!1;if(!h.valid){h.string="";break}a+1>=d.length&&(n=h.string,t=!0)}}if(t){var p=M(u,n,c,l);for(let e=0;e<p.length;e++)k(u,p[e].text,o+p[e].xMod,i+p[e].fontHeight*e,l,a)}else{var S=w.autoWrap,g=x(u,e,S,l),e=L(u,g,S,r),b=M(u,e.join("\n"),c,l);for(let e=0;e<b.length;e++)k(u,b[e].text,o+b[e].xMod,i+b[e].fontHeight*e,l,S)}}}function f(u,o,i,l,e,r,s,c){var g;if(y(u,e,r).width<=l)return g=C(u,e,s),k(u,g,o,i,l,r),y(u,g,r);{var d=(g=e).includes("\n")||g.includes("\\n")||g.includes("↵")?v(g,["\n","\\n","↵"]):[g];let n=null,t=!1,a=r;for(let e=r;e>=w.autoWrap;e--){var h={string:"",valid:!0};if(t){if(y(u,n,e).height<=1/0){a=e;break}n=null,t=!1}for(let a=0;a<d.length;a++){var m=function(e,r){const s=[],a=e.split(" ");return function t(o){var i=o;for(let n=o.length-1;0<=n;n--){let a="";for(let e=0;e<=n;e++)a+=o[e],e<n&&(a+=" ");if(y(u,a,r).width<=l){if(s.push({string:a,blocks:n}),n+1===o.length)break;{let e=n;for(;0<=e;)i.splice(e,1),e--;t(i);break}}}}(a),s}(d[a],e);if(0<m.length){var f=d[a].split(" ").length;let e=m.length;for(const b of m)e+=b.blocks;if(e===f){let a="";for(let e=0;e<m.length;e++)a+=m[e].string,e+1<m.length&&(a+="\n");h.string=""===h.string?h.string+a:h.string+"\n"+a}else h.valid=!1}else h.valid=!1;if(!h.valid){h.string="";break}a+1>=d.length&&(n=h.string,t=!0)}}if(t)return r=C(u,n,s),c&&k(u,r,o,i,l,a),y(u,r,a);var p=w.autoWrap,c=x(u,e,p,l),r=L(u,c,p,300),S=M(u,r.join("\n"),s,l);for(let e=0;e<S.length;e++)k(u,S[e].text,o+S[e].xMod,i+S[e].fontHeight*e,l,p)}}function x(a,e,n,t){var o=[];for(const u of checkLines(e)){let e="";for(const l of u.split(" ")){var i=""===e?l:e+" "+l,r=y(a,i,n);if(r.width<=t)e=i;else if(""!==e&&o.push(e),y(a,l,n).width<=t)e=l;else{var s=function(e,a,n,t){var o=[];let i="";for(const u of a){var r=i+u,s=y(e,r,n);i=s.width<=t?r:""!==i?(o.push(i),u):(o.push(u),"")}""!==i&&o.push(i);return o}(a,l,n,t);for(let e=0;e<s.length-1;e++)o.push(s[e]);e=s[s.length-1]||""}}""!==e&&o.push(e)}return o}function L(e,a,n,t){var o=y(e,"A",n).height,t=Math.max(1,Math.floor(t/o));return a.length<=t?a:((o=a.slice(0,t))[t-1]=function(e,a,n){let t=a;for(;0<t.length;){var o=t+"...";if(y(e,o,n).width<=width)return o;t=t.slice(0,-1)}return"..."}(e,o[t-1],n),o)}function p(e,a,n,t){let o=e.contents.fontSize,i=!0;for(;i;){var r=y(e,a,o);r.height<=t&&r.width<=n?i=!1:--o<w.autoSize&&(i=!1,o=e.contents.fontSize)}return o}function M(o,i,e,r){var s=e.toLowerCase();if(i.includes("\n")||i.includes("\\n")||i.includes("↵")){var u=v(i,["\n","↵","\\n"]);let a=0,n=0,t=0;var l=[];for(const d of u){var c=o.contents.fontSize,c=y(o,d,c);h(o,d)>a&&(a=h(o,d)),c.height>n&&(n=c.height)}switch(s){case"center":t=(r-a)/2;break;case"right":t=r-a}for(let e=0;e<u.length;e++)if(h(o,u[e])<a){var g=a-h(o,u[e]);switch(s){case"left":l.push({text:u[e],xMod:0+t,fontHeight:n});break;case"center":l.push({text:u[e],xMod:g/2+t,fontHeight:n});break;case"right":l.push({text:u[e],xMod:g+t,fontHeight:n})}}else l.push({text:u[e],xMod:t,fontHeight:n});return l}{var a=y(o,i,o.contents.fontSize);let e=0;switch(s){case"center":e=(r-a.width)/2;break;case"right":e=r-a.width}return[{text:i,xMod:e,fontHeight:a.height}]}}const S=Scene_Options.prototype.maxCommands,b=(Scene_Options.prototype.maxCommands=function(){return S.call(this)+(a.isActive?1:0)},Window_Options.prototype.makeCommandList),W=(Window_Options.prototype.makeCommandList=function(){b.call(this),a.isActive&&this.addLanguageOptions()},Window_Options.prototype.addLanguageOptions=function(){let e;e=i.runningDefault?a.defaultString:l({language:i.defaultLanguage,string:a.defaultString},a.transStrings,i.currentLanguage).string,this.addCommand(e,"wdTranslation")},Window_Options.prototype.initialize),A=(Window_Options.prototype.initialize=function(e){this.languagesArray=this.createLanguagesArray(),this.currentLanguageIndex=0,this.syncLanguageIndexWithCore(),W.call(this,e)},Window_Options.prototype.createLanguagesArray=function(){var e=[n];for(const a of t)e.push(a);return e},Window_Options.prototype.syncLanguageIndexWithCore=function(){(!this.languagesArray||this.languagesArray.length<=0)&&(this.languagesArray=this.createLanguagesArray());var e=i.currentLanguage,e=this.languagesArray.indexOf(e);this.currentLanguageIndex=0<=e?e:0},Window_Options.prototype.getLangStartIndex=function(){if(i.runningDefault)return 0;var a=i.currentLanguage;for(let e=0;e<this.languagesArray.length;e++)if(this.languagesArray[e]===a)return e;throw new Error("WD_Translation: Unable to find current language index in Options")},Window_Options.prototype.statusText),V=(Window_Options.prototype.statusText=function(e){return"wdTranslation"===this.commandSymbol(e)?(this.syncLanguageIndexWithCore(),{Abkhazian:"Аҧсуа",Afar:"Afaraf",Afrikaans:"Afrikaans",Akan:"Akan",Albanian:"Shqip",Amharic:"አማርኛ",Arabic:"العربية",Aragonese:"Aragonés",Armenian:"Հայերեն",Assamese:"অসমীয়া",Avaric:"Авар мацӀ",Avestan:"𐬐𐬁𐬀𐬀𐬎𐬀𐬌𐬀",Aymara:"Aymar aru",Azerbaijani:"Azərbaycan dili",Bambara:"Bamanankan",Bashkir:"Башҡорт теле",Basque:"Euskara",Belarusian:"Беларуская мова",Bengali:"বাংলা",Bislama:"Bislama",Bosnian:"Bosanski jezik",Breton:"Brezhoneg",Bulgarian:"Български език",Burmese:"မြန်မာဘာသာ",Catalan:"Català",Chamorro:"Chamoru",Chechen:"Нохчийн мотт",Chichewa:"ChiChewa",Chinese:"中文",ChurchSlavonic:"Словѣ́ньскъ ѩзыкъ",Chuvash:"Чăваш чĕлхи",Cornish:"Kernewek",Corsican:"Corsu",Cree:"ᓀᐦᐃᔭᐍᐏᐣ",Croatian:"Hrvatski jezik",Czech:"Čeština",Danish:"Dansk",Divehi:"ދިވެހި",Dutch:"Nederlands",Dzongkha:"རྫོང་ཁ",English:"English",Esperanto:"Esperanto",Estonian:"Eesti keel",Ewe:"Eʋegbe",Faroese:"Føroyskt",Fijian:"Na Vosa Vakaviti",Finnish:"Suomi",French:"Français",WesternFrisian:"Frysk",Fulah:"Fulfulde",GaelicScottish:"Gàidhlig",Galician:"Galego",Ganda:"Luganda",Georgian:"ქართული",German:"Deutsch",Greek:"Ελληνικά",Kalaallisut:"Kalaallisut",Guarani:"Avañe'ẽ",Gujarati:"ગુજરાતી",Haitian:"Kreyòl ayisyen",Hausa:"Hausa",Hebrew:"עברית",Herero:"Otjiherero",Hindi:"हिन्दी",HiriMotu:"Hiri Motu",Hungarian:"Magyar",Icelandic:"Íslenska",Ido:"Ido",Igbo:"Igbo",Indonesian:"Bahasa Indonesia",Interlingua:"Interlingua",Interlingue:"Interlingue",Inuktitut:"ᐃᓄᒃᑎᑐᑦ",Inupiaq:"Iñupiaq",Irish:"Gaeilge",Italian:"Italiano",Japanese:"日本語",Javanese:"Basa Jawa",Kannada:"ಕನ್ನಡ",Kanuri:"Kanuri",Kashmiri:"कश्मीरी",Kazakh:"Қазақ тілі",Khmer:"ខ្មែរ",Kikuyu:"Gikuyu",Kinyarwanda:"Ikinyarwanda",Kirghiz:"Кыргыз тили",Komi:"коми кыв",Kongo:"Kikongo",Korean:"한국어",Kuanyama:"Kuanyama",Kurdish:"Kurdî",Lao:"ລາວ",Latin:"Latina",Latvian:"Latviešu valoda",Limburgan:"Limburgs",Lingala:"Lingála",Lithuanian:"Lietuvių kalba",LubaKatanga:"Tshiluba",Luxembourgish:"Lëtzebuergesch",Macedonian:"Македонски јазик",Malagasy:"Malagasy",Malay:"Bahasa Melayu",Malayalam:"മലയാളം",Maltese:"Malti",Manx:"Gaelg",Maori:"Māori",Marathi:"मराठी",Marshallese:"Kajin M̧ajeļ",Mongolian:"Монгол хэл",Nauru:"Naoero",Navajo:"Diné bizaad",NorthNdebele:"IsiNdebele",SouthNdebele:"isiNdebele",Ndonga:"Owambo",Nepali:"नेपाली",Norwegian:"Norsk","NorwegianBokmål":"Norsk bokmål",NorwegianNynorsk:"Norsk nynorsk",Occitan:"Occitan",Ojibwa:"ᐊᓂᔑᓈᐯᒧᐎᓀᒡ",Oriya:"ଓଡ଼ିଆ",Oromo:"Afaan Oromoo",Ossetian:"Ирон æвзаг",Pali:"पाऴि",Pashto:"پښتو",Persian:"فارسی",Polish:"Polski",Portuguese:"Português",Punjabi:"ਪੰਜਾਬੀ",Quechua:"Runa Simi",Romanian:"Română",Romansh:"Rumantsch",Rundi:"Ikirundi",Russian:"Русский язык",NorthernSami:"Davvi sámegiella",Samoan:"Gagana Samoa",Sango:"Sängö",Sanskrit:"संस्कृतम्",Sardinian:"Sardu",Serbian:"Српски језик",Shona:"ChiShona",Sindhi:"سنڌي",Sinhala:"සිංහල",Slovak:"Slovenčina",Slovenian:"Slovenščina",Somali:"Soomaali",SouthernSotho:"Sesotho sa Leboa",Spanish:"Español",Sundanese:"Basa Sunda",Swahili:"Kiswahili",Swati:"SiSwati",Swedish:"Svenska",Tagalog:"Tagalog",Tahitian:"Reo Tahiti",Tajik:"Тоҷикӣ",Tamil:"தமிழ்",Tatar:"татарча",Telugu:"తెలుగు",Thai:"ไทย",Tibetan:"བོད་ཡིག",Tigrinya:"ትግርኛ",Tonga:"faka Tonga",Tsonga:"Xitsonga",Tswana:"Setswana",Turkish:"Türkçe",Turkmen:"Türkmençe",Twi:"Twi",Uighur:"ئۇيغۇرچە",Ukrainian:"Українська мова",Urdu:"اردو",Uzbek:"Oʻzbek tili",Venda:"Tshivenda",Vietnamese:"Tiếng Việt","Volapük":"Volapük",Walloon:"Walon",Welsh:"Cymraeg",Wolof:"Wollof",Xhosa:"IsiXhosa",SichuanYi:"ꆈꌠꒉ",Yiddish:"ייִדיש",Yoruba:"Yorùbá",Zhuang:"Saɯcueŋƅ",Zulu:"IsiZulu"}[this.languagesArray[this.currentLanguageIndex]]):A.call(this,e)},Window_Options.prototype.processOk),F=(Window_Options.prototype.processOk=function(){var e=this.index();"wdTranslation"===this.commandSymbol(e)?this.newTranslationChoice(!0):V.call(this)},Window_Options.prototype.cursorRight),O=(Window_Options.prototype.cursorRight=function(){var e=this.index();"wdTranslation"===this.commandSymbol(e)?this.newTranslationChoice(!0):F.call(this)},Window_Options.prototype.cursorLeft),T=(Window_Options.prototype.cursorLeft=function(){var e=this.index();"wdTranslation"===this.commandSymbol(e)?this.newTranslationChoice(!1):O.call(this)},Window_Options.prototype.newTranslationChoice=function(e){let a=e?this.currentLanguageIndex+1:this.currentLanguageIndex-1;e?a>=this.languagesArray.length&&(a=0):a<0&&(a=this.languagesArray.length-1),this.currentLanguageIndex=a;var e=this.languagesArray[this.currentLanguageIndex];e=e,i.applyUserSelectedLanguage(e),this.refresh()},Game_System.prototype.getCoreLangSaves=function(){return this._coreLanguageInformations||null},Game_System.prototype.saveCoreLangSaves=function(e){e=JsonEx.makeDeepCopy(e);this._coreLanguageInformations=e},ConfigManager.wdCurrentLanguage=null,ConfigManager.wdLanguageForced=!1,ConfigManager.makeData),_=(ConfigManager.makeData=function(){var e=T.call(this);return e.wdCurrentLanguage=this.wdCurrentLanguage,e.wdLanguageForced=this.wdLanguageForced,e},ConfigManager.applyData);ConfigManager.applyData=function(e){_.call(this,e),this.wdCurrentLanguage=e.wdCurrentLanguage??null,this.wdLanguageForced=e.wdLanguageForced??!1,window.WD_Interplugin_Core&&window.WD_Interplugin_Core.bootLanguageCenter&&window.WD_Interplugin_Core.bootLanguageCenter()},PluginManager.registerCommand("WD_Core","forceLanguage",function(e){e=JSON.parse(e.forceLanguage).language;if(!e)throw new Error("WD_Core: Force new language command has a null or undefined language ("+e+")!");i.applyNewLanguage(e)}),window.WD_Interplugin_Core={bootLanguageCenter:()=>i.boot(),translateData:r,forceLanguage:l,textExAligner:d,improvedTextExAligner:C,realTextDimensions:y,drawTextExSize:k,coreVersion:function(){return o},requiredCoreVersion:function(e){return o.major>e.major||!(o.major<e.major)&&(o.minor>e.minor||!(o.minor<e.minor)&&(o.hotfix||0)>=(e.hotfix||0))},autoTextSize:p,autoWrap:function(e,a,n,t,o,i,r,s){m(e,a,n,t,o,i,r,s)},semiWrap:f,requireDefaultLanguage:function(){return n},requireCurrentLanguage:function(){return{isForced:i.forcedLanguage.isForced,language:i.forcedLanguage.isForced?i.forcedLanguage.forcedLanguage:i.defaultLanguage}},resolveLanguage:c,legacyTranslationForceLanguage:function(e){i.applyNewLanguage(e)}}}();

const wdExtraVariableInterPlugin_addPIXIFilters = PluginManager.parameters('WD_Core')["addPixiFlag"] === "true";

if (wdExtraVariableInterPlugin_addPIXIFilters) {
    /*!
    * pixi-filters - v3.1.0
    * Compiled Wed, 11 Mar 2020 20:38:18 UTC
    *
    * pixi-filters is licensed under the MIT License.
    * http://www.opensource.org/licenses/mit-license
    */
    var __filters=function(e,t,n,r,o,i,l,s){"use strict";var a="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",u="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n",c=function(e){function t(t){e.call(this,a,u),Object.assign(this,{gamma:1,saturation:1,contrast:1,brightness:1,red:1,green:1,blue:1,alpha:1},t)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.apply=function(e,t,n,r){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,n,r)},t}(t.Filter),f=a,h="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}",p="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n",d=function(e){function t(t,r,o){void 0===t&&(t=4),void 0===r&&(r=3),void 0===o&&(o=!1),e.call(this,f,o?p:h),this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new n.Point,this.pixelSize=1,this._clamp=o,this._kernels=null,Array.isArray(t)?this.kernels=t:(this._blur=t,this.quality=r)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={kernels:{configurable:!0},clamp:{configurable:!0},pixelSize:{configurable:!0},quality:{configurable:!0},blur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){var o,i=this.pixelSize.x/t._frame.width,l=this.pixelSize.y/t._frame.height;if(1===this._quality||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,t,n,r);else{for(var s,a=e.getFilterTexture(),u=t,c=a,f=this._quality-1,h=0;h<f;h++)o=this._kernels[h]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,c,1),s=u,u=c,c=s;o=this._kernels[f]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,n,r),e.returnFilterTexture(a)}},t.prototype._generateKernels=function(){var e=this._blur,t=this._quality,n=[e];if(e>0)for(var r=e,o=e/t,i=1;i<t;i++)r-=o,n.push(r);this._kernels=n},r.kernels.get=function(){return this._kernels},r.kernels.set=function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},r.clamp.get=function(){return this._clamp},r.pixelSize.set=function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof n.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},r.pixelSize.get=function(){return this._pixelSize},r.quality.get=function(){return this._quality},r.quality.set=function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},r.blur.get=function(){return this._blur},r.blur.set=function(e){this._blur=e,this._generateKernels()},Object.defineProperties(t.prototype,r),t}(t.Filter),m=a,g="\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n",v=function(e){function t(t){void 0===t&&(t=.5),e.call(this,m,g),this.threshold=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={threshold:{configurable:!0}};return n.threshold.get=function(){return this.uniforms.threshold},n.threshold.set=function(e){this.uniforms.threshold=e},Object.defineProperties(t.prototype,n),t}(t.Filter),x="uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n",y=function(e){function t(t){e.call(this,m,x),"number"==typeof t&&(t={threshold:t}),t=Object.assign({threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:r.settings.RESOLUTION},t),this.bloomScale=t.bloomScale,this.brightness=t.brightness;var n=t.kernels,o=t.blur,i=t.quality,l=t.pixelSize,s=t.resolution;this._extractFilter=new v(t.threshold),this._extractFilter.resolution=s,this._blurFilter=n?new d(n):new d(o,i),this.pixelSize=l,this.resolution=s}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={resolution:{configurable:!0},threshold:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return t.prototype.apply=function(e,t,n,r,o){var i=e.getFilterTexture();this._extractFilter.apply(e,t,i,1,o);var l=e.getFilterTexture();this._blurFilter.apply(e,i,l,1,o),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=l,e.applyFilter(this,t,n,r),e.returnFilterTexture(l),e.returnFilterTexture(i)},n.resolution.get=function(){return this._resolution},n.resolution.set=function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},n.threshold.get=function(){return this._extractFilter.threshold},n.threshold.set=function(e){this._extractFilter.threshold=e},n.kernels.get=function(){return this._blurFilter.kernels},n.kernels.set=function(e){this._blurFilter.kernels=e},n.blur.get=function(){return this._blurFilter.blur},n.blur.set=function(e){this._blurFilter.blur=e},n.quality.get=function(){return this._blurFilter.quality},n.quality.set=function(e){this._blurFilter.quality=e},n.pixelSize.get=function(){return this._blurFilter.pixelSize},n.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(t.prototype,n),t}(t.Filter),_=a,b="varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n",C=function(e){function t(t){void 0===t&&(t=8),e.call(this,_,b),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.pixelSize},n.size.set=function(e){this.uniforms.pixelSize=e},Object.defineProperties(t.prototype,n),t}(t.Filter),S=a,F="precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n",z=function(e){function t(t){void 0===t&&(t={}),e.call(this,S,F),this.uniforms.lightColor=new Float32Array(3),this.uniforms.shadowColor=new Float32Array(3),t=Object.assign({rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),this.rotation=t.rotation,this.thickness=t.thickness,this.lightColor=t.lightColor,this.lightAlpha=t.lightAlpha,this.shadowColor=t.shadowColor,this.shadowAlpha=t.shadowAlpha}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={rotation:{configurable:!0},thickness:{configurable:!0},lightColor:{configurable:!0},lightAlpha:{configurable:!0},shadowColor:{configurable:!0},shadowAlpha:{configurable:!0}};return t.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},r.rotation.get=function(){return this._angle/n.DEG_TO_RAD},r.rotation.set=function(e){this._angle=e*n.DEG_TO_RAD,this._updateTransform()},r.thickness.get=function(){return this._thickness},r.thickness.set=function(e){this._thickness=e,this._updateTransform()},r.lightColor.get=function(){return o.rgb2hex(this.uniforms.lightColor)},r.lightColor.set=function(e){o.hex2rgb(e,this.uniforms.lightColor)},r.lightAlpha.get=function(){return this.uniforms.lightAlpha},r.lightAlpha.set=function(e){this.uniforms.lightAlpha=e},r.shadowColor.get=function(){return o.rgb2hex(this.uniforms.shadowColor)},r.shadowColor.set=function(e){o.hex2rgb(e,this.uniforms.shadowColor)},r.shadowAlpha.get=function(){return this.uniforms.shadowAlpha},r.shadowAlpha.set=function(e){this.uniforms.shadowAlpha=e},Object.defineProperties(t.prototype,r),t}(t.Filter),A=function(e){function t(t,o,a,u){var c,f;void 0===t&&(t=2),void 0===o&&(o=4),void 0===a&&(a=r.settings.RESOLUTION),void 0===u&&(u=5),e.call(this),"number"==typeof t?(c=t,f=t):t instanceof n.Point?(c=t.x,f=t.y):Array.isArray(t)&&(c=t[0],f=t[1]),this.blurXFilter=new s.BlurFilterPass(!0,c,o,a,u),this.blurYFilter=new s.BlurFilterPass(!1,f,o,a,u),this.blurYFilter.blendMode=i.BLEND_MODES.SCREEN,this.defaultFilter=new l.AlphaFilter}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var o={blur:{configurable:!0},blurX:{configurable:!0},blurY:{configurable:!0}};return t.prototype.apply=function(e,t,n){var r=e.getFilterTexture(!0);this.defaultFilter.apply(e,t,n),this.blurXFilter.apply(e,t,r),this.blurYFilter.apply(e,r,n),e.returnFilterTexture(r)},o.blur.get=function(){return this.blurXFilter.blur},o.blur.set=function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},o.blurX.get=function(){return this.blurXFilter.blur},o.blurX.set=function(e){this.blurXFilter.blur=e},o.blurY.get=function(){return this.blurYFilter.blur},o.blurY.set=function(e){this.blurYFilter.blur=e},Object.defineProperties(t.prototype,o),t}(t.Filter),w=a,T="uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n",O=function(e){function t(t){if(e.call(this,w,T),"object"!=typeof t){var n=arguments[0],r=arguments[1],o=arguments[2];t={},void 0!==n&&(t.center=n),void 0!==r&&(t.radius=r),void 0!==o&&(t.strength=o)}this.uniforms.dimensions=new Float32Array(2),Object.assign(this,{center:[.5,.5],radius:100,strength:1},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={radius:{configurable:!0},strength:{configurable:!0},center:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame.width,this.uniforms.dimensions[1]=t.filterFrame.height,e.applyFilter(this,t,n,r)},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},Object.defineProperties(t.prototype,n),t}(t.Filter),D=a,P="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}",M=function(e){function n(t,n,r){void 0===n&&(n=!1),void 0===r&&(r=1),e.call(this,D,P),this._size=0,this._sliceSize=0,this._slicePixelSize=0,this._sliceInnerSize=0,this._scaleMode=null,this._nearest=!1,this.nearest=n,this.mix=r,this.colorMap=t}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={colorSize:{configurable:!0},colorMap:{configurable:!0},nearest:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms._mix=this.mix,e.applyFilter(this,t,n,r)},r.colorSize.get=function(){return this._size},r.colorMap.get=function(){return this._colorMap},r.colorMap.set=function(e){e instanceof t.Texture||(e=t.Texture.from(e)),e&&e.baseTexture&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e},r.nearest.get=function(){return this._nearest},r.nearest.set=function(e){this._nearest=e,this._scaleMode=e?i.SCALE_MODES.NEAREST:i.SCALE_MODES.LINEAR;var t=this._colorMap;t&&t.baseTexture&&(t.baseTexture._glTextures={},t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=!1,t._updateID++,t.baseTexture.emit("update",t.baseTexture))},n.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},n.prototype.destroy=function(t){this._colorMap&&this._colorMap.destroy(t),e.prototype.destroy.call(this)},Object.defineProperties(n.prototype,r),n}(t.Filter),R=a,k="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorOverlay = color * currentColor.a;\n    gl_FragColor = vec4(colorOverlay.r, colorOverlay.g, colorOverlay.b, currentColor.a);\n}\n",j=function(e){function t(t){void 0===t&&(t=0),e.call(this,R,k),this.uniforms.color=new Float32Array(3),this.color=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={color:{configurable:!0}};return n.color.set=function(e){var t=this.uniforms.color;"number"==typeof e?(o.hex2rgb(e,t),this._color=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._color=o.rgb2hex(t))},n.color.get=function(){return this._color},Object.defineProperties(t.prototype,n),t}(t.Filter),E=a,L="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n",I=function(e){function t(t,n,r){void 0===t&&(t=16711680),void 0===n&&(n=0),void 0===r&&(r=.4),e.call(this,E,L),this.uniforms.originalColor=new Float32Array(3),this.uniforms.newColor=new Float32Array(3),this.originalColor=t,this.newColor=n,this.epsilon=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={originalColor:{configurable:!0},newColor:{configurable:!0},epsilon:{configurable:!0}};return n.originalColor.set=function(e){var t=this.uniforms.originalColor;"number"==typeof e?(o.hex2rgb(e,t),this._originalColor=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._originalColor=o.rgb2hex(t))},n.originalColor.get=function(){return this._originalColor},n.newColor.set=function(e){var t=this.uniforms.newColor;"number"==typeof e?(o.hex2rgb(e,t),this._newColor=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._newColor=o.rgb2hex(t))},n.newColor.get=function(){return this._newColor},n.epsilon.set=function(e){this.uniforms.epsilon=e},n.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(t.prototype,n),t}(t.Filter),X=a,B="precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",N=function(e){function t(t,n,r){void 0===n&&(n=200),void 0===r&&(r=200),e.call(this,X,B),this.uniforms.texelSize=new Float32Array(2),this.uniforms.matrix=new Float32Array(9),void 0!==t&&(this.matrix=t),this.width=n,this.height=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={matrix:{configurable:!0},width:{configurable:!0},height:{configurable:!0}};return n.matrix.get=function(){return this.uniforms.matrix},n.matrix.set=function(e){var t=this;e.forEach(function(e,n){return t.uniforms.matrix[n]=e})},n.width.get=function(){return 1/this.uniforms.texelSize[0]},n.width.set=function(e){this.uniforms.texelSize[0]=1/e},n.height.get=function(){return 1/this.uniforms.texelSize[1]},n.height.set=function(e){this.uniforms.texelSize[1]=1/e},Object.defineProperties(t.prototype,n),t}(t.Filter),G=a,q="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n",W=function(e){function t(){e.call(this,G,q)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(t.Filter),K=a,Y="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    vec2 dir = vec2(coord - vec2(0.5, 0.5));\n\n    float _c = curvature > 0. ? curvature : 1.;\n    float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n    vec2 uv = dir * k;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0) {\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n",Z=function(e){function t(t){e.call(this,K,Y),this.uniforms.dimensions=new Float32Array(2),this.time=0,this.seed=0,Object.assign(this,{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={curvature:{configurable:!0},lineWidth:{configurable:!0},lineContrast:{configurable:!0},verticalLine:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame.width,this.uniforms.dimensions[1]=t.filterFrame.height,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.curvature.set=function(e){this.uniforms.curvature=e},n.curvature.get=function(){return this.uniforms.curvature},n.lineWidth.set=function(e){this.uniforms.lineWidth=e},n.lineWidth.get=function(){return this.uniforms.lineWidth},n.lineContrast.set=function(e){this.uniforms.lineContrast=e},n.lineContrast.get=function(){return this.uniforms.lineContrast},n.verticalLine.set=function(e){this.uniforms.verticalLine=e},n.verticalLine.get=function(){return this.uniforms.verticalLine},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),Q=a,U="precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",V=function(e){function t(t,n){void 0===t&&(t=1),void 0===n&&(n=5),e.call(this,Q,U),this.scale=t,this.angle=n}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={scale:{configurable:!0},angle:{configurable:!0}};return n.scale.get=function(){return this.uniforms.scale},n.scale.set=function(e){this.uniforms.scale=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),H=a,$="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}",J=function(e){function t(t){t&&t.constructor!==Object&&(console.warn("DropShadowFilter now uses options instead of (rotation, distance, blur, color, alpha)"),t={rotation:t},void 0!==arguments[1]&&(t.distance=arguments[1]),void 0!==arguments[2]&&(t.blur=arguments[2]),void 0!==arguments[3]&&(t.color=arguments[3]),void 0!==arguments[4]&&(t.alpha=arguments[4])),t=Object.assign({rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:r.settings.RESOLUTION},t),e.call(this);var o=t.kernels,i=t.blur,l=t.quality,s=t.pixelSize,a=t.resolution;this._tintFilter=new e(H,$),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=new n.Point,this._tintFilter.resolution=a,this._blurFilter=o?new d(o):new d(i,l),this.pixelSize=s,this.resolution=a;var u=t.shadowOnly,c=t.rotation,f=t.distance,h=t.alpha,p=t.color;this.shadowOnly=u,this.rotation=c,this.distance=f,this.alpha=h,this.color=p,this._updatePadding()}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={resolution:{configurable:!0},distance:{configurable:!0},rotation:{configurable:!0},alpha:{configurable:!0},color:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){var o=e.getFilterTexture();this._tintFilter.apply(e,t,o,1),this._blurFilter.apply(e,o,n,r),!0!==this.shadowOnly&&e.applyFilter(this,t,n,0),e.returnFilterTexture(o)},t.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},t.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},i.resolution.get=function(){return this._resolution},i.resolution.set=function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},i.distance.get=function(){return this._distance},i.distance.set=function(e){this._distance=e,this._updatePadding(),this._updateShift()},i.rotation.get=function(){return this.angle/n.DEG_TO_RAD},i.rotation.set=function(e){this.angle=e*n.DEG_TO_RAD,this._updateShift()},i.alpha.get=function(){return this._tintFilter.uniforms.alpha},i.alpha.set=function(e){this._tintFilter.uniforms.alpha=e},i.color.get=function(){return o.rgb2hex(this._tintFilter.uniforms.color)},i.color.set=function(e){o.hex2rgb(e,this._tintFilter.uniforms.color)},i.kernels.get=function(){return this._blurFilter.kernels},i.kernels.set=function(e){this._blurFilter.kernels=e},i.blur.get=function(){return this._blurFilter.blur},i.blur.set=function(e){this._blurFilter.blur=e,this._updatePadding()},i.quality.get=function(){return this._blurFilter.quality},i.quality.set=function(e){this._blurFilter.quality=e},i.pixelSize.get=function(){return this._blurFilter.pixelSize},i.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(t.prototype,i),t}(t.Filter),ee=a,te="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n",ne=function(e){function t(t){void 0===t&&(t=5),e.call(this,ee,te),this.strength=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={strength:{configurable:!0}};return n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},Object.defineProperties(t.prototype,n),t}(t.Filter),re=a,oe="// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n",ie=function(e){function r(n){void 0===n&&(n={}),e.call(this,re,oe),this.uniforms.dimensions=new Float32Array(2),n=Object.assign({slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},n),this.direction=n.direction,this.red=n.red,this.green=n.green,this.blue=n.blue,this.offset=n.offset,this.fillMode=n.fillMode,this.average=n.average,this.seed=n.seed,this.minSize=n.minSize,this.sampleSize=n.sampleSize,this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=t.Texture.from(this._canvas,{scaleMode:i.SCALE_MODES.NEAREST}),this._slices=0,this.slices=n.slices}e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r;var o={sizes:{configurable:!0},offsets:{configurable:!0},slices:{configurable:!0},direction:{configurable:!0},red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return r.prototype.apply=function(e,t,n,r){var o=t.filterFrame.width,i=t.filterFrame.height;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=i,this.uniforms.aspect=i/o,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,n,r)},r.prototype._randomizeSizes=function(){var e=this._sizes,t=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var o=this._slices,i=1,l=0;l<t;l++){var s=i/(o-l),a=Math.max(s*(1-.6*Math.random()),r);e[l]=a,i-=a}e[t]=i}else{for(var u=1,c=Math.sqrt(1/this._slices),f=0;f<t;f++){var h=Math.max(c*u*Math.random(),r);e[f]=h,u-=h}e[t]=u}this.shuffle()},r.prototype.shuffle=function(){for(var e=this._sizes,t=this._slices-1;t>0;t--){var n=Math.random()*t>>0,r=e[t];e[t]=e[n],e[n]=r}},r.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},r.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},r.prototype.redraw=function(){var e,t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);for(var o=0,i=0;i<this._slices;i++){e=Math.floor(256*this._offsets[i]);var l=this._sizes[i]*t,s=e>0?e:0,a=e<0?-e:0;r.fillStyle="rgba("+s+", "+a+", 0, 1)",r.fillRect(0,o>>0,t,l+1>>0),o+=l}n.baseTexture.update(),this.uniforms.displacementMap=n},o.sizes.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._sizes[n]=e[n]},o.sizes.get=function(){return this._sizes},o.offsets.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._offsets[n]=e[n]},o.offsets.get=function(){return this._offsets},o.slices.get=function(){return this._slices},o.slices.set=function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},o.direction.get=function(){return this._direction},o.direction.set=function(e){if(this._direction!==e){this._direction=e;var t=e*n.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(t),this.uniforms.cosDir=Math.cos(t)}},o.red.get=function(){return this.uniforms.red},o.red.set=function(e){this.uniforms.red=e},o.green.get=function(){return this.uniforms.green},o.green.set=function(e){this.uniforms.green=e},o.blue.get=function(){return this.uniforms.blue},o.blue.set=function(e){this.uniforms.blue=e},r.prototype.destroy=function(){this.texture.destroy(!0),this.texture=null,this._canvas=null,this.red=null,this.green=null,this.blue=null,this._sizes=null,this._offsets=null},Object.defineProperties(r.prototype,o),r}(t.Filter);ie.TRANSPARENT=0,ie.ORIGINAL=1,ie.LOOP=2,ie.CLAMP=3,ie.MIRROR=4;var le=a,se="varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;\n    \n    if (knockout) {\n      float resultAlpha = outerGlowAlpha + innerGlowAlpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n",ae=function(e){function t(n){var r=Object.assign({},t.defaults,n),o=r.distance,i=r.outerStrength,l=r.innerStrength,s=r.color,a=r.knockout,u=r.quality;o=Math.round(o),e.call(this,le,se.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/u/o).toFixed(7)).replace(/__DIST__/gi,o.toFixed(0)+".0")),this.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(this,{color:s,outerStrength:i,innerStrength:l,padding:o,knockout:a})}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={color:{configurable:!0},outerStrength:{configurable:!0},innerStrength:{configurable:!0},knockout:{configurable:!0}};return n.color.get=function(){return o.rgb2hex(this.uniforms.glowColor)},n.color.set=function(e){o.hex2rgb(e,this.uniforms.glowColor)},n.outerStrength.get=function(){return this.uniforms.outerStrength},n.outerStrength.set=function(e){this.uniforms.outerStrength=e},n.innerStrength.get=function(){return this.uniforms.innerStrength},n.innerStrength.set=function(e){this.uniforms.innerStrength=e},n.knockout.get=function(){return this.uniforms.knockout},n.knockout.set=function(e){this.uniforms.knockout=e},Object.defineProperties(t.prototype,n),t}(t.Filter);ae.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1};var ue=a,ce="vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n",fe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n}\n",he=function(e){function t(t){e.call(this,ue,fe.replace("${perlin}",ce)),this.uniforms.dimensions=new Float32Array(2),"number"==typeof t&&(console.warn("GodrayFilter now uses options instead of (angle, gain, lacunarity, time)"),t={angle:t},void 0!==arguments[1]&&(t.gain=arguments[1]),void 0!==arguments[2]&&(t.lacunarity=arguments[2]),void 0!==arguments[3]&&(t.time=arguments[3])),t=Object.assign({angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0]},t),this._angleLight=new n.Point,this.angle=t.angle,this.gain=t.gain,this.lacunarity=t.lacunarity,this.parallel=t.parallel,this.center=t.center,this.time=t.time}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={angle:{configurable:!0},gain:{configurable:!0},lacunarity:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){var o=t.filterFrame,i=o.width,l=o.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},r.angle.get=function(){return this._angle},r.angle.set=function(e){this._angle=e;var t=e*n.DEG_TO_RAD;this._angleLight.x=Math.cos(t),this._angleLight.y=Math.sin(t)},r.gain.get=function(){return this.uniforms.gain},r.gain.set=function(e){this.uniforms.gain=e},r.lacunarity.get=function(){return this.uniforms.lacunarity},r.lacunarity.set=function(e){this.uniforms.lacunarity=e},Object.defineProperties(t.prototype,r),t}(t.Filter),pe=a,de="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n",me=function(e){function t(t,r,o){void 0===t&&(t=[0,0]),void 0===r&&(r=5),void 0===o&&(o=0),e.call(this,pe,de),this.uniforms.uVelocity=new Float32Array(2),this._velocity=new n.ObservablePoint(this.velocityChanged,this),this.velocity=t,this.kernelSize=r,this.offset=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={velocity:{configurable:!0},offset:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){var o=this.velocity,i=o.x,l=o.y;this.uniforms.uKernelSize=0!==i||0!==l?this.kernelSize:0,e.applyFilter(this,t,n,r)},r.velocity.set=function(e){Array.isArray(e)?this._velocity.set(e[0],e[1]):(e instanceof n.Point||e instanceof n.ObservablePoint)&&this._velocity.copyFrom(e)},r.velocity.get=function(){return this._velocity},t.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y},r.offset.set=function(e){this.uniforms.uOffset=e},r.offset.get=function(){return this.uniforms.uOffset},Object.defineProperties(t.prototype,r),t}(t.Filter),ge=a,ve="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n",xe=function(e){function t(t,n,r){void 0===n&&(n=.05),void 0===r&&(r=null),r=r||t.length,e.call(this,ge,ve.replace(/%maxColors%/g,r)),this.epsilon=n,this._maxColors=r,this._replacements=null,this.uniforms.originalColors=new Float32Array(3*r),this.uniforms.targetColors=new Float32Array(3*r),this.replacements=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={replacements:{configurable:!0},maxColors:{configurable:!0},epsilon:{configurable:!0}};return n.replacements.set=function(e){var t=this.uniforms.originalColors,n=this.uniforms.targetColors,r=e.length;if(r>this._maxColors)throw"Length of replacements ("+r+") exceeds the maximum colors length ("+this._maxColors+")";t[3*r]=-1;for(var i=0;i<r;i++){var l=e[i],s=l[0];"number"==typeof s?s=o.hex2rgb(s):l[0]=o.rgb2hex(s),t[3*i]=s[0],t[3*i+1]=s[1],t[3*i+2]=s[2];var a=l[1];"number"==typeof a?a=o.hex2rgb(a):l[1]=o.rgb2hex(a),n[3*i]=a[0],n[3*i+1]=a[1],n[3*i+2]=a[2]}this._replacements=e},n.replacements.get=function(){return this._replacements},t.prototype.refresh=function(){this.replacements=this._replacements},n.maxColors.get=function(){return this._maxColors},n.epsilon.set=function(e){this.uniforms.epsilon=e},n.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(t.prototype,n),t}(t.Filter),ye=a,_e="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n",be=function(e){function t(t,n){void 0===n&&(n=0),e.call(this,ye,_e),this.uniforms.dimensions=new Float32Array(2),"number"==typeof t?(this.seed=t,t=null):this.seed=n,Object.assign(this,{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={sepia:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},scratch:{configurable:!0},scratchDensity:{configurable:!0},scratchWidth:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame.width,this.uniforms.dimensions[1]=t.filterFrame.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,n,r)},n.sepia.set=function(e){this.uniforms.sepia=e},n.sepia.get=function(){return this.uniforms.sepia},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.scratch.set=function(e){this.uniforms.scratch=e},n.scratch.get=function(){return this.uniforms.scratch},n.scratchDensity.set=function(e){this.uniforms.scratchDensity=e},n.scratchDensity.get=function(){return this.uniforms.scratchDensity},n.scratchWidth.set=function(e){this.uniforms.scratchWidth=e},n.scratchWidth.get=function(){return this.uniforms.scratchWidth},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),Ce=a,Se="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n",Fe=function(e){function t(n,r,o){void 0===n&&(n=1),void 0===r&&(r=0),void 0===o&&(o=.1);var i=Math.max(o*t.MAX_SAMPLES,t.MIN_SAMPLES),l=(2*Math.PI/i).toFixed(7);e.call(this,Ce,Se.replace(/\$\{angleStep\}/,l)),this.uniforms.thickness=new Float32Array([0,0]),this.thickness=n,this.uniforms.outlineColor=new Float32Array([0,0,0,1]),this.color=r,this.quality=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={color:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.thickness[0]=this.thickness/t._frame.width,this.uniforms.thickness[1]=this.thickness/t._frame.height,e.applyFilter(this,t,n,r)},n.color.get=function(){return o.rgb2hex(this.uniforms.outlineColor)},n.color.set=function(e){o.hex2rgb(e,this.uniforms.outlineColor)},Object.defineProperties(t.prototype,n),t}(t.Filter);Fe.MIN_SAMPLES=1,Fe.MAX_SAMPLES=100;var ze=a,Ae="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n",we=function(e){function t(t){void 0===t&&(t=10),e.call(this,ze,Ae),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.size},n.size.set=function(e){"number"==typeof e&&(e=[e,e]),this.uniforms.size=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Te=a,Oe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n",De=function(e){function t(t,n,r,o){void 0===t&&(t=0),void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=-1),e.call(this,Te,Oe),this._angle=0,this.angle=t,this.center=n,this.kernelSize=r,this.radius=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={angle:{configurable:!0},center:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.uKernelSize=0!==this._angle?this.kernelSize:0,e.applyFilter(this,t,n,r)},n.angle.set=function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},n.angle.get=function(){return this._angle},n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Pe=a,Me="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n",Re=function(e){function t(t){e.call(this,Pe,Me),this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={mirror:{configurable:!0},boundary:{configurable:!0},amplitude:{configurable:!0},waveLength:{configurable:!0},alpha:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame.width,this.uniforms.dimensions[1]=t.filterFrame.height,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.mirror.set=function(e){this.uniforms.mirror=e},n.mirror.get=function(){return this.uniforms.mirror},n.boundary.set=function(e){this.uniforms.boundary=e},n.boundary.get=function(){return this.uniforms.boundary},n.amplitude.set=function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},n.amplitude.get=function(){return this.uniforms.amplitude},n.waveLength.set=function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},n.waveLength.get=function(){return this.uniforms.waveLength},n.alpha.set=function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},n.alpha.get=function(){return this.uniforms.alpha},Object.defineProperties(t.prototype,n),t}(t.Filter),ke=a,je="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",Ee=function(e){function t(t,n,r){void 0===t&&(t=[-10,0]),void 0===n&&(n=[0,10]),void 0===r&&(r=[0,0]),e.call(this,ke,je),this.red=t,this.green=n,this.blue=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return n.red.get=function(){return this.uniforms.red},n.red.set=function(e){this.uniforms.red=e},n.green.get=function(){return this.uniforms.green},n.green.set=function(e){this.uniforms.green=e},n.blue.get=function(){return this.uniforms.blue},n.blue.set=function(e){this.uniforms.blue=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Le=a,Ie="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n",Xe=function(e){function t(t,n,r){void 0===t&&(t=[0,0]),void 0===n&&(n={}),void 0===r&&(r=0),e.call(this,Le,Ie),this.center=t,Array.isArray(n)&&(console.warn("Deprecated Warning: ShockwaveFilter params Array has been changed to options Object."),n={}),n=Object.assign({amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},n),this.amplitude=n.amplitude,this.wavelength=n.wavelength,this.brightness=n.brightness,this.speed=n.speed,this.radius=n.radius,this.time=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},amplitude:{configurable:!0},wavelength:{configurable:!0},brightness:{configurable:!0},speed:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},n.amplitude.get=function(){return this.uniforms.amplitude},n.amplitude.set=function(e){this.uniforms.amplitude=e},n.wavelength.get=function(){return this.uniforms.wavelength},n.wavelength.set=function(e){this.uniforms.wavelength=e},n.brightness.get=function(){return this.uniforms.brightness},n.brightness.set=function(e){this.uniforms.brightness=e},n.speed.get=function(){return this.uniforms.speed},n.speed.set=function(e){this.uniforms.speed=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Be=a,Ne="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n",Ge=function(e){function t(t,n,r){void 0===n&&(n=0),void 0===r&&(r=1),e.call(this,Be,Ne),this.uniforms.dimensions=new Float32Array(2),this.uniforms.ambientColor=new Float32Array([0,0,0,r]),this.texture=t,this.color=n}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={texture:{configurable:!0},color:{configurable:!0},alpha:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame.width,this.uniforms.dimensions[1]=t.filterFrame.height,e.applyFilter(this,t,n,r)},n.texture.get=function(){return this.uniforms.uLightmap},n.texture.set=function(e){this.uniforms.uLightmap=e},n.color.set=function(e){var t=this.uniforms.ambientColor;"number"==typeof e?(o.hex2rgb(e,t),this._color=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],this._color=o.rgb2hex(t))},n.color.get=function(){return this._color},n.alpha.get=function(){return this.uniforms.ambientColor[3]},n.alpha.set=function(e){this.uniforms.ambientColor[3]=e},Object.defineProperties(t.prototype,n),t}(t.Filter),qe=a,We="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",Ke=function(e){function t(t,r,o,i){void 0===t&&(t=100),void 0===r&&(r=600),void 0===o&&(o=null),void 0===i&&(i=null),e.call(this,qe,We),this.uniforms.blur=t,this.uniforms.gradientBlur=r,this.uniforms.start=o||new n.Point(0,window.innerHeight/2),this.uniforms.end=i||new n.Point(600,window.innerHeight/2),this.uniforms.delta=new n.Point(30,30),this.uniforms.texSize=new n.Point(1024,1024),this.updateDelta()}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return t.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},r.blur.get=function(){return this.uniforms.blur},r.blur.set=function(e){this.uniforms.blur=e},r.gradientBlur.get=function(){return this.uniforms.gradientBlur},r.gradientBlur.set=function(e){this.uniforms.gradientBlur=e},r.start.get=function(){return this.uniforms.start},r.start.set=function(e){this.uniforms.start=e,this.updateDelta()},r.end.get=function(){return this.uniforms.end},r.end.set=function(e){this.uniforms.end=e,this.updateDelta()},Object.defineProperties(t.prototype,r),t}(t.Filter),Ye=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/n,this.uniforms.delta.y=t/n},t}(Ke),Ze=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-t/n,this.uniforms.delta.y=e/n},t}(Ke),Qe=function(e){function t(t,n,r,o){void 0===t&&(t=100),void 0===n&&(n=600),void 0===r&&(r=null),void 0===o&&(o=null),e.call(this),this.tiltShiftXFilter=new Ye(t,n,r,o),this.tiltShiftYFilter=new Ze(t,n,r,o)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return t.prototype.apply=function(e,t,n){var r=e.getFilterTexture();this.tiltShiftXFilter.apply(e,t,r),this.tiltShiftYFilter.apply(e,r,n),e.returnFilterTexture(r)},n.blur.get=function(){return this.tiltShiftXFilter.blur},n.blur.set=function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},n.gradientBlur.get=function(){return this.tiltShiftXFilter.gradientBlur},n.gradientBlur.set=function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},n.start.get=function(){return this.tiltShiftXFilter.start},n.start.set=function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},n.end.get=function(){return this.tiltShiftXFilter.end},n.end.set=function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Ue=a,Ve="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n",He=function(e){function t(t,n,r){void 0===t&&(t=200),void 0===n&&(n=4),void 0===r&&(r=20),e.call(this,Ue,Ve),this.radius=t,this.angle=n,this.padding=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={offset:{configurable:!0},radius:{configurable:!0},angle:{configurable:!0}};return n.offset.get=function(){return this.uniforms.offset},n.offset.set=function(e){this.uniforms.offset=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),$e=a,Je="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = 32.0;\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",et=function(e){function t(t){if(e.call(this,$e,Je),"object"!=typeof t){var n=arguments[0],r=arguments[1],o=arguments[2],i=arguments[3];t={},void 0!==n&&(t.strength=n),void 0!==r&&(t.center=r),void 0!==o&&(t.innerRadius=o),void 0!==i&&(t.radius=i)}Object.assign(this,{strength:.1,center:[0,0],innerRadius:0,radius:-1},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},strength:{configurable:!0},innerRadius:{configurable:!0},radius:{configurable:!0}};return n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.strength.get=function(){return this.uniforms.uStrength},n.strength.set=function(e){this.uniforms.uStrength=e},n.innerRadius.get=function(){return this.uniforms.uInnerRadius},n.innerRadius.set=function(e){this.uniforms.uInnerRadius=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter);return e.AdjustmentFilter=c,e.AdvancedBloomFilter=y,e.AsciiFilter=C,e.BevelFilter=z,e.BloomFilter=A,e.BulgePinchFilter=O,e.CRTFilter=Z,e.ColorMapFilter=M,e.ColorOverlayFilter=j,e.ColorReplaceFilter=I,e.ConvolutionFilter=N,e.CrossHatchFilter=W,e.DotFilter=V,e.DropShadowFilter=J,e.EmbossFilter=ne,e.GlitchFilter=ie,e.GlowFilter=ae,e.GodrayFilter=he,e.KawaseBlurFilter=d,e.MotionBlurFilter=me,e.MultiColorReplaceFilter=xe,e.OldFilmFilter=be,e.OutlineFilter=Fe,e.PixelateFilter=we,e.RGBSplitFilter=Ee,e.RadialBlurFilter=De,e.ReflectionFilter=Re,e.ShockwaveFilter=Xe,e.SimpleLightmapFilter=Ge,e.TiltShiftAxisFilter=Ke,e.TiltShiftFilter=Qe,e.TiltShiftXFilter=Ye,e.TiltShiftYFilter=Ze,e.TwistFilter=He,e.ZoomBlurFilter=et,e}({},PIXI,PIXI,PIXI,PIXI.utils,PIXI,PIXI.filters,PIXI.filters);Object.assign(PIXI.filters,__filters);
    /*# sourceMappingURL=pixi-filters.js.map*/



    // Tsukimi-customized pixi-Godray Filter
    /*!
    * @pixi/filter-godray - v3.1.0
    * Compiled Wed, 11 Mar 2020 20:38:18 UTC
    *
    * @pixi/filter-godray is licensed under the MIT License.
    * http://www.opensource.org/licenses/mit-license
    */
    var __filters=function(n,e,t){"use strict";var i="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",o="vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n",r="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\nuniform float strength;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 0.0) * (1.0 - coord.y);\n    vec4 fragColor = texture2D(uSampler, vTextureCoord);\n    mist *= strength * fragColor.a;\n\n    gl_FragColor = fragColor + mist;}\n",a=function(n){function e(e){n.call(this,i,r.replace("${perlin}",o)),this.uniforms.dimensions=new Float32Array(2),"number"==typeof e&&(console.warn("GodrayFilter now uses options instead of (angle, gain, lacunarity, time, strength)"),e={angle:e},void 0!==arguments[1]&&(e.gain=arguments[1]),void 0!==arguments[2]&&(e.lacunarity=arguments[2]),void 0!==arguments[3]&&(e.time=arguments[3]),void 0!==arguments[4]&&(e.strength=arguments[4])),e=Object.assign({angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],strength:1},e),this._angleLight=new t.Point,this.angle=e.angle,this.gain=e.gain,this.lacunarity=e.lacunarity,this.parallel=e.parallel,this.center=e.center,this.time=e.time,this.strength=e.strength}n&&(e.__proto__=n),e.prototype=Object.create(n&&n.prototype),e.prototype.constructor=e;var a={angle:{configurable:!0},gain:{configurable:!0},lacunarity:{configurable:!0},strength:{configurable:!0}};return e.prototype.apply=function(n,e,t,i){var o=e.filterFrame,r=o.width,a=o.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=a,this.uniforms.aspect=a/r,this.uniforms.time=this.time,n.applyFilter(this,e,t,i)},a.angle.get=function(){return this._angle},a.angle.set=function(n){this._angle=n;var e=n*t.DEG_TO_RAD;this._angleLight.x=Math.cos(e),this._angleLight.y=Math.sin(e)},a.gain.get=function(){return this.uniforms.gain},a.gain.set=function(n){this.uniforms.gain=n},a.lacunarity.get=function(){return this.uniforms.lacunarity},a.lacunarity.set=function(n){this.uniforms.lacunarity=n},a.strength.get=function(){return this.uniforms.strength},a.strength.set=function(n){this.uniforms.strength=n},Object.defineProperties(e.prototype,a),e}(e.Filter);return n.GodrayFilter=a,n}({},PIXI,PIXI);Object.assign(PIXI.filters,__filters);
    /*# sourceMappingURL=filter-godray.js.map*/
}