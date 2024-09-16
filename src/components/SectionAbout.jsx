function SectionAbout() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">You are going to fall in love with nature</h3>
          <p className="paragraph">Experience the enchanting beauty of Zanzibar, a paradise island where turquoise waters meet pristine white sands. Our tours offer you a chance to explore rich history, vibrant culture, and stunning natural wonders.</p>
          <h3 className="heading-tertiary u-margin-bottom-small">Why Choose Us?</h3>
          <p className="paragraph">Expert Guides: Our knowledgeable guides are passionate about Zanzibar and will share insider tips and stories, ensuring you get the most out of your visit. Tailored Experiences: From relaxing beach days to thrilling adventures, we craft experiences that cater to your interests and preferences. Hassle-Free Booking: Our easy-to-use booking system and responsive customer service make planning your dream vacation a breeze.</p>
          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src="./img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
            <img src="./img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
            <img src="./img/nat-3-large.jpg" alt="Photo 3 " className="composition__photo composition__photo--p3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout
