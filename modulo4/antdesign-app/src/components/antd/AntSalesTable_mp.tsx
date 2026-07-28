// src/components/antd/AntSalesTable_mp.tsx

import { Table, Tag, Typography, Progress } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { Title, Text } = Typography

interface OrderRow {
  key:      number
  table:    string
  dish:     string
  total:    number
  progress: number
  status:   'paid' | 'pending' | 'failed'
}

const DATA: OrderRow[] = [
  { key: 1, table: 'Mesa 4',  dish: 'Lomo Saltado',       total: 24, progress: 100, status: 'paid'    },
  { key: 2, table: 'Mesa 7',  dish: 'Ceviche Mixto',      total: 18, progress: 65,  status: 'pending' },
  { key: 3, table: 'Mesa 2',  dish: 'Ají de Gallina',     total: 15, progress: 100, status: 'paid'    },
  { key: 4, table: 'Mesa 9',  dish: 'Pizza Margarita',    total: 12, progress: 0,   status: 'failed'  },
  { key: 5, table: 'Mesa 1',  dish: 'Parrillada Familiar', total: 42, progress: 40,  status: 'pending' },
]

const STATUS_COLOR: Record<OrderRow['status'], string> = {
  paid:    'success',
  pending: 'warning',
  failed:  'error',
}

const STATUS_LABEL: Record<OrderRow['status'], string> = {
  paid:    'Pagado',
  pending: 'Pendiente',
  failed:  'Cancelado',
}

const COLUMNS: ColumnsType<OrderRow> = [
  {
    title:     'Mesa',
    dataIndex: 'table',
    render:    (v: string) => <Text strong>{v}</Text>,
  },
  { title: 'Plato', dataIndex: 'dish' },
  {
    title:     'Total',
    dataIndex: 'total',
    align:     'right',
    render:    (v: number) => <Text strong>${v.toLocaleString()}</Text>,
    sorter:    (a, b) => a.total - b.total,
  },
  {
    title:     'Preparación',
    dataIndex: 'progress',
    render:    (v: number) => (
      <Progress percent={v} size="small" style={{ margin: 0 }} />
    ),
  },
  {
    title:     'Estado',
    dataIndex: 'status',
    render:    (v: OrderRow['status']) => (
      <Tag color={STATUS_COLOR[v]}>{STATUS_LABEL[v]}</Tag>
    ),
    filters: [
      { text: 'Pagado',    value: 'paid'    },
      { text: 'Pendiente', value: 'pending' },
      { text: 'Cancelado', value: 'failed'  },
    ],
    onFilter: (value, record) => record.status === value,
  },
]

export default function AntSalesTable_mp() {
  return (
    <div style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 12 }}>Últimos pedidos</Title>
      <Table<OrderRow>
        columns={COLUMNS}
        dataSource={DATA}
        pagination={{ pageSize: 4 }}
        size="middle"
      />
    </div>
  )
}
