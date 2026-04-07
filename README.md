# Amentoria Design System

Um sistema de design completo, modular e extensível construído com **Next.js**, **TypeScript** e **Tailwind CSS**.

## 🚀 Características

- ✅ Componentes reutilizáveis e bem documentados
- ✅ Design System com cores, tipografia e espaçamento definidos
- ✅ Formulários com validação
- ✅ Tabelas com dados estruturados
- ✅ Modais e diálogos interativos
- ✅ Totalmente tipado com TypeScript
- ✅ Responsivo e acessível
- ✅ Tailwind CSS para estilização rápida

## 📦 Componentes Disponíveis

### Button
Botão com múltiplas variações de estilo, tamanho e estado:
```tsx
<Button variant="primary" size="md" loading={false}>
  Clique aqui
</Button>
```

**Variantes:** primary, secondary, outline, danger
**Tamanhos:** sm, md, lg

### Input
Campo de entrada com suporte a validação:
```tsx
<Input
  label="Email"
  type="email"
  placeholder="seu@email.com"
  error="Email inválido"
  helperText="Digite um email válido"
/>
```

### Card
Componente para agrupar conteúdo:
```tsx
<Card title="Meu Card" hoverable>
  <p>Conteúdo do card</p>
</Card>
```

### Modal
Diálogo modal com suporte a diferentes tamanhos:
```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmar"
  size="md"
>
  Conteúdo do modal
</Modal>
```

### Table
Tabela com dados estruturados:
```tsx
<Table columns={columns} data={data} striped />
```

### Navbar
Barra de navegação responsiva:
```tsx
<Navbar brand="Amentoria" items={navItems} />
```

## 🎨 Sistema de Cores

- **Primário:** `bg-primary-500` (#0ea5e9)
- **Secundário:** `bg-secondary-500` (#a855f7)
- **Sucesso:** `bg-success` (#10b981)
- **Aviso:** `bg-warning` (#f59e0b)
- **Perigo:** `bg-danger` (#ef4444)
- **Cinza:** `bg-gray-X` (50-900)

## 📱 Páginas

- **Home** (`/`) - Página inicial com visão geral
- **Componentes** (`/components`) - Galeria de componentes
  - Buttons (`/components/buttons`)
  - Inputs (`/components/inputs`)
  - Cards (`/components/cards`)
  - Modais (`/components/modals`)
- **Formulários** (`/forms`) - Exemplos de formulários
- **Tabelas** (`/tables`) - Exemplos de tabelas
- **Dashboard** (`/dashboard`) - Dashboard com estatísticas

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

1. **Instale as dependências:**
```bash
npm install
```

2. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

3. **Abra no navegador:**
```
http://localhost:3000
```

## 📚 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout raiz
│   ├── globals.css         # Estilos globais
│   ├── page.tsx            # Página inicial
│   ├── components/
│   │   ├── page.tsx
│   │   ├── buttons/
│   │   ├── inputs/
│   │   ├── cards/
│   │   └── modals/
│   ├── forms/
│   │   └── page.tsx
│   ├── tables/
│   │   └── page.tsx
│   └── dashboard/
│       └── page.tsx
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Navbar.tsx
│   ├── Table.tsx
│   └── index.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🚀 Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm run start

# Lint
npm run lint

# Type checking
npm run type-check
```

## 💻 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React 18** - UI Library

## 📝 Exemplo de Uso

```tsx
'use client'

import { Button, Card, Input } from '@/components'
import { useState } from 'react'

export default function MyPage() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="max-w-md mx-auto mt-8">
      <Card title="Login">
        <Input
          label="Email"
          type="email"
          placeholder="seu@email.com"
          className="mb-4"
        />
        <Input
          label="Senha"
          type="password"
          placeholder="••••••••"
          className="mb-4"
        />
        <Button
          variant="primary"
          loading={isLoading}
          onClick={() => setIsLoading(!isLoading)}
          className="w-full"
        >
          Entrar
        </Button>
      </Card>
    </div>
  )
}
```

## 🎯 Próximos Passos

- [ ] Adicionar suporte a temas (dark/light mode)
- [ ] Integrar Charts.js para gráficos
- [ ] Adicionar componentes de paginação
- [ ] Criar sistema de notificações
- [ ] Adicionar componentes de seleção (Select, Checkbox, Radio)
- [ ] Documentação interativa (Storybook)

## 📄 Licença

MIT

## 🤝 Contribuindo

Sinta-se livre para contribuir com melhorias e novos componentes!

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS**
