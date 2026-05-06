# Módulo 3: Ecosistemas Modernos (React + TypeScript)

**Parte de:** [TypeScript - Fase 4](../README.md) (Repositorio separado: `react`)

## 📌 Descripción General

Este módulo integra TypeScript con **React**, la librería líder para construir interfaces de usuario. Combinando lo aprendido en módulos anteriores con componentes React, crearás una **aplicación web completamente tipada** donde cada componente, prop y estado está protegido por el sistema de tipos de TypeScript.

### Propósito del Módulo

Aplicar patrones avanzados de TypeScript (tipos de utilidad, análisis exhaustivo, uniones discriminadas) para construir componentes React robustos, escalables y mantenibles.

---

## 🎯 ¿Qué vamos a hacer?

En este módulo:

1. **Configurar un proyecto React moderno** con Vite y TypeScript
2. **Crear componentes genéricos** tipados correctamente
3. **Usar tipos de utilidad** para manipular tipos complejos
4. **Implementar análisis exhaustivo** con el tipo `never`
5. **Integrar librerías externas** con definiciones de tipos
6. **Documentar la arquitectura final** del proyecto

---

## 🏗️ Estructura del Proyecto

```
react/
├── src/
│   ├── components/
│   │   └── DataTable.tsx         # Componente genérico tipado
│   ├── services/
│   │   └── date-utils.ts         # Funciones utilitarias con tipos
│   ├── types/
│   │   └── index.ts              # Tipos globales
│   ├── App.tsx                   # Componente principal
│   └── main.tsx                  # Punto de entrada
├── dist/                         # Código compilado
├── docs/
│   └── arquitectura-final.md     # Documentación final
├── index.html                    # HTML base
├── tsconfig.json                 # Configuración de TypeScript
├── vite.config.ts                # Configuración de Vite
├── package.json                  # Dependencias
└── README.md                     # Este archivo
```

**Explicación:**
- `components/` → Componentes React tipados (DataTable, formularios, etc.)
- `services/` → Lógica reutilizable (cálculos, transformaciones, etc.)
- `types/` → Definiciones de tipos globales (interfaces, tipos, etc.)
- `docs/` → Documentación final sobre cómo funciona el proyecto

---

## 🛠️ Tecnologías Utilizadas

| Herramienta | Para qué sirve |
|---|---|
| **TypeScript** | Lenguaje con tipos estáticos |
| **React** | Librería para crear interfaces de usuario |
| **Vite** | Build tool moderno y rápido |
| **Node.js** | Entorno de ejecución |
| **npm** | Gestor de dependencias |
| **Librerías de fechas** | date-fns o luxon para manipular fechas |

---

## 📚 Conceptos Principales del Módulo

### 1. Componentes React Tipados

A diferencia de JavaScript puro, TypeScript requiere que definas qué props acepta cada componente:

```typescript
interface DataTableProps<T> {
  datos: T[];
  columnas: Array<{
    clave: keyof T;
    label: string;
  }>;
  onActualizar?: (item: T) => void;
}

export function DataTable<T>({ datos, columnas }: DataTableProps<T>) {
  return (
    <table>
      {/* Renderizar tabla */}
    </table>
  );
}

// Uso:
<DataTable<Estudiante> datos={estudiantes} columnas={columnasEstudiante} />
```

**Ventaja:** Si olvidas pasar una prop, TypeScript te avisa inmediatamente.

### 2. Tipos de Utilidad (Utility Types)

TypeScript proporciona herramientas para transformar tipos existentes:

```typescript
// Partial<T> → Todas las propiedades opcionales
type PartialEstudiante = Partial<Estudiante>; // id?, nombre?, email?

// Pick<T, K> → Seleccionar solo algunas propiedades
type NombreYEmail = Pick<Estudiante, "nombre" | "email">;

// Omit<T, K> → Todo excepto algunas propiedades
type SinContrasena = Omit<Usuario, "contrasena">;

// Record<K, T> → Crear un diccionario
type Calificaciones = Record<string, number>;
```

### 3. Análisis Exhaustivo con `never`

Garantizar que tu código maneja todos los casos posibles:

```typescript
type Accion = "crear" | "editar" | "eliminar" | "ver";

function procesarAccion(accion: Accion) {
  switch (accion) {
    case "crear": return "Creando...";
    case "editar": return "Editando...";
    case "eliminar": return "Eliminando...";
    case "ver": return "Viendo...";
    default:
      // Si añades un nuevo caso a Accion, aquí habrá error
      const exhaustivo: never = accion;
      throw new Error(`Acción no manejada: ${exhaustivo}`);
  }
}
```

**Ventaja:** Si añades "publicar" a `Accion`, el compilador te obliga a actualizar esta función.

### 4. Hooks de React Tipados

`useState` y otros hooks funcionan perfectamente con TypeScript:

```typescript
// Inferencia automática
const [cargando, setCargando] = useState(false); // boolean

// Tipado explícito para tipos complejos
const [datos, setDatos] = useState<Estudiante | null>(null);

// Para callbacks
const [callback, setCallback] = useState<(item: Estudiante) => void>(() => {});
```

---

## 📦 Instalación

### Paso 1: Crear proyecto con Vite

```bash
npm create vite@latest mi-proyecto-ui -- --template react-ts
cd mi-proyecto-ui
npm install
```

O si ya tienes la carpeta:

```bash
cd react
npm install
```

### Paso 2: Instalar librerías adicionales (si necesitas)

```bash
npm install date-fns
npm install --save-dev @types/date-fns
```

---

## 🚀 Cómo ejecutar

### Servidor de desarrollo (con hot reload):
```bash
npm run dev
```

Se abrirá en `http://localhost:5173` y se actualizará automáticamente al cambiar código.

### Compilar para producción:
```bash
npm run build
```

Genera archivos optimizados en `dist/`.

### Verificar tipos:
```bash
npx tsc --noEmit
```

---

## 📊 Componentes a Desarrollar

### 1. DataTable Genérico

Un componente versátil que muestra datos en forma de tabla:

```typescript
interface DataTableProps<T> {
  datos: T[];
  columnas: Array<{
    clave: keyof T;
    label: string;
    renderizar?: (valor: any) => React.ReactNode;
  }>;
  onEditar?: (item: T) => void;
  onEliminar?: (item: T) => void;
}

export function DataTable<T>({ datos, columnas, onEditar, onEliminar }: DataTableProps<T>) {
  // Implementación
}
```

**Casos de uso:**
- Mostrar lista de estudiantes
- Mostrar lista de asignaturas
- Reutilizable para cualquier tipo de dato

### 2. Funciones Utilitarias Tipadas

Herramientas para trabajar con datos:

```typescript
// Calcular días entre dos fechas
function calcularDias(inicio: Date, fin: Date): number {
  return Math.floor((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
}

// Filtrar datos
function filtrar<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}
```

---

## 💡 ¿Por qué React + TypeScript?

### Sin TypeScript (❌ Problemas):

```javascript
// Es difícil saber qué props necesita
function Card(props) {
  return <div>{props.titulo}</div>; // ¿Qué si falta titulo?
}

// Se ejecuta, pero falla en runtime
<Card /> // No error en desarrollo, falla al renderizar
```

### Con TypeScript (✅ Solución):

```typescript
interface CardProps {
  titulo: string;
  contenido: string;
}

function Card({ titulo, contenido }: CardProps) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{contenido}</p>
    </div>
  );
}

// ❌ ERROR en compilación si falta algo
<Card /> 

// ✅ CORRECTO
<Card titulo="Mi Tarjeta" contenido="Contenido aquí" />
```

---

## 🔧 Configuración TypeScript para React

Archivo `tsconfig.json` con soporte para JSX:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## ✅ Requisitos de Entrega

Para considerar el módulo completado:

- [ ] Repositorio GitHub separado llamado `react`
- [ ] Proyecto creado con `npm create vite@latest ... --template react-ts`
- [ ] Componente `DataTable<T>` genérico e implementado
- [ ] Props del DataTable tipadas correctamente
- [ ] Estado con `Partial<T>` para edición de filas
- [ ] Librerías externas instaladas (date-fns o luxon)
- [ ] Definiciones de tipos de librerías instaladas (@types/...)
- [ ] Función utilitaria para calcular diferencia de fechas
- [ ] Función `generarReporte()` refactorizada con análisis exhaustivo
- [ ] Archivo `docs/arquitectura-final.md` documentando todo
- [ ] Verificación: `npx tsc --noEmit` sin errores
- [ ] Servidor dev funciona: `npm run dev`
- [ ] Build funciona: `npm run build`
- [ ] Commits en Git con mensajes descriptivos

---

## 📚 Conceptos Clave

Durante este módulo aprenderás:

1. **Componentes React Tipados:** Props, estado, callbacks
2. **Tipos de Utilidad:** Partial, Pick, Omit, Record, Awaited
3. **Genéricos en React:** Componentes reutilizables con tipos
4. **Análisis Exhaustivo:** Garantizar manejo de todos los casos
5. **Librerías Externas:** Instalar y usar tipos (@types/...)
6. **Integración completa:** TypeScript + React + Vite

---

## 🔗 Relación con Módulos Anteriores

- **Módulo 1:** Lógica pura y tipos básicos → Usados en funciones utilitarias
- **Módulo 2:** Interfaces y uniones discriminadas → Usadas en componentes React
- **Módulo 3:** Todo junto → Aplicación completa tipada

---

## 📖 Documentación Complementaria

- `docs/arquitectura-final.md` → Explicación completa de la arquitectura
- `src/components/` → Componentes React tipados
- `src/types/` → Definiciones globales
- `src/services/` → Funciones utilitarias

---

## 💻 Requisitos Mínimos

- **Node.js** 16 o superior
- **npm** 8 o superior
- Editor de código (VSCode recomendado)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Haber completado módulos 1 y 2

---

## 🤔 ¿Preguntas Frecuentes?

**P: ¿Necesito saber React en profundidad?**  
R: Básico es suficiente. Este módulo enseña cómo tipar React, no React en sí.

**P: ¿Puedo usar otro bundler que no sea Vite?**  
R: Sí, pero Vite es el estándar moderno y está pre-configurado.

**P: ¿Necesito tener el repositorio `react` como subproyecto del `typescript`?**  
R: No. Deben ser repositorios independientes en GitHub.

**P: ¿Cuánto tiempo toma completar este módulo?**  
R: Entre 8-12 horas dependiendo de tu experiencia con React.

**P: ¿Qué es `noEmit` en TypeScript?**  
R: Verifica tipos sin generar archivos JavaScript. Útil para CI/CD.

---

## 👨‍💻 Información del Proyecto

**Módulo:** Ecosistemas Modernos (React + TypeScript)  
**Parte de:** TypeScript - Fase 4  
**Duración estimada:** 8-12 horas  
**Repositorio:** https://github.com/josemanu-formacion-it/react  
**Rama:** main

---

## 📞 Soporte

Si tienes dudas:

1. Revisa la documentación en `docs/arquitectura-final.md`
2. Consulta los ejemplos en `src/components/`
3. Revisa los tipos en `src/types/`
4. Consulta la documentación oficial de React con TypeScript

---

## 🎓 Conclusión de la Fase 4

Al completar este módulo, habrás dominado:

✅ TypeScript desde cero hasta patrones avanzados  
✅ Arquitectura de datos profesional  
✅ Integración con ecosistemas modernos (React)  
✅ Mejores prácticas de ingeniería de software  
✅ Cómo prevenir errores en tiempo de compilación  

---

**¡Felicidades por completar la Fase 4 de TypeScript! 🚀**

[← Volver al proyecto general](../README.md)
