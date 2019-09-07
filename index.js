var express = require('express');
var app = express();
var ventas = require("./data/venta.json")
var clientes = require("./data/clientes.json")
var provedores = require("./data/provedores.json")
var productos = require("./data/productos.json")

function calcularTotal(producto){
  total=0
  producto.forEach(producto => {
    total = total + producto.precio
  });
  return total
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/clientes', function (req, res) {
    
    res.send(clientes);
  });

  app.get('/ventas/:id', function (req, res) {   
    var id = req.params.id
    res.send(id);
  });
  app.get('/ventas/total', function (req, res) {   
    var total = calcularTotal(ventas.productos)
    res.send({total:total});
  });

  app.get('/provedores', function (req, res) {   
    res.send(provedores);
  });
  app.get('/productos', function (req, res) {   
    res.send(productos);
  });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
