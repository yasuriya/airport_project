import { ExtractedFlights, QueryParams } from '../types'
import { filterFlights, formatTime } from '../helpers/utils'
import { v4 as uuidv4 } from 'uuid'

type FilteredByQuery = ExtractedFlights[] | any

const Flight = ({
  extractedFlights,
  queryParams,
}: {
  extractedFlights: ExtractedFlights[]
  queryParams: QueryParams
}): JSX.Element => {
  const filteredbyQuery: FilteredByQuery = filterFlights(
    extractedFlights,
    queryParams
  )

  return filteredbyQuery?.map(
    ({
      terminal,
      localTime,
      destination,
      flightNo,
      logo,
      status,
      airlineName,
    }: ExtractedFlights): JSX.Element => (
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
  )
}

export default Flight
