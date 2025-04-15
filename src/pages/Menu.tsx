import { useState } from 'react'
import { menuData, MenuCategory, SortDirection } from '../data/menuData'
import CartSummary from 'components/CartSummary'
import totalCartItems from 'utils/calculateTotalProducts'
import EmptyCart from 'components/EmptyCart'
import updateQuantity from 'utils/updateProductQuantity'
import resetProductQuantity from 'utils/resetProductQuantity'
import OrderConfirmation from 'components/OrderConfirmation'
import CategoryFilter from 'components/CategoryFilter'
import ProductList from 'components/ProductList'
import AvailabilityList from 'components/AvailabilityList'
import SearchAndSortControls from 'components/SearchAndSortControls'

const Menu = () => {
  const [menuProducts, setMenuProducts] = useState<MenuCategory[]>(menuData)
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  )
  const [modal, setModal] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [sortDirection, setSortDirection] = useState<
    SortDirection | undefined
  >()

  const products = menuProducts.flatMap(({ products }) => products)

  const productsToDisplay = menuProducts
    .filter(({ category }) => {
      return selectedCategories.size === 0 || selectedCategories.has(category)
    })
    .flatMap(({ products }) => products)
    .filter(({ name }) => name.toLowerCase().includes(searchText))
    .sort((a, b) => {
      if (sortDirection === 'ASC') {
        return a.price - b.price
      }

      if (sortDirection === 'DESC') {
        return b.price - a.price
      }

      return 0
    })

  const updateCategories = (
    category: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const increaseQuantity = (productId: string, quantity: number = 1) => {
    setMenuProducts(updateQuantity(productId, menuProducts, quantity))
  }

  const decreaseQuantity = (productId: string, quantity: number = -1) => {
    setMenuProducts(updateQuantity(productId, menuProducts, quantity))
  }

  const removeProductFromCart = (productId: string) => {
    setMenuProducts(resetProductQuantity(productId, menuProducts))
  }

  const startNewOrder = () => setMenuProducts(menuData)
  const toggleModal = () => setModal((prevModal) => !prevModal)

  const totalProductsInCart = totalCartItems(products)

  return (
    <>
      <SearchAndSortControls
        setSearchText={setSearchText}
        setSortDirection={setSortDirection}
      />

      <div className="container grid gap-8 lg:grid-cols-[.7fr_.3fr] lg:gap-10">
        <div className="grid gap-12">
          <div className="grid gap-4 justify-items-center">
            <h1 className="heading1">Menu</h1>
            <CategoryFilter
              menuData={menuData}
              selectedCategories={selectedCategories}
              updateCategories={updateCategories}
            />
          </div>

          <ProductList
            products={productsToDisplay}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />

          <div className="grid gap-6">
            <h2 className="heading2">Availability list</h2>
            <AvailabilityList
              menuProducts={menuProducts}
              updateAvailability={updateAvailability}
            />
          </div>
        </div>

        {totalProductsInCart > 0 ? (
          <CartSummary
            removeFromCart={removeProductFromCart}
            productsInCart={totalProductsInCart}
            products={products}
            toggleModal={toggleModal}
          />
        ) : (
          <EmptyCart />
        )}
      </div>

      <OrderConfirmation
        toggle={toggleModal}
        isOpen={modal}
        products={products}
        newOrder={startNewOrder}
      />
    </>
  )
}

export default Menu
