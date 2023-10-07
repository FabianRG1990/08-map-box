const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();


const targetPath = './src/environments/environment.ts';

const envFileContent = `
  export const environment = {
    mapbox_key: "${ process.env['MAPBOX_KEY'] }",
  }
`;

//* me crea la carpeta de environment [el recursive es para indicar que si ya existe lo sobre escriba]
mkdirSync('./src/environments', {recursive: true} );

writeFileSync( targetPath, envFileContent);
