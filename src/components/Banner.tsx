import { useState } from 'react'

const Banner: React.FC = () => {
  const [bannerStatus, setBannerStatus] = useState<boolean>(true)

  return (
    <>
      {bannerStatus && (
        <div className="banner">
          <span className="banner__title">
            Due to russian invasion to Ukraine, there are no flights in these
            days. You can search flights history until 24/02/2022.
          </span>
          <div
            className="banner__close-btn"
            onClick={() => setBannerStatus(false)}
          >
            &times;
          </div>
        </div>
      )}
    </>
  )
}

export default Banner
