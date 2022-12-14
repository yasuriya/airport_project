import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchParams, setSearchParams]: [URLSearchParams, Function] =
    useSearchParams()

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    searchParams.set('search', inputValue)
    if (!inputValue) searchParams.delete('search')

    setSearchParams(searchParams)
  }

  return (
    <div className="searchbar">
      <div className="searchbar__content">
        <h2 className="searchbar__title">SEARCH FLIGHT</h2>
        <form className="searchbar__form" onSubmit={(e) => handleSearch(e)}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Airline, destination or flight #"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
