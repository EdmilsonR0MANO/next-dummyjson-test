import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SearchBar } from '../SearchBar'

describe('SearchBar', () => {
  const mockOnSearch = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders search input with placeholder', () => {
    render(<SearchBar onSearch={mockOnSearch} />)
    
    const searchInput = screen.getByPlaceholderText('Buscar produto...')
    expect(searchInput).toBeInTheDocument()
  })

  it('calls onSearch with debounce when typing', async () => {
    render(<SearchBar onSearch={mockOnSearch} />)
    
    const searchInput = screen.getByPlaceholderText('Buscar produto...')
    fireEvent.change(searchInput, { target: { value: 'iPhone' } })
    
    // Verifica que onSearch não foi chamado imediatamente
    expect(mockOnSearch).not.toHaveBeenCalled()
    
    // Avança o timer para simular o debounce
    jest.advanceTimersByTime(300)
    
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('iPhone')
    })
  })

  it('has proper accessibility attributes', () => {
    render(<SearchBar onSearch={mockOnSearch} />)
    
    const searchInput = screen.getByLabelText('Buscar produtos por nome')
    expect(searchInput).toBeInTheDocument()
    
    const label = screen.getByText('Buscar produtos')
    expect(label).toBeInTheDocument()
  })
}) 