const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos');

app.use(express.json());
app.use('/productos', productosRoutes);

app.listen(3000, () => {const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Servir archivos estáticos (como HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const productosRoutes = require('./routes/productos');
app.use('/productos', productosRoutes);

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

  console.log('Servidor corriendo en http://localhost:3000');
});
