// Hecho por: Rodrigo Trujillo 

function generarFibonacci(cantidad) {
  if (cantidad <= 0) return [];
  if (cantidad === 1) return [0];

  const serie = [0, 1];

  for (let i = 2; i < cantidad; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }

  return serie;
}

const serie = generarFibonacci(20); 

console.log(serie.join(", "));
console.log(serie.length); 