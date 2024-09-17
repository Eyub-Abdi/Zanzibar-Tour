import { MdForest } from 'react-icons/md'
function SectionFeatures() {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Spice Tour</h3>
            <p className="feature-box__text">Discover the island's fragrant spice plantations and learn about the rich history and uses of Zanzibar's famous spices.</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Stone Town Tour</h3>
            <p className="feature-box__text">Immerse yourself in the history of Stone Town. World Heritage site, with its narrow streets, ancient buildings, and vibrant markets.</p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Beach Escape</h3>
            <p className="feature-box__text">Relax on the stunning beaches of Zanzibar, including Nungwi and Kendwa, where crystal-clear waters and soft sands await.</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            {/* <MdForest className="feature-box__icon icon-basic-heart" /> */}
            <h3 className="heading-tertiary u-margin-bottom-small">Jozani Forest</h3>
            <p className="feature-box__text">Visit the Jozani Chwaka Bay National Park, home to the rare Red Colobus monkeys and lush tropical flora.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFeatures
