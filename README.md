# TypeScript - Fase 4

Repositorio de prácticas de **TypeScript: Arquitectura, tipos estrictos, genéricos y laboratorios prácticos**.

## 📋 Descripción General

Esta fase desarrolla una progresión completa en **TypeScript**, desde los fundamentos de tipado estricto hasta patrones avanzados de arquitectura de software. Se divide en **3 módulos independientes** enfocados en aspectos específicos del lenguaje y su aplicación práctica.

---

## 🏗️ Estructura del Proyecto

```
typescript/
├── modulo-1/
│   ├── src/
│   ├── dist/
│   ├── docs/
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
├── modulo-2/
│   ├── src/
│   ├── dist/
│   ├── docs/
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
└── README.md (este archivo)

react/
├── src/
├── docs/
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📚 Módulos

### **Módulo 1: Inicialización y Lógica Pura**

Fundamentos de TypeScript con enfoque en tipado estricto y funciones puras.

- **Objetivo:** Configurar TypeScript, trabajar con tipos primitivos e implementar funciones de análisis estadístico
- **Duración:** 4-8 horas
- **Entregables:** Módulo math-utils, configuración estricta, código compilado
- **[Ver detalles →](modulo-1/README.md)**

---

### **Módulo 2: Modelado de Datos Complejo, Patrones y Genéricos**

Arquitectura de datos con interfaces, tipos de unión y programación genérica.

- **Objetivo:** Diseñar modelos de dominio, crear Uniones Discriminadas e implementar servicios genéricos
- **Duración:** 6-10 horas
- **Entregables:** Modelos de dominio, servicio de acceso a datos, documentación arquitectónica
- **[Ver detalles →](modulo-2/README.md)**

---

### **Módulo 3: Ecosistemas Modernos (React + TypeScript)**

Integración con React, componentes tipados y tipos de utilidad.

- **Objetivo:** Crear componentes React fuertemente tipados, integrar librerías externas y documentar arquitectura
- **Duración:** 8-12 horas
- **Ubicación:** Repositorio separado `react`
- **Entregables:** Componente DataTable genérico, integración con librerías, documentación final
- **[Ver detalles →](https://github.com/josemanu-formacion-it/react)**

---

## 🛠️ Herramientas Utilizadas

| Herramienta | Versión | Propósito |
|---|---|---|
| **TypeScript** | Latest | Lenguaje de tipado estático |
| **Node.js** | 16+ | Entorno de ejecución |
| **npm** | 8+ | Gestor de dependencias |
| **tsx** | Latest | Ejecutor de TypeScript |
| **Vite** | Latest | Build tool para React (Módulo 3) |
| **React** | 18+ | Librería UI (Módulo 3) |

---

## 📦 Instalación Rápida

### Prerequisitos

- Node.js 16 o superior
- npm 8 o superior
- Git

### Pasos

1. **Clonar repositorio:**
   ```bash
   git clone https://github.com/josemanu-formacion-it/typescript.git
   cd typescript
   ```

2. **Navegar al módulo deseado:**
   ```bash
   cd modulo-1  # o modulo-2
   npm install
   ```

3. **Ejecutar:**
   ```bash
   npx tsx src/index.ts
   ```

4. **Compilar:**
   ```bash
   npx tsc
   ```

---

## ✅ Criterios de Calidad

- ✅ Modo `strict: true` en todos los módulos
- ✅ Cero errores de tipos (`npx tsc --noEmit`)
- ✅ Documentación arquitectónica completa
- ✅ Repositorios independientes (sin anidamiento)
- ✅ Commits descriptivos en Git

---

## 📖 Documentación

- **Módulo 1:** `modulo-1/README.md`
- **Módulo 2:** `modulo-2/README.md`
- **Módulo 3:** Ver repositorio `react`
- **Arquitectura:** Archivos `docs/` en cada módulo

---

## 📝 Notas Importantes

- Módulos 1 y 2 se desarrollan en este repositorio
- Módulo 3 se desarrolla en repositorio `react` separado
- Cada módulo es independiente pero progresivo
- Se recomienda completar en orden (1 → 2 → 3)

---

## 👤 Autor

José Manuel - Formación IT

## 📅 Fecha

Fase 4 - 2024/2025

---

**[Ver Módulo 1 →](modulo-1/README.md) | [Ver Módulo 2 →](modulo-2/README.md)**