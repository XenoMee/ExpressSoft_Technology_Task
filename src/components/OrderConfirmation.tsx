import { useEffect } from 'react'
import { Product } from 'data/menuData'
import OrderItem from '../components/OrderProduct'
import totalPrice from '../utils/calculateTotalPrice'

type OrderConfirmationProps = {
  toggle: () => void
  isOpen: boolean
  products: Product[]
  newOrder: () => void
}

const OrderConfirmation = ({
  toggle,
  isOpen,
  products,
  newOrder
}: OrderConfirmationProps) => {
  const cartItems = products.filter((product) => product.quantity > 0)
  const totalProductPrice = totalPrice(cartItems)

  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden')

    return () => document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  return (
    <div className={`${isOpen ? 'overlay' : ''}`}>
      <div
        className={`modal orderConfirmed grid grid-rows-[min-content_max-content] gap-6 bg-white origin-center ${
          isOpen ? 'scale-100' : 'scale-0'
        }  transition-transform delay-150 ease-in sm:mb-auto`}
        role="dialog"
        aria-hidden={`${!isOpen}`}
      >
        <div className="grid gap-10 sm:text-base">
          <div>
            <h2 className="heading1">Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
          </div>

          <div className="bg-rose-50 p-6 xxs:p-4 rounded-lg">
            <ul className="grid gap-4 xxs:gap-2" role="list">
              {cartItems.map((item) => (
                <OrderItem
                  key={item.id}
                  name={item.name}
                  amount={item.quantity}
                  price={item.price}
                />
              ))}
            </ul>

            <div className="flex justify-between items-center text-rose-900 mt-6">
              <p className="font-semibold">Order Total</p>
              <p className="font-bold text-2xl">
                ${totalProductPrice.toFixed(2)}
              </p>
            </div>
          </div>

          <button
            className="button py-4 bg-primary text-white text-base hover:text-white hover:bg-primary-dark"
            onClick={() => {
              toggle()
              newOrder()
            }}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  )
}
export default OrderConfirmation
