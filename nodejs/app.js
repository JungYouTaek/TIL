const express = require('express');
const app = express();

app.locals.pretty = true;
app.set('view engine', 'jade')
