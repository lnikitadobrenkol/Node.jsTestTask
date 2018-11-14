const airlinesController = require('./controllers/airlinesController');
const airports = require('./controllers/airportsController');
const searchController = require('./controllers/searchController');

module.exports = function router(app) {
    app.get('/airlines', airlinesController);
    app.get('/airport/:cities', airports);
    app.get('/search/:date/:from/:to', searchController);
};
