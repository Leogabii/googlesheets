const express = require('express');
const googleSheetRoutes = require('./routes/google.routes');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', googleSheetRoutes);

module.exports = app;
