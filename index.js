var express = require('express');
var app = express();
const ventas = require("./datos.js")
//var clientes = require("./data/clientes.json")
// var provedores = require("./data/provedores.json")
// var productos = require("./data/productos.json")

// function calcularTotal(producto){
//   total=0
//   producto.forEach(producto => {
//     total = total + producto.precio
//   });
//   return total
// }

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/ventas', function (req, res) {
  let miventas = new ventas()
  let gVentas = miventas.getClientes()// instancia de la clase ventas
  gVentas.then(resp=>{
    res.send(resp);
  })
});

app.post('/ventas', function (req, res) {
  let miventas = new ventas()
  miventas.SetClientes({id:4,nombre:"Roberto",telefono: "3214",direccion:"54654"})
});
// app.get('/ventas/:id', function (req, res) {   
//   var id = req.params.id
//   res.send(id);
// });
// app.get('/ventas/total', function (req, res) {   
//   var total = calcularTotal(ventas.productos)
//   res.send({total:total});
// });

// app.get('/provedores', function (req, res) {   
//   res.send(provedores);
// });
// app.get('/productos', function (req, res) {   
//   res.send(productos);
// });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
