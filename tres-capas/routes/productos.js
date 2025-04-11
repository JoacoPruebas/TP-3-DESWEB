const express = require('express');
const router = express.Router();
const productosService = require('../services/productosService');

// Listar productos
router.get('/', (req, res) => {
  const productos = productosService.obtenerProductos();
  res.json(productos);
});

// Agregar producto
router.post('/', (req, res) => {
  const producto = req.body;
  productosService.agregarProducto(producto);
  res.status(201).json({ mensaje: 'Producto agregado correctamente' });
});

module.exports = router;
