import { MenuCategory } from 'data/menuData'

const updateQuantity = (
  productId: string,
  menuData: MenuCategory[],
  quantity: number
) => {
  return menuData.map((item) => {
    return {
      ...item,
      products: item.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: (product.quantity ?? 0) + quantity
          }
        } else return product
      })
    }
  })
}

export default updateQuantity
