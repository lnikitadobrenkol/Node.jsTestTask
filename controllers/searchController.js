const http = require('http');
const app = require('../configs/app');

module.exports = function (req, res) {
    console.log(req.params);

    const urlFromCode = app.host + app.airports + "?q=" + req.params.from;
    const urlToCode = app.host + app.airports + "?q=" + req.params.to;

    console.log("urlFromCode:" + urlFromCode);
    console.log("urlToCode:" + urlToCode);

    let fromCode;
    let toCode;
    let searchRequest;

    http.get(urlFromCode, function (response) {

        response.on('data', function (fromData) {
            fromData = JSON.parse(fromData);
            fromCode = fromData[0].airportCode;
            console.log("fromCode: " + fromCode);

            http.get(urlToCode, function (response) {

                response.on('data', function (toData) {
                    toData = JSON.parse(toData);
                    toCode = toData[0].airportCode;
                   console.log("toCode: " + toCode);

                    searchRequest = app.host + app.search + "/QF?date=" + req.params.date + "&from=" + fromCode + "&to="+ toCode;

                    console.log("searchRequest:" + searchRequest);

                    http.get(searchRequest, function (response) {
                        response.setEncoding('utf8');
                        response.on('data', function (searchResult) {
                            res.json(JSON.parse(searchResult));
                        })
                    });
                })
            });
        })
    });
};

