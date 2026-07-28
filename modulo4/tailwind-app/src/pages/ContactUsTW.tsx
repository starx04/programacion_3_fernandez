// src/pages/ContactUsTW.tsx

export default function ContactUsTW() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Contactanos</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> telefono: 123-456-7890
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> correo electronico: info@devcursos.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> direccione: 123 Calle Principal, Ciudad
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span>redes sociales: @devcursos
              <ul className="ml-4 list-disc">
                <li className="flex items-center gap-2">
                  <a href="https://twitter.com/devcursos" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a href="https://facebook.com/devcursos" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a href="https://instagram.com/devcursos" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> horario de atención: Lunes a Viernes, 9:00 AM - 5:00 PM
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}