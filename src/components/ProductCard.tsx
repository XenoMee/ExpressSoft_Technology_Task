import ProductQuantityButton from 'common/ProductQuantityButton'
import { Product } from 'data/menuData'

type ProductCardProps = Product & {
  addToCart: () => void
  removeFromCart: () => void
}

const ProductCard = (props: ProductCardProps) => {
  const {
    name,
    price,
    description,
    available,
    addToCart,
    quantity,
    removeFromCart
  } = props

  return (
    <div className="grid grow">
      <p className="heading3">{name}</p>
      <p className=" text-rose-500 text-sm">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-primary text-base font-semibold ">
          ${price.toFixed(2)}
        </span>

        {available ? (
          <>
            {quantity > 0 ? (
              <ProductQuantityButton
                productQuantity={quantity}
                increaseQuantity={addToCart}
                decreaseQuantity={removeFromCart}
              />
            ) : (
              <button
                className="button btn-primary justify-self-center"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            )}
          </>
        ) : (
          <button
            className="button bg-white text-rose-900 cursor-default"
            disabled
          >
            Not available
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard
