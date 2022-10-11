
/*let edad = parseInt(prompt("Porfavor Ingrese su edad"));

if (edad >= 18) {
  alert("Podes Continuar a la pagina.");
}
else {
  alert("Por favor compra bajo la vigilancia de una persona mayor de edad.");
}

let categoria = prompt("Porfavor ingrese la categoria del producto que desee.(zapatillas, shorts, remeras)");


switch (categoria) {
  case "zapatillas":
    ingresarMarca("nike", categoria);
    break;
  case "shorts":
    ingresarMarca("under armour", categoria);
    break;
  case "remeras":
    ingresarMarca ("adidas", categoria);
    break;
  default:
    alert(`No tenemos ${categoria} disponibles en este momento, disculpe.`);

}


function modelos() {
  let models = parseInt(prompt(`Estos son nuestros modelos: elige 1, 2 o 3, gracias`));
  console.log(models);
}



function ingresarMarca(marca, categoria) {
  let marcaProducto;
  
  do {
    marcaProducto= prompt(`Ingresa la marca de ${categoria} que deseas.(nike, adidas, under Armour`);

  } while (marcaProducto != marca)
  modelos();
}
*/



class Producto {
  constructor(nombreProd, categoria, precio, stock) {
    this.nombre = nombreProd;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }
  descuento() {
    if (this.precio > 3500) {
      const precioInicial = this.precio;
      const porcentaje = this.precio * 10 / 100;
      this.precio = precioInicial - porcentaje;
    } 
  }  
}



class Carrito {
  constructor(productos) {
    this.productos = productos;
  }

  agregarProducto(producto) {
    this.productos.push(producto)
  }

  comprar() {
    for (const producto of this.productos){
      if(buscarProducto(producto.nombre) && (producto.stock > 0)){
        for (const stk of stock){
          if (stk.nombre === producto.nombre){
            stk.stock = stk.stock - 1;
          }
           
        } 
      }
    }
    this.productos = [];
    console.log(stock)
    alert("Su compra fue exitosa.");
  }
}

const stock = [
  new Producto("remera hombre", "remera", 2670, 5),
  new Producto("remera mujer", "remera", 3250, 3),
  new Producto("zapatilla infantil", "zapatillas", 7600, 2),
  new Producto("zapatilla mujer", "zapatillas", 8900, 4)
]

const carrito = new Carrito([]);
let solicitarDatos = false;

do {
  let categoria = prompt("Ingrese categoria de producto: (remera o zapatillas). ");
  let nombreProducto = prompt(`Ingrese un producto de la categoria ${categoria}.`)
  let producto = buscarProducto(nombreProducto);
  if (buscarProducto(nombreProducto)) {
    carrito.agregarProducto(producto);
    solicitarDatos = confirm("Quiere continuar seleccionando productos? Responda si o no.");
  } else {
    alert("No existe el producto seleccionado, eleji otro");
    solicitarDatos = true;
  }

} while (solicitarDatos)

  carrito.comprar();

function buscarProducto(nombre) {

  for (let i = 0; i < stock.length; i++) {
    if (stock[i].nombre === nombre) {
      return stock[i];
    }
  }

  return undefined
}






