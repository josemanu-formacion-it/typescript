import { useState } from 'react';

/**
 * Interface para definir las columnas de la tabla
 * T representa el tipo de dato de la fila
 */
export interface ColumnConfig<T> {
  key: keyof T;
  label: string;
}

/**
 * Props del componente DataTable
 */
interface DataTableProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  onSave?: (item: Partial<T>) => void;
}

/**
 * Componente DataTable Genérico
 * Demuestra el uso de Genéricos, keyof y tipos de utilidad en React
 */
export function DataTable<T extends { id: string | number }>({ data, columns, onSave }: DataTableProps<T>) {
  // Estado para la edición de una fila
  // Usamos Partial<T> porque el usuario puede estar en proceso de modificar campos
  const [editingItem, setEditingItem] = useState<Partial<T> | null>(null);

  const handleEdit = (item: T) => {
    setEditingItem(item);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  const handleInputChange = (key: keyof T, value: string) => {
    if (editingItem) {
      setEditingItem({
        ...editingItem,
        [key]: value
      });
    }
  };

  const handleSave = () => {
    if (onSave && editingItem) {
      onSave(editingItem);
      setEditingItem(null);
    }
  };

  return (
    <div className="table-container">
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
            {columns.map((col) => (
              <th key={String(col.key)} style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>
                {col.label}
              </th>
            ))}
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
              {columns.map((col) => (
                <td key={String(col.key)} style={{ padding: '12px' }}>
                  {editingItem && editingItem.id === item.id ? (
                    <input
                      type="text"
                      value={String(editingItem[col.key] || '')}
                      onChange={(e) => handleInputChange(col.key, e.target.value)}
                      style={{ width: '90%', padding: '4px' }}
                    />
                  ) : (
                    String(item[col.key])
                  )}
                </td>
              ))}
              <td style={{ padding: '12px' }}>
                {editingItem && editingItem.id === item.id ? (
                  <>
                    <button onClick={handleSave} style={{ marginRight: '4px', backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Guardar</button>
                    <button onClick={handleCancel} style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Cancelar</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(item)} style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Editar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
