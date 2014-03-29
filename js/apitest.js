    var ladestasjon = ladestasjon || {};

ladestasjon.print = (function ($) {
    "use strict";

    function getApiRequest(northwest, southwest, callback) {
        return $.ajax({
            url: 'http://nobil.no/api/server/search.php',
            data: {'apikey': '17a7a832c2e7bb2b593fbd8f0f68906b',
                'apiversion': '3',
                'action': "search",
                'type': 'rectangle',
                'northeast': northwest,
                'southwest': southwest
                },
            success: function (data) {
                callback(data.chargerstations);
            },
            dataType: 'jsonp'
        });
    }

    return {
        getApiRequest: getApiRequest
    };

}(jQuery));
