'use strict';

let currentSandwiches = []
let id = currentSandwiches.isEmpty ? currentSandwiches[currentSandwiches -1].id +1 : 0;

/**
 * Add a new sandwich to the store. Needs an API key.
 *
 * body Sandwich Sandwich object that needs to be added to the store
 * no response value expected for this operation
 **/

exports.addSandwich = function (sandwich) {
  const newSandwich = {...sandwich, id:id}
  currentSandwiches.push(newSandwich);
  console.log(currentSandwiches);
  id ++;
  return new Promise(function (resolve, reject) {
      resolve(newSandwich)
  });
}

/**
 * Deletes a sandwich
 *
 * sandwichId Long Sandwich id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteSandwich = function(sandwichId,api_key) {
  currentSandwiches = currentSandwiches.filter(s => s.id !== sandwichId)
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find sandwich by ID
 * Returns a single sandwich
 *
 * sandwichId Long ID of sandwich to return
 * returns Sandwich
 **/
exports.getSandwichById = function(sandwichId) {
  return new Promise(function(resolve, reject) {
    var sandwich = {};
    sandwich['application/json'] = currentSandwiches.find(s => s.id === sandwichId);
    if (Object.keys(sandwich).length > 0) {
      resolve(sandwich[Object.keys(sandwich)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of all sandwiches. Empty array if no sandwiches are found.
 *
 * returns ArrayOfSandwiches
 **/
 exports.getSandwiches = function() {
  return new Promise(function(resolve, reject) {
    var sandwiches = [];
    sandwiches['application/json'] = currentSandwiches;
    if (Object.keys(sandwiches).length > 0) {
      resolve(sandwiches[Object.keys(sandwiches)[0]]);
    } else {
      resolve();
    }
  });
}



/**
 * Updates a sandwich in the store with JSON in body
 *
 * sandwichId Long ID of sandwich to return
 * body Sandwich Sandwich object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateSandwich = function(sandwichId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

