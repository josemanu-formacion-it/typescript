/**
 * Unión Discriminada EstadoMatricula
 * Patrón profesional para representar estados de matrícula
 * Usa la propiedad 'tipo' como discriminante para que TypeScript
 * sepa exactamente qué propiedades existen en cada estado
 */

/**
 * Estado 1: Estudiante actualmente matriculado
 */
export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: string[];  // Array de IDs de asignaturas
}

/**
 * Estado 2: Estudiante suspendido temporalmente
 */
export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: string;         // Razón de la suspensión
}

/**
 * Estado 3: Estudiante que completó sus estudios
 */
export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;      // Calificación promedio final
}

/**
 * Unión que agrupa todos los estados posibles
 * Garantiza que solo estos 3 estados pueden existir
 */
export type EstadoMatricula = 
  | MatriculaActiva 
  | MatriculaSuspendida 
  | MatriculaFinalizada;

/**
 * Función generarReporte
 * Procesa un estado de matrícula y retorna un reporte descriptivo
 * 
 * @param estado - El estado de matrícula a procesar
 * @returns String con descripción del estado
 */
export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `📚 Estudiante matriculado en ${estado.asignaturas.length} asignaturas`;
    
    case "SUSPENDIDA":
      return `⚠️ Matrícula suspendida. Motivo: ${estado.motivo}`;
    
    case "FINALIZADA":
      return `✅ Matrícula finalizada con nota media: ${estado.notaMedia.toFixed(2)}`;
    
    default:
      // Análisis exhaustivo: Si se añade un nuevo tipo a EstadoMatricula 
      // y no se maneja aquí, TypeScript arrojará un error en tiempo de compilación.
      const _comprobacionExhaustiva: never = estado;
      throw new Error(`Estado no manejado: ${_comprobacionExhaustiva}`);
  }
}
