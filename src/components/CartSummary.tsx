import { Product } from 'data/menuData'
import CartItem from 'components/CartProduct'
import totalPrice from 'utils/calculateTotalPrice'

type CartSummaryProps = {
  removeFromCart: (productId: string) => void
  productsInCart: number
  products: Product[]
  toggleModal: () => void
}

const CartSummary = ({
  products,
  productsInCart,
  removeFromCart,
  toggleModal
}: CartSummaryProps) => {
  const cartItems = products.filter((product) => product.quantity > 0)
  const totalProductPrice = totalPrice(cartItems)

  return (
    <aside className="bg-white p-5 rounded-md grid gap-5 content-start">
      <h2 className="heading2 text-primary">Your cart ({productsInCart})</h2>

      <ul className="grid gap-4">
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            name={product.name}
            amount={product.quantity}
            price={product.price}
            removeItem={() => removeFromCart(product.id)}
          />
        ))}
      </ul>

      <div className="flex justify-between items-center text-rose-900">
        <p>Order total</p>
        <p className="font-bold text-2xl">${totalProductPrice.toFixed(2)}</p>
      </div>

      <button
        className="button py-4 bg-primary text-white text-base hover:text-white hover:bg-primary-dark"
        onClick={toggleModal}
      >
        Confirm Order
      </button>
    </aside>
  )
}

export default CartSummary
