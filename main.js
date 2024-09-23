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
  div__oferta_producto.className = "card__offer";
  const temporizador = document.createElement("h3");
  const boton = document.createElement("button");
  boton.className = "card__button";
  boton.innerHTML = "Go To Detail";
  const tipo_tiempo = Math.floor(Math.random() * 3) + 1;
  const tiempo = elegirTiempo(tipo_tiempo);
  const timer = setInterval(() => {
    mostrarTiempoTranscurrido(Math.floor(tiempo - Date.now()), temporizador);
    if (Date.now() > tiempo - 1000) {
      boton.disabled = true;
      clearInterval(timer);
    }
  }, 1000);
  div__oferta_producto.appendChild(temporizador);
  div__oferta_producto.appendChild(boton);
  /* Agregar divs */
  div__card.appendChild(div__imagen_producto);
  div__card.appendChild(div__descripcion_producto);
  div__card.appendChild(div__oferta_producto);
  return div__card;
}

function elegirTiempo(tipo_tiempo) {
  let tiempo = 0;
  if (tipo_tiempo == 1) {
    tiempo = Date.now() + 60 * 1000;
  } else if (tipo_tiempo == 2) {
    tiempo = Date.now() + 3 * 60 * 1000;
  } else {
    tiempo = Date.now() + 60 * 60 * 1000 * Math.random();
  }
  return tiempo;
}

function mostrarTiempoTranscurrido(tiempo_restante, temporizador) {
  let seconds = Math.floor(tiempo_restante / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  seconds = padToTwoDigits(seconds);
  minutes = padToTwoDigits(minutes);
  hours = padToTwoDigits(hours);
  if (tiempo_restante > 0) {
    temporizador.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
}

const padToTwoDigits = (num) => {
  return num.toString().padStart(2, "0");
};
