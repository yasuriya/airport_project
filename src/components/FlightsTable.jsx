import { v4 as uuidv4 } from "uuid"
import FlightsList from "./FlightsList"
import NoFlight from "./NoFlight"
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom"
import { useFlightsQuery } from "../store/flightsApi"
import { MagnifyingGlass } from "react-loader-spinner"

const tableColumns = [
  "Terminal",
  "Local Time",
  "Destination",
  "Status",
  "Airline",
  "Flight",
]
function FlightsTable({ queryParams }) {
  const location = useLocation()
  const { dateQuery } = queryParams

  const { isFetching } = useFlightsQuery(dateQuery)

  return isFetching ? (
    <div className="spinner-container">
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#4CB7EE"
      />
    </div>
  ) : (
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
            element={<FlightsList queryParams={queryParams} />}
          />

          <Route path="*" element={<NoFlight />} />
        </Routes>
      </tbody>
    </table>
  )
}

export default FlightsTable
