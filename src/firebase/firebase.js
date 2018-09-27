import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
   const val = snapshot.val();
   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

// database
//    .ref('location/city')
//    .once('value')
//    .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//    })
//    .catch(err => console.log('Error fetching data', err));

// database
//    .ref()
//    .set({
//       name: 'Andrew Mead',
//       age: 26,
//       stressLevel: 6,
//       job: {
//          title: 'Software developer',
//          company: 'Google',
//       },
//       location: {
//          city: 'Philadelphia',
//          country: 'United States',
//       },
//    })
//    .then(() => {
//       console.log('Data is saved.');
//    })
//    .catch((e) => {
//       console.log('This failed.', e);
//    });

// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle',
// });

// database
//    .ref()
//    .remove()
//    .then(() => console.log('Data was removed'))
//    .catch(err => console.log('Did not remove data', err));
