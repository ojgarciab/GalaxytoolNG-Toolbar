// ==UserScript==
// @name        GalaxytoolNG Toolbar
// @namespace   https://foro.gt.linaresdigital.com
// @description Galaxytool Toolbar compatible with Ogame 6
// @version     0.2.5
// @author      Óscar Javier García Baudet
// @namespace   https://github.com/GalaxytoolNG
// @downloadURL https://raw.githubusercontent.com/GalaxytoolNG/GalaxytoolNG-Toolbar/master/toolbar.user.js
// @grant       GM_xmlhttpRequest
// @grant       GM_log
// @include     http://*.ogame.gameforge.com/game/index.php?page=messages*
// @copyright   2015+, Óscar Javier García Baudet
// ==/UserScript==
/* jshint -W097 */
'use strict';

;(function() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var base = document.querySelector('#buttonz > div.content > div.js_tabs.tabs_wrap.ui-tabs.ui-widget.ui-widget-content.ui-corner-all');

    var observer = new MutationObserver(function(mutations) {  
        mutations.forEach(function(mutation) {
            console.log('---------[ MUTATION EVENT STARTS HERE ]-------------');
            console.log(mutation);
            if (mutation.target.className != 'ui-tabs-panel ui-widget-content ui-corner-bottom') {
                return;
            }
            console.log('---------[ MUTATION EVENT WILL BE PROCESSED ]-------------');
            for (var i = 0; i < mutation.addedNodes.length; ++i) {
                var xpathResult = document.evaluate(".//li[@data-msg-id]", mutation.addedNodes.item(i), null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
                var thisNode = xpathResult.iterateNext();
                while (thisNode) {
                    console.log('---------[ XPATH NODE ]-------------');
                    var apiKey = document.evaluate(".//a[starts-with(@href,'ogame-api://')]", thisNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE , null );
                    if (apiKey.singleNodeValue != null) {
                        console.log('API key found: ' + apiKey.singleNodeValue.getAttribute('href'));
                    } else {
                        console.log('API key not found in this message');
                    }
                    thisNode = xpathResult.iterateNext();
                }
            }
            console.log('---------[ MUTATION EVENT ENDS HERE ]-------------');
        });
    });
    observer.observe(base, {
        subtree: true,
        childList: true, 
    });
})();
