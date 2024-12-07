const {GoogleSpreadsheet} = require ('google-spreadsheet');
const credenciales = require('./json/credenciales");

let googleId = credenciales.googleId;

async function accederGoogleSheet(){

  const documento = new GoogleSpreadSheet(googleId);

  await documento.use.ServiceAccountAuth(credenciales);

  await documneto.loadInfo();

  const sheet = documento.sheetByIndex[0];
}
accederGoogleSheet();

module.exports={
  accederGoogleSheet : accederGoogleSheet,
}
                             
