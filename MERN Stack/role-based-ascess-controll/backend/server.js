
const express = require('express');
const userRoutes = require('./routes/UserRoute');
const cors = require('cors');
require('./utils/db');
const { PORT } = require('./utils/constants');

const app = express();

app.use(express.json());


app.use(cors());

app.use(userRoutes);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

