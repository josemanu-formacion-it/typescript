/**
 * Archivo Principal - index.ts
 * Ejemplos completos de uso del Módulo 2
 */

import { Estudiante } from './domain/types/estudiante.js';
import { Asignatura } from './domain/types/asignatura.js';
import {
  EstadoMatricula,
  MatriculaActiva,
  MatriculaSuspendida,
  MatriculaFinalizada,
  generarReporte
} from './domain/types/matricula.js';
import { apiClient, RespuestaAPI } from './services/api-client.js';

/**
 * ============================================
 * EJEMPLO 1: Crear instancias tipadas
 * ============================================
 */
function ejemplo1_CrearObjetos() {
  console.log('\n📋 === EJEMPLO 1: Crear Objetos Tipados ===\n');

  const estudiante: Estudiante = {
    id: 'EST-001',
    nombre: 'María García López',
    email: 'maria.garcia@universidad.edu',
    matricula: 'MAT-2024-002',
    fechaInscripcion: new Date('2024-01-20')
  };

  console.log('Estudiante creado:');
  console.log(`  ID: ${estudiante.id}`);
  console.log(`  Nombre: ${estudiante.nombre}`);
  console.log(`  Email: ${estudiante.email}`);
  console.log(`  Matrícula: ${estudiante.matricula}`);
  console.log(`  Fecha de inscripción: ${estudiante.fechaInscripcion.toLocaleDateString()}`);

  const asignatura: Asignatura = {
    id: 'ASG-102',
    nombre: 'Estructura de Datos',
    codigo: 'EDS-102',
    creditos: 6,
    semestre: 2,
    profesor: 'Dra. Ana Martínez'
  };

  console.log('\nAsignatura creada:');
  console.log(`  ID: ${asignatura.id}`);
  console.log(`  Nombre: ${asignatura.nombre}`);
  console.log(`  Código: ${asignatura.codigo}`);
  console.log(`  Créditos: ${asignatura.creditos}`);
  console.log(`  Semestre: ${asignatura.semestre}`);
  console.log(`  Profesor: ${asignatura.profesor}`);
}

/**
 * ============================================
 * EJEMPLO 2: Crear diferentes estados de matrícula
 * ============================================
 */
function ejemplo2_EstadosMatricula() {
  console.log('\n📋 === EJEMPLO 2: Estados de Matrícula ===\n');

  // Estado 1: Matrícula Activa
  const matriculaActiva: MatriculaActiva = {
    tipo: 'ACTIVA',
    asignaturas: ['ASG-101', 'ASG-102', 'ASG-103', 'ASG-104']
  };

  console.log('Estado 1 - ACTIVA:');
  console.log(`  Tipo: ${matriculaActiva.tipo}`);
  console.log(`  Asignaturas: ${matriculaActiva.asignaturas.length}`);
  console.log(`  ${matriculaActiva.asignaturas.join(', ')}`);

  // Estado 2: Matrícula Suspendida
  const matriculaSuspendida: MatriculaSuspendida = {
    tipo: 'SUSPENDIDA',
    motivo: 'Rendimiento académico insuficiente en el semestre anterior'
  };

  console.log('\nEstado 2 - SUSPENDIDA:');
  console.log(`  Tipo: ${matriculaSuspendida.tipo}`);
  console.log(`  Motivo: ${matriculaSuspendida.motivo}`);

  // Estado 3: Matrícula Finalizada
  const matriculaFinalizada: MatriculaFinalizada = {
    tipo: 'FINALIZADA',
    notaMedia: 8.45
  };

  console.log('\nEstado 3 - FINALIZADA:');
  console.log(`  Tipo: ${matriculaFinalizada.tipo}`);
  console.log(`  Nota Media: ${matriculaFinalizada.notaMedia}`);

  return { matriculaActiva, matriculaSuspendida, matriculaFinalizada };
}

/**
 * ============================================
 * EJEMPLO 3: Usar función generarReporte
 * ============================================
 */
function ejemplo3_GenerarReportes() {
  console.log('\n📋 === EJEMPLO 3: Generar Reportes ===\n');

  // Crear estados
  const estados: EstadoMatricula[] = [
    {
      tipo: 'ACTIVA',
      asignaturas: ['ASG-101', 'ASG-102', 'ASG-103']
    },
    {
      tipo: 'SUSPENDIDA',
      motivo: 'Deuda pendiente de pago'
    },
    {
      tipo: 'FINALIZADA',
      notaMedia: 7.85
    }
  ];

  // Generar reportes para cada estado
  console.log('Reportes por estado:\n');
  estados.forEach((estado, índice) => {
    const reporte = generarReporte(estado);
    console.log(`  Estado ${índice + 1}: ${reporte}`);
  });
}

/**
 * ============================================
 * EJEMPLO 4: Usar servicio genérico API
 * ============================================
 */
async function ejemplo4_ServicioAPI() {
  console.log('\n📋 === EJEMPLO 4: Servicio API Genérico ===\n');

  console.log('⏳ Obteniendo estudiante (esto tardará 1 segundo)...');
  const respuestaEstudiante: RespuestaAPI<Estudiante> = 
    await apiClient.obtenerRecurso<Estudiante>('estudiantes/EST-001');

  console.log('\nRespuesta del servidor:');
  console.log(`  Código de estado: ${respuestaEstudiante.codigoEstado}`);
  console.log(`  Éxito: ${respuestaEstudiante.exito}`);
  console.log(`  Datos:`);
  console.log(`    - ID: ${respuestaEstudiante.datos.id}`);
  console.log(`    - Nombre: ${respuestaEstudiante.datos.nombre}`);
  console.log(`    - Email: ${respuestaEstudiante.datos.email}`);

  console.log('\n⏳ Obteniendo asignatura (esto tardará 1 segundo)...');
  const respuestaAsignatura: RespuestaAPI<Asignatura> = 
    await apiClient.obtenerRecurso<Asignatura>('asignaturas/ASG-101');

  console.log('\nRespuesta del servidor:');
  console.log(`  Código de estado: ${respuestaAsignatura.codigoEstado}`);
  console.log(`  Éxito: ${respuestaAsignatura.exito}`);
  console.log(`  Datos:`);
  console.log(`    - ID: ${respuestaAsignatura.datos.id}`);
  console.log(`    - Nombre: ${respuestaAsignatura.datos.nombre}`);
  console.log(`    - Código: ${respuestaAsignatura.datos.codigo}`);
  console.log(`    - Créditos: ${respuestaAsignatura.datos.creditos}`);
}

/**
 * ============================================
 * FUNCIÓN PRINCIPAL
 * ============================================
 */
async function main() {
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║   MÓDULO 2: Modelado de Datos Complejo y Genéricos    ║');
  console.log('║   TypeScript - Fase 4                                 ║');
  console.log('╚════════════════════════════════════════════════════════╝');

  // Ejecutar ejemplos síncronos
  ejemplo1_CrearObjetos();
  ejemplo2_EstadosMatricula();
  ejemplo3_GenerarReportes();

  // Ejecutar ejemplo asincrónico
  await ejemplo4_ServicioAPI();

  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║   ✅ Módulo 2 completado                              ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');
}

// Ejecutar función principal
main().catch(console.error);
