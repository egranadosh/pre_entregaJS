// let msj = "";

// let productos = [
//   { id: 1, producto: "Bravecto", precio: 23.5 },
//   { id: 2, producto: "Nexgard", precio: 24.8 },
//   { id: 3, producto: "Pet Cal", precio: 24.5 },
// ];

// productos.push({ id: 4, producto: "Pet Tab", precio: 25.6})
// productos.push({ id: 5, producto: "Cani Tabs", precio: 32.5})

// console.log(productos[1].producto);

// fondos = productos[].precio;
// console.log(typeof(fondos));

function validar_dato(dato) {
  if (dato.trim() == "") {
    console.log("Debe completar el campo");
    return false;
  } else {
    console.log("Dato ingresado");
    return true;
  }
}

function validarUsuario(usr, pss) {
  if (validar_dato(usr)) {
    if (validar_dato(pss)) {
    }else {
      console.log("¿Desea ingresar nuevamente?");
    }
  } else {
    console.log("Usuario incorrecto");
  }
}

validarUsuario("1","");