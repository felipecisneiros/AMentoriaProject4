'use client'

import Link from 'next/link'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#6B21A8] via-[#7c3aed] to-[#5EEAD4] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-10 sm:px-10">
        <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
          <div className="mb-8 flex items-center justify-between rounded-3xl bg-[#111827] px-6 py-5 text-white shadow-lg shadow-slate-950/20">
            <div>
              <p className="text-2xl font-semibold tracking-[0.18em]">
                <span className="lowercase">amentor</span><span className="uppercase font-black text-cyan-300">IA</span>
              </p>
              <p className="text-xs text-slate-400">Acesse como Aluno ou Professor</p>
            </div>
            <Link href="/" className="text-sm font-semibold text-cyan-300 hover:text-cyan-400">
              Voltar
            </Link>
          </div>

          <div className="space-y-6">
            <div className="space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[#5EEAD4]">Escolha seu perfil</p>
              <h1 className="text-4xl font-black text-slate-950 sm:text-5xl">Entrar como:</h1>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 justify-items-center">
              <Link href="/login/aluno" className="rounded-[2rem] border border-slate-200 bg-[#111827] px-6 py-8 text-center text-white transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-slate-950 max-w-[28rem] w-full">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Aluno</p>
                <p className="mt-4 text-2xl font-bold">Acessar estudos</p>
                <p className="mt-3 text-sm text-slate-400">Crie seu login como aluno, faça perguntas e receba ajuda para o ENEM.</p>
              </Link>

              <Link href="/login/professor" className="rounded-[2rem] border border-slate-200 bg-[#111827] px-6 py-8 text-center text-white transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-slate-950 max-w-[28rem] w-full">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Professor</p>
                <p className="mt-4 text-2xl font-bold">Entrar para ensinar</p>
                <p className="mt-3 text-sm text-slate-400">Cadastre-se como professor e acompanhe seus alunos.</p>
              </Link>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950/95 p-6 text-slate-100 shadow-lg shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Como funciona</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Escolha o seu papel e continue para criar seu login. Esta tela é o primeiro passo para começar a usar a plataforma AmentorIA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
