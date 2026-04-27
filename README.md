# TypeScript Módulo 1: Sistema de Análisis Estadístico

## 📌 Descripción

Implementación de un módulo de análisis estadístico robusto utilizando **TypeScript con tipado estricto**. Este proyecto es una introducción práctica a los fundamentos de TypeScript en el contexto de una aplicación empresarial real.

### ¿Por qué TypeScript?

En aplicaciones de gran escala, JavaScript presenta vulnerabilidades:
- **Errores en tiempo de ejecución** no detectados hasta producción
- **Falta de contrato de código** (no es claro qué parámetros acepta una función)
- **Refactorización arriesgada** sin seguridad de tipos

TypeScript **resuelve estos problemas** mediante:
1. **Compilación estática**: Detecta errores antes de ejecutar
2. **Documentación viva**: El tipo es la documentación
3. **Soporte de IDE**: Autocompletado y refactorización inteligente
4. **Transpilación cero-overhead**: El código generado es JavaScript puro

---

## 🏗️ Arquitectura del Proyecto

```
modulo-1/
├── src/
│   ├── math-utils.ts          # Módulo de funciones estadísticas
│   ├── types.ts               # Definiciones de tipos e interfaces
│   └── index.ts               # Punto de entrada con ejemplos de uso
├── dist/                      # JavaScript compilado (generado por tsc)
├── docs/                      # Documentación adicional
├── tsconfig.json              # Configuración del compilador TypeScript
├── package.json               # Dependencias del proyecto
└── README.md                  # Este archivo
```

---

## 🛠️ Funciones Implementadas

### 1. `calcularMedia(datos: number[]): number | null`
Calcula el promedio aritmético de un conjunto de datos.

```typescript
const media = calcularMedia([10, 20, 30]); // 20
const mediaVacia = calcularMedia([]);      // null
```

**Justificación de diseño:**
- Retorna `null` si el array está vacío (no puede calcularse media de nada)
- Tipo `number | null` indica explícitamente el posible resultado nulo
- Bajo `strict: true`, el compilador obliga a verificar si es `null` antes de operar

---

### 2. `calcularMediana(datos: number[]): number | null`
Encuentra el valor central de un conjunto ordenado.

```typescript
const mediana1 = calcularMediana([3, 1, 2]);        // 2
const mediana2 = calcularMediana([1, 2, 3, 4]);     // 2.5
const medianaVacia = calcularMediana([]);           // null
```

**Justificación de diseño:**
- Para arrays **impares**: retorna el elemento central
- Para arrays **pares**: retorna el promedio de los dos centrales
- Demuestra **control de flujo exhaustivo**

---

### 3. `calcularDesviacionEstandar(datos: number[]): number | null`
Mide la dispersión de los datos respecto a la media.

**Fórmula:** σ = √(Σ(xᵢ - μ)² / n)

```typescript
const desv = calcularDesviacionEstandar([10, 20, 30]); // 8.16
```

**Justificación de diseño:**
- Validación: retorna `null` si el array está vacío
- Cálculo: utiliza `reduce()` para acumular diferencias cuadráticas
- Importancia: es la métrica base para detectar outliers

---

### 4. `filtrarAtipicos(datos: number[], desviacionesPermitidas: number): number[]`
Filtra valores anómalos (outliers) basándose en desviación estándar.

```typescript
const datos = [10, 12, 15, 14, 13, 100, 11, 12];
const filtrados = filtrarAtipicos(datos, 2);
// Elimina 100 porque está a más de 2 desviaciones estándar de la media
```

**Justificación de diseño:**
- Si un valor está a más de X desviaciones de la media, se considera atípico
- Parámetro `desviacionesPermitidas` controla sensibilidad
- Común en preprocesamiento de datos en Machine Learning

---

### 5. `generarEstadisticas(datos: number[]): EstadisticasResumen | null`
Genera un informe completo de estadísticas.

```typescript
const stats = generarEstadisticas([10, 15, 20, 25, 30]);
// {
//   media: 20,
//   mediana: 20,
//   desviacionEstandar: 7.07,
//   minimo: 10,
//   maximo: 30,
//   cantidad: 5
// }
```

**Justificación de diseño:**
- Demuestra uso de **interfaces** para contratos de datos
- Encapsula lógica múltiple en un único objeto de retorno
- Patrón común en APIs REST

---

## 🔧 Configuración TypeScript

El archivo `tsconfig.json` utiliza opciones **estrictas**:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Opciones críticas explicadas:

| Opción | Significado |
|--------|------------|
| `strict: true` | Activa: noImplicitAny, strictNullChecks, strictFunctionTypes, etc. |
| `target: ES2022` | El código transpilado será JavaScript moderno |
| `module: NodeNext` | Compatible con `import/export` en Node.js 18+ |
| `outDir: ./dist` | El JavaScript compilado va aquí |

---

## 🚀 Cómo Usar

### Instalación

```bash
cd modulo-1
npm install
```

### Ejecutar con tsx (sin compilar manualmente)

```bash
npx tsx src/index.ts
```

**Salida esperada:**
```
📊 === ANÁLISIS ESTADÍSTICO DE VENTAS ===

📈 Datos originales:
[150, 145, 155, 148, 152, 151, 149, 150, 2000, 147]

📍 Cálculos individuales:
  Media: 320.70
  Mediana: 150.50
  Desviación Estándar: 596.57

🔍 Filtrar outliers (2 desviaciones):
[150, 145, 155, 148, 152, 151, 149, 150, 147]
  Se eliminaron: 1 valores atípicos

📋 Estadísticas Completas:
{
  media: 320.7,
  mediana: 150.5,
  desviacionEstandar: 596.5735614181025,
  minimo: 145,
  maximo: 2000,
  cantidad: 10
}
```

### Compilar a JavaScript

```bash
npx tsc
```

Esto genera archivos `.js` en `dist/`. Puedes inspeccionar cómo desaparecen los tipos:

**TypeScript (src/math-utils.ts):**
```typescript
export function calcularMedia(datos: number[]): number | null {
  if (datos.length === 0) return null;
  return datos.reduce((a, b) => a + b, 0) / datos.length;
}
```

**JavaScript (dist/math-utils.js):**
```javascript
export function calcularMedia(datos) {
  if (datos.length === 0) return null;
  return datos.reduce((a, b) => a + b, 0) / datos.length;
}
```

**Observación:** Los tipos desaparecen completamente. TypeScript es solo validación en desarrollo.

---

## 📚 Conceptos Clave Demostrados

### 1. Sistema de Tipos Estricto
```typescript
// ✅ CORRECTO: Tipo explícito
function suma(a: number, b: number): number {
  return a + b;
}

// ❌ ERROR: TypeScript no lo compila
suma("10", "20");
```

### 2. Tipos Unión (Union Types)
```typescript
// Una función puede retornar número O null
function valor(): number | null {
  return Math.random() > 0.5 ? 42 : null;
}

const resultado = valor();
// TypeScript obliga a verificar antes de usar:
if (resultado !== null) {
  console.log(resultado + 10); // ✅ Seguro
}
```

### 3. Interfaces (Contratos de Datos)
```typescript
interface EstadisticasResumen {
  media: number;
  mediana: number;
  desviacionEstandar: number;
  minimo: number;
  maximo: number;
  cantidad: number;
}

// Cualquier objeto que NO cumpla esta estructura → ERROR del compilador
const stats: EstadisticasResumen = {
  media: 20,
  mediana: 20,
  desviacionEstandar: 5,
  // ❌ ERROR: faltan 'minimo', 'maximo', 'cantidad'
};
```

### 4. Inferencia vs. Declaración
```typescript
// TypeScript INFIERE el tipo automáticamente
let numero = 10; // inferido como 'number'
numero = "texto"; // ❌ ERROR

// Pero es mejor DECLARAR explícitamente en código complejo
const datos: number[] = [1, 2, 3];
```

### 5. Tipos Especiales
```typescript
// null y undefined bajo strictNullChecks
let valor: number = null; // ❌ ERROR
let valor: number | null = null; // ✅ CORRECTO

// unknown: la alternativa segura a any
let dato: unknown = "hola";
if (typeof dato === 'string') {
  console.log(dato.toUpperCase()); // ✅ Seguro
}

// void: función sin retorno
function procesar(): void {
  console.log("hago algo");
}

// never: función que nunca retorna
function lanzarError(): never {
  throw new Error("¡Error!");
}
```

---

## 🔍 Ejercicios de Extensión (Opcional)

1. **Implementar percentiles**: `calcularPercentil(datos, p)` para cuartiles (Q1, Q3)
2. **Moda**: Valor que más se repite en el dataset
3. **Rango intercuartílico (IQR)**: Método alternativo para detectar outliers
4. **Pruebas unitarias**: Usar Jest + TypeScript para validar funciones
5. **Validación robusta**: Crear tipos especiales (`PositiveNumber`, `NonEmptyArray`)
6. **Documentación JSDoc**: Agregar comentarios de tipo para mejor IDE support

---

## 📖 Referencias

- [TypeScript Handbook - The Basics](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript Type System](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Estadística Descriptiva - Wikipedia](https://es.wikipedia.org/wiki/Estad%C3%ADstica_descriptiva)
- [Khan Academy - Statistics](https://www.khanacademy.org/math/statistics-probability)

---

## ✅ Requisitos de Entrega

- ✅ Repositorio GitHub público: `typescript`
- ✅ Carpeta `modulo-1` con estructura completa
- ✅ Código TypeScript compilable sin errores (`npx tsc`)
- ✅ Todas las 5 funciones implementadas y tipadas
- ✅ `README.md` con documentación completa
- ✅ Ejemplos de uso en `src/index.ts`
- ✅ Archivo `types.ts` con interfaces definidas
- ✅ Git commits ordenados con mensajes descriptivos
- ✅ Código JavaScript generado en `dist/` (sin errores)

---

## 🎯 Checklist Final

Antes de considerar completado:

- [ ] `npm install` funciona sin errores
- [ ] `npx tsx src/index.ts` ejecuta y muestra salida esperada
- [ ] `npx tsc` compila sin warnings ni errors
- [ ] Archivos en `dist/` son JavaScript puro (sin tipos)
- [ ] Repositorio en GitHub sincronizado (git push)
- [ ] Todos los archivos tienen headers de comentarios JSDoc
- [ ] No hay warnings de TypeScript (strict: true activo)

---

## 👨‍💻 Autor

**Práctica TypeScript - Módulo 1: Sistema de Análisis Estadístico**  
Alumno: `josemanu-formacion-it`  
Fecha: 2026-04-27  
Repositorio: https://github.com/josemanu-formacion-it/typescript

---

**¡Listo para comenzar! 🚀**
