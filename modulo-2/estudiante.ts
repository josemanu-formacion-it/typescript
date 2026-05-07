/**
 * Interface Estudiante
 * Define la estructura de datos para un estudiante en el sistema universitario
 */

export interface Estudiante {
  readonly id: string;           // Identificador único e inmutable
  nombre: string;                // Nombre completo del estudiante
  email: string;                 // Email de contacto
  matricula: string;             // Número de matrícula
  fechaInscripcion: Date;        // Fecha en la que se inscribió
}
