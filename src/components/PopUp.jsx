import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// CONTEXTS
import BookingContext from '../BookingContext'
// import Joi from 'joi'

function PopUp({ data }) {
  const [numberOfGuests, setNumberOfGuests] = useState()
  const [arrivingDate, setArrivingDate] = useState()
  console.log(data)
  const navigate = useNavigate()
  const handleSubmit = () => {
    // e.preventDefalut()
    // alert('Some data has been submited')
    navigate('/')
  }

  const hidePopUp = () => {
    console.log('Auu')
    navigate('/')
  }
  // const prevData = useContext(BookingContext)
  // console.log(prevData)
  // Handle data subimition
  return (
    <div className={`popup ${hidePopUp.close}`} id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="./img/nat-8.jpg" alt="Tour photo" className="popup__img" />
          <img src="./img/nat-9.jpg" alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a onClick={hidePopUp} href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">Finish Booking</h2>
          <h2 className="heading-tertiary u-margin-bottom-small">Booking is free, All payments will be done in Zanzibar</h2>

          <form onSubmit={handleSubmit} className="form">
            <div className="form__group">
              <input type="number" className="form__input" placeholder="How many of you are comming?" defaultValue={1} id="name" required style={{ backgroundColor: '#eee', fontSize: '1.8rem' }} onChange={event => setNumberOfGuests(event.target.value)} />
              <label htmlFor="name" className="form__label">
                How many of you
              </label>
            </div>

            <div className="form__group">
              <input type="date" className="form__input" placeholder="When do we meet" id="email" style={{ backgroundColor: '#eee', fontSize: '1.8rem' }} required onChange={event => setArrivingDate(event.target.value)} />
              <label htmlFor="email" className="form__label">
                Date to arrive
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
