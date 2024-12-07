const express = require('express');
const {
  getGoogleSheetInfo,
  getGoogleSheetRows,
  addGoogleSheetRow,
} = require('../controllers/googleSheetController');

const router = express.Router();

// Endpoint para obtener información de Google Sheets
router.get('/google-sheet', async (req, res) => {
  try {
    const info = await getGoogleSheetInfo();
    res.json({ message: 'Hoja de cálculo cargada con éxito', ...info });
  } catch (error) {
    console.error('Error al acceder a Google Sheets:', error.message);
    res.status(500).json({ error: 'Error al acceder a Google Sheets', details: error.message });
  }
});

// Endpoint para leer filas de Google Sheets
router.get('/google-sheet/rows', async (req, res) => {
  try {
    const rows = await getGoogleSheetRows();
    res.json({ message: 'Filas obtenidas con éxito', rows });
  } catch (error) {
    console.error('Error al obtener filas:', error.message);
    res.status(500).json({ error: 'Error al obtener filas', details: error.message });
  }
});

// Endpoint para agregar una fila a Google Sheets
router.post('/google-sheet/add-row', async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: 'Faltan datos para agregar la fila' });
    }

    await addGoogleSheetRow(data);
    res.json({ message: 'Fila agregada con éxito', data });
  } catch (error) {
    console.error('Error al agregar una fila:', error.message);
    res.status(500).json({ error: 'Error al agregar una fila', details: error.message });
  }
});

module.exports = router;
