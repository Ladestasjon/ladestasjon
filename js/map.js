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

    function GetMyPosition(myPos)
    {
        //var oslo = new google.maps.LatLng(long,lat);
        var browserSupportFlag = new Boolean();
        var initialLocation;

        if(navigator.geolocation)
        {
            browserSupportFlag = true;
            navigator.geolocation.getCurrentPosition(function(position) {
                initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            });
        }
        else
        {
            browserSupportFlag = false;
        }
        myPos = initialLocation;
        return browserSupportFlag;
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

        var oslo = new google.maps.LatLng(long,lat);
        if(GetMyPosition(oslo))
        {
            //console.log("Pos found);
            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: oslo,
                content: 'Location found using HTML5.'
            });
        }
        else
        {
            console.log("Position not Found - Default position")
            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: oslo,
                content: 'Location not found - default location.'
            });
        }

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