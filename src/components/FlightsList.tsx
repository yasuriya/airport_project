import { useLocation } from 'react-router-dom'
import { useFlightsQuery } from '../store/flightsApi'
import { getFlightInfo } from '../helpers/utils'
import { v4 as uuidv4 } from 'uuid'

import {
  LocationParams,
  QueryParams,
  BodyType,
  ExtractedFlights,
} from '../types'
import Flight from './Flight'
import { filterFlights } from '../helpers/utils'
import NoFlight from './NoFlight'

type DataStore = {
  body: BodyType
  error: {
    code: string
  }
}

const FlightsList = (props: QueryParams): JSX.Element => {
  const location: LocationParams = useLocation()
  const { data } = useFlightsQuery<{ data: DataStore }>(props.dateQuery)

  const extractedFlights = getFlightInfo(data?.body, location)
  const filteredbyQuery = filterFlights(extractedFlights, props)

  return (
    <>
      {!filteredbyQuery?.length ? (
        <NoFlight />
      ) : (
        filteredbyQuery?.map((flight: ExtractedFlights) => (
          <Flight key={uuidv4()} {...flight} />
        ))
      )}
    </>
  )
}

export default FlightsList
