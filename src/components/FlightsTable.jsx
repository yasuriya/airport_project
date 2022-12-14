import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useFlightsQuery } from '../store/flightsApi'
import FlightsList from './FlightsList'
import NoFlight from './NoFlight'
import Spinner from './Spinner'
import { useSearchParams } from 'react-router-dom'
import { getQueryParams } from '../helpers/utils'

const TABLE_COLUMNS = [
  'Terminal',
  'Local Time',
  'Destination',
  'Status',
  'Airline',
  'Flight',
]

function FlightsTable() {
  const location = useLocation()

  const [searchParams] = useSearchParams()
  const queryParams = getQueryParams(searchParams)
  const { dateQuery } = queryParams

  const { isFetching } = useFlightsQuery(dateQuery)

  return isFetching ? (
    <Spinner />
  ) : (
    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          {TABLE_COLUMNS.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <Routes>
          <Route
            index
            path="/"
            element={<Navigate to={`/departures?date=${dateQuery}`} />}
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
