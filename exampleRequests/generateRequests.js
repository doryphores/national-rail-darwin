/**
  Creates a complete set of requests for se with testing
*/

var requestBuilder = require('../requestBuilder.js')

console.log(requestBuilder.getDepartureBoardRequest('ISL', {}))
console.log(requestBuilder.getDepartureBoardWithDetails('ISL', {}))
console.log(requestBuilder.getArrivalsBoard('ISL', {}))
console.log(requestBuilder.getArrivalsBoardWithDetails('ISL', {}))
console.log(requestBuilder.getArrivalsDepartureBoard('ISL', {}))
console.log(requestBuilder.getArrivalsDepartureBoardWithDetails('ISL', {}))
console.log(requestBuilder.getServiceDetails('123456789', {}))
console.log(requestBuilder.getNextDeparture('ISL', 'WAT', {}))
console.log(requestBuilder.getNextDepartureWithDetails('ISL', 'WAT', {}))
console.log(requestBuilder.getArrival('ISL', 'WAT', {}))
console.log(requestBuilder.getFastestDeparture('ISL', 'WAT', {}))
console.log(requestBuilder.getFastestDepartureWithDetails('ISL', 'WAT', {}))
