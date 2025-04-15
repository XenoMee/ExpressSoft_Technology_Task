import { MenuCategory, Product } from 'data/menuData'

const resetProductQuantity = (productId: string, menuItems: MenuCategory[]) => {
  return menuItems.map((item: MenuCategory) => {
    return {
      ...item,
      products: item.products.map((product: Product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: 0
          }
        } else return product
      })
    }
  })
}

export default resetProductQuantity
