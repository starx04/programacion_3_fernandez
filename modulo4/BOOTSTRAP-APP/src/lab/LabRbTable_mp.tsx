// src/lab/LabRbTable_mp.tsx

import { useState } from 'react'
import { Container, Table, Badge, Form, InputGroup } from 'react-bootstrap'

interface Dish {
  id:        number
  name:      string
  category:  string
  price:     number
  available: boolean
}

const DISHES: Dish[] = [
  { id: 1, name: 'Ceviche de camarón', category: 'Entradas', price: 8.50,  available: true  },
  { id: 2, name: 'Locro de papa',      category: 'Entradas', price: 6.00,  available: true  },
  { id: 3, name: 'Seco de chivo',      category: 'Fuertes',  price: 12.00, available: false },
  { id: 4, name: 'Lomo saltado',       category: 'Fuertes',  price: 13.50, available: true  },
  { id: 5, name: 'Tres leches',        category: 'Postres',  price: 5.00,  available: false },
]

export default function LabRbTable_mp() {
  const [search, setSearch] = useState('')

  const filtered = DISHES.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Table (Menú)</h2>
      <p className="text-secondary mb-3">
        Striped, hover, responsive y búsqueda en tiempo real.
      </p>

      <InputGroup className="mb-3" style={{ maxWidth: 340 }}>
        <Form.Control
          placeholder="Buscar plato o categoría..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </InputGroup>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Plato</th>
            <th>Categoría</th>
            <th className="text-end">Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td className="fw-semibold">{d.name}</td>
              <td>{d.category}</td>
              <td className="text-end">${d.price.toFixed(2)}</td>
              <td>
                <Badge bg={d.available ? 'success' : 'secondary'}>
                  {d.available ? 'Disponible' : 'Agotado'}
                </Badge>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-muted">
                Sin resultados.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}
