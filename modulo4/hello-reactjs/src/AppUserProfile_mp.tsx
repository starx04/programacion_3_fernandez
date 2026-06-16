// src/AppUserProfile_mp.tsx (para probar el ejercicio)
// Versión "Menú de Restaurante" de AppUserProfile.tsx

import StaffProfileCard from './components/UserProfileCard_mp'

export default function App() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <StaffProfileCard
        nombreCompleto="Carla Espinoza"
        email="carla@restaurante.com"
        rol="gerente"
        activo={true}
        especialidades={['Atención al cliente', 'Gestión de personal', 'Costos de menú']}
        bio="Gerente con 6 años de experiencia en salones de comida."
      />

      <StaffProfileCard
        nombreCompleto="Pedro Salinas"
        email="pedro@restaurante.com"
        rol="mesero"
        activo={false}
        especialidades={['Servicio de mesas', 'Maridaje básico']}
        bio="Mesero apasionado por brindar una excelente experiencia al comensal."
      />
    </main>
  )
}
