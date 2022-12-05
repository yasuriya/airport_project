import { v4 as uuidv4 } from 'uuid'
import FlightsList from './FlightsList'
import NoFlight from './NoFlight'
import Spinner from './Spinner'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useFlightsQuery } from '../store/flightsApi'

const TABLE_COLUMNS = [
  'Terminal',
  'Local Time',
  'Destination',
  'Status',
  'Airline',
  'Flight',
]

function FlightsTable({ queryParams }) {
  const location = useLocation()
  const { dateQuery } = queryParams

  const { isFetching } = useFlightsQuery(dateQuery)

  return isFetching ? (
    <Spinner />
  ) : (
    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          {TABLE_COLUMNS.map((el) => (
            <th key={uuidv4()}>{el}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <Routes>
          <Route
            index
            path="/airport_project/"
            element={
              <Navigate to={`/airport_project/departures?date=${dateQuery}`} />
            }
          />
          <Route
            path={`/airport_project/${location.pathname}`}
            element={<FlightsList queryParams={queryParams} />}
          />

          <Route path="*" element={<NoFlight />} />
        </Routes>
      </tbody>
    </table>
  )
}

export default FlightsTable
