import { useLocation } from 'react-router-dom'
import { useFlightsQuery } from '../store/flightsApi'
import { getFlightInfo } from '../helpers/utils'
import NoFlight from './NoFlight'
import {
  LocationParams,
  QueryParams,
  BodyType,
  ExtractedFlights,
} from '../types'
import Flight from './Flight'

type DataStore = {
  body: BodyType
  error: {
    code: string
  }
}

type Extracted = ExtractedFlights[] | undefined

const FlightsList: React.FC<QueryParams> = (props) => {
  const location: LocationParams = useLocation()
  const { data } = useFlightsQuery<{ data: DataStore }>(props.dateQuery)

  const extractedFlights: Extracted = getFlightInfo(data?.body, location)

  return !extractedFlights?.length ? (
    <NoFlight />
  ) : (
    <Flight queryParams={props} extractedFlights={extractedFlights} />
  )
}

export default FlightsList
