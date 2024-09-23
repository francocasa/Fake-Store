# Make It Real - Assessment 1: Aplicación Web con JavaScript Vanilla

Este es un proyecto desarrollado como parte de mi participación para el proyecto grupal en el curso de Make It Real. A continuación, detallo el proceso y las herramientas utilizadas para cumplir con los siguientes requerimientos del proyecto.



## Table of contents

- [Resumen](#resumen)
  - [El reto](#el-reto)
  - [Captura de pantalla](#captura-de-pantalla)
- [Mi proceso](#mi-proceso)
  - [Tecnologías utilizadas](#tecnologías-utilizadas)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Desarrollo continuo](#desarrollo-continuo)
  - [Recursos útiles](#recursos-útiles)
- [Autor](#autor)

## Resumen

### El reto

En este proyecto, los usuarios deben poder:

- Visualizar una lista de productos en tarjetas.
- Cada tarjeta debe incluir el título, imagen, precio, descripción, categoría y un botón de compra.
- Consumir la Fake Store API para obtener los datos de los productos.
- Implementar un temporizador que deshabilite el botón de compra tras un tiempo aleatorio (entre 1 y 3 minutos).

### Captura de pantalla

#### Desktop





## Mi proceso

### Tecnologías utilizadas

-HTML5 semántico para estructurar la información.
- CSS con Flexbox para organizar la interfaz.
- React con Vite para gestionar los componentes.
- Fake Store API para consumir datos reales de productos.
- Temporizador en JavaScript para controlar la interacción de los botones de compra.

### Lo que aprendí

Durante el desarrollo, aprendí a consumir datos dinámicamente desde una API externa (Fake Store API) y renderizarlos en la interfaz. También adquirí experiencia trabajando con temporizadores que deshabilitan botones una vez que el tiempo asignado se ha cumplido, agregando interactividad a la aplicación. Al implementar Flexbox, mejoré mis habilidades para organizar elementos visuales de manera eficiente, asegurando que el diseño se adaptara a pantallas de escritorio.

```js
async function listadoProductos() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data.forEach((element) => {
      listado.appendChild(createCard(element.title, element.image));
    });
  } catch (error) {
    console.log(error);
  }
}
listadoProductos();


```
### Desarrollo continuo

En futuros proyectos, planeo integrar herramientas más avanzadas de gestión de estado como Redux o Context API para manejar interacciones más complejas. Además, quiero seguir experimentando con herramientas de optimización de desarrollo como Vite, y explorar CSS-in-JS para una mejor gestión de estilos dentro de los componentes de React.

### Recursos útiles

- [Center a Div Vertically and Horizontally with Flexbox](https://www.freecodecamp.org/espanol/news/centrar-en-html-div-con-css/) - Un recurso que me ayudó a centrar los elementos de forma eficiente utilizando Flexbox.

## Autores

- Github - [GabrielMaQui](https://github.com/GabrielMaQui)
- Github - [francocasa](https://github.com/francocasa)

