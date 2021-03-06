const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//define endpoints
const champions = require('./routes/api/champions');
app.use('/api/champions', champions);

const port = process.env.PORT || 5000;
//start listenning
app.listen(port, () => console.log(`Server started on port ${port}`));


