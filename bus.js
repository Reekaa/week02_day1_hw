const Bus = function (distance, destinaton, passengers, routNumber) {

  this.distance = distance;
  this.destinaton = destinaton;
  this.passengers = [];
  this.routNumber = routNumber;
};

Bus.prototype.addDistance = function () {
  this.distance = this.distance + 10;
};

Bus.prototype.totalPassengers = function () {
  return this.passengers.length;
}

Bus.prototype.busPickUp = function (pers) {
  return this.passengers.push(pers)
}

Bus.prototype.busDropOff = function (pers) {
  return this.passengers.splice(this.passengers.indexOf(pers), 1);
}

Bus.prototype.lastBusStop = function () {
  this.passengers.splice(0);
}

module.exports = Bus;
