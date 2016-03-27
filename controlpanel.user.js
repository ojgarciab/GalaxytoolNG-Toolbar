// ==UserScript==
// @name        GalaxytoolNG Toolbar: Control Panel
// @namespace   https://foro.gt.linaresdigital.com
// @description Control Panel for Galaxytool Toolbar compatible with Ogame 6
// @version     0.0.1
// @author      Óscar Javier García Baudet
// @namespace   https://github.com/GalaxytoolNG
// @downloadURL https://raw.githubusercontent.com/GalaxytoolNG/GalaxytoolNG-Toolbar/master/controlpanel.user.js
// @grant       GM_xmlhttpRequest
// @grant       GM_log
// @include     http://*.ogame.gameforge.com/game/index.php?page=*
// @include     https://*.ogame.gameforge.com/game/index.php?page=*
// @copyright   2016+, Óscar Javier García Baudet
// ==/UserScript==

/* jshint browser:true, newcap: false */
/* jshint -W097 */
/* Fix: JSHint doesn't know about greasemonkey environment as eslint */
/* global GM_xmlhttpRequest:false, GM_log:false */

/* eslint-env browser, greasemonkey */

'use strict';

(function() {
    var menuTableTools = document.getElementById('menuTableTools');
    var menuGTNG = document.createElement("li");
    menuGTNG.innerHTML = '<a class="menubutton" href="#"><span class="textlabel">GalaxytoolNG</span></a>'
    menuTableTools.appendChild(menuGTNG);
})();
