import './header.scss'
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src="./img/logo-white.png" alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">ZANZIBAR ISLAND</span>
            <span className="heading-primary--sub">Is where life happens</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
    </>
  )
}
