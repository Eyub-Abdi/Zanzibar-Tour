import { useNavigate } from 'react-router-dom'
import Joi from 'joi'
import { useState } from 'react'
import countries from '../countries'
// CONTEXT
import BookingContext from '../BookingContext'
import FlashMassege from './FlashMassege'

function SectionBook() {
  const [guestData, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')

  const formSchema = Joi.object({
    fullName: Joi.string().min(3).max(50).required().messages({ 'string.empty': 'Please enter your name', 'string.min': 'Name must be at least 3 charactors', 'string.max': 'Name should be less then 50 charactors' }),
    email: Joi.string()
      .messages({ 'string.empty': 'Please enter your email', 'string.email': 'Please enter a valid email' })
      .email({ tlds: { allow: false } })
      .required(),
    country: Joi.string().min(3).max(100).required().messages({ 'string.empty': 'Please select your country' })
  })

  const navigate = useNavigate()
  const { error, value } = formSchema.validate({ fullName: guestData, email, country })

  const passdataToTheNextStep = event => {
    event.preventDefault()

    // console.log(error)
    console.log(value)
    if (error) return <FlashMassege /> //console.log(error.details[0].message)

    // alert('Passing data to the popup')
    navigate('/popup')
  }

  return (
    <BookingContext.Provider value={value}>
      {console.log(value)}
      <section className="section-book" id="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form onSubmit={passdataToTheNextStep} className="form">
                <div className="u-margin-bottom-small">
                  <h2 className="heading-secondary">Start booking now</h2>
                </div>

                <div className="form__group">
                  <input type="text" className="form__input" placeholder="Full name" id="name" required onChange={event => setFullName(event.target.value)} />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>

                <div className="form__group">
                  <input type="email" className="form__input" placeholder="Email address" id="email" required onChange={event => setEmail(event.target.value)} />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group">
                  <select className="form__input" placeholder="Where are you from?" id="country" required onChange={event => setCountry(event.target.value)}>
                    <option value="">Where are you from?</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country} className="paragraph">
                        {country}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="email" className="form__label">
                    Country
                  </label>
                </div>
                <div className="form__group">
                  <button className="btn btn--green btn--animeted" onClick={passdataToTheNextStep}>
                    Next step &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </BookingContext.Provider>
  )
}

export default SectionBook
