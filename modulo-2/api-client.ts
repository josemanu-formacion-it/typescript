/**
 * Servicio API Client
 * Simulación de un cliente de acceso a datos genérico
 * Demuestra cómo los genéricos permiten reutilizar código
 */

import { Estudiante } from '../domain/types/estudiante.js';
import { Asignatura } from '../domain/types/asignatura.js';

/**
 * Interface RespuestaAPI<T>
 * Estructura estándar para todas las respuestas de API
 * T es un parámetro genérico que se define al usar la interfaz
 */
export interface RespuestaAPI<T> {
  codigoEstado: number;        // Código HTTP (200, 404, 500, etc.)
  exito: boolean;              // Indicador de éxito
  datos: T;                    // Payload genérico del tipo T
  errores?: string[];          // Array opcional de mensajes de error
}

/**
 * Clase APIClient
 * Simula consultas a una base de datos con retardo
 */
export class APIClient {
  private retardo: number = 1000;  // Retardo en milisegundos (1 segundo)

  /**
   * Obtener recurso genérico
   * Funciona con cualquier tipo T (Estudiante, Asignatura, etc.)
   * 
   * @param endpoint - Ruta del recurso a obtener
   * @returns Promesa con el recurso tipado
   */
  async obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const respuesta: RespuestaAPI<T> = {
          codigoEstado: 200,
          exito: true,
          datos: this.simularDatos<T>(endpoint),
          errores: undefined
        };
        resolve(respuesta);
      }, this.retardo);
    });
  }

  /**
   * Simular datos según el endpoint
   * En una aplicación real, esto sería una consulta a una BD
   * 
   * @param endpoint - Ruta del recurso
   * @returns Datos simulados del tipo T
   */
  private simularDatos<T>(endpoint: string): T {
    if (endpoint.includes('estudiante')) {
      const estudiante: Estudiante = {
        id: 'EST-001',
        nombre: 'Juan Pérez García',
        email: 'juan.perez@universidad.edu',
        matricula: 'MAT-2024-001',
        fechaInscripcion: new Date('2024-01-15')
      };
      return estudiante as T;
    }

    if (endpoint.includes('asignatura')) {
      const asignatura: Asignatura = {
        id: 'ASG-101',
        nombre: 'Programación I',
        codigo: 'PRG-101',
        creditos: 6,
        semestre: 1,
        profesor: 'Dr. Carlos López'
      };
      return asignatura as T;
    }

    // Retorno genérico si no coincide con ningún endpoint
    return {} as T;
  }
}

/**
 * Instancia global del cliente API
 * Se exporta para usarla en todo el proyecto
 */
export const apiClient = new APIClient();
