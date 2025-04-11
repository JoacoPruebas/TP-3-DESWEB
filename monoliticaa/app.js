const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lista en memoria
let productos = [];

// Página HTML con formulario, lista y botón para eliminar productos
app.get('/', (req, res) => {
  let listaHTML = productos.map(p => `
    <li>
      ${p.nombre} - $${p.precio}
      <form action="/eliminar/${p.id}" method="POST" style="display:inline;">
        <button type="submit">Eliminar</button>
      </form>
    </li>
  `).join('');

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Productos</title>
        <style>
          body { font-family: Arial; margin: 2em; }
          input, button { margin-top: 0.5em; display: block; }
          ul { margin-top: 1em; list-style-type: none; padding: 0; }
          li { margin-bottom: 0.5em; }
          form { display: inline; }
        </style>
      </head>
      <body>
        <h1>Agregar Producto</h1>
        <form action="/agregar" method="POST">
          <input type="text" name="nombre" placeholder="Nombre del producto" required />
          <input type="number" name="precio" placeholder="Precio" required />
          <button type="submit">Agregar</button>
        </form>
        <h2>Lista de Productos</h2>
        <ul>
          ${listaHTML}
        </ul>
      </body>
    </html>
  `);
});

// Ruta POST para agregar producto
app.post('/agregar', (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).send('Faltan datos');
  }

  productos.push({ id: productos.length + 1, nombre, precio });
  res.redirect('/');
});

// Ruta POST para eliminar producto por ID
app.post('/eliminar/:id', (req, res) => {
  const id = parseInt(req.params.id);
  productos = productos.filter(p => p.id !== id);
  res.redirect('/');
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
