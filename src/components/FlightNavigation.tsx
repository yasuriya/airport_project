import { NavLink, useLocation } from 'react-router-dom'
import { navLinkClassToggler } from '../helpers/utils'
import { LocationParams } from '../types/index'

const FlightNavigation = (): JSX.Element => {
  const location: LocationParams = useLocation()

  return (
    <>
      <div className="search-results__navigation">
        <NavLink
          to={`departures${location?.search}`}
          className={({ isActive }: { isActive: boolean }) =>
            navLinkClassToggler('departures', isActive)
          }
        >
          <i className="fa-solid fa-plane-departure" /> departures
        </NavLink>
        <NavLink
          to={`arrivals${location?.search}`}
          className={({ isActive }: { isActive: boolean }) =>
            navLinkClassToggler('arrivals', isActive)
          }
        >
          <i className="fa-solid fa-plane-arrival" /> arrivals
        </NavLink>
      </div>
    </>
  )
}

export default FlightNavigation
