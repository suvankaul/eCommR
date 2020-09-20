const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(cors());

app.get('/service-wroker.js', (req,res) => {
    res.send(path.resolve(__dirname,'..','build','service-worker.js'))
})

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        description: 'payments',
        amount: req.body.amount,
        currency: 'usd'
    }
    console.log("PAYMENT API HIT", body)
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).send({ error: stripeErr})
        } else {
            res.status(200).send({ success: stripeRes})
        }
    })
})

if(process.env.NODE_ENV === 'production'){
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'skdesigns-client/build')));

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'skdesigns-client/build', 'index.html'))
    })
}

app.listen(port, err =>{
    if(err) throw err;
    console.log("Server running on port 5000")
})
