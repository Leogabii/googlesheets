const {GoogleSpreadsheet} = require ('google-spreadsheet');
const credenciales = require('./json/credenciales");

let googleId = "1kS3GU7UlH-vbqyBXI4QkTFq27Gp-OUQqCeEHkpRQG1Q";

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
                             
