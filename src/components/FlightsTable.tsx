import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useFlightsQuery } from '../store/flightsApi'
import FlightsList from './FlightsList'
import NoFlight from './NoFlight'
import Spinner from './Spinner'
import { QueryParams, LocationParams } from '../types'
import { useSearchParams } from 'react-router-dom'
import { getQueryParams } from '../helpers/utils'

const TABLE_COLUMNS: string[] = [
  'Terminal',
  'Local Time',
  'Destination',
  'Status',
  'Airline',
  'Flight',
]

const FlightsTable: React.FC = () => {
  const location: LocationParams = useLocation()
  const [searchParams]: [URLSearchParams, Function] = useSearchParams()
  const queryParams: QueryParams = getQueryParams(searchParams)

  const { dateQuery } = queryParams
  const { isFetching }: { isFetching: boolean } = useFlightsQuery(dateQuery)

  return isFetching ? (
    <Spinner />
  ) : (
    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          {TABLE_COLUMNS.map((column: string) => (
            <th key={uuidv4()}>{column}</th>
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
            element={<FlightsList {...queryParams} />}
          />
          <Route path="*" element={<NoFlight />} />
        </Routes>
      </tbody>
    </table>
  )
}

export default FlightsTable
