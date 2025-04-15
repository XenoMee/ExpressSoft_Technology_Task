import { SortDirection } from '../data/menuData'

interface SearchAndSortControlsProps {
  setSearchText: (text: string) => void
  setSortDirection: (direction: SortDirection | undefined) => void
}

const SearchAndSortControls = ({
  setSearchText,
  setSortDirection
}: SearchAndSortControlsProps) => {
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
          <option value="">No direction</option>
          <option value="ASC">Ascendent</option>
          <option value="DESC">Descendent</option>
        </select>
      </div>
    </>
  )
}

export default SearchAndSortControls
