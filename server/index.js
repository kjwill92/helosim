require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');


const app = express();
app.use(bodyParser.json());

// app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db', db)
}).catch(err=> console.log(err));

app.post('/api/auth/register', controller.postRegister);
app.post('/api/auth/login', controller.postLogin);



app.listen(process.env.SERVER_PORT, ()=> {
    console.log(`Listening on port: ${process.env.SERVER_PORT}`);
});