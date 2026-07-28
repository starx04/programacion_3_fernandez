// src/components/WelcomeBanner.tsx
interface WelcomeBannerProps {
  subtitle?: string
}
export default function WelcomeBanner({ subtitle }: WelcomeBannerProps) {
  return (
    <div style={{ background: '#00f38e', color: '#fff', padding: '16px 24px', borderRadius: 8 , opacity: 0.7}}>
      <h1 style={{ margin: 0, fontSize: 32 }}>Bienvenido al curso de React</h1>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Aprende React 19 con TypeScript</p>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>{subtitle ?? 'Programacion III'}</p>
    </div>
  )
}