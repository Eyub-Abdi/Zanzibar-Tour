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
          <span className="xcard__heading-span xcard__heading-span--3" style={{ color: '#fff' }}>
            We make people genuinely happy
          </span>
        </h2>
      </div>
    </section>
  )
}

export default SectionStories
