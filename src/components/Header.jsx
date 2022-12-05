import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header__container">
      <Link to="/">
        <img
          src="https://www.linkpicture.com/q/logo_1.png"
          className="header__image"
          alt="LOGO"
          type="image"
        ></img>
      </Link>
    </div>
  )
}

export default Header
