// src/lab/LabAntForm_mp.tsx

import { useState } from 'react'
import { Form, Input, Select, Button, Alert, Typography, InputNumber } from 'antd'

const { Title, Text } = Typography
const { Option } = Select

interface ReservationValues {
  name:     string
  email:    string
  guests:   number
  table:    string
}

export default function LabAntForm_mp() {
  const [success, setSuccess] = useState(false)
  const [form] = Form.useForm<ReservationValues>()  // instancia tipada del formulario

  function onFinish(_values: ReservationValues) {
    setSuccess(true)
    form.resetFields()
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Form — Reserva de Mesa</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Con Form.useForm, validación integrada y feedback.
      </Text>

      {success && (
        <Alert
          message="Reserva enviada correctamente"
          type="success"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 480 }}
      >
        <Form.Item
          label="Nombre completo"
          name="name"
          rules={[
            { required: true, message: 'El nombre es requerido' },
            { min: 2,         message: 'Mínimo 2 caracteres'    },
          ]}
        >
          <Input placeholder="Ana García" />
        </Form.Item>

        <Form.Item
          label="Correo electrónico"
          name="email"
          rules={[
            { required: true, message: 'El email es requerido'       },
            { type: 'email',  message: 'Formato de email inválido'   },
          ]}
        >
          <Input placeholder="ana@ejemplo.com" />
        </Form.Item>

        <Form.Item
          label="Número de comensales"
          name="guests"
          rules={[{ required: true, message: 'Indica el número de comensales' }]}
          initialValue={2}
        >
          <InputNumber min={1} max={20} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Mesa preferida"
          name="table"
          initialValue="interior"
        >
          <Select>
            <Option value="interior">Interior</Option>
            <Option value="terraza">Terraza</Option>
            <Option value="barra">Barra</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Reservar</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
