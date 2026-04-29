/**
 * Calcula la media aritmética de un array de números
 * @param datos Array de números
 * @returns Media aritmética o null si el array está vacío
 */
export function calcularMedia(datos: number[]): number | null {
  if (datos.length === 0) return null;
  const suma = datos.reduce((acc, val) => acc + val, 0);
  return suma / datos.length;
}

/**
 * Calcula la mediana de un array de números
 * @param datos Array de números
 * @returns Mediana o null si el array está vacío
 */
export function calcularMediana(datos: number[]): number | null {
  if (datos.length === 0) return null;
  
  const ordenado = [...datos].sort((a, b) => a - b);
  const medio = Math.floor(ordenado.length / 2);
  
  if (ordenado.length % 2 !== 0) {
    return ordenado[medio];
  }
  return (ordenado[medio - 1] + ordenado[medio]) / 2;
}

/**
 * Filtra valores atípicos (outliers) usando el método IQR
 * @param datos Array de números
 * @param limite Multiplicador del IQR (típicamente 1.5)
 * @returns Array sin valores atípicos o null si no hay suficientes datos
 */
export function filtrarAtipicos(datos: number[], limite: number = 1.5): number[] | null {
  if (datos.length < 4) return null; // Se necesitan al menos 4 datos para IQR
  
  const ordenado = [...datos].sort((a, b) => a - b);
  
  // Calcular cuartiles
  const q1 = ordenado[Math.floor(ordenado.length * 0.25)];
  const q3 = ordenado[Math.floor(ordenado.length * 0.75)];
  const iqr = q3 - q1;
  
  const limiteInferior = q1 - limite * iqr;
  const limiteSuperior = q3 + limite * iqr;
  
  return datos.filter(val => val >= limiteInferior && val <= limiteSuperior);
}