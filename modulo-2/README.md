# Módulo 2: Modelado de Datos Complejo, Patrones y Genéricos

**Parte de:** [TypeScript - Fase 4](../README.md)

## 📌 Descripción

Implementación de una **arquitectura de datos profesional** para un sistema de gestión universitario. Este módulo introduce patrones avanzados de TypeScript: interfaces, tipos de unión, uniones discriminadas y genéricos.

---

## 🎯 Objetivos

- Modelar entidades complejas usando interfaces
- Implementar Uniones Discriminadas (patrón profesional)
- Crear servicios genéricos reutilizables
- Simular acceso a datos con Promesas tipadas
- Documentar decisiones arquitectónicas

---

## 🏗️ Estructura del Proyecto

```
modulo-2/
├── src/
│   ├── domain/
│   │   └── types/
│   │       ├── estudiante.ts
│   │       ├── asignatura.ts
│   │       └── matricula.ts
│   ├── services/
│   │   └── api-client.ts
│   └── index.ts
├── dist/
├── docs/
│   └── arquitectura.md
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ Requisitos de Instalación

### Paso 1: Inicializar proyecto

```bash
cd modulo-2
npm init -y
```

### Paso 2: Instalar dependencias

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
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Paso 4: Crear estructura de carpetas

```bash
mkdir -p src/domain/types src/services dist docs
```

---

## 📚 Parte 1: Modelado del Dominio

### 1.1 Interface `Estudiante`

**Archivo:** `src/domain/types/estudiante.ts`

**Requisitos:**
- `id: string` (readonly)
- `nombre: string`
- `email: string`
- Propiedades adicionales opcionales (matricula, fechaInscripcion, etc.)

**Implementación mínima:**

```typescript
export interface Estudiante {
  readonly id: string;
  nombre: string;
  email: string;
}
```

**Implementación completa (sugerida):**

```typescript
export interface Estudiante {
  readonly id: string;
  nombre: string;
  email: string;
  matricula: string;
  fechaInscripcion: Date;
}
```

---

### 1.2 Interface `Asignatura`

**Archivo:** `src/domain/types/asignatura.ts`

**Requisitos:**
- `id: string` (readonly)
- `nombre: string`
- `codigo: string`
- `creditos: number`
- Propiedades adicionales opcionales

**Implementación mínima:**

```typescript
export interface Asignatura {
  readonly id: string;
  nombre: string;
  codigo: string;
  creditos: number;
}
```

**Implementación completa (sugerida):**

```typescript
export interface Asignatura {
  readonly id: string;
  nombre: string;
  codigo: string;
  creditos: number;
  semestre: number;
  profesor: string;
}
```

---

### 1.3 Unión Discriminada `EstadoMatricula`

**Archivo:** `src/domain/types/matricula.ts`

Este es el patrón más importante. La clave es usar una propiedad "discriminante" para que TypeScript sepa exactamente qué propiedades existen en cada estado.

**Requisito: 3 interfaces exactas**

```typescript
// Estado 1: Estudiante actualmente matriculado
export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: string[];  // IDs de asignaturas
}

// Estado 2: Estudiante suspendido temporalmente
export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: string;  // Razón de la suspensión
}

// Estado 3: Estudiante que completó sus estudios
export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;  // Calificación promedio
}

// Unión que agrupa los tres estados
export type EstadoMatricula = 
  | MatriculaActiva 
  | MatriculaSuspendida 
  | MatriculaFinalizada;
```

**Por qué este patrón es importante:**

Evita propiedades opcionales contradictorias:

```typescript
// ❌ MALO: Confuso
interface MatriculaMala {
  estado: string;
  asignaturas?: string[];
  motivo?: string;
  notaMedia?: number;
}

// ✅ BUENO: Claro - cada estado tiene sus propiedades exactas
type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;
```

---

### 1.4 Función `generarReporte()`

**Ubicación:** `src/domain/types/matricula.ts` (al final)

**Requisitos:**
- Parámetro: `estado: EstadoMatricula`
- Retorna: `string` descriptivo
- Usa switch sobre la propiedad `tipo`
- Retorna mensaje diferente para cada estado

**Implementación:**

```typescript
export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Estudiante matriculado en ${estado.asignaturas.length} asignaturas`;
    
    case "SUSPENDIDA":
      return `Matrícula suspendida. Motivo: ${estado.motivo}`;
    
    case "FINALIZADA":
      return `Matrícula finalizada con nota media: ${estado.notaMedia.toFixed(2)}`;
  }
}
```

**Nota importante:** En el Módulo 3, mejorarás esta función con análisis exhaustivo usando `never`.

---

## 📚 Parte 2: Servicio de Datos Genérico

### 2.1 Interface `RespuestaAPI<T>`

**Ubicación:** `src/services/api-client.ts` (inicio del archivo)

**Requisitos:**
- `codigoEstado: number` (código HTTP: 200, 404, 500, etc.)
- `exito: boolean` (indicador de éxito)
- `datos: T` (genérico - payload del tipo que sea)
- `errores?: string[]` (opcional - mensajes de error)

**Implementación:**

```typescript
export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}
```

---

### 2.2 Función `obtenerRecurso<T>()`

**Ubicación:** `src/services/api-client.ts`

**Requisitos:**
- Función genérica que funcione con cualquier tipo T
- Parámetro: `endpoint: string`
- Retorna: `Promise<T>` tipada
- Simula una consulta asincrónica con `setTimeout`
- Retardo mínimo: 1000ms (1 segundo)

**Implementación (Opción 1 - Con clase):**

```typescript
export class APIClient {
  private retardo: number = 1000;

  async obtenerRecurso<T>(endpoint: string): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const datos = this.simularDatos<T>(endpoint);
        resolve(datos);
      }, this.retardo);
    });
  }

  private simularDatos<T>(endpoint: string): T {
    // Simulación según el endpoint
    if (endpoint.includes('estudiante')) {
      return {
        id: 'EST-001',
        nombre: 'Juan Pérez',
        email: 'juan@universidad.edu'
      } as T;
    }
    return {} as T;
  }
}

export const apiClient = new APIClient();
```

**Implementación (Opción 2 - Con funciones):**

```typescript
export async function obtenerRecurso<T>(endpoint: string): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datos = simularDatos<T>(endpoint);
      resolve(datos);
    }, 1000);
  });
}

function simularDatos<T>(endpoint: string): T {
  if (endpoint.includes('estudiante')) {
    return {
      id: 'EST-001',
      nombre: 'Juan Pérez',
      email: 'juan@universidad.edu'
    } as T;
  }
  return {} as T;
}
```

---

### 2.3 Retornar RespuestaAPI<T>

**Mejora del servicio:**

El servicio debe retornar `RespuestaAPI<T>` completa, no solo los datos:

```typescript
export async function obtenerRecurso<T>(
  endpoint: string
): Promise<RespuestaAPI<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const respuesta: RespuestaAPI<T> = {
        codigoEstado: 200,
        exito: true,
        datos: simularDatos<T>(endpoint),
        errores: undefined
      };
      resolve(respuesta);
    }, 1000);
  });
}
```

---

## 📝 Archivos a Crear

### `src/index.ts` - Ejemplos de Uso

**Requisitos:**
- Crear instancias de Estudiante y Asignatura
- Crear diferentes estados de EstadoMatricula
- Usar generarReporte() con cada estado
- Llamar a obtenerRecurso<T>() con diferentes tipos

**Estructura:**

```typescript
import { Estudiante } from './domain/types/estudiante';
import { Asignatura } from './domain/types/asignatura';
import { 
  EstadoMatricula, 
  MatriculaActiva, 
  MatriculaSuspendida,
  MatriculaFinalizada,
  generarReporte 
} from './domain/types/matricula';
import { obtenerRecurso } from './services/api-client';

// Ejemplo 1: Crear objetos tipados
const estudiante: Estudiante = {
  id: 'EST-001',
  nombre: 'María García',
  email: 'maria@universidad.edu',
  matricula: 'MAT-2024-001',
  fechaInscripcion: new Date('2024-01-15')
};

const asignatura: Asignatura = {
  id: 'ASG-101',
  nombre: 'Programación I',
  codigo: 'PRG-101',
  creditos: 6,
  semestre: 1,
  profesor: 'Dr. López'
};

// Ejemplo 2: Crear diferentes estados de matrícula
const matriculaActiva: MatriculaActiva = {
  tipo: 'ACTIVA',
  asignaturas: ['ASG-101', 'ASG-102', 'ASG-103']
};

const matriculaSuspendida: MatriculaSuspendida = {
  tipo: 'SUSPENDIDA',
  motivo: 'Rendimiento académico insuficiente'
};

const matriculaFinalizada: MatriculaFinalizada = {
  tipo: 'FINALIZADA',
  notaMedia: 7.85
};

// Ejemplo 3: Generar reportes
console.log('Estado 1:', generarReporte(matriculaActiva));
console.log('Estado 2:', generarReporte(matriculaSuspendida));
console.log('Estado 3:', generarReporte(matriculaFinalizada));

// Ejemplo 4: Usar servicio genérico
async function ejemploServicio() {
  console.log('Obteniendo estudiante...');
  const respuestaEstudiante = await obtenerRecurso<Estudiante>('estudiantes/EST-001');
  console.log('Respuesta:', respuestaEstudiante);

  console.log('\nObteniendo asignatura...');
  const respuestaAsignatura = await obtenerRecurso<Asignatura>('asignaturas/ASG-101');
  console.log('Respuesta:', respuestaAsignatura);
}

ejemploServicio();
```

---

### `docs/arquitectura.md`

**Requisitos:**
- Explicar por qué usaste Interfaces vs Type Aliases
- Documentar el patrón de Unión Discriminada
- Explicar cómo funcionan los Genéricos en el servicio
- Justificar decisiones de diseño

**Estructura sugerida:**

```markdown
# Arquitectura - Módulo 2

## Modelo de Datos

### Interfaces: Estudiante y Asignatura

Se utilizan **interfaces** porque representan entidades reales del dominio.

#### Propiedades inmutables

Las IDs están marcadas con `readonly` porque...

### Type Union: EstadoMatricula

Se utiliza **type** porque es una unión de múltiples estados.

## Uniones Discriminadas

El patrón utiliza la propiedad `tipo` como discriminante...

### Ventajas

1. TypeScript sabe exactamente qué propiedades existen
2. No hay propiedades opcionales contradictorias
3. Obliga a manejar todos los casos

### Ejemplo

Cuando haces un switch sobre `tipo`, TypeScript...

## Genéricos en el Servicio

La función `obtenerRecurso<T>()` funciona para cualquier tipo porque...

### Ventajas

1. Código reutilizable
2. Tipado seguro
3. Funciona con Estudiante, Asignatura, u otros tipos

## Simulación con setTimeout

Se usa `setTimeout` para simular...

## Interfaz RespuestaAPI<T>

Estructura estándar para respuestas de API...
```

---

## 🚀 Ejecución

### Ejecutar ejemplos

```bash
npx tsx src/index.ts
```

### Compilar

```bash
npx tsc
```

### Verificar tipos

```bash
npx tsc --noEmit
```

---

## 📊 Conceptos Clave Practicados

### 1. Interfaces vs Type Aliases

```typescript
// Interface - para objetos/estructuras
interface Usuario {
  id: string;
  nombre: string;
}

// Type - para uniones, primitivos, literales
type Estado = "ACTIVO" | "INACTIVO";
type ID = string;
```

### 2. Union Types

```typescript
type Resultado = string | number | null;

function procesar(valor: Resultado) {
  if (typeof valor === 'string') {
    // Aquí sabemos que es string
  }
}
```

### 3. Uniones Discriminadas

```typescript
type Respuesta = 
  | { estado: "EXITO"; datos: any }
  | { estado: "ERROR"; error: string };

function manejar(resp: Respuesta) {
  switch (resp.estado) {
    case "EXITO":
      console.log(resp.datos);  // TypeScript sabe que existe
      break;
    case "ERROR":
      console.log(resp.error);  // TypeScript sabe que existe
      break;
  }
}
```

### 4. Genéricos

```typescript
// Función genérica que funciona con cualquier tipo T
async function obtener<T>(id: string): Promise<T> {
  // ...
}

// Uso
const estudiante = await obtener<Estudiante>("123");
const asignatura = await obtener<Asignatura>("456");
```

### 5. Promesas Tipadas

```typescript
function obtenerDatos(): Promise<Estudiante> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "1",
        nombre: "Juan",
        email: "juan@email.com"
      });
    }, 1000);
  });
}
```

### 6. Readonly

```typescript
interface Registro {
  readonly id: string;  // No puede cambiar después de creación
  nombre: string;       // Puede cambiar
}
```

---

## ✅ Requisitos de Entrega

- [ ] Carpeta `modulo-2` con estructura completa
- [ ] `src/domain/types/estudiante.ts` con interface Estudiante
- [ ] `src/domain/types/asignatura.ts` con interface Asignatura
- [ ] `src/domain/types/matricula.ts` con:
  - [ ] MatriculaActiva (tipo: "ACTIVA")
  - [ ] MatriculaSuspendida (tipo: "SUSPENDIDA")
  - [ ] MatriculaFinalizada (tipo: "FINALIZADA")
  - [ ] Type EstadoMatricula (unión de los tres)
  - [ ] Función generarReporte(estado): string
- [ ] `src/services/api-client.ts` con:
  - [ ] Interface RespuestaAPI<T>
  - [ ] Función obtenerRecurso<T>(): Promise<T>
  - [ ] Simulación con setTimeout
- [ ] `src/index.ts` con ejemplos completos
- [ ] `docs/arquitectura.md` documentado
- [ ] `tsconfig.json` con `strict: true`
- [ ] `package.json` con dependencias
- [ ] `dist/` generado sin errores
- [ ] `npx tsc --noEmit` sin advertencias
- [ ] Commits descriptivos en Git

---

## 🤔 Preguntas Frecuentes

**P: ¿Qué es exactamente una Unión Discriminada?**  
R: Es cuando tienes múltiples tipos que comparten una propiedad literal (discriminante) que TypeScript usa para saber exactamente qué tipo es.

**P: ¿Puedo añadir más propiedades a Estudiante?**  
R: Sí, siempre que mantengas `id: string` (readonly), `nombre` y `email`.

**P: ¿Por qué usar `readonly` en `id`?**  
R: Porque el ID es la identidad inmutable de la entidad. No debe cambiar nunca.

**P: ¿Necesito simular datos reales o solo estructuras?**  
R: Datos simples, lo importante es el tipado. Puedes retornar datos mock.

**P: ¿Qué diferencia hay entre interface y type?**  
R: Interface es para objetos, type es para uniones, primitivos y tipos más complejos.

**P: ¿Puedo usar una clase en lugar de funciones en el servicio?**  
R: Sí, ambas opciones son válidas. Elige lo que te parezca más claro.

---

## 📞 Recursos

- TypeScript Handbook - Interfaces: https://www.typescriptlang.org/docs/handbook/2/objects.html
- TypeScript Handbook - Types: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
- Effective TypeScript - Item 28: Prefer Types That Represent Valid States

---

## 👨‍💻 Información

**Módulo:** Modelado de Datos Complejo, Patrones y Genéricos  
**Parte de:** TypeScript - Fase 4  
**Duración:** 6-10 horas  
**Requisitos previos:** Módulo 1 completado  
**Dificultad:** Intermedio  
**Repositorio:** https://github.com/josemanu-formacion-it/typescript

---

**[← Volver a Fase 4](../README.md) | [← Volver a Módulo 1](../modulo-1/README.md) | [Ir a Módulo 3 →]**