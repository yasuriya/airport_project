import { useLocation } from 'react-router-dom'
import { useFlightsQuery } from '../store/flightsApi'
import { v4 as uuidv4 } from 'uuid'
import { getFlightInfo } from '../helpers/utils'
import { filterFlights, formatTime } from '../helpers/utils'
import PropTypes from 'prop-types'
import NoFlight from './NoFlight'

function FlightsList({ queryParams }) {
  const location = useLocation()

  const { dateQuery } = queryParams
  const { data = [] } = useFlightsQuery(dateQuery)

  const extractedFlights = getFlightInfo(data?.body, location)
  const filteredbyQuery = filterFlights(extractedFlights, queryParams)

  return !extractedFlights?.length ? (
    <NoFlight />
  ) : (
    filteredbyQuery?.map(
      ({
        terminal,
        localTime,
        destination,
        flightNo,
        logo,
        status,
        airlineName,
      }) => {
        return (
          <tr className="tr-flight" key={uuidv4()}>
            <td>
              <div
                className={
                  terminal === 'A'
                    ? 'terminal terminal__a '
                    : 'terminal terminal__d'
                }
              >
                {terminal}
              </div>
            </td>
            <td>{formatTime(localTime)}</td>
            <td>{destination}</td>
            <td>{status}</td>
            <td className="td-logo">
              <img
                src={logo}
                alt="logo"
                style={{ width: '64px', height: '38px' }}
              />
              <span>{airlineName}</span>
            </td>
            <td>{flightNo}</td>
          </tr>
        )
      }
    )
  )
}

export default FlightsList

FlightsList.propTypes = {
  queryParams: PropTypes.object.isRequired,
}
