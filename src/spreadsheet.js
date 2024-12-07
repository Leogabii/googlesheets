const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciales = require('./json/credenciales');

let googleId = credenciales.googleId;

async function accederGoogleSheet() {
  try {
    // Crear una instancia del documento
    const documento = new GoogleSpreadsheet(googleId);

    // Autenticar usando las credenciales
    await documento.useServiceAccountAuth(credenciales);

    // Cargar la información del documento
    await documento.loadInfo();

    // Acceder a la primera hoja de cálculo
    const sheet = documento.sheetsByIndex[0];

    console.log(`Título de la hoja: ${sheet.title}`);
    console.log(`Número de filas: ${sheet.rowCount}`);
  } catch (error) {
    console.error('Error al acceder a Google Sheets:', error);
  }
}

// Llamar a la función
accederGoogleSheet();

module.exports = {
  accederGoogleSheet,
};
