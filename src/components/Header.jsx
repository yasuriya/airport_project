import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header__container">
      <Link to="/">
        <img
          className="header__image"
          src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
          alt=""
        />
      </Link>
    </div>
  )
}

export default Header
