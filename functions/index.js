const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Hn0zQGHV4fORxWDmnfnknHB9Y3YvxD8Z05UgHNNEsSJtfyInZCEnMA0JIiARocKtg8AvGbzV3zURDJcEKqb2teO00bIYJlA3M')

// API

// App config
const app = express();

// Middlewears
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment request Received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit
        currency: "usd",
    });
    
    // OK - CREATED
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);

// example end point
// http://localhost:5001/clone-c3df9/us-central1/api

// http://localhost:5001/clone-c3df9/us-central1/api
