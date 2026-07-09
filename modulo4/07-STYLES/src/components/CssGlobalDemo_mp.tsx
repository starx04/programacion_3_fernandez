// src/components/CssGlobalDemo_mp.tsx

import '../styles/global.css'

export default function CssGlobalDemo_mp() {
  return (
    <div className="globalCard">
      <h3 className="globalTitle">Menu de Restaurante - CSS Global</h3>
      <p style={{ margin: 0, color: 'var(--muted)' }}>
        Las clases de esta tarjeta del menu vienen de un archivo <code>.css</code> global.
        Si otro componente del sitio usa las mismas clases, los estilos pueden colisionar.
      </p>
    </div>
  )
}
