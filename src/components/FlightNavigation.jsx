import { NavLink, useLocation } from "react-router-dom"
import { navLinkClassToggler } from "../helpers/utils"

function FlightNavigation() {
  const location = useLocation()

  return (
    <>
      <div className="search-results__navigation">
        <NavLink
          to={`departures${location?.search}`}
          className={({ isActive }) =>
            navLinkClassToggler("departures", isActive)
          }
        >
          <i className="fa-solid fa-plane-departure" /> departures
        </NavLink>
        <NavLink
          to={`arrivals${location?.search}`}
          className={({ isActive }) =>
            navLinkClassToggler("arrivals", isActive)
          }
        >
          <i className="fa-solid fa-plane-arrival" /> arrivals
        </NavLink>
      </div>
    </>
  )
}

export default FlightNavigation
