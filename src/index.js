require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const router = require('./app');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.use('/', router);
app.listen(PORT || 8080);