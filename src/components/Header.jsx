import { Link } from 'react-router-dom'
import Banner from './Banner'

function Header() {
  return (
    <>
      <div className="header__container">
        <Link to="/">
          <img
            src="https://www.linkpicture.com/q/logo_1.png"
            className="header__image"
            alt="LOGO"
            type="image"
          />
        </Link>
      </div>

      <Banner />
    </>
  )
}

export default Header
