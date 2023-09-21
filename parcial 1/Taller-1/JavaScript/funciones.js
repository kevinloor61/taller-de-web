const { citasMedicas } = require('./datos');

// Función para recorrer y mostrar elementos del arreglo usando forEach
function recorrerCitasMedicasConForEach(citasMedicas) {
  console.log("Recorriendo citas médicas con forEach:");
  let index = 1;
  citasMedicas.forEach(cita => {
    console.log(`Cita ${index}:`);
    Object.entries(cita).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
    console.log('------------------');
    index++;
  });
}
  
// Función para recorrer y mostrar elementos del arreglo usando for...in
function recorrerCitasMedicasConForIn(citasMedicas) {
  console.log("Recorriendo citas médicas con for...in:");
  for (const index in citasMedicas) {
    const cita = citasMedicas[index];
    console.log(`Cita ${parseInt(index) + 1}:`);
    for (const key in cita) {
      console.log(`${key}: ${cita[key]}`);
    }
    console.log('------------------');
  }
}

// Función para recorrer y mostrar elementos del arreglo usando for...of
function recorrerCitasMedicasConForOf(citasMedicas) {
  console.log("Recorriendo citas médicas con for...of:");
  let index = 1;
  for (const cita of citasMedicas) {
    console.log(`Cita ${index}:`);
    Object.entries(cita).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
    console.log('------------------');
    index++;
  }
}

// Función para buscar y mostrar cita médica por ID
function buscarYMostrarCitaMedicaPorID(id) {
  const cita = citasMedicas.find(cita => cita.ID === id);

  if (cita) {
    console.log("Cita Médica encontrada:");
    console.log(cita);
  } else {
    console.log("Cita Médica no encontrada.");
  }
}


// Exportar las funciones
module.exports = {
  recorrerCitasMedicasConForEach,
  recorrerCitasMedicasConForIn,
  recorrerCitasMedicasConForOf,
  buscarYMostrarCitaMedicaPorID
};
