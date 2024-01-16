const express = require('express');
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const router = require('./router');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use('/', router)

app.listen(port, () => {
    console.log(`сервер успешно создан: http://localhost:${port}`);
})