const mongo= require('mongodb').MongoClient;
const XLSX = require('xlsx');
const filename = process.argv[2];
const archivo = XLSX.readFile(filename);
const sheet_name_list =archivo.SheetNames;

var url = 'mongodb://localhost:27017';

mongo.connect(url, function(err, database) {
	if (err) {
		console.log("err ". err);
	}
	const insert = XLSX.utils.sheet_to_json(archivo.Sheets[sheet_name_list[0]]);
	var collection = database.db('learnyoumongo').collection('excel').insertMany(insert, {ordered: true});
		if (err) {
			console.log("err ". err);
	}else {
		console.log("Guardado a MongoDB");
	}
    database.close()
	})
