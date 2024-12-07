const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciales = require('./json/credenciales');

let googleId = credenciales.googleId;

// Controlador para acceder a Google Sheets
const accederGoogleSheet = async (req, res) => {
  try {
    // Crear una instancia del documento
    const documento = new GoogleSpreadsheet(googleId);

    // Autenticar usando las credenciales
    await documento.useServiceAccountAuth(credenciales);

    // Cargar la información del documento
    await documento.loadInfo();

    // Acceder a la primera hoja de cálculo
    const sheet = documento.sheetsByIndex[0];

    res.json({
      message: 'Hoja de cálculo cargada con éxito',
      title: sheet.title,
      rowCount: sheet.rowCount,
    });
  } catch (error) {
    console.error('Error al acceder a Google Sheets:', error);
    res.status(500).json({ error: 'Error al acceder a Google Sheets' });
  }
};

module.exports = {
  accederGoogleSheet,
};
