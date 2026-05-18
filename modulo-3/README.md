# Módulo 3: Ecosistemas Modernos y React con TypeScript

Este módulo representa la culminación del curso, donde aplicamos TypeScript en un entorno de desarrollo frontend moderno utilizando React y Vite.

## Objetivos del Módulo

- **Integración con React:** Desarrollo de componentes funcionales utilizando Hooks y Props con tipado estricto.
- **Tipos de Utilidad:** Aplicación práctica de `Partial`, `Readonly`, `Pick`, `Omit` y `Record`.
- **Genéricos Avanzados:** Creación de componentes UI reutilizables y agnósticos al tipo de dato.
- **Librerías Externas:** Consumo de librerías de terceros (`Luxon`) con sus respectivos archivos de declaración de tipos (`.d.ts`).
- **Análisis Exhaustivo:** Uso del tipo `never` para garantizar que todos los casos de una unión discriminada sean manejados.

## Requisitos Previos

- Node.js instalado.
- Haber completado los módulos 1 y 2.

## Instalación

1. Navega al directorio del módulo:
   ```bash
   cd modulo-3
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Compila el proyecto para producción.
- `npm run preview`: Previsualiza la versión de producción localmente.
- `npm run check`: (Opcional) Ejecuta `tsc --noEmit` para verificar tipos en todo el proyecto.

## Estructura del Proyecto

- `src/components/DataTable.tsx`: Componente de tabla genérico y editable.
- `src/utils/date-utils.ts`: Utilidades de fecha utilizando Luxon.
- `src/App.tsx`: Punto de entrada de la aplicación UI con ejemplos de tipos de utilidad.
- `docs/arquitectura-final.md`: Documentación técnica detallada sobre las decisiones de diseño.

## Conceptos Clave Implementados

### DataTable Genérico
El componente `DataTable<T>` utiliza genéricos para renderizar cualquier tipo de datos, validando las claves de las columnas mediante `keyof T`.

### Gestión de Estado con Partial
El estado de edición utiliza `Partial<T>`, lo que permite que el usuario edite propiedades de forma incremental sin violar la integridad del tipo original.

### Seguridad con Never
Se ha implementado el patrón de chequeo exhaustivo en la lógica de negocio para prevenir regresiones al añadir nuevos tipos a las uniones.
