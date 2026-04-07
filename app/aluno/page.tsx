'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function AlunoPage() {
  const searchParams = useSearchParams()
  const studentName = searchParams.get('name') ?? 'Aluno'
  const initials = studentName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase() || 'AL'
  const [message, setMessage] = useState('')
  const [attachmentsOpen, setAttachmentsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    {
      role: 'assistant',
      text: 'Sou sua assistente ENEM. Pergunte qualquer coisa sobre provas, matérias ou redação e eu respondo com base na sua dúvida.',
    },
  ])

  const generateReply = (question: string) => {
    const lower = question.toLowerCase()

    if (lower.includes('física') || lower.includes('fórmula')) {
      return 'Para o ENEM, as fórmulas de cinemática mais importantes são S = S₀ + v·t e V = V₀ + a·t. Lembre-se de revisar movimento uniforme e queda livre.'
    }

    if (lower.includes('matemática') || lower.includes('função') || lower.includes('geometria')) {
      return 'No ENEM, geometria analítica e funções são recorrentes. Estude gráficos, equações de 1º e 2º grau e propriedades de triângulos.'
    }

    if (lower.includes('história') || lower.includes('geografia')) {
      return 'Os temas de história e geografia do ENEM costumam focar em cidadania, mundo contemporâneo e sustentabilidade. Conecte contexto histórico com questões atuais.'
    }

    if (lower.includes('redação')) {
      return 'Para a redação, foque em ter uma tese clara, argumentos consistentes e uma proposta de intervenção. Use conectivos e evite clichês.'
    }

    return `A resposta depende da sua pergunta. Pelo que entendi, vamos focar em: "${question}". Posso te ajudar com conceitos, exemplos ou uma explicação passo a passo.`
  }

  const handleSend = () => {
    if (!message.trim()) return

    const userMessage = message.trim()
    const reply = generateReply(userMessage)

    setMessages((current) => [
      ...current,
      { role: 'user', text: userMessage },
      { role: 'assistant', text: reply },
    ])
    setMessage('')
    setAttachmentsOpen(false)
  }

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
              <p className="text-xs text-slate-400">Seu tutor interativo para o ENEM</p>
            </div>
            <Link href="/" className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.01]">
              Voltar
            </Link>
          </header>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10">
          <div className="h-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-300 shadow-lg shadow-violet-500/20" />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-10 sm:px-10">
          <div className="grid flex-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <div className="space-y-6">
                <div className="rounded-[1.8rem] border border-white/10 bg-[#111827] p-5 shadow-inner shadow-slate-950/20">
                  <button className="flex w-full items-center gap-3 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-left text-slate-100 transition hover:bg-slate-800">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-sm font-semibold">Nova tutoria</span>
                  </button>
                  <button className="mt-4 flex w-full items-center gap-3 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-left text-slate-100 transition hover:bg-slate-800">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M15 15L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-sm font-semibold">Tutorias anteriores</span>
                  </button>
                </div>

                <div className="rounded-[1.8rem] border border-white/10 bg-[#111827] p-6 shadow-inner shadow-slate-950/20">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Aluno</p>
                  <div className="mt-6 flex items-center gap-4 rounded-3xl bg-slate-950/90 p-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-xl font-black text-slate-950">{initials}</div>
                    <div>
                      <p className="text-lg font-semibold text-white">{studentName}</p>
                      <p className="text-sm text-slate-400">Aluno ENEM</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <div className="space-y-6">
                <div className="rounded-[2rem] bg-[#111827] p-5 shadow-inner shadow-slate-950/20">
                  <div className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950">
                    Pergunte qualquer coisa e eu respondo com base na sua dúvida.
                  </div>
                </div>

                <div className="rounded-[2rem] bg-slate-900/90 p-6 shadow-inner shadow-slate-950/30">
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <div key={index} className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                        <div className="max-w-[80%]">
                          <div className="flex items-start gap-4">
                            <div className={`mt-1 h-10 w-10 rounded-full text-center text-sm font-black ${msg.role === 'user' ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-100'}`}>
                              {msg.role === 'user' ? 'AL' : 'IA'}
                            </div>
                            <p className={`rounded-3xl p-4 text-sm leading-7 ${msg.role === 'user' ? 'bg-cyan-400/10 text-slate-100' : 'bg-slate-950/80 text-slate-200'}`}>
                              {msg.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] bg-slate-900/90 p-5 shadow-inner shadow-slate-950/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-[2rem] border border-slate-700 bg-slate-950/90 px-4 py-3 shadow-inner shadow-slate-950/30">
                      <button
                        onClick={() => setAttachmentsOpen((open) => !open)}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-xl font-black text-slate-950 transition hover:bg-cyan-300"
                        aria-label="Abrir opções de envio"
                      >
                        +
                      </button>
                      <input
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        type="text"
                        placeholder="Escreva sua pergunta..."
                        className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
                      />
                      <button
                        type="button"
                        onClick={handleSend}
                        className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
                      >
                        Enviar
                      </button>
                    </div>
                    {attachmentsOpen && (
                      <div className="grid gap-3 sm:grid-cols-3">
                        <button className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Imagem</button>
                        <button className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Áudio</button>
                        <button className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Arquivo</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer className="border-t border-white/10 bg-[#5EEAD4] py-4 text-center text-sm text-[#111827]">
          Todos os Direitos Reservados 2026 | Amentoria Educação · Política de Privacidade
        </footer>
      </div>
    </main>
  )
}
