import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getQueryParams } from '../helpers/utils'
import { SearchParams } from '../types'

const SearchBar = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchParams, setSearchParams]: [URLSearchParams, Function] =
    useSearchParams()
  const { dateQuery }: { dateQuery: string } = getQueryParams(searchParams)

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const params: SearchParams = { date: dateQuery }
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
