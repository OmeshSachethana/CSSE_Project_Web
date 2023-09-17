const express = require('express');
const db = require('./firebaseConfig');

const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));
