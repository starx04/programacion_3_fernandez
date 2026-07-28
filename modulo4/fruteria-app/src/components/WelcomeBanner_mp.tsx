// src/components/WelcomeBanner_mp.tsx
interface RestaurantWelcomeBannerProps {
  subtitle?: string
}
export default function RestaurantWelcomeBanner({ subtitle }: RestaurantWelcomeBannerProps) {
  return (
    <div style={{ background: '#b91c1c', color: '#fff', padding: '16px 24px', borderRadius: 8, opacity: 0.85 }}>
      <h1 style={{ margin: 0, fontSize: 32 }}>Bienvenido a Sabor Criollo</h1>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Cocina casera con ingredientes frescos</p>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>{subtitle ?? 'Menú del Restaurante'}</p>
    </div>
  )
}
