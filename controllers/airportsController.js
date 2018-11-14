const http = require('http');
const app = require('../configs/app');

module.exports = function (req, res) {
    const searchRequest = app.host + app.airports + "?q=" + req.params.cities;

    http.get(searchRequest, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (flights) {
            res.json(JSON.parse(flights));
        })
    });
};
