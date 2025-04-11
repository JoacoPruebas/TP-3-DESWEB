# Ejercicio 2 - Arquitectura en Tres Capas

## Descripción

Este ejercicio implementa una arquitectura en tres capas para una aplicación que permite agregar y listar productos.

### 🧱 Capas:

- **Presentación (`routes/productos.js`)**  
  Encargada de recibir las peticiones HTTP (GET y POST).

- **Negocio (`services/productosService.js`)**  
  Procesa las operaciones y reglas lógicas de los productos.

- **Acceso a Datos (`data/productosData.js`)**  
  Maneja la estructura de datos (almacenamiento en memoria).

## Ventajas respecto a la versión monolítica:

- Mayor claridad en la organización del código.
- Fácil mantenimiento y modificación de cada parte por separado.
- Posibilidad de realizar pruebas unitarias a cada capa.
- Reutilización del código en diferentes interfaces (por ejemplo: web, móvil, API).

## Cómo ejecutar

```bash
npm install
node app.js
