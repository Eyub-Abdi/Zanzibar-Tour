import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  console.log({ username, password })
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="./img/zanzibar-8.jpg" alt="Tour photo" className="popup__img" />
          {/* <img src="./img/zanzibar-7.jpg" alt="Tour photo" className="popup__img" /> */}
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">Login</h2>

          <form className="form">
            <div className="form__group">
              <input type="text" className="form__input" placeholder="Username" id="username" style={{ backgroundColor: '#eee', fontSize: '1.8rem' }} onChange={event => setUsername(event.target.value)} />
              <label htmlFor="username" className="form__label">
                Username
              </label>
            </div>

            <div className="form__group">
              <input type="password" className="form__input" placeholder="Password" id="password" style={{ backgroundColor: '#eee', fontSize: '1.8rem' }} onChange={event => setPassword(event.target.value)} />
              <label htmlFor="password" className="form__label">
                Password
              </label>
            </div>
            <button className="btn btn--green btn--animeted">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
