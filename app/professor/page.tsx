'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Student {
  id: string
  iniciais: string
  nome: string
  email: string
  historico: string
  ultimaInteracao: string
}

export default function ProfessorPage() {
  const [students] = useState<Student[]>([
    {
      id: '1',
      iniciais: 'DA',
      nome: 'Nome Sobrenome',
      email: 'aluno123@email.com',
      historico: 'Ver',
      ultimaInteracao: 'Hoje, 14:32',
    },
    {
      id: '2',
      iniciais: 'JS',
      nome: 'Nome Sobrenome',
      email: 'aluno123@email.com',
      historico: 'Ver',
      ultimaInteracao: 'Hoje, 14:32',
    },
    {
      id: '3',
      iniciais: 'MA',
      nome: 'Nome Sobrenome',
      email: 'aluno123@email.com',
      historico: 'Ver',
      ultimaInteracao: 'Hoje, 14:32',
    },
    {
      id: '4',
      iniciais: 'PL',
      nome: 'Nome Sobrenome',
      email: 'aluno123@email.com',
      historico: 'Ver',
      ultimaInteracao: 'Hoje, 14:32',
    },
    {
      id: '5',
      iniciais: 'RC',
      nome: 'Nome Sobrenome',
      email: 'aluno123@email.com',
      historico: 'Ver',
      ultimaInteracao: 'Hoje, 14:32',
    },
  ])
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null)
  const [selectedTutoria, setSelectedTutoria] = useState<string | null>(null)

  const tutorias = [
    {
      id: 'tut1',
      titulo: '[Questão ENEM 2022 – números]',
      data: '02/04, 18:38',
      status: 'Resolvido',
    },
    {
      id: 'tut2',
      titulo: 'Função do 2º grau',
      data: '01/04, 19:10',
      status: 'Com dificuldade',
    },
    {
      id: 'tut3',
      titulo: 'Trigonometria básica',
      data: '29/03, 16:05',
      status: 'Resolvido',
    },
    {
      id: 'tut4',
      titulo: 'Questão com imagem',
      data: '29/03, 12:38',
      status: 'Resolvido',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#6B21A8] via-[#7c3aed] to-[#5EEAD4] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_20%)] opacity-80" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="bg-[#111827]">
          <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
            <div className="text-white font-sans">
              <p className="text-2xl font-semibold tracking-[0.18em]">
                <span className="lowercase">amentor</span><span className="uppercase font-black text-cyan-300">IA</span>
              </p>
              <p className="text-xs text-slate-400">Painel do Professor</p>
            </div>
            <Link href="/" className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.01]">
              Sair
            </Link>
          </header>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10">
          <div className="h-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-300 shadow-lg shadow-violet-500/20" />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-10 sm:px-10">
          <div className="grid flex-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
            <aside className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl h-fit">
              <div className="space-y-6">
                <div className="rounded-[1.8rem] border border-white/10 bg-[#111827] p-5 shadow-inner shadow-slate-950/20">
                  <button className="flex w-full items-center gap-3 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-left text-slate-100 transition hover:bg-slate-800">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950">+</span>
                    <span className="text-sm font-semibold">Upload de arquivos</span>
                  </button>
                  <button className="mt-4 flex w-full items-center gap-3 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-left text-slate-100 transition hover:bg-slate-800">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950">🔍</span>
                    <span className="text-sm font-semibold">Pesquisar alunos</span>
                  </button>
                </div>

                <div className="rounded-[1.8rem] border border-white/10 bg-[#111827] p-6 shadow-inner shadow-slate-950/20">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Professor</p>
                  <div className="mt-6 flex items-center gap-4 rounded-3xl bg-slate-950/90 p-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-xl font-black text-slate-950">PR</div>
                    <div>
                      <p className="text-lg font-semibold text-white">Professor</p>
                      <p className="text-sm text-slate-400">Educador</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-white">Lista de alunos</h2>
                </div>

                <div className="rounded-[2rem] bg-[#111827] p-6 shadow-inner shadow-slate-950/20 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="px-4 py-3 text-left font-semibold uppercase text-slate-400 tracking-[0.1em]">NOME</th>
                        <th className="px-4 py-3 text-left font-semibold uppercase text-slate-400 tracking-[0.1em]">E-MAIL</th>
                        <th className="px-4 py-3 text-left font-semibold uppercase text-slate-400 tracking-[0.1em]">HISTÓRICO</th>
                        <th className="px-4 py-3 text-left font-semibold uppercase text-slate-400 tracking-[0.1em]">ÚLTIMA INTERAÇÃO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b border-slate-700/50 hover:bg-slate-900/50 transition">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-white">
                                {student.iniciais}
                              </div>
                              <span className="text-slate-100">{student.nome}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-slate-300">{student.email}</td>
                          <td className="px-4 py-4">
                            <button onClick={() => setSelectedStudent(student.id)} className="rounded-full bg-violet-500/20 border border-violet-400/50 px-3 py-1 text-xs font-semibold text-violet-300 hover:bg-violet-500/30 transition">
                              {student.historico}
                            </button>
                          </td>
                          <td className="px-4 py-4 text-slate-400">{student.ultimaInteracao}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>

        {selectedStudent && !selectedTutoria && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#6B21A8] via-[#7c3aed] to-[#5EEAD4] p-8 shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-slate-950">Nome Sobrenome</h3>
                <button onClick={() => setSelectedStudent(null)} className="text-2xl font-bold text-slate-950 hover:opacity-70">
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tutorias.map((tut) => (
                  <button
                    key={tut.id}
                    onClick={() => setSelectedTutoria(tut.id)}
                    className="rounded-[1.5rem] bg-white/90 p-5 text-left hover:bg-white transition shadow-lg"
                  >
                    <h4 className="font-bold text-slate-950 text-sm mb-2">{tut.titulo}</h4>
                    <p className="text-xs text-slate-600 mb-1">DATA: {tut.data}</p>
                    <p className="text-xs font-semibold text-slate-700 mb-3">Status: {tut.status}</p>
                    <button className="rounded-full bg-violet-600 text-white px-4 py-1 text-xs font-semibold hover:bg-violet-700">
                      Ver detalhes
                    </button>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTutoria && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#6B21A8] via-[#7c3aed] to-[#5EEAD4] p-8 shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-slate-950">Conversa - [Questão ENEM 2022]</h3>
                <button onClick={() => { setSelectedTutoria(null); }} className="text-2xl font-bold text-slate-950 hover:opacity-70">
                  ✕
                </button>
              </div>
              <div className="space-y-4 bg-slate-900/30 rounded-xl p-4">
                <div className="flex justify-start">
                  <div className="bg-white/20 rounded-lg px-4 py-2 max-w-xs text-white text-sm">
                    Qual é a resposta da questão sobre números do ENEM 2022?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-violet-600 rounded-lg px-4 py-2 max-w-xs text-white text-sm">
                    A questão envolve decomposição em fatores primos. A resposta correta é 12, pois 2² × 3 = 12.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/20 rounded-lg px-4 py-2 max-w-xs text-white text-sm">
                    Entendi! Obrigado pela explicação.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
