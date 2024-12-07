const express = require('express');
const googleSheetRoutes = require('./routes/googleSheetRoutes');

const dotenv = require('dotenv');


// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', googleSheetRoutes);

module.exports = app;
