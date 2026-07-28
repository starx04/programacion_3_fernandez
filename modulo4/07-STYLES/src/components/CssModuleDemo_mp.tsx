// src/components/CssModuleDemo_mp.tsx

import styles from '../styles/card.module.css'

export default function CssModuleDemo_mp() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>CSS Modules</h3>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        Cada clase de esta tarjeta de plato recibe un nombre unico generado en build time,
        evitando colisiones con otras tarjetas del menu.
      </p>
      <button className={styles.btn}>Agregar al pedido</button>
    </div>
  )
}
