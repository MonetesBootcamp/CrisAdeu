// En este ejercicio te ayudaremos con la solucion de ES5, solo tendras que pasarlo a ES6

const inventory = [
  { name: "Inka Cola", category: "beverage", stock: "10" },
  { name: "Cusqueña", category: "beverage", stock: "15" },
  { name: "Pisco", category: "beverage", stock: "20" },
  { name: "Lúcuma", category: "fruit", stock: "30" },
  { name: "Aguaymanto", category: "fruit", stock: "5" },
  { name: "Tequila", category: "beverage", stock: "50" },
  { name: "Mezcal", category: "beverage", stock: "25" },
  { name: "Aguacate", category: "fruit", stock: "100" },
  { name: "Chayote", category: "fruit", stock: "5" },
  { name: "Cuitlacoche", category: "fungus", stock: "10" },
  { name: "Arándonos", category: "fruit", stock: "19" },
  { name: "Ciruela", category: "fruit", stock: "8" }
];

/*
var totalByCategory = function(inventory, category) {
  var filterCategory = function filterCategory(prod) {
    var totalProd = prod.category === category;
    return totalProd;
  };
  var sumInventory = function sumInventory(prodAnterior, prodActual) {
    var base = prodAnterior + parseInt(prodActual.stock, 10);
    return base;
  };
  var filtrando = inventory.filter(filterCategory).reduce(sumInventory, 0);
  console.log(filtrando);
  return filtrando;
};

totalByCategory(inventory, "beverage");
*/

const totalItems = inventory.filter(prod => prod.category == 'beverage')

console.log('Items', totalItems)

const TotalItemsStock = inventory.reduce((acc, obj) => 

acc + parseInt(obj.stock)

, 0)

console.log('totalStock', TotalItemsStock)



// Comenta todo el código de arriba (ecepto la const inventory) y pasa el código a ES6
/*
let names = ['Jordi',
            'Pere', 
           'Adrià', 
           'Pol', 
          '¿Cristina?'
    ],
const red = 
*/
