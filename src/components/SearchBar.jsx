import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getQueryParams } from '../helpers/utils'

function SearchBar() {
  const [inputValue, setInputValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const { dateQuery } = getQueryParams(searchParams)

  const handleSearch = (e) => {
    e.preventDefault()

    const params = { date: dateQuery }
    if (inputValue) params.search = inputValue

    setSearchParams(params)
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
