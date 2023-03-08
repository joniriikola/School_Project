'use strict';

var sendTask = require('../rabbit-utils/sendTask.js')
var receiveTask = require('../rabbit-utils/receiveTask.js')
var Order = require('../service/OrderService.js')
var utils = require('../utils/writer.js');
const rabbitHost = 'rapid-runner-rabbit'
const sendQueue = 'sent-orders'


module.exports.addOrder = function addOrder(req, res, next) {
    var order = req.swagger.params['order'].value;

    Order.addOrder(order)
        .then(function (response) {
            utils.writeJson(res, response);
            console.log(response)
            // Let's add the order to a queue
            // Notice: "rapid-runner-rabbit" is the name of the Docker Compose service
            // Using only Docker didn't networking didn't work,
            // unless Docker's bridge network IPs, were used (172.20.0.X).
            sendTask.addTask("rapid-runner-rabbit", "received-orders", response);

        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getOrderById = function getOrderById(req, res, next) {
    var orderId = req.swagger.params['orderId'].value;
    Order.getOrderById(orderId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getOrders = function getOrders(req, res, next) {
    Order.getOrders()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

//Gets orders from RabbitMQ and sends them to be handled
receiveTask.getTask(rabbitHost, sendQueue);