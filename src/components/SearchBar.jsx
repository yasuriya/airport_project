function SearchBar({ dateQuery, setSearchParams, searchQuery }) {
  const handleSearch = (e) => {
    const params = {}
    if (dateQuery !== "2022-02-23") params.date = dateQuery
    if (e.target.value.length) params.search = e.target.value

    setSearchParams(params)
  }

  return (
    <div className="searchbar">
      <div className="searchbar__content">
        <h2 className="searchbar__title">SEARCH FLIGHT</h2>
        <form className="searchbar__form">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            value={searchQuery}
            onChange={handleSearch}
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
