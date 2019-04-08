const BusStop = require('../bus_stop');
const Person = require('../person');

describe ('BusStop', () => {

  let busStop;
  let line;
  let person1;
  let person2;

  beforeEach(()=>{
    person1 = new Person('SpongeBob', 31);
    person2 = new Person('PatrickStar', 32);
    busStop1 = new BusStop('KrustyKrab');
    line = new BusStop([])
  })

  test('busStop has a name' , () => {
    expect(busStop1.name).toEqual("KrustyKrab");
  });

  test('queue is empty' , () => {
    expect(line.queue).toEqual([]);
  });

  test('add person to the queue' , () => {
    busStop1.addPerson(person1);
    expect(busStop1.queue.length).toBe(1);
  });

});
