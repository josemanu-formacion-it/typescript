import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';

// Datos de prueba: métricas de latencia en ms
const datosLatencia: number[] = [12.4, 8.9, 15.0, 10.5, 9.2, 14.8, 11.3, 100.0];

console.log('=== Análisis de Métricas ===\n');

// Prueba: calcularMedia
const media = calcularMedia(datosLatencia);
console.log(`Datos: ${datosLatencia}`);
console.log(`Media: ${media} ms\n`);

// Prueba: calcularMediana
const mediana = calcularMediana(datosLatencia);
console.log(`Mediana: ${mediana} ms\n`);

// Prueba: filtrarAtipicos
const sinAtipicos = filtrarAtipicos(datosLatencia, 1.5);
console.log(`Datos sin atípicos: ${sinAtipicos}`);

if (sinAtipicos !== null) {
  console.log(`Media sin atípicos: ${calcularMedia(sinAtipicos)} ms\n`);
}

// Caso límite: array vacío
const datosVacios: number[] = [];
console.log(`=== Casos límite ===`);
console.log(`Media de array vacío: ${calcularMedia(datosVacios)}`);
console.log(`Mediana de array vacío: ${calcularMediana(datosVacios)}`);
console.log(`Filtrar atípicos en array pequeño: ${filtrarAtipicos([1, 2, 3])}`);