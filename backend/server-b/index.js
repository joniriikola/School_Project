'use strict';

// Import sendTask
const sendTask = require('./rabbit-utils/sendTask.js')

// Host for RabbitMQ
const rabbitHost = 'rapid-runner-rabbit'
// Queue what is used to receive orders
const receiveQueue = 'received-orders'
// Queue where orders are sent
const sendQueue = 'sent-orders'

// Delay in ms before sending received order to finished queue
var delayInMilliseconds = 5555;

// Import amqplib
var amqp = require('amqplib');
var fs = require('fs'),
    path = require('path'),
    http = require('http');

// Define port for server
var app = require('connect')();
var serverPort = 80;

// Function used to send item to queue
function sendItem(order){
    // Send JSON ton queue
    sendTask.addTask(rabbitHost, sendQueue, order);
}
// Connecting to rabbitHost and consuming task is basicly from receive task
amqp.connect('amqp://' + rabbitHost).then(function(conn) {
    process.once('SIGINT', function() { conn.close(); });
    return conn.createChannel().then(function(ch) {
    var ok = ch.assertQueue(receiveQueue, {durable: true});
    ok = ok.then(function() { ch.prefetch(1); });
    ok = ok.then(function() {
        ch.consume(receiveQueue, doWork, {noAck: false});
        console.log(new Date(), " [*] Waiting for messages. To exit press CTRL+C");
    });
    return ok;
    
    // Dowork is bit edited from receiveTask
    function doWork(msg) {
        // Read messages body to string
        var body = msg.content.toString();
        // Log received message to console
        console.log(" [x] Received '%s'", body);

        // Parse string to JSON
        var bodyParsed = JSON.parse(body);
        // Log status of received order to console
        console.log(bodyParsed.status);
        // Change status of order to "ready"
        bodyParsed.status = "ready"

        // Use timeout to implement delay
        setTimeout(function() {
            // After defined delay send item to queue
            var sendToQueue = sendItem(bodyParsed);
            // Log sending to console
            console.log(new Date(), "Sent received item to queue");
            
            // Write some status to console and accept message
            console.log(new Date(), " [x] Done");
            ch.ack(msg);
            // Global delay in milliseconds
        }, delayInMilliseconds);
    }
    });
}).catch(console.warn);

// Start the server
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  });
