const express = require('express');
const cors = require('cors');
const User = require('./config');
const app = express();

app.use(express.json());
app.use(cors());
//const port = 3000

app.post('/create', async (req, res) => {
    const data = req.body;
    console.log("Data of Users", data);
    await User.add(data);
    res.send({msg: "User Added!"});
});


// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(4000, () => console.log(`Example app listening on port 4000!`))
