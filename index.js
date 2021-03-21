require('dotenv').config();
const cors = require('cors');
const express = require('express');

const cookieParser = require('cookie-parser');
const path = require("path");

const app = express();



const loginRouter = require('./routes/login');

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/api/login', loginRouter );

app.get('/echo', (req, res) => {
    res.send('Api is working');
})




if( process.env.NODE_ENV === 'production' ) {
    app.use(express.static( path.join ( __dirname, '/Client/build') ));
    
    app.get( '*' , (req, res) => {
        res.sendFile(path.join( __dirname, 'Client', 'build', 'index.html' ));
    })
};

const PORT = process.env.PORT || 5000;


app.listen( PORT,()=>console.log(`Server is running on port ${PORT}`));