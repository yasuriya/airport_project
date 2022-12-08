import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useFlightsQuery } from '../store/flightsApi'
import FlightsList from './FlightsList'
import NoFlight from './NoFlight'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

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
          {TABLE_COLUMNS.map((column) => (
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
            element={<FlightsList queryParams={queryParams} />}
          />

          <Route path="*" element={<NoFlight />} />
        </Routes>
      </tbody>
    </table>
  )
}

export default FlightsTable

FlightsTable.propTypes = {
  queryParams: PropTypes.object.isRequired,
}
