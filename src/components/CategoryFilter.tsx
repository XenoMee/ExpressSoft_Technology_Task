import classNames from 'classnames'

interface CategoryFilterProps {
  menuData: { id: string; category: string }[]
  selectedCategories: Set<string>
  updateCategories: (
    category: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  menuData,
  selectedCategories,
  updateCategories
}) => {
  return (
    <nav className="col-span-2 justify-self-center">
      <ul className="flex gap-4 text-sm font-semibold text-primary">
        {menuData.map(({ id, category }) => (
          <li key={id}>
            <label
              className={classNames(
                'button bg-primary text-white text-base hover:text-white hover:bg-opacity-70',
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
  )
}

export default CategoryFilter
