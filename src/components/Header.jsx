import Button from './Button'

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="./img/logo-white.png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">ZANZIBAR ISLAND</span>
          <span className="heading-primary--sub">Welcome to Zanzibar</span>
        </h1>
        <Button linkTo="home" />
      </div>
    </header>
  )
}
