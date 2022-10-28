// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

// ES5

// declara las variables ES5

const array1 = [2, 4, 6];
const array2 = [-3, 2, -8, 12, 5];
const array3 = [1, 2, 3, 4, 5];
const arrayn = Array.from({length: 4000}, () => Math.floor(Math.random() * 40));

// declaración de la funcion 
function fsq(x) {
  return x * x
}

const squareA = (x) => {
   if (x%2 == 0) {
    x = x * x
   }
   return x
}
const t0 = performance.now()
console.log(arrayn)
const t00 = performance.now()
console.log(t00-t0)

const t1 = performance.now()
console.log(arrayn.map(squareA));
const t2 = performance.now()
console.log(t2-t1)


const squareB = (arrayn.map(x => {
  if (x % 2 == 0) {
    x = x * x
  }
  return x
}))
const t3 = performance.now()
console.log('squareB', squareB)
const t4 = performance.now()
console.log(t4-t3)

console.log(typeof(squareB))




                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// declara variables (let-const)


// declara la funcion y ejecuta el código









// ejecuta la funcion 

