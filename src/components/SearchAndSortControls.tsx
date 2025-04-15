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
    <div className="grid gap-2">
      <input
        placeholder="Search..."
        className="w-full rounded-md border-2 border-primary bg-white p-2 text-sm text-rose-900 placeholder:text-rose-900 focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) => setSearchText(e.target.value || '')}
      />

      <select
        name="price-sort"
        className="w-full rounded-md border-2 border-primary bg-white p-2 text-sm text-rose-900 focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) => setSortDirection(e.target.value as SortDirection)}
      >
        <option value="">No direction</option>
        <option value="ASC">Ascendent</option>
        <option value="DESC">Descendent</option>
      </select>
    </div>
  )
}

export default SearchAndSortControls
