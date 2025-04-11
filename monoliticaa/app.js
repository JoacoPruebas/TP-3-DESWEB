const express = require('express');
const app = express();
app.use(express.json());

// Almacenamiento en memoria (no persiste si se reinicia el servidor)
let productos = [];

// Crear un producto
app.post('/productos', (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  res.status(201).json({ mensaje: 'Producto agregado correctamente' });
});

// Listar productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Eliminar producto por ID
app.delete('/productos/:id', (req, res) => {
  const id = req.params.id;
  productos = productos.filter(p => p.id !== id);
  res.json({ mensaje: 'Producto eliminado si existía' });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

/*
Comentario final:

Esta implementación es monolítica porque toda la lógica de negocio (crear, listar, eliminar productos), el almacenamiento de datos (lista en memoria) y el servidor HTTP están contenidos dentro de un solo archivo (`app.js`). No hay separación entre capas (como controladores, servicios, repositorios, etc.).

Desventajas de esta arquitectura:
- Escalabilidad limitada: a medida que crece el proyecto, el archivo se vuelve difícil de mantener.
- Difícil reutilización: no se puede usar la lógica de negocio fuera de este archivo.
- Pruebas complicadas: es difícil testear funciones específicas si todo está mezclado.
- Acoplamiento fuerte: cualquier cambio puede romper partes no relacionadas del código.
*/
