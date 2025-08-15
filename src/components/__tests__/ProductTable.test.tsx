import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { ProductTable } from '../ProductTable'

const mockProducts = [
  {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    category: 'smartphones',
    thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
    rating: 4.69,
    stock: 94
  },
  {
    id: 2,
    title: 'iPhone X',
    price: 899,
    category: 'smartphones',
    thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
    rating: 4.44,
    stock: 34
  }
]

describe('ProductTable', () => {
  const mockOnSelect = jest.fn()
  const mockOnSort = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders product table with correct data', () => {
    render(<ProductTable products={mockProducts} onSelect={mockOnSelect} />)
    
    // Verifica se os produtos são renderizados (pode ter múltiplas instâncias - desktop e mobile)
    expect(screen.getAllByText('iPhone 9')).toHaveLength(2) // Desktop + Mobile
    expect(screen.getAllByText('iPhone X')).toHaveLength(2) // Desktop + Mobile
    
    // Verifica se os preços são renderizados (desktop + mobile)
    expect(screen.getAllByText('R$ 549.00')).toHaveLength(2) // Desktop + Mobile
    expect(screen.getAllByText('R$ 899.00')).toHaveLength(2) // Desktop + Mobile
    
    // Verifica se as categorias são renderizadas (agora traduzidas - desktop + mobile)
    expect(screen.getAllByText('Smartphones')).toHaveLength(4) // 2 produtos × 2 (desktop + mobile)
  })

  it('renders checkboxes for each product', () => {
    render(<ProductTable products={mockProducts} onSelect={mockOnSelect} />)
    
    // Verifica se os checkboxes são renderizados (desktop + mobile)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(5) // 2 produtos × 2 (desktop + mobile) + 1 checkbox geral
  })

  it('calls onSelect when checkbox is clicked', () => {
    render(<ProductTable products={mockProducts} onSelect={mockOnSelect} />)
    
    const firstProductCheckbox = screen.getAllByRole('checkbox')[1] // Primeiro produto
    fireEvent.click(firstProductCheckbox)
    
    expect(mockOnSelect).toHaveBeenCalledWith([1])
  })

  it('calls onSort when column header is clicked', () => {
    render(<ProductTable products={mockProducts} onSelect={mockOnSelect} onSort={mockOnSort} />)
    
    const nameHeader = screen.getByText('Nome')
    fireEvent.click(nameHeader)
    
    expect(mockOnSort).toHaveBeenCalledWith('title')
  })

  it('selects all products when header checkbox is clicked', () => {
    render(<ProductTable products={mockProducts} onSelect={mockOnSelect} />)
    
    const selectAllCheckbox = screen.getAllByRole('checkbox')[0]
    fireEvent.click(selectAllCheckbox)
    
    expect(mockOnSelect).toHaveBeenCalledWith([1, 2])
  })

  it('displays correct stock status colors', () => {
    render(<ProductTable products={mockProducts} onSelect={mockOnSelect} />)
    
    // Produto com estoque alto (94) deve ter classe verde (primeira instância - desktop)
    const highStockProducts = screen.getAllByText('94')
    expect(highStockProducts[0]).toHaveClass('text-green-800')
    
    // Produto com estoque baixo (34) deve ter classe amarela (primeira instância - desktop)
    const lowStockProducts = screen.getAllByText('34')
    expect(lowStockProducts[0]).toHaveClass('text-yellow-800')
  })
}) 