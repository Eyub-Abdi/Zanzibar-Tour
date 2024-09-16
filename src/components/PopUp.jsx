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
          <h2 className="heading-tertiary u-margin-bottom-small">Lorem ipsum dolor sit amet consectetur adipisicing</h2>
          <p className="popup__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos soluta ipsum harum architecto molestias ducimus quidem corporis fugiat velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, a dolorem! Cum optio recusandae laudantium architecto blanditiis possimus aspernatur eveniet ullam quod aut cupiditate quas nisi vitae perspiciatis perferendis, esse suscipit adipisci, corporis omnis fuga! Iure deserunt magnam ipsa saepe.</p>
          <a href="#" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  )
}

export default PopUp
