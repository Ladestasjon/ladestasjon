var ladestasjon = ladestasjon || {};


ladestasjon.main = (function (maps, print) {
    var $container,
        mapCanvas
        zoomConstant = 0.1;


    function getUpperBound(long, lat) {
        return (long + zoomConstant).toString() + ',' + (lat + zoomConstant).toString();
    }

    function getLowerBound(long, lat) {
        return (long - zoomConstant).toString() + ',' + (lat - zoomConstant).toString();
    }

    function setMarker() {

    }

    function getPositionFromString(string) {
        var array = string.split(",");
        var long = array[0].substring(1, array[0].length);
        var lat = array[1].substring(0, array[0].length - 1);

        return new maps.LatLng(long, lat);
    }

    function init() {
        var long = 59.91673;
        var lat = 10.74782;
        var mapOptions = {
            center: new maps.LatLng(long, lat),
            zoom: 13,
            mapTypeId: maps.MapTypeId.ROADMAP
        };
        var map = new maps.Map(mapCanvas, mapOptions);



        print.getApiRequest(getLowerBound(long, lat), getUpperBound(long, lat), function (chargerstations) {
            var i;
            for (i = 0; i < chargerstations.length; i++) {
                  new google.maps.Marker({
                        position: getPositionFromString(chargerstations[i].csmd.Position),
                        map: map,
                        title: 'Hello World!'
                    });
                }
        });
    }



    function main(container) {
        $container  = container;
        mapCanvas = document.getElementById('map_canvas');
        init();
    }

    return {
        main: main
    };
}(google.maps, ladestasjon.print));
