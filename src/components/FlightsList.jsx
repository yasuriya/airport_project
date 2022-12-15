import { useLocation } from 'react-router-dom'
import { useFlightsQuery } from '../store/flightsApi'
import { getFlightInfo } from '../helpers/utils'
import { v4 as uuidv4 } from 'uuid'
import { filterFlights } from '../helpers/utils'
import PropTypes from 'prop-types'
import NoFlight from './NoFlight'
import Flight from './Flight'

function FlightsList({ queryParams }) {
  const location = useLocation()

  const { data = [] } = useFlightsQuery(queryParams.dateQuery)

  const extractedFlights = getFlightInfo(data?.body, location)
  const filteredbyQuery = filterFlights(extractedFlights, queryParams)

  return !filteredbyQuery?.length ? (
    <NoFlight />
  ) : (
    filteredbyQuery?.map((flight) => {
      return <Flight key={uuidv4()} {...flight} />
    })
  )
}

export default FlightsList

FlightsList.propTypes = {
  queryParams: PropTypes.object.isRequired,
}
