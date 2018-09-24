import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
   name: 'Andrew Mead',
   age: 26,
   isSingle: false,
   location: {
      city: 'Philadelphia',
      country: 'United States',
   },
});

// database.ref().set('This is my data.');

database.ref('age').set(27);
database.ref('location/city').set('New York');

database.ref('attributes').set({
   height: 73,
   weight: 150,
});
