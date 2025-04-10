import { useState } from 'react'
import { menuData } from '../data/menuData'
import ProductCard from 'components/ProductCard'
import classNames from 'classnames'

const Menu = () => {
  const [products, setProducts] = useState([])
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  )

  function updateCategories(
    category: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const isChecked = e.target.checked

    setSelectedCategories((categories) => {
      const newCategories = new Set(categories)
      if (isChecked) {
        newCategories.add(category)
      } else {
        newCategories.delete(category)
      }
      return newCategories
    })
  }

  return (
    <>
      <div className="container grid gap-8 lg:grid-cols-[.7fr_.3fr] lg:gap-10">
        <div className="grid gap-12">
          <div className="grid gap-4 justify-items-center">
            <h1 className="heading1">Menu</h1>
            <nav>
              <ul className="flex gap-4 text-sm font-semibold text-primary">
                {menuData.map(({ id, category }) => (
                  <li key={id}>
                    <label
                      className={classNames(
                        'button bg-primary text-white text-base hover:text-white hover:bg-primary-dark',
                        {
                          'bg-secondary': selectedCategories.has(category)
                        }
                      )}
                    >
                      <input
                        type="checkbox"
                        hidden
                        onChange={(e) => updateCategories(category, e)}
                      />
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="grid max-w-[800px] ss:grid-cols-auto-fit-250 sm:grid-cols-3 gap-8">
            {menuData
              .filter(
                ({ category }) =>
                  selectedCategories.size === 0 ||
                  selectedCategories.has(category)
              )
              .map((category) =>
                category.products.map((product) => {
                  return (
                    <li key={product.id}>
                      <ProductCard product={product} />
                    </li>
                  )
                })
              )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu
