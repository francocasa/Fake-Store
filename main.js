const listado = document.querySelector("#listado");

async function listadoProductos() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
listadoProductos();

function createCard() {
  const li = document.createElement("li");
  li.innerHTML = "hola";
  listado.appendChild(li);
}

createCard();
