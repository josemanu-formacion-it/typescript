# Módulo 1: Inicialización y Lógica Pura

**Parte de:** [TypeScript Learning Project](../README.md)

## 📌 Descripción General

Este módulo introduce los **fundamentos de TypeScript** a través de la implementación de un sistema de análisis estadístico. Es la primera fase de una progresión de 3 módulos que culmina en el desarrollo de una interfaz React completamente tipada.

### Propósito del Módulo

Configurar un entorno TypeScript con tipado estricto y crear funciones matemáticas robustas que demuestren cómo TypeScript previene errores comunes en JavaScript mediante validación de tipos en tiempo de compilación.

---

## 🎯 ¿Qué se ha hecho?

En este módulo:

1. **Configuración de TypeScript**: Se ha establecido una configuración base en la raíz y una específica para el módulo usando `extends`.
2. **Implementación de funciones**: Se han creado funciones de análisis estadístico (media, mediana, desviación estándar, etc.) en una librería compartida (`lib/`).
3. **Tipado estricto**: Uso de interfaces y tipos de unión (`number | null`) para garantizar la seguridad.
4. **Restructuración**: Organización del proyecto en una estructura de librería compartida y módulos de aplicación.

---

## 🏗️ Estructura del Proyecto

```
/
├── lib/                       # Librería compartida (core)
│   ├── math-utils.ts          # Funciones estadísticas
│   └── types.ts               # Definiciones de tipos
├── docs/                      # Documentación general
└── modulo-1/                  # Este módulo
    ├── src/
    │   └── index.ts           # Ejemplos de uso (consume lib/)
    ├── dist/                  # Código compilado a JavaScript
    ├── tsconfig.json          # Configuración de TypeScript
    ├── package.json           # Dependencias del módulo
    └── README.md              # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

| Herramienta | Para qué sirve |
|---|---|
| **TypeScript** | Lenguaje que añade tipos a JavaScript |
| **Node.js** | Entorno para ejecutar código JavaScript fuera del navegador |
| **npm** | Gestor de dependencias y paquetes |
| **tsx** | Ejecuta código TypeScript directamente sin compilación manual |
| **tsc** | Compilador oficial de TypeScript |

---

## 🚀 Cómo ejecutar el código

### Opción A: Ejecutar directamente con tsx (recomendado)
```bash
npx tsx src/index.ts
```

### Opción B: Compilar primero, luego ejecutar
```bash
npx tsc
node dist/modulo-1/src/index.js
```

---

## 📊 Funciones Implementadas (en `lib/`)

| Función | ¿Qué hace? |
|---|---|
| `calcularMedia()` | Promedio de un conjunto de números |
| `calcularMediana()` | Valor central de un conjunto ordenado |
| `calcularDesviacionEstandar()` | Mide cuánto varían los datos |
| `filtrarAtipicos()` | Elimina valores extraños (outliers) |
| `generarEstadisticas()` | Crea un informe completo con todas las métricas |

---

## ✅ Requisitos de Entrega

- [x] Carpeta `modulo-1` con toda la estructura
- [x] Archivo `tsconfig.json` con `strict: true` (heredado de la raíz)
- [x] 5 funciones implementadas y tipadas correctamente en `lib/`
- [x] Archivo `types.ts` con interfaces definidas en `lib/`
- [x] Archivo `index.ts` con ejemplos de uso
- [x] Comando `npx tsc` compila sin errores
- [x] Comando `npx tsx src/index.ts` ejecuta y muestra salida
- [x] Código JavaScript compilado en carpeta `dist/`
- [x] README.md con documentación actualizada
- [ ] Commits en Git con mensajes descriptivos (pendiente)

---

## 🔗 Próximos Pasos

Una vez completado este módulo, pasaremos a:

- **Módulo 2:** Modelado de datos complejo con genéricos y uniones discriminadas

---

[← Volver al proyecto general](../README.md)
