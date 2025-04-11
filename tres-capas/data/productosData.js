let productos = [];

function getAll() {
  return productos;
}

function add(producto) {
  productos.push(producto);
}

module.exports = { getAll, add };
