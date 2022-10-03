//Creando los productos

let producto1 = new Producto(1,"Bravecto", 23.50)
let producto2 = new Producto(2, "Nexgard", 24.80)
let producto3 = new Producto(3,"Pet Cal", 24.50)

let cliente = new Cliente("Eduardo", 1234,"$",100)
let cliente2 = new Cliente("José",4321,"$",200  )

const user = "Eduardo";
const user2 = "José";
const pass = "1234";
const pass2 = "1111";

let usuario = prompt("Ingrese usuario");
let password = prompt("Ingrese password");
let mensaje = ""


if(validar_usuario(usuario)){
    if((user === usuario && pass === password) || user2 === usuario && pass2 === password){
        
        
        mensaje+="Bienvenido " + user + ", tu saldo es: " + cliente.getSaldo();
        mensaje += "\n " + producto1.getProducto();
        mensaje += "\n " + producto2.getProducto();
        mensaje += "\n " + producto3.getProducto(); 
        alert(mensaje)
        
        let compra = parseInt(prompt("Ingresa el num. del producto que quieres comprar"))

        if(compra === 1){
            alert("Escogiste Bravecto")
            cliente.restarFondos(23.50)
        } else
        if (compra === 2){
            alert("Escogiste Nexgard")
            cliente.restarFondos(24.80)
        } else
        if (compra === 3){
            alert("Escogiste Pet cal")
            cliente.restarFondos(24.50)
        } else{
            alert("No ingresaste una opción correcta")
        }
        alert("Tu saldo actual es = " + cliente.saldo)
    }
    else {
        alert("Usuario y/o clave incorrecta")
    }
}

function validar_usuario(nombre){
    
    if (nombre.trim() == ""){
        alert("Debe ingresar un nombre")
        return false;
    } else 
        if (nombre === user){
        return true
    } else{
        return false
    } 
} 







