# Guia de Início Rápido

## ⚡ Setup Inicial

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

---

## 📖 Primeiro Uso

### Importar Componentes
```tsx
import { Button, Input, Card, Modal, Navbar, Table } from '@/components'
```

### Usar um Componente
```tsx
'use client'

export default function MyPage() {
  return (
    <div className="p-8">
      <Button variant="primary">Clique aqui</Button>
    </div>
  )
}
```

---

## 🎨 Customizando Cores

As cores estão definidas em `tailwind.config.js`:

```javascript
colors: {
  primary: { 50: '...', 100: '...', ..., 900: '...' },
  secondary: { ... },
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
}
```

### Alterar Cor Primária
1. Abra `tailwind.config.js`
2. Modifique os valores da escala `primary`
3. Salve e a mudança será refletida automaticamente

**Exemplo:**
```javascript
primary: {
  50: '#eff6ff',  // Alterado
  100: '#dbeafe', // Alterado
  // ... continue com os outros tons
}
```

---

## ➕ Criar um Novo Componente

### Exemplo: Badge
```tsx
// components/Badge.tsx

'use client'

import React from 'react'

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  children,
}) => {
  const variants = {
    primary: 'bg-primary-100 text-primary-900',
    secondary: 'bg-secondary-100 text-secondary-900',
    success: 'bg-green-100 text-green-900',
    warning: 'bg-yellow-100 text-yellow-900',
    danger: 'bg-red-100 text-red-900',
  }

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  )
}
```

### Adicionar ao index.ts
```typescript
// components/index.ts
export { Badge } from './Badge'
```

### Usar o Componente
```tsx
import { Badge } from '@/components'

<Badge variant="success">✓ Ativo</Badge>
```

---

## 📄 Criar uma Nova Página

### Exemplo: Página de Perfil
```tsx
// app/profile/page.tsx

'use client'

import { Navbar, Card, Button, Input } from '@/components'
import { useState } from 'react'

export default function ProfilePage() {
  const [formData, setFormData] = useState({ name: '', bio: '' })

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Perfil', href: '/profile' },
  ]

  return (
    <>
      <Navbar items={navItems} />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <Card title="Meu Perfil">
          <div className="space-y-4">
            <Input
              label="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              label="Bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
            <Button variant="primary" className="w-full">
              Salvar Perfil
            </Button>
          </div>
        </Card>
      </main>
    </>
  )
}
```

---

## 🎯 Modificar Espaçamento

Em `tailwind.config.js`, seção `spacing`:

```javascript
spacing: {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem',  // 64px
}
```

---

## 🌐 Adicionar Fonte Customizada

### 1. Baixar Fonte
- Use Google Fonts: https://fonts.google.com

### 2. Adicionar a Next.js
```tsx
// app/layout.tsx
import { DM_Sans } from 'next/font/google'

const fontData = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={fontData.className}>
      <body>{children}</body>
    </html>
  )
}
```

### 3. Atualizar Tailwind (opcional)
```javascript
theme: {
  fontFamily: {
    sans: ['DM Sans', 'sans-serif'],
  }
}
```

---

## 🧪 Testar Responsividade

### Mobile First Approach
```tsx
<div className="
  grid
  grid-cols-1       // Mobile: 1 coluna
  md:grid-cols-2    // Tablet: 2 colunas
  lg:grid-cols-3    // Desktop: 3 colunas
  gap-4
">
  {/* Items */}
</div>
```

### DevTools
1. Abra Chrome DevTools (F12)
2. Clique em "Toggle device toolbar" (Ctrl+Shift+M)
3. Selecione diferentes dispositivos para testar

---

## 🐛 Debug de TypeScript

### Verificar Tipos
```bash
npm run type-check
```

Mostra erros de tipagem sem fazer build completo.

---

## 📦 Build para Produção

```bash
npm run build
```

Verifica se tudo está correto antes de fazer deploy.

---

## 🚀 Deploy no Vercel

### 1. Login no Vercel
```bash
npx vercel login
```

### 2. Deploy
```bash
npx vercel
```

Ou conecte seu repositório GitHub:
1. Vá para https://vercel.com
2. Clique em "New Project"
3. Selecione seu repositório
4. Clique em "Deploy"

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org)
- [Tailwind Docs](https://tailwindcss.com)
- [TypeScript Docs](https://www.typescriptlang.org)
- [React Docs](https://react.dev)

---

## 💡 Dicas Úteis

1. **Use `'use client'`** para componentes interativos com estado
2. **Coloque estilos globais** em `app/globals.css`
3. **Organize componentes** por tipo em pastas dentro de `components/`
4. **Use tipos TypeScript** para props do componente
5. **Teste em múltiplos navegadores** antes de deploy

---

## ❓ Troubleshooting

### Estilos não aparecem
- Verifique se o Tailwind CSS está sendo processado: `npm run dev`
- Limpe o `.next`: `rm -rf .next`
- Reinicie o servidor

### Erro de tipo TypeScript
- Rode `npm run type-check` para ver o erro completo
- Verifique as interfaces do componente

### Componente não está sendo importado
- Verifique se está exportado em `components/index.ts`
- Use o caminho correto: `from '@/components'`

---

**Happy coding! 🎉**
