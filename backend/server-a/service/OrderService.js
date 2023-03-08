'use strict';

//Used database
let currentOrders = []
//Counter for order ID
let id = 1;

/**
 * Add an order for an sandwich
 *
 * order Order place an order for a sandwich
 * returns Order
 **/
exports.addOrder = function (order) {
    //Creating another object with orderId added
    const gotOrder =
    {
        sandwichId: order.sandwichId,
        orderId: id,
        status: "inQueue"
    }
    //Adding order to array that is the database
    currentOrders.push(gotOrder);
    id++;
    return new Promise(function (resolve, reject) {
        resolve(gotOrder)
    });
}


/**
 * Find an order by its ID
 * IDs must be positive integers
 *
 * orderId Long ID of the order that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function(orderId) {
    return new Promise(function (resolve, reject) {
        var order = {};
        //Checking if the there is order with given order ID
        order['application/json'] = currentOrders.find(s => s.id === orderId);
        if (Object.keys(order).length > 0) {
            resolve(order[Object.keys(order)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Get a list of all orders. Empty array if no orders are found.
 *
 * returns ArrayOfOrders
 **/
exports.getOrders = function() {
    return new Promise(function (resolve, reject) {
        var orders = [];
        orders['application/json'] = currentOrders;
        if (Object.keys(orders).length > 0) {
            resolve(orders[Object.keys(orders)[0]]);
        } else {
            resolve();
        }
    });
};


/**
 * Updates order status with given order ID
 * @param {any} order
 */
exports.updateStatus = function (order) {
    //Changes string to json
    const orders = JSON.parse(order)
    //Checking if the order Id we want to change is in the array that contains orders
    let orderIndex = currentOrders.findIndex(te => te.orderId == orders.orderId);

    console.log(currentOrders.findIndex(te => te.orderId == orders.orderId));
    //Changing status to wanted status
    currentOrders[orderIndex].status = orders.status;
};