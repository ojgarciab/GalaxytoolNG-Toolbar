// ==UserScript==
// @name        GalaxytoolNG Toolbar
// @namespace   https://foro.gt.linaresdigital.com
// @description Galaxytool Toolbar compabible with Ogame 6
// @namespace   https://github.com/GalaxytoolNG
// @version     0.1
// @grant       GM_xmlhttpRequest
// @grant       GM_log
// @include     http://*.ogame.gameforge.com/game/index.php*
// @copyright   2015+, Óscar Javier García Baudet
// ==/UserScript==
/* jshint -W097 */
'use strict';

;(function() {
    /* Callback for AJAX calls */
    function rellamada(event, xhr, settings) {
        console.log(settings);
        switch ( settings.url ) {
            case 'index.php?page=messages&tab=20&ajax=1':
                /* Espionage tab */
                console.log('I\'m an espionage tab');
                break;
        }
    }
    switch ( location.search ) {
        case '?page=messages':
            $(document).ajaxComplete(rellamada);
            break;
    }
})();
