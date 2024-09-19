function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box u-center-text">
        <img src="./img/favicon.png" alt="Logo full" className="footer__logo" />
        <h2 className="heading-secondary">See you in Zanzibar</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <ul className="footer__navigation">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Carrers
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Terms{' '}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{' '}
            <a href="#" className="footer__link">
              Ayub Abdi
            </a>{' '}
            for his creativity on{' '}
            <a href="#" className="footer__link">
              FINDING THE BEST TOUR PLATFORM IN ZANZIBAR
            </a>{' '}
            Copyright &copy; Ayub Abdi
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
