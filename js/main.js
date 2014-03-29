var ladestasjon = ladestasjon || {};


ladestasjon.main = (function (maps) {
    var $container,
        mapCanvas;

    function init() {
        var mapOptions = {
            center: new maps.LatLng(44.5403, -78.5463),
            zoom: 8,
            mapTypeId: maps.MapTypeId.ROADMAP
        };
        var map = new maps.Map(mapCanvas, mapOptions);

    }

    function main(container) {
        $container  = container;
        mapCanvas = document.getElementById('map_canvas');
        init();
        ladestasjon.print.getApiRequest();
    }

    return {
        main: main
    };
}(google.maps, ladestasjon.print));