/**
 * Calcula la media aritmética de un array de números
 * @param datos Array de números
 * @returns Media aritmética o null si el array está vacío
 */
export declare function calcularMedia(datos: number[]): number | null;
/**
 * Calcula la mediana de un array de números
 * @param datos Array de números
 * @returns Mediana o null si el array está vacío
 */
export declare function calcularMediana(datos: number[]): number | null;
/**
 * Filtra valores atípicos (outliers) usando el método IQR
 * @param datos Array de números
 * @param limite Multiplicador del IQR (típicamente 1.5)
 * @returns Array sin valores atípicos o null si no hay suficientes datos
 */
export declare function filtrarAtipicos(datos: number[], limite?: number): number[] | null;
//# sourceMappingURL=math-utils.d.ts.map