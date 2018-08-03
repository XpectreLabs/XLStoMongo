const XLSX = require('xlsx');
const archivo = XLSX.readFile('invitacion.xlsx');
const sheet_name_list =archivo.SheetNames;
console.log(XLSX.utils.sheet_to_csv(archivo.Sheets[sheet_name_list[0]]));