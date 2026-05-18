# Módulo 1: Inicialización y Lógica Pura

**Parte de:** [TypeScript - Fase 4](../README.md)

## 📌 Descripción

Implementación de un **módulo de análisis estadístico** utilizando TypeScript con tipado estricto. Este módulo introduce los fundamentos de TypeScript mediante funciones matemáticas puras que demuestran cómo el lenguaje previene errores comunes en JavaScript.

---

## 🎯 Objetivos

- Configurar un entorno TypeScript con modo `strict: true`
- Comprender tipos primitivos, inferencia y tipos especiales
- Implementar funciones tipadas para análisis estadístico
- Compilar código TypeScript a JavaScript puro
- Manejar casos límite (arrays vacíos, valores nulos)

---

## 🏗️ Estructura del Proyecto

```
modulo-1/
├── src/
│   └── index.ts               # Ejemplos de uso e implementación
├── dist/                      # Código compilado
├── docs/
│   └── analisis-estadistico.md
├── tsconfig.json
├── package.json
└── README.md
```

**Nota:** Este módulo utiliza utilidades compartidas ubicadas en la carpeta raíz `lib/`:
- `lib/math-utils.ts`: Funciones estadísticas compartidas.
- `lib/types.ts`: Definiciones de tipos comunes.

---

## 🛠️ Requisitos de Instalación

### Paso 1: Instalar dependencias

En la carpeta raíz del proyecto:
```bash
npm install
```

O dentro de `modulo-1`:
```bash
npm install --save-dev typescript tsx
```

### Paso 3: Crear tsconfig.json

```bash
npx tsc --init
```

**Configuración requerida:**

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
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Paso 4: Crear estructura de carpetas

```bash
mkdir -p src dist docs
```

---

## 📚 Funciones a Implementar

### 1. `calcularMedia(datos: number[]): number | null`

Calcula el promedio aritmético.

**Requisitos:**
- Parámetro: array de números
- Retorna: número o null si el array está vacío
- Fórmula: suma de elementos / cantidad de elementos

**Ejemplo:**
```typescript
calcularMedia([10, 20, 30]);  // 20
calcularMedia([]);            // null
```

---

### 2. `calcularMediana(datos: number[]): number | null`

Encuentra el valor central de un conjunto ordenado.

**Requisitos:**
- Parámetro: array de números
- Retorna: número o null si está vacío
- Si array impar: retorna elemento central
- Si array par: retorna promedio de dos centrales

**Ejemplo:**
```typescript
calcularMediana([3, 1, 2]);     // 2
calcularMediana([1, 2, 3, 4]);  // 2.5
calcularMediana([]);            // null
```

---

### 3. `calcularDesviacionEstandar(datos: number[]): number | null`

Mide la dispersión de datos respecto a la media.

**Requisitos:**
- Parámetro: array de números
- Retorna: número o null si está vacío
- Fórmula: raíz cuadrada de (suma de (xi - media)² / n)

**Ejemplo:**
```typescript
calcularDesviacionEstandar([10, 20, 30]);  // 8.16...
calcularDesviacionEstandar([]);            // null
```

---

### 4. `filtrarAtipicos(datos: number[], desviacionesPermitidas: number): number[]`

Filtra valores anómalos (outliers).

**Requisitos:**
- Parámetro 1: array de números
- Parámetro 2: número de desviaciones estándar permitidas
- Retorna: array sin outliers
- Criterio: si |xi - media| > k * desviación estándar, es atípico

**Ejemplo:**
```typescript
const datos = [10, 12, 15, 14, 13, 100, 11, 12];
filtrarAtipicos(datos, 2);  // [10, 12, 15, 14, 13, 11, 12] (sin 100)
```

---

### 5. `generarEstadisticas(datos: number[]): EstadisticasResumen | null`

Genera informe completo de estadísticas.

**Requisitos:**
- Parámetro: array de números
- Retorna: objeto EstadisticasResumen o null
- Incluye: media, mediana, desviación estándar, mínimo, máximo, cantidad

**Estructura de `EstadisticasResumen`:**

```typescript
interface EstadisticasResumen {
  media: number;
  mediana: number;
  desviacionEstandar: number;
  minimo: number;
  maximo: number;
  cantidad: number;
}
```

**Ejemplo:**
```typescript
generarEstadisticas([10, 15, 20, 25, 30]);
// {
//   media: 20,
//   mediana: 20,
//   desviacionEstandar: 7.07...,
//   minimo: 10,
//   maximo: 30,
//   cantidad: 5
// }
```

---

---

## 📝 Archivos Clave

### `src/index.ts`

Este archivo actúa como el punto de entrada para los ejemplos del Módulo 1. Importa funciones de la librería central (`lib/math-utils.ts`) y muestra su uso con datos reales y casos límite.

**Ejemplo de importación:**
```typescript
import { 
  calcularMedia, 
  calcularMediana, 
  generarEstadisticas 
} from '../../lib/math-utils.js';
```

---

## 🚀 Ejecución

### Ejecutar ejemplos directamente (sin compilar)

Desde la carpeta `modulo-1`:
```bash
npx tsx src/index.ts
```

### Compilar a JavaScript

```bash
npx tsc
```

### Verificar tipos sin compilar

```bash
npx tsc --noEmit
```

---

## 📊 Conceptos Clave Practicados

### 1. Tipos Primitivos
```typescript
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;
```

### 2. Union Types
```typescript
function retornar(): number | null {
  return Math.random() > 0.5 ? 42 : null;
}
```

### 3. Arrays Tipados
```typescript
let numeros: number[] = [1, 2, 3];
let logs: Array<string> = ["info", "error"];
```

### 4. Interfaces
```typescript
interface Datos {
  id: string;
  valor: number;
}
```

### 5. Firmas de Funciones
```typescript
function suma(a: number, b: number): number {
  return a + b;
}
```

### 6. Parámetros Opcionales
```typescript
function saludar(nombre: string, saludo?: string): void {
  console.log(saludo ? `${saludo}, ${nombre}` : `Hola, ${nombre}`);
}
```

### 7. Inferencia de Tipos
```typescript
let valor = 10;  // TypeScript infiere que es 'number'
let fecha = new Date();  // TypeScript infiere que es 'Date'
```

---

## ✅ Requisitos de Entrega

- [ ] Carpeta `modulo-1` con estructura completa
- [ ] `src/index.ts` con ejemplos de uso e importaciones desde `lib/`
- [ ] `tsconfig.json` con `strict: true`
- [ ] `package.json` con dependencias
- [ ] `npx tsc` compila sin errores
- [ ] `npx tsc --noEmit` sin advertencias
- [ ] `npx tsx src/index.ts` ejecuta correctamente
- [ ] README.md actualizado
- [ ] Commits en Git con mensajes descriptivos

---

## 🤔 Preguntas Frecuentes

**P: ¿Qué hago si el array está vacío en una función?**  
R: Retorna `null`. Esto indica que no hay datos válidos para calcular.

**P: ¿Debo usar `let` o `const`?**  
R: Usa `const` por defecto, solo `let` si necesitas reasignar la variable.

**P: ¿Qué significa `strict: true`?**  
R: Activa todas las comprobaciones de seguridad de TypeScript. Es obligatorio.

**P: ¿Los tipos desaparecen en el JavaScript compilado?**  
R: Sí, completamente. Solo son para verificación en desarrollo.

**P: ¿Puedo usar librerías externas para estadística?**  
R: No, implementa las funciones desde cero. El objetivo es aprender TypeScript.

---

## 📞 Recursos

- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Estadística Descriptiva: https://es.wikipedia.org/wiki/Estad%C3%ADstica_descriptiva

---

## 👨‍💻 Información

**Módulo:** Inicialización y Lógica Pura  
**Parte de:** TypeScript - Fase 4  
**Duración:** 4-8 horas  
**Dificultad:** Principiante-Intermedio  
**Repositorio:** https://github.com/josemanu-formacion-it/typescript

---

**[← Volver a Fase 4](../README.md) | [Ir a Módulo 2 →](../modulo-2/README.md)**