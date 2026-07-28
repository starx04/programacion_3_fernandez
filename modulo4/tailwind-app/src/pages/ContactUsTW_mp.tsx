// src/pages/ContactUsTW_mp.tsx

export default function ContactUsTW_mp() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Contáctanos</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-amber-400">→</span> telefono: 098-765-4321
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">→</span> correo electronico: reservas@saborcriollo.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">→</span> direccione: Av. Amazonas y Naciones Unidas, Quito
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">→</span>redes sociales: @saborcriollo
              <ul className="ml-4 list-disc">
                <li className="flex items-center gap-2">
                  <a href="https://twitter.com/saborcriollo" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a href="https://facebook.com/saborcriollo" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a href="https://instagram.com/saborcriollo" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">→</span> horario de atención: Martes a Domingo, 12:00 PM - 10:00 PM
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
