import NoFlight from "./NoFlight"
import DatePicker from "./DatePicker"
import FlightsTable from "./FlightsTable"

function FlightsBoard({
  flightsList,
  searchQuery,
  dateQuery,
  setSearchParams,
}) {
  console.log(flightsList?.length)

  return (
    <section className="search-results__container">
      <DatePicker
        searchQuery={searchQuery}
        dateQuery={dateQuery}
        setSearchParams={setSearchParams}
      />
      <FlightsTable
        searchQuery={searchQuery}
        dateQuery={dateQuery}
        flightsList={flightsList}
      />
      {/* {flightsList?.length ? (
        <FlightsTable
          searchQuery={searchQuery}
          dateQuery={dateQuery}
          flightsList={flightsList}
        />
      ) : (
        <NoFlight />
      )} */}
    </section>
  )
}

export default FlightsBoard
