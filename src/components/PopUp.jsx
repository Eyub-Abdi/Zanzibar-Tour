import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Joi from 'joi'
import axios from 'axios'
import ErrorContext from '../ErrorContext'

function PopUp() {
  const [numberOfVisitor, setNumberOfVisitor] = useState()
  const [arrivingDate, setArrivingDate] = useState()
  const dispatch = useContext(ErrorContext)
  const navigate = useNavigate()
  // ALLOW TODAY IN VALID DATE LIST
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const schema = Joi.object({
    numberOfVisitor: Joi.number().min(1).max(50).required().messages({ 'any.required': 'Tell us how many people are comming?', 'number.min': 'How many of you are comming?', 'number.max': 'Can not register more then 50 people.' }),
    arrivingDate: Joi.date().min(today).required().messages({ 'any.required': 'Ops! so when will you come?', 'date.min': 'Date must be today or latter.' })
  })
  const { error } = schema.validate({ numberOfVisitor, arrivingDate })

  const handleSubmit = event => {
    event.preventDefault()
    if (error) return dispatch({ type: 'showErr', payload: error.details[0].message })
    const prevData = JSON.parse(localStorage.getItem('prevData'))
    // SUBMIT THIS DATA
    const totalData = { ...prevData, numberOfVisitor, arrivingDate }
    axios
      .post('http://localhost:5000/api/visitors', totalData)
      .then(() => {
        localStorage.removeItem('prevData')
        navigate('/')
        dispatch({ type: 'greenMsg', payload: 'Your booking is done, see you in Zanzibar.' })
      })
      .catch(error => {
        console.log(error.message)
        dispatch({ type: 'showErr', payload: error.message })
      })
  }

  const hidePopUp = () => {
    navigate('/')
  }

  return (
    <div className={`popup ${hidePopUp.close}`} id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="./img/zanzibar-8.jpg" alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a onClick={hidePopUp} href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">Finish Booking</h2>
          <h2 className="heading-tertiary u-margin-bottom-small">Booking is free, All payments will be done in Zanzibar</h2>

          <form onSubmit={handleSubmit} className="form">
            <div className="form__group">
              <input type="number" className="form__input" placeholder="How many of you are comming?" id="name" style={{ backgroundColor: '#eee', fontSize: '1.8rem' }} onChange={event => setNumberOfVisitor(event.target.value)} />
              <label htmlFor="name" className="form__label">
                How many of you are comming?
              </label>
            </div>

            <div className="form__group">
              <input type="date" className="form__input" id="email" style={{ backgroundColor: '#eee', fontSize: '1.8rem' }} onChange={event => setArrivingDate(event.target.value)} />
              <label htmlFor="email" className="form__label">
                Arriving date?
              </label>
            </div>
            <button className="btn btn--green btn--animeted">Book now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopUp
