import { useLocation } from "react-router-dom"
import { fn } from "../helpers/utils"
import moment from "moment"
import { v4 as uuidv4 } from "uuid"

function FlightsList({ flightInfo, searchQuery, dateQuery }) {
  // if (!flightInfo?.length) return null

  // console.log(flightInfo)

  //   const sortedByTime = fn(
  //     flights,
  //     searchQuery,
  //     dateQuery,
  //     "airportFromID.city_en"
  //   ).sort(
  //     (a, b) => new Date(a?.timeArrExpectCalc) - new Date(b?.timeArrExpectCalc)
  //   );

  return flightInfo?.length ? (
    flightInfo?.map(
      ({
        terminal,
        localTime,
        destination,
        flightNo,
        logo,
        status,
        airlineName,
      }) => (
        <tr className="tr-flight" key={uuidv4()}>
          <td>
            <div
              className={
                terminal === "A" ? "terminal-a" : "terminal-d"
              }
            >
              {terminal}
            </div>
          </td>
          <td>{moment(localTime).format("HH:mm")}</td>
          <td>{destination}</td>
          <td>{status}</td>
          <td className="td-logo">
            <img
              src={logo}
              alt="logo"
              style={{ width: "64px", height: "38px" }}
            />
            <span>{airlineName}</span>
          </td>
          <td>{flightNo}</td>
        </tr>
      )
    )
  ) : (
    <h1>123123123123</h1>
  )
}

export default FlightsList
