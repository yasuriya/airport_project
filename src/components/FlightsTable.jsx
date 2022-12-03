import { v4 as uuidv4 } from "uuid"
import FlightsList from "./FlightsList"
import NoFlight from "./NoFlight"
import { formatTime } from "../helpers/utils"

import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom"

const tableColumns = [
  "Terminal",
  "Local Time",
  "Destination",
  "Status",
  "Airline",
  "Flight",
]
function FlightsTable({ dateQuery, searchQuery, flightsList }) {
  const location = useLocation()
  // if (!flightsList?.length) return null

  const flightInfo = flightsList?.map((el) => ({
    terminal: el.term,
    localTime: el.timeArrExpectCalc || el.timeDepFact,
    destination:
      el["airportFromID.city_en"] || el["airportToID.city_en"],
    status:
      location.pathname === "/departures"
        ? `Departed at ${formatTime(el.timeDepFact)}`
        : `Arrived at ${formatTime(el.timeTakeofFact)}`,
    logo: el.airline.en.logoSmallName,
    airlineName: el.airline.en.name,
    flightNo: el.codeShareData[0].codeShare,
  }))

  return (
    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          {tableColumns?.map((el) => (
            <th key={uuidv4()}>{el}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Navigate to={`/departures?date=${dateQuery}`} />
            }
          />
          <Route
            path={location.pathname}
            element={
              <FlightsList
                flightInfo={flightInfo}
                dateQuery={dateQuery}
                searchQuery={searchQuery}
              />
            }
          />

          <Route path="*" element={<NoFlight />} />
        </Routes>
      </tbody>
    </table>
  )
}

export default FlightsTable
