import { NavLink } from "react-router-dom";

const helper = (s, a) => {
  return a
    ? `nav-link nav-link_${s} `.concat("active")
    : `nav-link nav-link_${s}`;
};

//TODO let navClassToggler

function FlightNavigation() {
  return (
    <>
      <div className="search-results__navigation">
        <NavLink
          to="/departures"
          className={({ isActive }) => helper("departures", isActive)}
        >
          <i className="fa-solid fa-plane-departure" /> departures
        </NavLink>
        <NavLink
          end
          to="/arrivals"
          className={({ isActive }) => helper("arrivals", isActive)}
        >
          <i className="fa-solid fa-plane-arrival" /> arrivals
        </NavLink>
      </div>
    </>
  );
}

export default FlightNavigation;
