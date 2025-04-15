import { Product } from 'data/menuData'

interface AvailabilityListProps {
  menuProducts: any[]
  updateAvailability: (
    productId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const AvailabilityList: React.FC<AvailabilityListProps> = ({
  menuProducts,
  updateAvailability
}) => {
  return (
    <ul className="inline-flex items-center justify-between">
      {menuProducts.map((category) =>
        category.products.map((product: Product) => (
          <li key={product.id}>
            <label className="flex items-center gap-2 text-sm font-semibold text-primary">
              <input
                type="checkbox"
                className="unchecked:bg-white"
                checked={product.available}
                onChange={(e) => updateAvailability(product.id, e)}
              />
              {product.name}
            </label>
          </li>
        ))
      )}
    </ul>
  )
}

export default AvailabilityList
