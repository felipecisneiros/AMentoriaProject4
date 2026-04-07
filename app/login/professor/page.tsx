'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ProfessorLoginPage() {
  const router = useRouter()
  const [isCreatingAccount, setIsCreatingAccount] = useState(true)

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#6B21A8] via-[#7c3aed] to-[#5EEAD4] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-10 sm:px-10">
        <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
          <div className="mb-8 flex items-center justify-between rounded-3xl bg-[#111827] px-6 py-5 text-white shadow-lg shadow-slate-950/20">
            <div>
              <p className="text-2xl font-semibold tracking-[0.18em]">
                <span className="lowercase">amentor</span><span className="uppercase font-black text-cyan-300">IA</span>
              </p>
              <p className="text-xs text-slate-400">Login como Professor</p>
            </div>
            <Link href="/login" className="text-sm font-semibold text-cyan-300 hover:text-cyan-400">
              Voltar
            </Link>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-[#5EEAD4]">Acesso Professor</p>
              <h1 className="text-4xl font-black text-slate-950 sm:text-5xl">
                {isCreatingAccount ? 'Criar conta' : 'Fazer login'}
              </h1>
            </div>

            <div className="mx-auto max-w-xl space-y-4">
              {isCreatingAccount ? (
                <>
                    <input
                    type="text"
                    placeholder="Nome e sobrenome"
                    className="w-full rounded-[1rem] border border-slate-300 bg-white/80 px-4 py-3 text-slate-950 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full rounded-[1rem] border border-slate-300 bg-white/80 px-4 py-3 text-slate-950 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    className="w-full rounded-[1rem] border border-slate-300 bg-white/80 px-4 py-3 text-slate-950 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <input
                    type="password"
                    placeholder="Confirmar senha"
                    className="w-full rounded-[1rem] border border-slate-300 bg-white/80 px-4 py-3 text-slate-950 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <div className="flex flex-col items-center gap-3 w-full max-w-[22rem]">
                    <button
                      type="button"
                      onClick={() => router.push('/professor')}
                      className="w-full rounded-[1rem] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.01]"
                    >
                      Criar conta
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                      aria-label="Entrar com Google"
                    >
                      <span>ou entre com</span>
                      <svg width="18" height="18" viewBox="0 0 533.5 544.3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M533.5 278.4c0-17.5-1.4-34.4-4-50.9H272v96.5h146.9c-6.3 34.1-25.5 62.9-54.5 82.1v68.2h87.9c51.4-47.4 80.2-117.2 80.2-195.9z" fill="#4285F4"/>
                        <path d="M272 544.3c73.5 0 135.2-24.5 180.3-66.7l-87.9-68.2c-24.4 16.4-55.5 26-92.4 26-71 0-131.2-47.9-152.7-112.1H28.6v70.5C74.1 489.1 167.6 544.3 272 544.3z" fill="#34A853"/>
                        <path d="M119.3 325.8c-10.7-31.7-10.7-65.8 0-97.5V157.8H28.6c-41.8 83.8-41.8 184.5 0 268.3l90.7-70.3z" fill="#FBBC05"/>
                        <path d="M272 107.7c39.9 0 75.7 13.7 103.9 40.7l78-78C397.2 27.4 337.5 0 272 0 167.6 0 74.1 55.2 28.6 157.8l90.7 70.5C140.8 155.6 201 107.7 272 107.7z" fill="#EA4335"/>
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full rounded-[1rem] border border-slate-300 bg-white/80 px-4 py-3 text-slate-950 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    className="w-full rounded-[1rem] border border-slate-300 bg-white/80 px-4 py-3 text-slate-950 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <div className="flex flex-col items-center gap-3 w-full max-w-[22rem]">
                    <button
                      type="button"
                      onClick={() => router.push('/professor')}
                      className="w-full rounded-[1rem] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.01]"
                    >
                      Entrar
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                      aria-label="Entrar com Google"
                    >
                      <span>ou entre com</span>
                      <svg width="18" height="18" viewBox="0 0 533.5 544.3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M533.5 278.4c0-17.5-1.4-34.4-4-50.9H272v96.5h146.9c-6.3 34.1-25.5 62.9-54.5 82.1v68.2h87.9c51.4-47.4 80.2-117.2 80.2-195.9z" fill="#4285F4"/>
                        <path d="M272 544.3c73.5 0 135.2-24.5 180.3-66.7l-87.9-68.2c-24.4 16.4-55.5 26-92.4 26-71 0-131.2-47.9-152.7-112.1H28.6v70.5C74.1 489.1 167.6 544.3 272 544.3z" fill="#34A853"/>
                        <path d="M119.3 325.8c-10.7-31.7-10.7-65.8 0-97.5V157.8H28.6c-41.8 83.8-41.8 184.5 0 268.3l90.7-70.3z" fill="#FBBC05"/>
                        <path d="M272 107.7c39.9 0 75.7 13.7 103.9 40.7l78-78C397.2 27.4 337.5 0 272 0 167.6 0 74.1 55.2 28.6 157.8l90.7 70.5C140.8 155.6 201 107.7 272 107.7z" fill="#EA4335"/>
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="text-center">
              <button
                onClick={() => setIsCreatingAccount(!isCreatingAccount)}
                className="text-sm text-slate-600 hover:text-slate-950"
              >
                {isCreatingAccount ? 'Já tem conta? Faça login' : 'Não tem conta? Crie uma'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
