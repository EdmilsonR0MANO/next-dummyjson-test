export const categoryLabels: Record<string, string> = {
  'smartphones': 'Smartphones',
  'laptops': 'Notebooks',
  'fragrances': 'Perfumes',
  'skincare': 'Cuidados com a Pele',
  'groceries': 'Mantimentos',
  'home-decoration': 'Decoração para Casa',
  'furniture': 'Móveis',
  'tops': 'Blusas',
  'womens-dresses': 'Vestidos',
  'womens-shoes': 'Sapatos Femininos',
  'mens-shirts': 'Camisas Masculinas',
  'mens-shoes': 'Sapatos Masculinos',
  'mens-watches': 'Relógios Masculinos',
  'womens-watches': 'Relógios Femininos',
  'womens-bags': 'Bolsas',
  'womens-jewellery': 'Joias',
  'sunglasses': 'Óculos de Sol',
  'automotive': 'Automotivo',
  'motorcycle': 'Motocicletas',
  'lighting': 'Iluminação',
  'vehicle': 'Veículos',
  'mobile-accessories': 'Acessórios para Celular',
  'sports-accessories': 'Acessórios Esportivos',
  'kitchen-accessories': 'Acessórios de Cozinha',
  'beauty': 'Beleza',
  'tablets': 'Tablets',
  'skin-care': 'Cuidados com a Pele'
}

export function formatCategoryLabel(category: string): string {
  // Se tem label personalizado, usa ele
  if (categoryLabels[category]) {
    return categoryLabels[category]
  }
  
  // Fallback inteligente: converte kebab-case para Title Case
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
} 