import '@testing-library/jest-dom'
import { formatCategoryLabel } from '../category-utils'

describe('formatCategoryLabel', () => {
  it('formats known categories correctly', () => {
    expect(formatCategoryLabel('smartphones')).toBe('Smartphones')
    expect(formatCategoryLabel('furniture')).toBe('Móveis')
    expect(formatCategoryLabel('vehicle')).toBe('Veículos')
    expect(formatCategoryLabel('mobile-accessories')).toBe('Acessórios para Celular')
  })

  it('handles unknown categories with fallback', () => {
    expect(formatCategoryLabel('unknown-category')).toBe('Unknown Category')
    expect(formatCategoryLabel('test-category')).toBe('Test Category')
    expect(formatCategoryLabel('new-product-type')).toBe('New Product Type')
  })

  it('handles categories without hyphens', () => {
    expect(formatCategoryLabel('beauty')).toBe('Beleza')
    expect(formatCategoryLabel('tablets')).toBe('Tablets')
  })

  it('handles empty string', () => {
    expect(formatCategoryLabel('')).toBe('')
  })
}) 