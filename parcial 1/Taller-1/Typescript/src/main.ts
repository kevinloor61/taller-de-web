import {
    recorrerCitasMedicasConForEach,
    recorrerCitasMedicasConForIn,
    recorrerCitasMedicasConForOf,
    buscarYMostrarCitaMedicaPorID,
  } from './funciones';
  import { CitaMedica, citasMedicas } from './datos';
 

  // Ahora puedes usar las funciones y datos importados
  recorrerCitasMedicasConForEach(citasMedicas);
  recorrerCitasMedicasConForIn(citasMedicas);
  recorrerCitasMedicasConForOf(citasMedicas);
  buscarYMostrarCitaMedicaPorID('C002');
  