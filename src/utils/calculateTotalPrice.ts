import { Product } from 'data/menuData'

const totalPrice = (arr: Product[]) =>
  arr.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity
  }, 0)

export default totalPrice
