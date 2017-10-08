// Initial package setups (ECMA 6 version)
const http          = require("http");
const express       = require("express");
const bodyParser    = require("body-parser");
const routes        = require("./routes.js");
const config        = require("../config/config.json");
const path          = require('path');


const app = express();

app.server = http.createServer(app);

//set views to app
app.set('views',path.resolve('../public/assest') );
app.set('view engine', 'ejs');

//set the static file for public use
app.use(express.static(path.resolve('../public/assest')));

app.use(bodyParser.json({
    limit: config.bodyLimit,
    type: config.bodyLimit
}));

app.use('/',routes);

app.route('/config').get(function (req, res,nxt){
    res.send(200).json(config);
});

const server = app.listen(config.port, function(){
    var port = server.address().port;
    var host = server.address().address;

    console.log("%s server listening on port %s ...",host,port);
});