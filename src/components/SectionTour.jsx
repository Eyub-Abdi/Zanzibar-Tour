function SectionTour() {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Voyage To Prison Island</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>half day tour</li>
                  <li>up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>sea foods and fruits</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                <a href="#section-book" className="btn btn--white">
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">Explore Safari blue</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>full day tour</li>
                  <li>up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>sea foods and fruits</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$497</p>
                </div>
                <a href="#section-book" className="btn btn--white">
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">Mnemba Island</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>half day tour</li>
                  <li>up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>sea foods and fruits</li>
                  <li>Difficulty: Hard</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$897</p>
                </div>
                <a href="#section-book" className="btn btn--white">
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green">
          Discover all tours
        </a>
      </div>
    </section>
  )
}

export default SectionTour
