import { Link } from 'react-router-dom'
import HapyCustomers from './HapyCustomers'

function SectionAbout() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Catch the spirit of Zanzibar!</h3>
          {/* <p className="paragraph">Experience the enchanting beauty of Zanzibar, a paradise island where turquoise waters meet pristine white sands. Our tours offer you a chance to explore rich history, vibrant culture, and stunning natural wonders.</p> */}
          <p className="paragraph u-margin-bottom-medium">Step into a world where joy meets paradise. Zanzibar Vibes is your gateway to unforgettable adventures, stunning beaches, and vibrant culture. Let the joy of exploration fill your heart as you discover Zanzibar's hidden gems and bask in the warmth of the island’s sun.</p>
          <h3 className="heading-tertiary u-margin-bottom-small">Why Choose Us?</h3>
          <p className="paragraph">
            Expert Guides: <mark>Our knowledgeable guides</mark> are passionate about Zanzibar and will share insider tips and stories, ensuring you get the most out of your visit.
          </p>
          <HapyCustomers />
          <Link to="/" className="btn-text">
            Start Booking &rarr;
          </Link>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src="./img/zanzibar-1.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
            <img src="./img/zanzibar-colobus.jpeg" alt="Photo 2" className="composition__photo composition__photo--p2" />
            <img src="./img/prison-island.jpg" alt="Photo 3 " className="composition__photo composition__photo--p3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout
