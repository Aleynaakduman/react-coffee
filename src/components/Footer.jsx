import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2025 Haklarımız Saklıdır</p>

      <div className="sosyal-icon">
        <FontAwesomeIcon className='icon1' icon={faInstagram} />
        <FontAwesomeIcon className='icon2' icon={faTwitter} />
        <FontAwesomeIcon className='icon3' icon={faFacebook} />
      </div>
    </div>
  )
}

export default Footer
