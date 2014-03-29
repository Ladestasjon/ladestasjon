var ladestasjon = ladestasjon || {};

ladestasjon.map = (function (maps, print) {
    "use strict";
    var mapCanvas,
        zoomConstant = 0.1,
        map;

    function getUpperBound(long, lat) {
        return (long + zoomConstant).toString() + ',' + (lat + zoomConstant).toString();
    }

    function getLowerBound(long, lat) {
        return (long - zoomConstant).toString() + ',' + (lat - zoomConstant).toString();
    }

    function getPositionFromString(string) {
        var array = string.split(","),
            long = array[0].substring(1, array[0].length),
            lat = array[1].substring(0, array[0].length - 1);

        return new maps.LatLng(long, lat);
    }

    function init() {
        var long = 59.91673,
            lat = 10.74782,
            mapOptions = {
                center: new maps.LatLng(long, lat),
                zoom: 13,
                mapTypeId: maps.MapTypeId.ROADMAP
            };
        map = new maps.Map(mapCanvas, mapOptions);

        print.getApiRequest(getLowerBound(long, lat), getUpperBound(long, lat), function (chargerstations) {
            var i;
            for (i = 0; i < chargerstations.length; i++) {
                new maps.Marker({
                    position: getPositionFromString(chargerstations[i].csmd.Position),
                    map: map,
                    title: 'Hello World!'
                });
            }
        });
    }

    function main(id) {
        mapCanvas = id;
        init();

    }

    return {
        main: main
    };

}(google.maps, ladestasjon.print));