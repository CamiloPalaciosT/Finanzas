const gastos = document.querySelector(".gastos");
const ingresos = document.querySelector(".ingresos");
function gastosActivo() {
  gastos.classList.toggle("active");
  ingresos.classList.remove("active");
}

gastos.addEventListener("click", gastosActivo);

function ingresosActivo() {
  ingresos.classList.toggle("active");
  gastos.classList.remove("active");
}

ingresos.addEventListener("click", ingresosActivo);