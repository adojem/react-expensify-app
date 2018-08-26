const path = require('path');
const express = require('express');
const app = express();
const publicPahth = path.join(__dirname, '..', 'public');

app.use(express.static(publicPahth));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPahth, 'index.html'));
});

app.listen(3000, () => {
   console.log('Server is up!');
});
