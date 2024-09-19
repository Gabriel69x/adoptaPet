const mongoose = require('mongoose');

let conexion = "mongodb+srv://gabriel69x:0000@adoptaappcluster.ocj5g.mongodb.net/AdoptaPet?retryWrites=true&w=majority&appName=AdoptaAppCluster";

mongoose.connect(conexion)
.then(event => console.log("conectado a mongo hoy 18 de septiembre"))
.catch(error => console.log(error)); 

module.exports = mongoose;     