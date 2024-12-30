import Button from './Button'

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="./img/logo-white.png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary ">
          <span className="heading-primary--main u-margin-bottom-small">ZANZIBAR VIBES</span>
          <span className="heading-primary--sub">Let Joy Lead the Way</span>
        </h1>
        <Button linkTo="#section-features" />
      </div>
    </header>
  )
}
