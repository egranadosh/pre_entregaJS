//Creando los productos

let msj = "";

let productos = [
  { id: 1, producto: "Bravecto", precio: 23.5 },
  { id: 2, producto: "Nexgard", precio: 24.8 },
  { id: 3, producto: "Pet Cal", precio: 24.5 },
];

productos.push({ id: 4, producto: "Pet Tab", precio: 25.6 });
productos.push({ id: 5, producto: "Cani Tabs", precio: 32.5 });

let cliente = new Cliente("Eduardo", 1234, "$", 100);
let cliente2 = new Cliente("José", 4321, "$", 200);

const user = "Eduardo";
const user2 = "Jose";
const pass = "1234";
const pass2 = "1111";

let usuario = prompt("Ingrese usuario");
let password = prompt("Ingrese password");
// let mensaje = ""

// if(user === usuario && pass === password){
//   {
//         msj += "Bienvenido " + user + ", tu saldo es: " + cliente.getSaldo();
//         msj += "\nLos productos que ofrecemos son: ";
//         for (const producto of productos) {
//           msj +=
//             "\n" +
//             producto.id +
//             " .- " +
//             producto.producto +
//             " - precio: " +
//             producto.precio;
//         }
//         alert(msj);
//   }
// }

if (validar_usuario(usuario)) {
  if (
    (user === usuario && pass === password) ||
    (user2 === usuario && pass2 === password)
  ) {
    msj += "Bienvenido " + user + ", tu saldo es: " + cliente.getSaldo();
    msj += "\nLos productos que ofrecemos son: ";
    for (const producto of productos) {
      msj +=
        "\n" +
        producto.id +
        " .- " +
        producto.producto +
        " - precio: " +
        producto.precio;
    }
    alert(msj);

    let compra = parseInt(
      prompt("Ingresa el num. del producto que quieres comprar")
    );
    let opcion = compra - 1;
    cliente.restarFondos(productos[opcion].precio);
    alert(`Elegiste ${productos[opcion].producto}`);
    alert(`Tu saldo es:  ` + cliente.getSaldo());
  } else {
    alert("Usuario y/o clave incorrecta");
  }
}

function validar_usuario(nombre) {
  if (nombre.trim() == "") {
    alert("Debe ingresar un nombre");
    return false;
  } else if (nombre === user) {
    return true;
  } else {
    return false;
  }
}

// function validar_dato(dato) {
//   if (dato.trim() == "") {
//     alert("Debe completar el campo");
//     return false;
//   } else {
//     alert("Dato ingresado");
//     return true;
//   }
// }

// function validarUsuario(user, pass) {
//   if (validar_dato(user)) {
//     if (validar_dato(pass)) {
      
//     }else {
//       alert("¿Desea ingresar nuevamente?");
//     }
//   } else {
//     alert("Usuario incorrecto");
//   }
// }