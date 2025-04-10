import { MenuCategory, Product } from 'data/menuData'

type CartSummaryProps = {
  menuProducts: MenuCategory[]
  cartItems: Product[]
}

const CartSummary = ({ menuProducts, cartItems }: CartSummaryProps) => {
  return (
    <aside className="bg-white p-5 rounded-md grid gap-5 content-start">
      <h2 className="heading2 text-primary">Your cart ({})</h2>

      <ul className="grid gap-4" role="list"></ul>

      <div className="flex justify-between items-center text-rose-900">
        <p>Order total</p>
        <p className="font-bold text-2xl">${}</p>
      </div>

      <button className="button py-4 bg-primary text-white text-base hover:text-white hover:bg-primary-dark">
        Confirm Order
      </button>
    </aside>
  )
}

export default CartSummary
