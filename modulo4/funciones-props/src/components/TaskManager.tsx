import { useState } from 'react'

interface Task {
  id: number
  title: string
  description: string
  done: boolean
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // AGREGAR — Guarda título y descripción
  function addTask() {
    if (!title.trim()) return // El título es obligatorio
    setTasks((prev) => [
      ...prev,
      { 
        id: Date.now(), 
        title: title.trim(), 
        description: description.trim(), 
        done: false 
      },
    ])
    setTitle('')
    setDescription('')
  }

  // ELIMINAR
  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  // ACTUALIZAR
  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  return (
    <div style={{ maxWidth: 380, fontFamily: 'system-ui, sans-serif', padding: 16 }}>
      <h2 style={{ fontSize: 20, marginBottom: 16, color: '#333' }}>Gestor de Tareas</h2>
      
      {/* Formulario con inputs apilados */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título tarea..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Nueva tarea (descripción)..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={addTask}
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          Agregar
        </button>
      </div>

      {tasks.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay tareas. ¡Agrega una!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              padding: '12px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              style={{ marginTop: 4 }}
            />
            
            {/* Contenedor de Título y Descripción */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontWeight: '600',
                  fontSize: 15,
                  textDecoration: task.done ? 'line-through' : 'none',
                  color: task.done ? '#aaa' : '#333',
                }}
              >
                {task.title}
              </span>
              {task.description && (
                <span
                  style={{
                    fontSize: 13,
                    textDecoration: task.done ? 'line-through' : 'none',
                    color: task.done ? '#ccc' : '#666',
                  }}
                >
                  {task.description}
                </span>
              )}
            </div>

            <button
              onClick={() => removeTask(task.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16, padding: 0 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 12 }}>
          {tasks.filter((t) => t.done).length} de {tasks.length} completadas
        </p>
      )}
    </div>
  )
}