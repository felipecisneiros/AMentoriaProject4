'use client'

import React from 'react'

interface ChatBubbleProps {
  role: 'student' | 'tutor' | 'system'
  message: string
  timestamp?: string
  attachment?: { type: 'image' | 'file' | 'audio'; label: string }
}

const bubbleStyles = {
  student: 'bg-gradient-to-r from-slate-800 to-slate-900 text-slate-200 self-end',
  tutor: 'bg-gradient-to-r from-sky-500 to-violet-500 text-slate-950 self-start',
  system: 'bg-slate-800 text-slate-300 self-center',
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  role,
  message,
  timestamp,
  attachment,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${bubbleStyles[role]} rounded-3xl px-5 py-4 max-w-[88%] shadow-xl shadow-slate-950/30`}>
      <div className="text-sm leading-6 whitespace-pre-line">{message}</div>
      {attachment && (
        <div className="mt-2 rounded-3xl border border-slate-700 bg-slate-950/80 p-3 text-xs text-slate-200">
          <div className="font-semibold text-slate-100">{attachment.type.toUpperCase()}</div>
          <p>{attachment.label}</p>
        </div>
      )}
      {timestamp && <span className="self-end text-[11px] text-slate-400">{timestamp}</span>}
    </div>
  )
}
