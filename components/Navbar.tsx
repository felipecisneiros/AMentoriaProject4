'use client'

import Link from 'next/link'
import React, { useState } from 'react'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  brand?: string
  items: NavItem[]
}

export const Navbar: React.FC<NavbarProps> = ({
  brand = 'amentorIA.',
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-slate-950 font-black text-lg">A</span>
            </div>
            <div>
              <p className="text-base font-semibold tracking-[0.12em] uppercase text-slate-100">{brand}</p>
              <p className="text-xs text-slate-500">Seu tutor interativo para o ENEM</p>
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden md:flex gap-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-slate-300 hover:bg-slate-900 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
