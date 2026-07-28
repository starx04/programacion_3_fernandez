// src/components/StyledComponentsDemo_mp.tsx

import styled from 'styled-components'

interface BtnProps {
  $variant?: 'primary' | 'outline'
}

const Card = styled.div`
  border:        1px solid var(--border);
  background:    var(--card);
  border-radius: 10px;
  padding:       16px;
`

const Title = styled.h3`
  margin:      0 0 8px 0;
  color:       var(--accent);
  font-weight: 800;
`

const Btn = styled.button<BtnProps>`
  padding:       8px 16px;
  border-radius: 8px;
  cursor:        pointer;
  font-weight:   600;
  border:        1px solid var(--accent);
  background:    ${p => p.$variant === 'outline' ? 'transparent' : 'var(--accent)'};
  color:         ${p => p.$variant === 'outline' ? 'var(--accent)' : 'white'};
  transition:    filter 0.15s;

  &:hover {
    filter: brightness(1.1);
  }
`

export default function StyledComponentsDemo_mp() {
  return (
    <Card>
      <Title>Ceviche de camaron</Title>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        Tarjeta de plato con CSS-in-JS y scope automatico. Props transient con
        prefijo <code>$</code> para no contaminar el DOM.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn>Agregar al pedido</Btn>
        <Btn $variant="outline">Ver detalle</Btn>
      </div>
    </Card>
  )
}
