    var ladestasjon = ladestasjon || {};

ladestasjon.print = (function ($) {
    "use strict";
    var i;
    function getApiRequest(northwest, southwest){
        return jQuery.ajax({
            url: 'http://nobil.no/api/server/search.php',
            data: {'apikey': '17a7a832c2e7bb2b593fbd8f0f68906b',
                'apiversion': '3',
                'action': "search",
                'type': 'rectangle',
                'northeast': northwest,
                'southwest': southwest
                },
            success: printSucsess,
            dataType: 'jsonp'
        });
    }

    function printSucsess(data) {
        for (i = 0; i < data.chargerstations.length; i++) {
         //   console.log(data.chargerstations[i]);
        }
    }


    return {
        getApiRequest: getApiRequest
    };

}(jQuery));
