import Joi from 'joi'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// CONTEXT
import ErrorContext from '../ErrorContext'

function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const dispatch = useContext(ErrorContext)
  console.log({ username, password })

  const userSchema = Joi.object({ username: Joi.string().min(3).max(50).required().messages({ 'string.empty': 'Invalid username or password' }), password: Joi.string().required().messages({ 'string.empty': 'Ivalid username or password' }) })
  const { error, value } = userSchema.validate({ username, password })

  const handleSubmit = event => {
    event.preventDefault()
    if (error && error.details[0].type === 'string.base') return dispatch({ type: 'showErr', payload: 'Please enter your username and password.' })
    if (error) return dispatch({ type: 'showErr', payload: 'Invalid username or password' })
    console.log('submited')
    console.log(value)
  }
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="./img/zanzibar-8.jpg" alt="Tour photo" className="popup__img" />
          {/* <img src="./img/zanzibar-7.jpg" alt="Tour photo" className="popup__img" /> */}
        </div>
        <div className="popup__right">
          <Link to={'/'} className="popup__close">
            &times;
          </Link>
          <h2 className="heading-secondary u-margin-bottom-small">Login</h2>

          <form className="form" onSubmit={handleSubmit}>
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
