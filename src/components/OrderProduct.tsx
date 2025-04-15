type OrderItemProps = {
  name: string
  amount: number
  price: number
}

const OrderItem = ({ name, amount, price }: OrderItemProps) => (
  <li className="flex justify-between items-center border-b-2 xxs:pb-2 xxs:last:pb-4 pb-4 last:pb-6 border-rose-100">
    <div className="grid grid-rows-[min-content_min-content] gap-1">
      <p className="heading4 ellipsis">{name}</p>
      <div className="flex xxs:gap-3 sm:justify-between items-center sm:max-w-24">
        <span className="text-primary font-bold">{amount}x</span>
        <span className="text-rose-400">@ ${price.toFixed(2)}</span>
      </div>
    </div>

    <span className="text-rose-900 font-bold">${price.toFixed(2)}</span>
  </li>
)

export default OrderItem
