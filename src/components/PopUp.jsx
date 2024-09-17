function PopUp() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="./img/nat-8.jpg" alt="Tour photo" className="popup__img" />
          <img src="./img/nat-9.jpg" alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
          <h2 className="heading-tertiary u-margin-bottom-small">Booking is free, All payments will be done in Zanzibar</h2>
          <p className="popup__text">Whether you're seeking relaxation or adventure, Zanzibar has something for everyone. Contact us today to book your unforgettable island experience.</p>
          <button className="btn btn--green btn--animeted">Book now</button>
        </div>
      </div>
    </div>
  )
}

export default PopUp
