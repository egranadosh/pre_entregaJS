class Producto {
    constructor(id_producto, descripcion,precio){
        this.id_producto = id_producto;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    getid_producto(){

        return this.id_producto
    }

    getDescripcion(){

        return this.descripcion
    }

    getPrecio(){
        
        return this.precio
    }

    getProducto(){

        return this.id_producto + ")" + " " + this.descripcion + " - Precio: " + this.precio
    }

    getSumaTotal(){
        this.precio += this.precio;
    }

}
