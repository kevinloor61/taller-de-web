import { CitaMedica, citasMedicas } from './datos';

// Función para recorrer y mostrar elementos del arreglo usando forEach
function recorrerCitasMedicasConForEach(citasMedicas: CitaMedica[]) {
  console.log("Recorriendo citas médicas con forEach:");
  let index = 1;
  citasMedicas.forEach((cita: CitaMedica) => {
    console.log(`Cita ${index}:`);
    Object.entries(cita).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
    console.log('------------------');
    index++;
  });
}
  
// Función para recorrer y mostrar elementos del arreglo usando for...in
function recorrerCitasMedicasConForIn(citasMedicas: CitaMedica[]) {
  console.log("Recorriendo citas médicas con for...in:");
  for (let index in citasMedicas) {
    const cita = citasMedicas[index];
    console.log(`Cita ${parseInt(index) + 1}:`);
    for (let key in cita) {
      if (cita.hasOwnProperty(key)) { // Verificar si la propiedad pertenece al objeto
        console.log(`${key}: ${cita[key as keyof CitaMedica]}`);
      }
    }
    console.log('------------------');
  }
}



// Función para recorrer y mostrar elementos del arreglo usando for...of
function recorrerCitasMedicasConForOf(citasMedicas: CitaMedica[]) {
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
function buscarYMostrarCitaMedicaPorID(id: string) {
  const cita = citasMedicas.find((cita: CitaMedica) => cita.ID === id);

  if (cita) {
    console.log("Cita Médica encontrada:");
    console.log(cita);
  } else {
    console.log("Cita Médica no encontrada.");
  }
}

// Exportar las funciones
export {
  recorrerCitasMedicasConForEach,
  recorrerCitasMedicasConForIn,
  recorrerCitasMedicasConForOf,
  buscarYMostrarCitaMedicaPorID
};
