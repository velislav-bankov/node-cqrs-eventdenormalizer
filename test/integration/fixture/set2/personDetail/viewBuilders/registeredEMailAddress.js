// if exports is an array, it will be the same like loading multiple files...
module.exports = require('../../../../../../index').defineViewBuilder({
//module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
//  name: 'registeredEMailAddress', // optional, default is file name without extension, if name is '' it will handle all events that matches
//  aggregate: 'person', // optional
//  context: 'hr',         // optional
  version: 2, // optional, default is 0
  id: 'payload.id', // if not defined or not found it will generate a new viewmodel with new id
  payload: 'payload' // optional, if not defined it will pass the whole event...
}, 'update');
