/**
 * Interface Asignatura
 * Define la estructura de datos para una asignatura en el sistema universitario
 */

export interface Asignatura {
  readonly id: string;    // Identificador único e inmutable
  nombre: string;         // Nombre de la asignatura
  codigo: string;         // Código de la asignatura (ej: PRG-101)
  creditos: number;       // Créditos académicos
  semestre: number;       // Semestre en el que se imparte
  profesor: string;       // Nombre del profesor responsable
}
