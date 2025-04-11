const productosData = require('../data/productosData');

function obtenerProductos() {
  return productosData.getAll();
}

function agregarProducto(producto) {
  // Aquí se podrían aplicar validaciones o reglas
  productosData.add(producto);
}

module.exports = { obtenerProductos, agregarProducto };
