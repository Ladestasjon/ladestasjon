var ladestasjon = ladestasjon || {};


ladestasjon.main = (function (maps, print) {
    var $container,
        mapCanvas;

    function init() {
        var mapOptions = {
            center: new maps.LatLng(59.91673, 10.74782),
            zoom: 13,
            mapTypeId: maps.MapTypeId.ROADMAP
        };
        var map = new maps.Map(mapCanvas, mapOptions);

    }

    function main(container) {
        $container  = container;
        mapCanvas = document.getElementById('map_canvas');
        init();
        print.getApiRequest('(59.943921193288915, 10.826683044433594)', '(59.883683240905256, 10.650901794433594)');
    }

    return {
        main: main
    };
}(google.maps, ladestasjon.print));
