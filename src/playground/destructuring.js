

// const person = {
//    name: 'Andrew',
//    age: 26,
//    location: {
//       city: 'Philadelphia',
//       temp: 92
//    }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`it's ${temperature} in ${city}`);

// const book = {
//    title: 'Ego is the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//       name: 'Penguin'
//    }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19247'];
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
