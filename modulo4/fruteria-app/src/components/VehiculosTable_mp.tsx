// src/components/VehiculosTable_mp.tsx numero, capacidad, ubicacion y estado de cada mesa

interface FilaMesa {
  numero: number
  capacidad: number
  ubicacion: string
  estado: string
  highlight?: boolean
}

interface MesasTableProps {
  title?: string
  rows: FilaMesa[]
}

export default function MesasTable({ title, rows }: MesasTableProps) {
  return (
    <div style={{ maxWidth: 420 }}>
      {title && <h3 style={{ marginBottom: 8, fontSize: 15 }}>{title}</h3>}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.numero}
              style={{
                backgroundColor: row.highlight ? '#fef9c3' : 'transparent',
              }}
            >
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  color: '#6b7280',
                  width: '20%',
                }}
              >
                Mesa {row.numero}
              </td>
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: row.highlight ? 600 : 400,
                }}
              >
                {row.capacidad} personas
              </td>
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: row.highlight ? 600 : 400,
                }}
              >
                {row.ubicacion}
              </td>
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: row.highlight ? 600 : 400,
                }}
              >
                {row.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
