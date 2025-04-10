import { Product } from 'data/menuData'

const totalCartItems = (arr: Product[]) =>
  arr.reduce((total, product) => {
    return total + product.quantity
  }, 0)

export default totalCartItems
