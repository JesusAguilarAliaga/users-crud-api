const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

// Esta es nuestra aplicación
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use(router);
app.get('/', (req, res) => {
    return res.send('<p>Bienvenido a express!</p> <a href="/otra-ruta">Ir a la documentación</a>');
})

// middlewares después de las rutas
app.use(errorHandler)

module.exports = app;
