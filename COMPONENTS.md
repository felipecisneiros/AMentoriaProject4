# Documentação de Componentes

## Button

### Props
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'  // Estilo do botão
  size?: 'sm' | 'md' | 'lg'                                  // Tamanho do botão
  loading?: boolean                                          // Mostra spinner
  children: React.ReactNode                                  // Conteúdo do botão
}
```

### Exemplos
```tsx
// Botão primário
<Button variant="primary">Clique aqui</Button>

// Botão grande com loading
<Button size="lg" loading>Carregando...</Button>

// Botão com ícone
<Button variant="outline">
  ✨ Favoritar
</Button>

// Botão desabilitado
<Button disabled>Desabilitado</Button>
```

---

## Input

### Props
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string          // Rótulo do input
  error?: string          // Mensagem de erro
  helperText?: string     // Texto de ajuda
}
```

### Exemplos
```tsx
// Input simples
<Input />

// Input com label
<Input label="Email" type="email" />

// Input com validação
<Input
  label="Senha"
  type="password"
  error="Senha muito curta"
  required
/>

// Input com helper text
<Input
  label="Telefone"
  helperText="Formato: (XX) XXXXX-XXXX"
/>
```

---

## Card

### Props
```typescript
interface CardProps {
  title?: string                      // Título do card
  description?: string                // Descrição do card
  children: React.ReactNode          // Conteúdo do card
  className?: string                 // Classes CSS customizadas
  onClick?: () => void               // Callback ao clicar
  hoverable?: boolean                // Ativa efeito de hover
}
```

### Exemplos
```tsx
// Card simples
<Card title="Meu Card">
  <p>Conteúdo</p>
</Card>

// Card interativo
<Card
  title="Produto"
  hoverable
  onClick={() => console.log('clicado')}
>
  <p>Passe o mouse</p>
</Card>

// Card com múltiplo conteúdo
<Card title="Dashboard" description="Estatísticas">
  <div className="grid grid-cols-2 gap-4">
    {/* conteúdo */}
  </div>
</Card>
```

---

## Modal

### Props
```typescript
interface ModalProps {
  isOpen: boolean                    // Controla visibilidade
  onClose: () => void                // Callback ao fechar
  title: string                      // Título do modal
  children: React.ReactNode          // Conteúdo
  footer?: React.ReactNode           // Rodapé com botões
  size?: 'sm' | 'md' | 'lg'         // Tamanho do modal
}
```

### Exemplos
```tsx
const [isOpen, setIsOpen] = useState(false)

// Modal simples
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmação"
>
  <p>Tem certeza?</p>
</Modal>

// Modal com ações
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Deletar"
  size="sm"
  footer={
    <>
      <Button onClick={() => setIsOpen(false)}>
        Cancelar
      </Button>
      <Button variant="danger">Deletar</Button>
    </>
  }
>
  <p>Esta ação não pode ser desfeita</p>
</Modal>
```

---

## Table

### Props
```typescript
interface Column<T> {
  key: keyof T
  header: string
  render?: (value: any, row: T) => React.ReactNode
}

interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
  striped?: boolean  // Linhas alternadas
}
```

### Exemplos
```tsx
interface User {
  id: number
  name: string
  email: string
  status: 'ativo' | 'inativo'
}

const users: User[] = [...]

const columns = [
  { key: 'name', header: 'Nome' },
  { key: 'email', header: 'Email' },
  {
    key: 'status',
    header: 'Status',
    render: (value) => (
      <span className={value === 'ativo' ? 'text-success' : 'text-danger'}>
        {value}
      </span>
    ),
  },
]

<Table columns={columns} data={users} striped />
```

---

## Navbar

### Props
```typescript
interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  brand?: string       // Nome da marca
  items: NavItem[]     // Itens de navegação
}
```

### Exemplos
```tsx
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
]

<Navbar brand="Amentoria" items={navItems} />
```

---

## Sistema de Cores

### Cores Primárias
```
bg-primary-50 (f0f9ff)
bg-primary-100 (e0f2fe)
bg-primary-200 (bae6fd)
bg-primary-300 (7dd3fc)
bg-primary-400 (38bdf8)
bg-primary-500 (0ea5e9) ← Principal
bg-primary-600 (0284c7)
bg-primary-700 (0369a1)
bg-primary-800 (075985)
bg-primary-900 (0c3d66)
```

### Cores Secundárias
```
bg-secondary-50 a bg-secondary-900
```

### Cores de Status
```
bg-success (#10b981)
bg-warning (#f59e0b)
bg-danger (#ef4444)
```

---

## Exemplo Completo

```tsx
'use client'

import { useState } from 'react'
import { Button, Input, Card, Modal, Navbar } from '@/components'

export default function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <Navbar brand="MyApp" items={navItems} />
      <main className="max-w-md mx-auto mt-8">
        <Card title="Formulário de Contato" hoverable>
          <Input
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mb-4"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4"
          />
          <Button
            variant="primary"
            onClick={() => setIsModalOpen(true)}
            className="w-full"
          >
            Enviar
          </Button>
        </Card>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Confirmação"
          footer={
            <>
              <Button onClick={() => setIsModalOpen(false)}>
                Cancelar
              </Button>
              <Button variant="primary">Confirmar</Button>
            </>
          }
        >
          <p>Enviar formulário?</p>
        </Modal>
      </main>
    </>
  )
}
```
