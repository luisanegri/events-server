const express = require('express');
// import cors
const cors = require('cors');
// register the output as middleware
const corsMiddleware = cors();
const bodyParser = require('body-parser');
// register the output as middleware
const parserMiddleware = bodyParser.json();
const app = express();
const port = 5000;
const db = require('./db');

const eventRouter = require('./event/router');

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(eventRouter);
app.listen(port, () => console.log(`server started at port ${port}`));
