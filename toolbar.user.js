// ==UserScript==
// @name        GalaxytoolNG Toolbar: Messages
// @namespace   https://foro.gt.linaresdigital.com
// @description Galaxytool Toolbar compatible with Ogame 6
// @version     0.4.0
// @author      Óscar Javier García Baudet
// @namespace   https://github.com/GalaxytoolNG
// @downloadURL https://raw.githubusercontent.com/GalaxytoolNG/GalaxytoolNG-Toolbar/master/toolbar.user.js
// @require     https://raw.githubusercontent.com/GalaxytoolNG/GalaxytoolNG-Toolbar/master/controlpanel.user.js
// @resource    strings.ess    https://raw.githubusercontent.com/ojgarciab/GalaxytoolNG-Toolbar/master/strings.es.json
// @grant       GM_xmlhttpRequest
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_getResourceText
// @include     http://*.ogame.gameforge.com/game/index.php?page=messages*
// @include     https://*.ogame.gameforge.com/game/index.php?page=messages*
// @copyright   2015+, Óscar Javier García Baudet
// ==/UserScript==

/* jshint browser:true, newcap: false */
/* jshint -W097 */
/* Fix: JSHint doesn't know about greasemonkey environment as eslint */
/* global GM_xmlhttpRequest:false, GM_log:false */

/* eslint-env browser, greasemonkey */

'use strict';

(function() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var base = document.querySelector('#buttonz > div.content');

    var observer = new MutationObserver(function(mutations) {  
        mutations.forEach(function(mutation) {
            GM_log('---------[ MUTATION EVENT STARTS HERE ]-------------');
            GM_log(mutation);
            if (mutation.target.className != 'ui-tabs-panel ui-widget-content ui-corner-bottom') {
                return;
            }
            GM_log('---------[ MUTATION EVENT WILL BE PROCESSED ]-------------');
            var apiList = [];
            for (var i = 0; i < mutation.addedNodes.length; ++i) {
                var xpathResult = document.evaluate(".//li[@data-msg-id]", mutation.addedNodes.item(i), null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
                var thisNode = xpathResult.iterateNext();
                while (thisNode) {
                    GM_log('---------[ XPATH NODE ]-------------');
                    var apiKey = document.evaluate(".//a[starts-with(@href,'ogame-api://')]", thisNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE , null );
                    if (apiKey.singleNodeValue !== null && apiKey.singleNodeValue.getAttribute('href') !== null) {
                        GM_log('API key found: ' + apiKey.singleNodeValue.getAttribute('href'));
                        apiList.push(apiKey.singleNodeValue.getAttribute('href'));
                    } else {
                        GM_log('API key not found in this message');
                    }
                    thisNode = xpathResult.iterateNext();
                }
            }
            GM_log('---------[ MUTATION EVENT ENDS HERE ]-------------');
            /* Set testing URL with localStorage.getItem('Galaxytoolng_url', 'http://...'); in console */
            if (localStorage.getItem('Galaxytoolng_url') === false) {
              return;
            }
            /* Send results to every destination configured */
            GM_xmlhttpRequest({
                method: "POST",
                url: localStorage.getItem('Galaxytoolng_url'),
                data: apiList,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                onload: function(response) { GM_log(response.responseText); }
            });
        });
    });
    observer.observe(base, {
        subtree: true,
        childList: true
    });

    /* Translation code */
    var translation = {};
    try {
        translation = JSON.parse(GM_getResourceText('strings.' + navigator.language));
    } catch (err) { }
    function _(string) {
        if (translation !== null && translation.hasOwnProperty(string)) {
            GM_log("SI");
            return translation[string];
        }
            GM_log("NO");
        return string;
    }
 })();
