import { useEffect, useState } from "react"
import FlightNavigation from "./FlightNavigation"
import { useLocation } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import SearchBar from "./SearchBar"
import FlightsBoard from "./FlightsBoard"

const PUBLIC_URL = "https://api.iev.aero/api/flights"
const DEFAULT_DATE = "2022-02-23"

function AirportBoard() {
  const [flightsList, setFlightsList] = useState()

  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  const dateQuery = searchParams.get("date") || DEFAULT_DATE
  const searchQuery = searchParams.get("search") || ""

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`${PUBLIC_URL}/${dateQuery}`)
      const data = await res.json()

      if (location.pathname === "/arrivals")
        setFlightsList(data?.body?.arrival)
      if (location.pathname === "/departures")
        setFlightsList(data?.body?.departure)
    }
    fetchApi()
  }, [dateQuery, location.pathname])

  console.log(dateQuery)
  // console.log(location.search)

  return (
    <main className="search-results">
      <SearchBar
        dateQuery={dateQuery}
        searchQuery={searchQuery}
        setSearchParams={setSearchParams}
      />
      <FlightNavigation
        dateQuery={dateQuery}
        searchQuery={searchQuery}
        setSearchParams={setSearchParams}
      />
      <FlightsBoard
        flightsList={flightsList}
        dateQuery={dateQuery}
        searchQuery={searchQuery}
        setSearchParams={setSearchParams}
      />
    </main>
  )
}

export default AirportBoard
