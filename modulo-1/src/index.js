"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
// Datos de prueba: métricas de latencia en ms
const datosLatencia = [12.4, 8.9, 15.0, 10.5, 9.2, 14.8, 11.3, 100.0]; // 100 es un outlier
console.log('=== Análisis de Métricas ===\n');
// Prueba: calcularMedia
const media = (0, math_utils_1.calcularMedia)(datosLatencia);
console.log(`Datos: ${datosLatencia}`);
console.log(`Media: ${media} ms\n`);
// Prueba: calcularMediana
const mediana = (0, math_utils_1.calcularMediana)(datosLatencia);
console.log(`Mediana: ${mediana} ms\n`);
// Prueba: filtrarAtipicos
const sinAtipicos = (0, math_utils_1.filtrarAtipicos)(datosLatencia, 1.5);
console.log(`Datos sin atípicos: ${sinAtipicos}`);
console.log(`Media sin atípicos: ${(0, math_utils_1.calcularMedia)(sinAtipicos)} ms\n`);
// Caso límite: array vacío
const datosVacios = [];
console.log(`=== Casos límite ===`);
console.log(`Media de array vacío: ${(0, math_utils_1.calcularMedia)(datosVacios)}`);
console.log(`Mediana de array vacío: ${(0, math_utils_1.calcularMediana)(datosVacios)}`);
console.log(`Filtrar atípicos en array pequeño: ${(0, math_utils_1.filtrarAtipicos)([1, 2, 3])}`);
//# sourceMappingURL=index.js.map