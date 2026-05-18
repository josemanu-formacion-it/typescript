# Módulo 2: Modelado de Datos Complejo, Patrones y Genéricos

Este módulo forma parte del curso de TypeScript y se centra en técnicas avanzadas de modelado de datos, el uso de patrones comunes y la implementación de tipos genéricos para crear código reutilizable y robusto.

## Objetivos del Módulo

- Aprender a definir estructuras de datos complejas mediante **Interfaces**.
- Implementar el patrón de **Uniones Discriminadas** para gestionar estados de forma segura.
- Utilizar **Genéricos** para crear servicios y respuestas de API reutilizables.
- Practicar el tipado fuerte en entornos asíncronos.

## Conceptos Clave

### 1. Modelado con Interfaces
Se definen entidades claras como `Estudiante` y `Asignatura` con propiedades de solo lectura (`readonly`) y tipos bien definidos.

### 2. Uniones Discriminadas (`EstadoMatricula`)
Utilizamos una propiedad `tipo` para distinguir entre diferentes estados de una matrícula (`ACTIVA`, `SUSPENDIDA`, `FINALIZADA`). Esto permite que TypeScript realice un análisis de flujo de control preciso en funciones como `generarReporte`.

### 3. Genéricos (`RespuestaAPI<T>`)
Implementación de un cliente de API genérico que puede manejar cualquier tipo de recurso, garantizando que los datos devueltos coincidan con el tipo solicitado.

## Contenido del Módulo

- `src/domain/types/estudiante.ts`: Definición de la interfaz de Estudiante.
- `src/domain/types/asignatura.ts`: Definición de la interfaz de Asignatura.
- `src/domain/types/matricula.ts`: Tipos para estados de matrícula y lógica de reportes (Uniones Discriminadas).
- `src/services/api-client.ts`: Servicio simulado que demuestra el uso de Genéricos en TypeScript.
- `src/index.ts`: Punto de entrada principal que contiene ejemplos prácticos de todos los conceptos anteriores.

## Scripts Disponibles

En el directorio del módulo, puedes ejecutar:

- `npm run dev`: Ejecuta el proyecto en modo desarrollo usando `tsx`.
- `npm run build`: Compila el proyecto a JavaScript usando `tsc`.
- `npm run check`: Ejecuta el verificador de tipos de TypeScript sin generar archivos.
- `npm run clean`: Elimina la carpeta `dist`.

## Tecnologías Utilizadas

- **TypeScript**: Lenguaje principal.
- **tsx**: Para la ejecución rápida en desarrollo.
- **Node.js**: Entorno de ejecución.
