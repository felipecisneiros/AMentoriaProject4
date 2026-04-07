# Design Tokens - Amentoria Design System

## 🎨 Paleta de Cores

### Cores Primárias
| Cor | Valor | Uso |
|-----|-------|-----|
| Primária | #0ea5e9 | Botões, Links, CTAs |
| Secundária | #a855f7 | Acentos, Destaques |

### Cores de Status
| Cor | Valor | Uso |
|-----|-------|-----|
| Sucesso | #10b981 | Status positivo, confirmação |
| Aviso | #f59e0b | Alertas, avisos |
| Perigo | #ef4444 | Erros, ações destrutivas |

### Escala de Cinza
| Nível | Valor | Uso |
|-----|-------|-----|
| 50 | #f9fafb | Background claro |
| 100 | #f3f4f6 | Backgrounds |
| 200 | #e5e7eb | Borders, Dividers |
| 300 | #d1d5db | Borders secundárias |
| 400 | #9ca3af | Textos secundários |
| 500 | #6b7280 | Textos secundários |
| 600 | #4b5563 | Textos normais |
| 700 | #374151 | Textos |
| 800 | #1f2937 | Textos principais |
| 900 | #111827 | Base, backgrounds escuros |

---

## 📏 Tipografia

### Escalas de Tamanho
```
xs: 0.75rem (12px)
sm: 0.875rem (14px)
base: 1rem (16px)
lg: 1.125rem (18px)
xl: 1.25rem (20px)
2xl: 1.5rem (24px)
3xl: 1.875rem (30px)
4xl: 2.25rem (36px)
```

### Pesos
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Heading Reference
```
<h1> → text-4xl font-bold
<h2> → text-3xl font-bold
<h3> → text-2xl font-semibold
<h4> → text-xl font-semibold
<p> → text-base
<small> → text-sm
```

---

## 🔲 Espaçamento

### Escala
| Tamanho | Valor |
|--------|-------|
| xs | 0.25rem (4px) |
| sm | 0.5rem (8px) |
| md | 1rem (16px) |
| lg | 1.5rem (24px) |
| xl | 2rem (32px) |
| 2xl | 3rem (48px) |
| 3xl | 4rem (64px) |

### Uso
```
p-4 → padding 1rem
m-2 → margin 0.5rem
gap-3 → espaçamento entre items
```

---

## 🔘 Componentes

### Button Sizes
| Tamanho | Padding | Font |
|---------|---------|------|
| Small | px-2 py-1 | text-sm |
| Medium | px-4 py-2 | text-base |
| Large | px-6 py-3 | text-lg |

### Border Radius
| Tamanho | Valor |
|---------|-------|
| xs | 0.125rem |
| sm | 0.25rem |
| md | 0.375rem |
| lg | 0.5rem (padrão componentes) |
| xl | 0.75rem |
| full | 9999px |

### Shadows
```
shadow-sm → 0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow-md → 0 4px 6px -1px rgba(0, 0, 0, 0.1)
shadow-lg → 0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-xl → 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

---

## 📱 Breakpoints

| Tamanho | Largura | Prefixo |
|---------|---------|---------|
| Mobile | < 640px | (sem prefixo) |
| Small | 640px | sm: |
| Medium | 768px | md: |
| Large | 1024px | lg: |
| Extra Large | 1280px | xl: |
| 2XL | 1536px | 2xl: |

### Exemplo de Uso
```tsx
// Mobile-first
<div className="md:grid-cols-2 lg:grid-cols-3">
  // 1 coluna em mobile
  // 2 colunas em tablets (md)
  // 3 colunas em desktops (lg)
</div>
```

---

## 🎯 Padrões de Cor

### BG + Text
```
bg-primary-500 + text-white
bg-secondary-500 + text-white
bg-gray-100 + text-gray-900
```

### Hover States
```
hover:bg-primary-600
hover:shadow-lg
hover:translate-y-1
```

### Focus States
```
focus:ring-2 focus:ring-primary-500
focus:outline-none
```

### Disabled States
```
disabled:opacity-50
disabled:cursor-not-allowed
```

---

## 🚀 Accessibility

### WCAG Compliance
- Sempre use `aria-label` em ícones
- Certifique-se de contraste de cores adequado
- Use `role` apropriado em componentes customizados
- Sempre use `label` associado com `input`

### Exemplo
```tsx
<label htmlFor="email">Email</label>
<input id="email" type="email" />

<button aria-label="Fechar menu">
  ✕
</button>
```

---

## 📐 Padrões de Layout

### Container
```tsx
<div className="max-w-7xl mx-auto px-4">
  {/* Conteúdo */}
</div>
```

### Grid Padrão
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>
```

### Fluxo Vertical
```tsx
<div className="space-y-4">
  {/* Items com espaçamento y */}
</div>
```

---

## 🎬 Animações

### Transições Padrão
```
transition-all duration-200
transition-colors duration-150
transition-shadow duration-300
```

### Hover Effects
```
hover:shadow-lg
hover:translate-y-[-2px]
hover:scale-105
```

### Animações CSS
```
animate-spin
animate-ping
animate-pulse
```

---

## 📋 Checklist de Design

- [ ] Use cores da paleta definida
- [ ] Respeite a escala de tipografia
- [ ] Mantenha espaçamento consistente
- [ ] Teste resposta em todos os breakpoints
- [ ] Garanta contraste de cores adequado
- [ ] Use transições para feedback visual
- [ ] Teste com leitores de tela
- [ ] Verifique estados: hover, focus, active, disabled

---

## 🔗 Referências

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)
- [Design System Best Practices](https://www.designsystems.com)
