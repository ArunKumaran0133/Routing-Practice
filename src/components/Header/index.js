import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <ul className="list-container">
      <li className="img-wave-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-image"
        />
        <h1 className="wave-text">Wave</h1>
      </li>
      <ul className="item-text-container">
        <li className="about-contact-home-text">
          <Link to="/">Home</Link>
        </li>
        <li className="about-contact-home-text">
          <Link to="/about">About</Link>
        </li>
        <li className="about-contact-home-text">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </ul>
  </nav>
)

export default Header
