import { useState } from 'react';
import './App.css';
import { DataTable, type ColumnConfig } from './components/DataTable';
import { calcularDiferenciaDias } from './utils/date-utils';

// Interfaz Servidor (del enunciado)
interface Servidor {
  id: string;
  ip: string;
  puerto: number;
  estado: 'ACTIVO' | 'INACTIVO' | 'MANTENIMIENTO';
  ultimaRevision: string; // ISO Date
}

// Tipo de utilidad: Para actualizar solo puerto y estado, omitiendo IP (inmutable)
type DatosActualizacionServidor = Partial<Omit<Servidor, "ip">>;

function App() {
  const [servidores, setServidores] = useState<Servidor[]>([
    { id: '1', ip: '192.168.1.1', puerto: 8080, estado: 'ACTIVO', ultimaRevision: '2024-05-01' },
    { id: '2', ip: '10.0.0.5', puerto: 3000, estado: 'MANTENIMIENTO', ultimaRevision: '2024-05-10' },
    { id: '3', ip: '172.16.0.20', puerto: 5432, estado: 'INACTIVO', ultimaRevision: '2024-04-15' },
  ]);

  const columnas: ColumnConfig<Servidor>[] = [
    { key: 'id', label: 'ID' },
    { key: 'ip', label: 'Dirección IP' },
    { key: 'puerto', label: 'Puerto' },
    { key: 'estado', label: 'Estado' },
    { key: 'ultimaRevision', label: 'Última Revisión' },
  ];

  const handleSave = (item: Partial<Servidor>) => {
    // Demostración de tipo de utilidad: DatosActualizacionServidor
    const actualizacion: DatosActualizacionServidor = {
      puerto: item.puerto ? Number(item.puerto) : undefined,
      estado: item.estado as Servidor['estado'],
    };

    console.log('Simulando actualización de servidor (Omitiendo IP):', actualizacion);

    setServidores(prev => prev.map(s => s.id === item.id ? { ...s, ...item } as Servidor : s));
  };

  const hoy = new Date();
  
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1>Módulo 3: Ecosistemas Modernos y React</h1>
        <p>Panel de Administración de Servidores (TypeScript Estricto)</p>
      </header>

      <main>
        <section>
          <h2>Gestión de Servidores</h2>
          <DataTable<Servidor> 
            data={servidores} 
            columns={columnas} 
            onSave={handleSave} 
          />
        </section>

        <section style={{ marginTop: '40px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h2>Cálculos de Mantenimiento (Librería Externa: Luxon)</h2>
          <ul>
            {servidores.map(s => {
              const dias = calcularDiferenciaDias(s.ultimaRevision, hoy);
              return (
                <li key={s.id}>
                  Servidor <strong>{s.ip}</strong>: Revisado hace <strong>{dias}</strong> días.
                  {dias > 30 && <span style={{ color: 'red', marginLeft: '10px' }}>⚠️ Requiere revisión inmediata</span>}
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
        <p>© 2026 - Laboratorio de TypeScript Fase 4</p>
      </footer>
    </div>
  );
}

export default App;
