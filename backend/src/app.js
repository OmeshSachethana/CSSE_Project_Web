const express = require('express');
const cors = require('cors');
const db = require('./firebaseConfig');

const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/userRoutes');
const supplierRoutes = require('./routes/supplierRoutes');



app.use('/users', userRoutes);
app.use('/suppliers', supplierRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));
