const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express()

//BodyParser middleware
app.use(bodyParser.json())

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(db)
    .then(() => console.log('Connect to MongoDB..'))
    .catch(err => console.error('Could not connect to MongoDB..', err));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/users', (req, res) => {
    const customers = [
        { id: 1, firstName: 'Haseen', lastName: 'Raahil' },
        { id: 2, firstName: 'Radi', lastName: 'Hasham' },
        { id: 3, firstName: 'Iftikhar', lastName: 'Ihab' },
    ];

    res.json(customers);
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on Port ${port}`));