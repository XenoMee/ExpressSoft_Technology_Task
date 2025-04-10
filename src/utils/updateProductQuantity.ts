import { MenuCategory, Product } from 'data/menuData'

type UpdateProductQuantityProps = {
  id: string
  menuProducts: MenuCategory[]
  quantity: number
}

const updateProductQuantity = ({
  id,
  menuProducts,
  quantity
}: UpdateProductQuantityProps) => {
  return menuProducts.flatMap((category: MenuCategory) =>
    category.products.map((product: Product) => {
      return product.id === id
        ? { ...product, quantity: (product.quantity ?? 0) + quantity }
        : product
    })
  )
}

export default updateProductQuantity
