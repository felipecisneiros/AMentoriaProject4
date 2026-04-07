'use client'

import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-slate-100 mb-2">
          {label}
          {props.required && <span className="text-danger">*</span>}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 rounded-2xl border bg-slate-900 text-slate-100
          focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent
          transition-colors duration-200
          ${error ? 'border-danger text-white' : 'border-slate-700'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-danger mt-2">{error}</p>}
      {helperText && !error && (
        <p className="text-sm text-slate-400 mt-2">{helperText}</p>
      )}
    </div>
  )
}
