import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').push({
   description: 'Rent',
   note: '',
   amount: 109500,
   createdAt: 976123498763,
});

database.ref('expenses').push({
   description: 'Phone bill',
   note: '',
   amount: 5900,
   createdAt: 976123498763,
});

database.ref('expenses').push({
   description: 'Food',
   note: '',
   amount: 1200,
   createdAt: 976123498763,
});

// database.ref('notes').push({
//    title: 'React Native, Angular, Python',
//    body: 'Course Topics',
// });

// const notes = [
//    {
//       id: '12',
//       title: 'First note!',
//       body: 'This is my note',
//    },
//    {
//       id: '761ase',
//       title: 'Another note!',
//       body: 'This is my note',
//    },
// ];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

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
