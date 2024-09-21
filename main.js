const listado = document.querySelector("#listado");

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

function createCard(title, image) {
  const div__card = document.createElement("div");
  div__card.className = "card";
  /* Imagen */
  const div__imagen_producto = document.createElement("div");
  div__imagen_producto.className = "card__image";
  const imagen = document.createElement("img");
  imagen.src = image;
  div__imagen_producto.appendChild(imagen);
  /* Descripción */
  const div__descripcion_producto = document.createElement("div");
  const descripcion = document.createElement("h3");
  descripcion.innerHTML = title;
  div__descripcion_producto.appendChild(descripcion);
  /* Oferta */
  const div__oferta_producto = document.createElement("div");
  div__oferta_producto.className = "card__offer"
  const temporizador = document.createElement("h3");
  temporizador.innerHTML = "00:00:00";
  const boton = document.createElement("button");
  boton.className = "card__button";
  boton.innerHTML = "Go To Detail";
  div__oferta_producto.appendChild(temporizador);
  div__oferta_producto.appendChild(boton);
  /* Agregar divs */
  div__card.appendChild(div__imagen_producto);
  div__card.appendChild(div__descripcion_producto);
  div__card.appendChild(div__oferta_producto);

  return div__card;
}

const oferta_1min = Date.now() + 60 * 1000; //Aqui tomamos el tiempo de cuando queremos que el contador termine (En 60 segundos a partir de ahora)

function mostrarTiempoTranscurrido() {
  const tiempoTranscurrido = Math.floor((oferta_1min - Date.now()) / 1000);
  if (tiempoTranscurrido > 0) {
    console.log(`Han transcurrido ${tiempoTranscurrido} segundos`);
    //Programamos para que se revise de nuevo el tiempo transcurrido en 500ms
    setTimeout(mostrarTiempoTranscurrido, 1000);
  } //else: Sino no programamos nada, es como si detuvieramos el timer
}

setTimeout(mostrarTiempoTranscurrido, 1000); //Mostramos el tiempo transcurrido (en este caso por consola, pero podría ser en cualquier lado)
