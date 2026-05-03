cat > src/math-utils.ts << 'EOF'
import type { EstadisticasResumen } from './types.js';

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
 * Calcula la desviación estándar de un array de números
 * Fórmula: σ = √(Σ(xᵢ - μ)² / n)
 * @param datos Array de números
 * @returns Desviación estándar o null si el array está vacío
 */
export function calcularDesviacionEstandar(datos: number[]): number | null {
  if (datos.length === 0) return null;
  
  const media = calcularMedia(datos);
  if (media === null) return null;
  
  const varianza = datos.reduce((acc, val) => acc + Math.pow(val - media, 2), 0) / datos.length;
  return Math.sqrt(varianza);
}

/**
 * Filtra valores atípicos (outliers) usando el método IQR
 * @param datos Array de números
 * @param limite Multiplicador del IQR (típicamente 1.5)
 * @returns Array sin valores atípicos o null si no hay suficientes datos
 */
export function filtrarAtipicos(datos: number[], limite: number = 1.5): number[] | null {
  if (datos.length < 4) return null;
  
  const ordenado = [...datos].sort((a, b) => a - b);
  
  const q1 = ordenado[Math.floor(ordenado.length * 0.25)];
  const q3 = ordenado[Math.floor(ordenado.length * 0.75)];
  const iqr = q3 - q1;
  
  const limiteInferior = q1 - limite * iqr;
  const limiteSuperior = q3 + limite * iqr;
  
  return datos.filter(val => val >= limiteInferior && val <= limiteSuperior);
}

/**
 * Genera un informe completo de estadísticas
 * @param datos Array de números
 * @returns Objeto con estadísticas completas o null si el array está vacío
 */
export function generarEstadisticas(datos: number[]): EstadisticasResumen | null {
  if (datos.length === 0) return null;
  
  const media = calcularMedia(datos);
  const mediana = calcularMediana(datos);
  const desviacionEstandar = calcularDesviacionEstandar(datos);
  const minimo = Math.min(...datos);
  const maximo = Math.max(...datos);
  
  if (media === null || mediana === null || desviacionEstandar === null) {
    return null;
  }
  
  return {
    media,
    mediana,
    desviacionEstandar,
    minimo,
    maximo,
    cantidad: datos.length
  };
}
EOF
