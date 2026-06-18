// src/components/PriceTag_mp.tsx

type Moneda = 'USD' | 'EUR' | 'COP' | 'MXN'

interface DishPriceTagProps {
  amount: number
  moneda?: Moneda
  discountPercent?: number
}

export default function DishPriceTag({
  amount,
  moneda = 'USD',
  discountPercent = 0,
}: DishPriceTagProps) {
  const tieneDescuento = discountPercent > 0
  const precioFinal   = tieneDescuento ? amount * (1 - discountPercent / 100) : amount

  const simbolos: Record<Moneda, string> = {
    USD: '$',
    EUR: '€',
    COP: '$',
    MXN: '$',
  }

  const simbolo = simbolos[moneda]

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {tieneDescuento && (
        <span style={{ fontSize: 13, color: '#aaa', textDecoration: 'line-through' }}>
          {simbolo}{amount.toFixed(2)} {moneda}
        </span>
      )}
      <span style={{ fontSize: 20, fontWeight: 700, color: tieneDescuento ? '#e00' : '#333' }}>
        {simbolo}{precioFinal.toFixed(2)} {moneda}
      </span>
      {tieneDescuento && (
        <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 500 }}>
          {discountPercent}% de descuento en este plato
        </span>
      )}
    </div>
  )
}
