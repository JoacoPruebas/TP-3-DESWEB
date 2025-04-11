const express = require('express');
const router = express.Router();
const productosService = require('../services/productosService');

// Obtener productos
router.get('/', (req, res) => {
  res.json(productosService.obtenerProductos());
});

// Agregar producto
router.post('/', (req, res) => {
  const producto = req.body;
  productosService.agregarProducto(producto);
  res.status(201).json({ mensaje: 'Producto agregado correctamente' });
});

module.exports = router;
