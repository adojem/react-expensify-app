import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

database
   .ref()
   .set({
      name: 'Andrew Mead',
      age: 26,
      isSingle: false,
      location: {
         city: 'Philadelphia',
         country: 'United States',
      },
   })
   .then(() => {
      console.log('Data is saved.');
   })
   .catch((e) => {
      console.log('This failed.', e);
   });

// database.ref().set('This is my data.');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

database
   .ref('attributes')
   .set({
      height: 73,
      weight: 150,
   })
   .then(() => {
      console.log('Second set call worked.');
   })
   .catch((err) => {
      console.log('Things didnt for the second error', err);
   });
