const APIRoutes = require('./routes');
const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

APIRoutes(app);

app.listen(port, ()=>{
    console.log('My port ' + port);
});