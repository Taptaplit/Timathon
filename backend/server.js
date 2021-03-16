const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./dbUser'); 

const app = express();

    //connect to mongodb
mongoose.connect('mongodb+srv://Taptap:Taptap@cluster0.nkpi0.mongodb.net/miniboarDB?retryWrites=true&w=majority');

mongoose.connection.once('open', function(){
    console.log('[CONNECTED SUCESSFULLY] Connection has been made with no problems!', { newUrlParser: true, useUnifiedTopology: true});
}).on('error', function(error){
    console.log('[CONNECTION ERROR]', error);
});

//middleware
app.use(cors())
//import routes
app.use(bodyParser.json());
// const postsRoute = require('./routes/posts');
// app.use('/posts', postsRoute)


mongoose.Promise = global.Promise


//routes
app.post('/create', (req, res) => {
    const dbCard = req.body;

    User.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/', (req, res) => {
    User.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});



app.listen(3001)