import { useState } from 'react'
import {
  menuData,
  Product,
  MenuCategory,
  SortDirection
} from '../data/menuData'
import ProductCard from 'components/ProductCard'
import classNames from 'classnames'
import CartSummary from 'components/CartSummary'
import totalCartItems from 'utils/calculateTotalProducts'
import EmptyCart from 'components/EmptyCart'
import updateProductQuantity from 'utils/updateProductQuantity'

const Menu = () => {
  const [menuProducts, setMenuProducts] = useState<MenuCategory[]>(menuData)
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  )
  const [searchText, setSearchText] = useState('')
  const [sortDirection, setSortDirection] = useState<
    SortDirection | undefined
  >()

  const productsToDisplay = menuProducts
    .filter(({ category }) => {
      return selectedCategories.size === 0 || selectedCategories.has(category)
    })
    .flatMap(({ products }) => products)
    .filter(({ name }) => name.includes(searchText))
    .sort((a, b) => {
      if (sortDirection === 'ASC') {
        return a.price - b.price
      }

      if (sortDirection === 'DESC') {
        return b.price - a.price
      }

      return 0
    })

  const cartItems = menuProducts.flatMap((category) =>
    category.products.filter((product) => product.quantity > 0)
  )

  // const increaseItemQuantity = (id: string, quantity = 1) => {
  //   setMenuProducts(updateProductQuantity({ id, menuProducts, quantity }))
  // }

  // const decreaseItemQuantity = (id: string, quantity = 1) => {
  //   setMenuProducts(
  //     updateProductQuantity({ id, menuProducts, quantity: -quantity })
  //   )
  // }

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

  function updateAvailability(
    productId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const isChecked = e.target.checked

    setMenuProducts((items) => {
      return items.map((item) => {
        return {
          ...item,
          products: item.products.map((product) => {
            if (product.id === productId) {
              product.available = isChecked
            }

            return product
          })
        }
      })
    })
  }

  return (
    <>
      <div>
        <input
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value || '')}
        />
      </div>

      <div>
        <select
          name="price-sort"
          onChange={(e) => setSortDirection(e.target.value as SortDirection)}
        >
          <option value="ASC">Ascendent</option>
          <option value="DESC">Descendent</option>
          <option value=""></option>
        </select>
      </div>

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
            {productsToDisplay.map((product) => {
              return (
                <li key={product.id}>
                  <ProductCard {...product} />
                </li>
              )
            })}
          </ul>

          <h2>Availability list</h2>
          <ul>
            {menuProducts.map((category) =>
              category.products.map((product) => {
                return (
                  <li key={product.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={product.available}
                        onChange={(e) => updateAvailability(product.id, e)}
                      />
                      {product.name}
                    </label>
                  </li>
                )
              })
            )}
          </ul>
        </div>

        {totalCartItems(cartItems) > 0 ? (
          <CartSummary menuProducts={menuProducts} cartItems={cartItems} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  )
}

export default Menu
