let nombreUsuario = prompt("Ingresar nombre de usuario");

      if (nombreUsuario == "") {
        alert("No ingresaste el nombre de usuario");
    }
    else {
        alert("Hola" + " " + nombreUsuario);
    }
    for (let i = 1; i <= 3; i++) {
        let ingresarNombreProducto = prompt("Ingresar Nombre del Producto");
        alert("Producto N° "+i+" Nombre: "+ingresarNombreProducto);
    }
    
    class CarritoDeCompras {
        constructor() {
            this.productos = []
            this.name = ''
            this.total = 0
        }
        setName(value) {
            this.name = value
        }
    
        addProduct(product) {
            this.productos.push(product)
        }
    
        removeLastProduct() {
            this.productos.pop()
        }
    
        removeFirstProduct() {
            this.productos.shift()
        }
    
        getTotal() {
            for (const A of this.productos) {
                console.log(A)
                this.total = this.total + A.price
            }
        
            
    class Product {
        constructor(name, price) {
            this.name = name
            this.price = price
        }
    }
    
    const cliente = new CarritoDeCompras()
    
    const p1 = new Product('Resma', 400)
    const p2 = new Product('cuadernos', 200)
    const p3 = new Product('boligrafos', 100)
    
    cliente.addProduct(p1)
    cliente.addProduct(p2)
    cliente.addProduct(p3)
    cliente.getTotal()
}
}