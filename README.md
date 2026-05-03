# Módulo 1: Inicialización y Lógica Pura

**Parte de:** [TypeScript - Fase 4](../README.md)

## 📌 Descripción General

Este módulo introduce los **fundamentos de TypeScript** a través de la implementación de un sistema de análisis estadístico. Es la primera fase de una progresión de 3 módulos que culmina en el desarrollo de una interfaz React completamente tipada.

### Propósito del Módulo

Configurar un entorno TypeScript con tipado estricto y crear funciones matemáticas robustas que demuestren cómo TypeScript previene errores comunes en JavaScript mediante validación de tipos en tiempo de compilación.

---

## 🎯 ¿Qué vamos a hacer?

En este módulo:

1. **Configurar TypeScript** con modo estricto (`tsconfig.json`)
2. **Implementar funciones de análisis estadístico** (media, mediana, desviación estándar, etc.)
3. **Tipar correctamente** parámetros y retornos de funciones
4. **Compilar código TypeScript** a JavaScript puro
5. **Documentar decisiones arquitectónicas** del proyecto

---

## 🏗️ Estructura del Proyecto

```
modulo-1/
├── src/
│   ├── math-utils.ts          # Funciones estadísticas
│   ├── types.ts               # Definiciones de tipos
│   └── index.ts               # Ejemplos de uso
├── dist/                      # Código compilado a JavaScript
├── docs/                      # Documentación adicional
├── tsconfig.json              # Configuración de TypeScript
├── package.json               # Dependencias del proyecto
└── README.md                  # Este archivo
```

**Explicación:**
- `src/` → Tu código TypeScript (lo que escribes)
- `dist/` → JavaScript generado (lo que se ejecuta)
- `types.ts` → Define las estructuras de datos (interfaces)
- `math-utils.ts` → Contiene las funciones de cálculo

---

## 🛠️ Tecnologías Utilizadas

| Herramienta | Para qué sirve |
|---|---|
| **TypeScript** | Lenguaje que añade tipos a JavaScript |
| **Node.js** | Entorno para ejecutar código JavaScript fuera del navegador |
| **npm** | Gestor de dependencias y paquetes |
| **tsx** | Ejecuta código TypeScript directamente sin compilación manual |
| **tsc** | Compilador oficial de TypeScript (incluido en npm install) |

---

## 📦 Instalación

### Paso 1: Navega a la carpeta del módulo
```bash
cd modulo-1
```

### Paso 2: Instala las dependencias
```bash
npm install
```

Esto instala TypeScript y las herramientas necesarias basadas en `package.json`.

---

## 🚀 Cómo ejecutar el código

### Opción A: Ejecutar directamente con tsx (recomendado)
```bash
npx tsx src/index.ts
```

**Ventaja:** No necesitas compilar manualmente, se ejecuta el TypeScript directamente.

### Opción B: Compilar primero, luego ejecutar
```bash
npx tsc
node dist/index.js
```

**Ventaja:** Puedes ver el JavaScript generado en la carpeta `dist/`.

---

## 📊 Funciones Implementadas

Se implementarán 5 funciones estadísticas clave:

| Función | ¿Qué hace? |
|---|---|
| `calcularMedia()` | Promedio de un conjunto de números |
| `calcularMediana()` | Valor central de un conjunto ordenado |
| `calcularDesviacionEstandar()` | Mide cuánto varían los datos |
| `filtrarAtipicos()` | Elimina valores extraños (outliers) |
| `generarEstadisticas()` | Crea un informe completo con todas las métricas |

Todas están tipadas con TypeScript para garantizar que se usan correctamente.

---

## 💡 ¿Por qué TypeScript?

### El problema con JavaScript puro:

```javascript
// JavaScript: esto "funciona" pero es un error
function suma(a, b) {
  return a + b;
}

suma("10", "20"); // Retorna "1020" en lugar de 30 ❌
```

### La solución con TypeScript:

```typescript
// TypeScript: el compilador lo rechaza antes de ejecutar
function suma(a: number, b: number): number {
  return a + b;
}

suma("10", "20"); // ERROR en compilación ✅
```

**Beneficio:** Los errores se detectan durante el desarrollo, no en producción.

---

## 🔧 Configuración TypeScript

El archivo `tsconfig.json` configura cómo TypeScript debe compilar tu código:

- **`strict: true`** → Activa todas las comprobaciones de seguridad
- **`target: ES2022`** → JavaScript moderno como salida
- **`outDir: ./dist`** → Dónde guardar el código compilado
- **`rootDir: ./src`** → Dónde buscar el código fuente

Esta configuración **asegura máxima seguridad** en el tipado.

---

## ✅ Requisitos de Entrega

Para considerar el módulo completado:

- [ ] Carpeta `modulo-1` con toda la estructura
- [ ] Archivo `tsconfig.json` con `strict: true`
- [ ] 5 funciones implementadas y tipadas correctamente
- [ ] Archivo `types.ts` con interfaces definidas
- [ ] Archivo `index.ts` con ejemplos de uso
- [ ] Comando `npx tsc` compila sin errores
- [ ] Comando `npx tsx src/index.ts` ejecuta y muestra salida
- [ ] Código JavaScript compilado en carpeta `dist/`
- [ ] README.md con documentación del módulo
- [ ] Commits en Git con mensajes descriptivos

---

## 📚 Conceptos Clave

Durante este módulo aprenderás:

1. **Tipos primitivos**: `number`, `string`, `boolean`
2. **Union types**: `number | null` (puede ser número O nulo)
3. **Interfaces**: Definir la forma de los objetos
4. **Inferencia de tipos**: TypeScript deduce tipos automáticamente
5. **Compilación**: Convertir TypeScript a JavaScript puro

Cada concepto se practica a través de las funciones estadísticas.

---

## 🔗 Próximos Pasos

Una vez completado este módulo, pasarás a:

- **Módulo 2:** Modelado de datos complejo con genéricos y uniones discriminadas
- **Módulo 3:** Desarrollo de interfaces React con TypeScript (en repositorio separado)

---

## 📖 Documentación Complementaria

- `docs/` → Documentación técnica detallada
- `src/types.ts` → Definición de interfaces utilizadas
- `src/index.ts` → Ejemplos de uso de todas las funciones

---

## 💻 Requisitos Mínimos

- **Node.js** 16 o superior
- **npm** 8 o superior
- Editor de código (VSCode recomendado)
- Conexión a internet (para instalar dependencias)

---

## 🤔 ¿Preguntas Frecuentes?

**P: ¿Necesito saber JavaScript avanzado?**  
R: No, pero es útil conocer lo básico (variables, funciones, arrays).

**P: ¿Cuánto tiempo toma completar este módulo?**  
R: Entre 4-8 horas dependiendo de tu experiencia.

**P: ¿Puedo usar otro editor además de VSCode?**  
R: Sí, pero VSCode tiene soporte nativo para TypeScript que facilita mucho el desarrollo.

**P: ¿Qué pasa con el código TypeScript después de compilar?**  
R: Se convierte a JavaScript puro. Los tipos desaparecen completamente en el `.js`.

---

## 👨‍💻 Información del Proyecto

**Módulo:** Inicialización y Lógica Pura  
**Parte de:** TypeScript - Fase 4  
**Duración estimada:** 4-8 horas  
**Repositorio:** https://github.com/josemanu-formacion-it/typescript  
**Rama:** main

---

## 📞 Soporte

Si tienes dudas:

1. Revisa la documentación en `docs/`
2. Consulta los ejemplos en `src/index.ts`
3. Revisa el TypeScript Handbook oficial

---

[← Volver al proyecto general](../README.md)