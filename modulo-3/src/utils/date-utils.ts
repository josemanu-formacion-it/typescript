import { DateTime } from 'luxon';

/**
 * Calcula la diferencia en días entre dos fechas utilizando la librería Luxon.
 * 
 * @param fechaInicio - Fecha inicial (ISO string, Date o DateTime)
 * @param fechaFin - Fecha final (ISO string, Date o DateTime)
 * @returns Número de días de diferencia (entero)
 */
export function calcularDiferenciaDias(
  fechaInicio: string | Date | DateTime,
  fechaFin: string | Date | DateTime
): number {
  const start = typeof fechaInicio === 'string' 
    ? DateTime.fromISO(fechaInicio) 
    : fechaInicio instanceof Date 
      ? DateTime.fromJSDate(fechaInicio) 
      : fechaInicio;

  const end = typeof fechaFin === 'string' 
    ? DateTime.fromISO(fechaFin) 
    : fechaFin instanceof Date 
      ? DateTime.fromJSDate(fechaFin) 
      : fechaFin;

  if (!start.isValid || !end.isValid) {
    throw new Error('Una o ambas fechas no son válidas');
  }

  const diff = end.diff(start, 'days');
  return Math.floor(diff.days);
}
