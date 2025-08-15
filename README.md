# 🛍️ DummyJSON Products - Teste Técnico

Uma aplicação React + TypeScript + Next.js que consome a API pública DummyJSON para gerenciar produtos de forma interativa.

## ✨ Funcionalidades

- **📋 Tabela de Produtos** com todas as colunas solicitadas
- **🔍 Busca por Nome** com debounce de 300ms
- **🏷️ Filtro por Categoria** com select dinâmico
- **📄 Paginação Server-side** usando limit e skip
- **📊 Ordenação** por nome, preço e rating
- **☑️ Seleção Múltipla** com checkbox individual e geral
- **🗑️ Exclusão** de produtos selecionados
- **⚡ Performance** com React Query para cache
- **🎨 UI Moderna** com Tailwind CSS

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd next-dummyjson
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **React Query (TanStack Query)** - Gerenciamento de estado e cache
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Estilização
- **Turbopack** - Bundler rápido

## 📡 Endpoints Utilizados

- `GET /products` - Listar produtos com paginação e ordenação
- `GET /products/search` - Buscar produtos por nome
- `GET /products/categories` - Listar categorias
- `GET /products/category/{category}` - Filtrar por categoria
- `DELETE /products/{id}` - Excluir produto

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx                    # Layout global com React Query
│   └── page.tsx                      # Página principal
├── components/
│   ├── ProductTable.tsx              # Tabela responsiva (desktop + mobile)
│   ├── ProductListContainer.tsx      # Container principal da lista
│   ├── ProductListHeader.tsx         # Header com contador dinâmico
│   ├── SearchBar.tsx                 # Campo de busca com debounce
│   ├── CategoryFilter.tsx            # Filtro por categoria
│   ├── Pagination.tsx                # Paginação server-side
│   ├── DeleteButton.tsx              # Botão de exclusão
│   ├── ItemsPerPageSelector.tsx      # Seletor de itens por página
│   └── LoadingSpinner.tsx            # Componente de loading
├── hooks/
│   ├── useProducts.ts                # Hook para produtos com filtros
│   ├── useCategories.ts              # Hook para categorias
│   ├── useDeleteProduct.ts           # Hook para exclusão
│   └── useProductFilters.ts          # Hook para gerenciar filtros
├── lib/
│   ├── api.ts                        # Configuração do Axios
│   ├── types.ts                      # Tipos TypeScript
│   ├── constants.ts                  # Constantes do projeto
│   ├── category-utils.ts             # Utilitários para categorias
│   └── react-query-provider.tsx      # Provider do React Query
└── __tests__/                        # Testes organizados por módulo
    ├── components/
    ├── hooks/
    └── lib/
```

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Obrigatórios
- [x] Tabela com checkbox de seleção
- [x] Imagem (thumbnail)
- [x] Nome do produto
- [x] Categoria
- [x] Preço
- [x] Rating
- [x] Estoque
- [x] Busca por nome
- [x] Filtro por categoria
- [x] Paginação server-side
- [x] Ordenação por colunas
- [x] Seleção múltipla
- [x] Exclusão via DELETE endpoint

### 🚀 Extras Implementados
- [x] UI/UX moderna e responsiva
- [x] Loading states
- [x] Debounce na busca
- [x] Cache inteligente com React Query
- [x] Tipagem TypeScript completa
- [x] Componentes reutilizáveis
- [x] **♿ Acessibilidade completa** (aria-labels, roles, navegação por teclado)
- [x] **🧪 Testes com React Testing Library** (20 testes passando)
- [x] **🏷️ Sistema de labels de categorias** (mapeamento personalizado + fallback inteligente)
- [x] **📱 Responsividade avançada** (tabela desktop + cards mobile)
- [x] **📊 Seletor de itens por página** (5, 8, 10, 15, 20)
- [x] **🔄 Reset automático de paginação** ao filtrar/buscar
- [x] **🎨 Design system** com gradientes e animações

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona bem em:
- **Desktop (1024px+)**: Tabela tradicional com todas as colunas
- **Tablet (768px - 1023px)**: Layout adaptativo com controles otimizados
- **Mobile (320px - 767px)**: Cards individuais para melhor usabilidade

### 🎨 Design System
- **Gradientes modernos**: Azul para elementos principais
- **Animações suaves**: Transições e hover effects
- **Cores semânticas**: Verde (estoque alto), amarelo (médio), vermelho (baixo)
- **Tipografia responsiva**: Tamanhos adaptáveis por breakpoint

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa linter
- `npm test` - Executa testes
- `npm run test:watch` - Executa testes em modo watch

## 📝 Notas Técnicas

- **Performance**: Utiliza React Query para cache inteligente e evitar requisições desnecessárias
- **UX**: Debounce de 300ms na busca para melhor experiência
- **Acessibilidade**: Labels, roles, aria-attributes e navegação por teclado
- **TypeScript**: Tipagem completa para melhor DX e manutenibilidade
- **Testes**: 20 testes cobrindo funcionalidades principais dos componentes
- **Internacionalização**: Sistema híbrido de tradução com fallback inteligente
- **Responsividade**: Layout adaptativo (tabela desktop + cards mobile)
- **Estado**: Gerenciamento centralizado com custom hooks
- **Build**: Otimizado para produção (133kB First Load JS)

## 🎯 Funcionalidades Detalhadas

### 📊 Tabela de Produtos
- **Checkbox individual**: Seleção de produtos específicos
- **Checkbox "Selecionar Todos"**: Seleção em massa
- **Ordenação clicável**: Nome, preço, rating, estoque (asc/desc)
- **Imagens otimizadas**: Thumbnails com alt text
- **Cores dinâmicas**: Estoque com indicadores visuais

### 🔍 Sistema de Busca e Filtros
- **Busca inteligente**: Debounce de 300ms para performance
- **Filtro por categoria**: Select com categorias traduzidas
- **Reset automático**: Paginação volta para página 1 ao filtrar
- **Contador dinâmico**: Mostra total de produtos filtrados

### 📄 Paginação Avançada
- **Server-side**: Usando limit e skip da API
- **Seletor de itens**: 5, 8, 10, 15, 20 produtos por página
- **Navegação intuitiva**: Botões anterior/próximo
- **Indicador de página**: "Página X de Y"

### 🗑️ Sistema de Exclusão
- **Exclusão múltipla**: Remove produtos selecionados
- **Feedback visual**: Loading state durante operação
- **Cache invalidação**: Lista atualizada automaticamente
- **Endpoint correto**: DELETE /products/{id}

## 🤝 Contribuição

Este é um projeto de teste técnico. Para contribuições, entre em contato.

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS**

*Teste técnico completo e funcional - Pronto para entrega! 🚀*
