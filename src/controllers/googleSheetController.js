const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciales = require('../json/credenciales');

const googleId = credenciales.googleId;

const getGoogleSheetInfo = async () => {
  const documento = new GoogleSpreadsheet(googleId);
  await documento.useServiceAccountAuth(credenciales);
  await documento.loadInfo();
  const sheet = documento.sheetsByIndex[0];

  return {
    title: sheet.title,
    rowCount: sheet.rowCount,
  };
};

const getGoogleSheetRows = async () => {
  const documento = new GoogleSpreadsheet(googleId);
  await documento.useServiceAccountAuth(credenciales);
  await documento.loadInfo();
  const sheet = documento.sheetsByIndex[0];
  const rows = await sheet.getRows();
  return rows.map(row => row._rawData); // Devuelve datos en bruto.
};

const addGoogleSheetRow = async (data) => {
  const documento = new GoogleSpreadsheet(googleId);
  await documento.useServiceAccountAuth(credenciales);
  await documento.loadInfo();
  const sheet = documento.sheetsByIndex[0];
  await sheet.addRow(data); // Agrega una fila con los datos proporcionados.
};

module.exports = {
  getGoogleSheetInfo,
  getGoogleSheetRows,
  addGoogleSheetRow,
};
