let productos = [];

function getProductos() {
  return productos;
}

function addProducto(producto) {
  productos.push(producto);
}

module.exports = { getProductos, addProducto };
