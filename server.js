let express =require('express');
let app = express();

app.use(express.static('./'));
app.use(require('./routes/add'));

let server = app.listen(3000, function () {
    let port = server.address().port;
    console.log('listening on port '+port);
});