function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  if (num % 2 === 0) {
    return true; // Retorna true si el número es par
  } else {
    return false; // Retorna false si el número es impar
  }
 
}
console.log(esPar(7));

module.exports = esPar;
