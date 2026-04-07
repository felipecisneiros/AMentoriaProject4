'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#6B21A8] via-[#7c3aed] to-[#5EEAD4] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_20%)] opacity-80" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="bg-[#111827]">
          <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
            <div className="text-white font-sans">
              <p className="text-2xl font-semibold tracking-[0.18em]">
                <span className="lowercase">amentor</span><span className="uppercase font-black text-cyan-300">IA</span>
              </p>
              <p className="text-xs text-slate-400">Seu tutor interativo para o ENEM</p>
            </div>
            <Link href="/login" className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.01]">
              Fazer login
            </Link>
          </header>
        </div>

        <section className="flex flex-1 items-center justify-center px-6 sm:px-10">
          <div className="w-full max-w-5xl rounded-[3rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/90">O que vamos estudar hoje?</p>
                  <h1 className="text-5xl font-black tracking-tight text-slate-100 sm:text-6xl">
                    Bora passar no ENEM, <span className="text-cyan-300">fulaninho</span>.
                  </h1>
                  <p className="text-lg text-slate-300">Qual a sua dúvida?</p>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 rounded-[2rem] border border-slate-700 bg-slate-950/90 px-4 py-3 shadow-inner shadow-slate-950/30">
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-xl font-black text-slate-950 transition hover:bg-cyan-300"
                      aria-label="Abrir opções de envio"
                    >
                      &gt;
                    </button>
                    <input
                      type="text"
                      placeholder="O que vamos estudar hoje?"
                      className="flex-1 bg-transparent text-lg text-slate-100 outline-none placeholder:text-slate-500"
                    />
                  </div>
                  {menuOpen && (
                    <div className="absolute left-0 top-full mt-3 w-full rounded-[1.8rem] border border-slate-700 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
                      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">Enviar como</p>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <button className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Imagem</button>
                        <button className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Áudio</button>
                        <button className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Arquivo</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-[2rem] bg-slate-950/90 p-6 shadow-xl shadow-slate-950/20 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Atalhos rápidos</p>
                  <div className="mt-6 grid gap-4">
                    <button className="w-full rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Simulado rápido</button>
                    <button className="w-full rounded-full border border-slate-700 bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">ENEM 2026</button>
                    <button className="w-full rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Quero passar em Medicina</button>
                    <button className="w-full rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Fórmulas de física</button>
                    <button className="w-full rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Gerar questão</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#5EEAD4] py-4 text-center text-sm text-[#111827]">Todos os Direitos Reservados 2026 | Amentoria Educação · Política de Privacidade</footer>
      </div>
    </main>
  )
}
