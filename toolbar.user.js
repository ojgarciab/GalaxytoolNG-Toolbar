// ==UserScript==
// @name        GalaxytoolNG Toolbar
// @namespace   https://foro.gt.linaresdigital.com
// @description Galaxytool Toolbar compatible with Ogame 6
// @version     0.2.3
// @author      Óscar Javier García Baudet
// @namespace   https://github.com/GalaxytoolNG
// @downloadURL https://raw.githubusercontent.com/GalaxytoolNG/GalaxytoolNG-Toolbar/master/toolbar.user.js
// @grant       GM_xmlhttpRequest
// @grant       GM_log
// @include     http://*.ogame.gameforge.com/game/index.php*
// @copyright   2015+, Óscar Javier García Baudet
// ==/UserScript==
/* jshint -W097 */
'use strict';

;(function() {
    /* Callback for AJAX calls */
    function ajax_callback(event, xhr, settings) {
        /* Log events */
        console.log('======> Settings:'); console.log(settings);
        console.log('======> xhr:'); console.log(xhr);
        /* Exit if AJAX fails (is it necessary?) */
        if (xhr.status != 200) {
            return;
        }
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(text,"text/xml");
        switch ( settings.url ) {
            case 'index.php?page=messages&tab=20&ajax=1':
                /* Fleets / Espionage */
                console.log('TAB: Fleets / Espionage');
                break;
            case 'index.php?page=messages&tab=21&ajax=1':
                /* Fleets / Combat Reports */
                console.log('TAB: Fleets / Combat Reports');
                break;
            case 'index.php?page=messages&tab=21&ajax=1':
                /* Fleets / Unions */
                console.log('TAB: Fleets / Unions');
                break;
            case 'index.php?page=messages&tab=25&ajax=1':
                /* Fleets / Trash */
                console.log('TAB: Fleets / Trash');
                break;
            case 'index.php?page=messages&tab=12&ajax=1':
                /* Communication / Shared Combat Reports */
                console.log('TAB: Communication / Shared Combat Reports');
                break;
            case 'index.php?page=messages&tab=11&ajax=1':
                /* Communication / Shared Espionage Reports */
                console.log('TAB: Communication / Shared Espionage Reports');
                break;
        }
    }
    /*switch ( location.search ) {
        case '?page=messages':
            $(document).ajaxComplete(ajax_callback);
            break;
    }*/
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var divs = document.querySelector('div.content');
    console.log(divs);

    var observer = new MutationObserver(function(mutations) {  
        mutations.forEach(function(mutation) {
            //#ui-id-20 > ul > li:nth-child(6)
            console.log('---------[AQUI]-[AQUI]-------------');
            for (var i = 0; i < mutation.addedNodes.length; ++i) {
                //console.log(mutation.addedNodes.item(i));
                var xpathResult = document.evaluate(".//li[contains(@class,'msg') and @data-msg-id]", mutation.addedNodes.item(i), null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
                var thisNode = xpathResult.iterateNext();
                while (thisNode) {
                    console.log(thisNode);
                    thisNode = xpathResult.iterateNext();
                }
            }
        });
    });
    console.log('---------[AQUI]-------------');
    //ajax_load_shadow clearfix
    observer.observe(divs, {
        subtree: true,
        childList: true, 
    });
})();
