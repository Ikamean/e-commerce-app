require('dotenv').config();
const cors = require('cors');
const express = require('express');

const cookieParser = require('cookie-parser');
const path = require("path");

const app = express();


const loginRouter = require('./routes/login');
const uploadRouter = require('./routes/upload');
const imagesRouter = require('./routes/images');
const marketRouter = require('./routes/market');

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.use('/api/login', loginRouter );
app.use('/api/upload', uploadRouter);
app.use('/api/images', imagesRouter);
app.use('/api/market', marketRouter);

app.get('/echo', (req, res) => {
    res.send('Api is working');
})




if( process.env.NODE_ENV === 'production' ) {
    app.use(express.static( path.join ( __dirname, '/Client/e-commerce/build') ));
    
    app.get( '*' , (req, res) => {
        res.sendFile(path.join( __dirname, 'Client', 'e-commerce', 'build', 'index.html' ));
    })
};

const PORT = process.env.PORT || 5000;


app.listen( PORT,()=>console.log(`Server is running on port ${PORT}`));