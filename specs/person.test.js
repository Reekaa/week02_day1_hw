const Person = require('../person');

describe ('Person', () => {

  let person1;
  let person2;

  beforeEach(()=>{
    person1 = new Person('SpongeBob', 31);
    person2 = new Person('PatrickStar', 32);
  })

  test('person has a name' , () => {
    expect(person1.name).toEqual("SpongeBob");
  });

  test('person has an age' , () => {
    expect(person2.age).toEqual(32);
  });
});
