// need to require here
const Bus = require('../bus');
const Person = require('../person');


describe ('Bus', () => {

  let person1;
  let person2;
  let bus;

  beforeEach(()=>{
    person1 = new Person('SpongeBob', 31);
    person2 = new Person('PatrickStar', 32);
    bus = new Bus(0, "BikiniBottom", [], "3");
  })

  test('bus has a number' , () => {
    expect(bus.routNumber).toEqual("3");
  });

  test('bus has a distance of 0' , () => {
    expect(bus.distance).toEqual(0);
  });

  test('passengers array is empty' , () => {
    expect(bus.passengers).toEqual([]);
  });

  test('bus has a destinaton' , () => {
    expect(bus.destinaton).toEqual("BikiniBottom");
  });

  test('add 10 to bus distance' , () => {
    bus.addDistance();
    expect(bus.distance).toEqual(10);
  });

  test('add person to the bus' , () => {
    bus.busPickUp(person1);
    expect(bus.passengers.length).toBe(1);
  });

  test('add person to the bus' , () => {
    bus.busPickUp(person1);
    expect(bus.passengers.length).toBe(1);
  });

  test('can remove passengers' , () => {
    bus.busPickUp(person1);
    bus.busDropOff(person2);
    expect(bus.passengers.length).toBe(0);
  });

  test('can remove all passengers' , () => {
    bus.busDropOff(person2);
    expect(bus.passengers.length).toBe(0);
  });











});
