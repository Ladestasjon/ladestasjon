var ladestasjon = ladestasjon || {};


ladestasjon.main = (function (map) {
    "use strict";
    var $container,
        mapCanvas;

    function init() {
        map.main(mapCanvas);
    }

    function main(container) {
        $container  = container;
        mapCanvas = document.getElementById('map_canvas');
        init();
    }

    return {
        main: main
    };
}(ladestasjon.map));
