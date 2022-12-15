import { ExtractedFlights } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { formatTime } from '../helpers/utils'

const Flight = ({
  terminal,
  localTime,
  destination,
  status,
  logo,
  airlineName,
  flightNo,
}: ExtractedFlights): JSX.Element => {
  return (
    <tr className="tr-flight" key={uuidv4()}>
      <td>
        <div
          className={
            terminal === 'A' ? 'terminal terminal__a ' : 'terminal terminal__d'
          }
        >
          {terminal}
        </div>
      </td>
      <td>{formatTime(localTime)}</td>
      <td>{destination}</td>
      <td>{status}</td>
      <td className="td-logo">
        <img src={logo} alt="logo" style={{ width: '64px', height: '38px' }} />
        <span>{airlineName}</span>
      </td>
      <td>{flightNo}</td>
    </tr>
  )
}

export default Flight
