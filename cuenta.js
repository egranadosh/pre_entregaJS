    class Cliente{
        constructor(nombre, cci,tipo, saldo){
            this.nombre = nombre;
            this.cci = cci;
            this.tipo = tipo;
            this.saldo = saldo;
        }
        
        getnombre(){

            return this.nombre

        }

        getSaldo(){

            return this.saldo
        }

        getTipo(){

            return this.tipo
        }
   
        anadirFondos(monto){
            
            this.saldo = this.saldo + monto;

        }

        restarFondos(monto){

            this.saldo = this.saldo - monto

        }

        getCuenta(){

            return this.nombre + " - "+ this.cci + " - " + this.tipo + " - " + this.saldo;
        }
        
        tieneSaldo(monto){


            return this.saldo >= monto
        }



    }

