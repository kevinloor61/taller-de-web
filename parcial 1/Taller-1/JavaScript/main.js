// Importamos los datos y las funciones
const { citasMedicas } = require('./datos.js');
const {recorrerCitasMedicasConForEach, recorrerCcitasMedicasConForIn, recorrerCitasMedicasConForOf, buscarYMostrarCitaMedicaPorID } = require('./funciones.js');

// Llamamos a las funciones para recorrer y mostrar los elementos del arreglo de Citas Medicas
console.log("Recorriendo y mostrando elementos con forEach:");
recorrerCitasMedicasConForEach(citasMedicas);

console.log("Recorriendo y mostrando elementos con for in:");
recorrerCitasMedicasConForIn(citasMedicas);

console.log("Recorriendo y mostrando elementos con for of:");
recorrerCitasMedicasConForOf(citasMedicas);


buscarYMostrarCitaMedicaPorID('C002');
