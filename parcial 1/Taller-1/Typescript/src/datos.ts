// Definir interfaz para CitaMedica
interface CitaMedica {
  ID: string;
  PacienteID: string;
  Fecha: string;
  Motivo: string;
  Doctor: string;
}

// Crear arreglo que almacena objetos de citas médicas
const citasMedicas: CitaMedica[] = [
  {
    ID: 'C001',
    PacienteID: 'P001',
    Fecha: '2023-09-21',
    Motivo: 'Consulta por gripe',
    Doctor: 'Dr. Smith',
  },
  {
    ID: 'C002',
    PacienteID: 'P002',
    Fecha: '2023-09-22',
    Motivo: 'Dolor de cabeza',
    Doctor: 'Dr. Johnson',
  },
  {
    ID: 'C003',
    PacienteID: 'P003',
    Fecha: '2023-09-23',
    Motivo: 'Lesión en el tobillo',
    Doctor: 'Dr. Anderson',
  },
  {
    ID: 'C004',
    PacienteID: 'P004',
    Fecha: '2023-09-24',
    Motivo: 'Resfriado',
    Doctor: 'Dra. Martinez',
  },
  {
    ID: 'C005',
    PacienteID: 'P005',
    Fecha: '2023-09-25',
    Motivo: 'Hipertensión',
    Doctor: 'Dr. Garcia',
  },
];

export { CitaMedica, citasMedicas };

