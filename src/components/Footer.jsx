function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src="./img/logo-green-2x.png" alt="Logo full" className="footer__logo" />
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
