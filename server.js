const express = require('express');
const router = require('./router');
const app = express();

app.use(express.static(__dirname + '/public'));

let server = app.listen(3000, listen);

router(app);

function listen() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Listening at http://' + host + ':' + port);
}
