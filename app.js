const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const autoIncrement = require('mongoose-auto-increment');


//initialize the app
const app = express();

//Middlewares
// Form Data
app.use(bodyParser.urlencoded({
    extended: false
}));

//Json Body Middleware
app.use(bodyParser.json());

//Cors Middleware
app.use(cors());

//Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the passport strategy
require('./config/passport')(passport);

// Bring in the Database config
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { 
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`);
});

//initial mongoose auto increment
autoIncrement.initialize(mongoose);

// Bring in the api route
const users = require('./routes/api/users');
app.use('/api/users', users);

const suppliers = require('./routes/api/suppliers');
app.use('/api/suppliers', suppliers);

const customers = require('./routes/api/customers');
app.use('/api/customers', customers);

const categories = require('./routes/api/categories');
app.use('/api/categories', categories);

const products = require('./routes/api/products');
app.use('/api/products', products);

const pucrhaseorders = require('./routes/api/purchase/orders');
app.use('/api/purchase/orders', pucrhaseorders);

const purchasereceipts = require('./routes/api/purchase/receipts');
app.use('/api/purchase/receipts', purchasereceipts);

const purchaseinvoices = require('./routes/api/purchase/invoices');
app.use('/api/purchase/invoices', purchaseinvoices);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});