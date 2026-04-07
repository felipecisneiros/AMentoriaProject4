'use client'

import React from 'react'

interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
  variant?: 'default' | 'dark'
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className = '',
  onClick,
  hoverable = false,
  variant = 'default',
}) => {
  const variantClasses =
    variant === 'dark'
      ? 'bg-slate-900 border border-slate-800 text-slate-100 shadow-black/30'
      : 'bg-white text-slate-950 shadow-md'

  return (
    <div
      className={`
        rounded-3xl p-6 ${variantClasses}
        ${hoverable ? 'hover:shadow-xl cursor-pointer transition-shadow duration-200' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {description && <p className="text-slate-400 text-sm mb-4">{description}</p>}
      {children}
    </div>
  )
}
