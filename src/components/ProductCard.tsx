import { Product } from 'data/menuData'

type ProductCardProps = Product

const ProductCard = (props: ProductCardProps) => {
  const { name, price, description, available, quantity } = props

  return (
    <div className="grid gap-10">
      <div className="grid">
        <p className="heading3">{name}</p>
        <p className=" text-rose-500 text-sm">{description}</p>
        <span className="text-primary text-base font-semibold ">
          ${price.toFixed(2)}
        </span>

        {available ? (
          <button className="button btn-primary justify-self-center">
            Add to Cart
          </button>
        ) : (
          <button className="button" disabled>
            Not available
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard
