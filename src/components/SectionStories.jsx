function SectionStories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="./img/znz-background.mp4" type="video/mp4" />
          <source src="./img/video.mp4" type="video/webm" />
          Your browser is not supported
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" style={{ paddingTop: '-2rem' }}>
          <span className="card__heading-span card__heading-span--3" style={{ color: '#fff' }}>
            We make people genuinely happy
          </span>
        </h2>
      </div>
      {/* <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src="./img/nat-8.jpg" alt="Person in a tour" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aut nisi voluptatem qui rem rerum illo possimus sunt tempore cumque.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src="./img/nat-9.jpg" alt="Person in a tour" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">Wow! my life is completely different now</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aut nisi voluptatem qui rem rerum illo possimus sunt tempore cumque.</p>
          </div>
        </div>
      </div> */}
      {/* <div className="u-center-text u-margin-bottom-big">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div> */}
    </section>
  )
}

export default SectionStories
