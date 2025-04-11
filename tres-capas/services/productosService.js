const productosData = require('../data/productosData');

function obtenerProductos() {
  return productosData.getProductos();
}

function agregarProducto(producto) {
  productosData.addProducto(producto);
}

module.exports = { obtenerProductos, agregarProducto };
