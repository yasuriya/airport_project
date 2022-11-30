import { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="searchbar">
      <div className="searchbar__content">
        <h2 className="searchbar__title">SEARCH FLIGHT</h2>
        <form className="searchbar__form">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Airline, destination or flight #"
            value={input}
            onChange={onChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
