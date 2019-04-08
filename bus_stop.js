const BusStop = function (name, queue){

  this.name = name;
  this.queue = [];

}

BusStop.prototype.addPerson = function(person) {
  return this.queue.push(person);
}

module.exports = BusStop;
