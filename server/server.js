const path = require('path');
const express = require('express');
const app = express();
const publicPahth = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPahth));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPahth, 'index.html'));
});

app.listen(port, () => {
   console.log('Server is up!');
});
