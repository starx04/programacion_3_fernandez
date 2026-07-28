// src/lab/LabAntTable_mp.tsx

import { useState } from 'react'
import { Table, Tag, Input, Typography, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { Title, Text } = Typography

interface Dish {
  key:       number
  name:      string
  category:  string
  price:     number
  available: boolean
}

const DISHES: Dish[] = [
  { key: 1, name: 'Lomo Saltado',        category: 'Platos fuertes', price: 12.50, available: true  },
  { key: 2, name: 'Ceviche Mixto',       category: 'Entradas',       price: 14.00, available: true  },
  { key: 3, name: 'Tiramisú',            category: 'Postres',        price: 6.50,  available: false },
  { key: 4, name: 'Pizza Margarita',     category: 'Platos fuertes', price: 10.00, available: true  },
  { key: 5, name: 'Limonada Frozen',     category: 'Bebidas',        price: 4.50,  available: false },
]

// ColumnsType<T> — tipado completo de columnas con render y sorter
const COLUMNS: ColumnsType<Dish> = [
  { title: '#', dataIndex: 'key', width: 50 },
  {
    title:     'Plato',
    dataIndex: 'name',
    render:    (v: string) => <Text strong>{v}</Text>,
  },
  { title: 'Categoría', dataIndex: 'category' },
  {
    title:     'Precio',
    dataIndex: 'price',
    align:     'right',
    render:    (v: number) => <Text strong>${v.toFixed(2)}</Text>,
    sorter:    (a, b) => a.price - b.price,   // sorting integrado
  },
  {
    title:     'Estado',
    dataIndex: 'available',
    render:    (v: boolean) => (
      <Tag color={v ? 'success' : 'default'}>{v ? 'Disponible' : 'Agotado'}</Tag>
    ),
    filters: [
      { text: 'Disponible', value: true  },
      { text: 'Agotado',    value: false },
    ],
    onFilter: (value, record) => record.available === value,  // filtrado integrado
  },
]

export default function LabAntTable_mp() {
  const [search, setSearch] = useState('')

  const filtered = DISHES.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Table — Menú de Platos</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
        Con ColumnsType, sorting, filtering y búsqueda.
      </Text>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input.Search
          placeholder="Buscar plato o categoría..."
          allowClear
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 340 }}
        />
        <Table<Dish>
          columns={COLUMNS}
          dataSource={filtered}
          pagination={{ pageSize: 4 }}
          size="middle"
        />
      </Space>
    </div>
  )
}
