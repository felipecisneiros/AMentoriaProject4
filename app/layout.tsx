import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'amentoriA — Tutoria ENEM',
  description: 'Chat tutorias para dúvidas de ENEM com aluno e professor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
