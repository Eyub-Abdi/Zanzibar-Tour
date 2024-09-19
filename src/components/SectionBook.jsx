import { useNavigate } from 'react-router-dom'
// import PopUp from './PopUp'
import { useState, useEffect } from 'react'
// import axios from 'axios'
import countries from '../countries'
import { data } from 'framer-motion/client'
import BookingContext from '../BookingContext'
function SectionBook() {
  const [countryList] = useState(countries)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [isDisabled, setIsDesabled] = useState(true)

  // const data = {
  //   fullName,
  //   email,
  //   country
  // }
  useEffect(() => {
    // axios
    //   .get('https://restcountries.com/v3.1/all')
    //   .then(respose => {
    //     console.log(respose.data)
    //   })
    //   .catch(err => console.log(err.message))
    if (data.fullName !== '' && data.email !== '' && data.country !== '') setIsDesabled(!isDisabled)
  }, [])

  const navigate = useNavigate()
  const passdataToTheNextStep = event => {
    // alert('Passing data to the popup')
    event.preventDefault()
    console.log(data)
    navigate('/popup')
  }
  let btnClasses = 'btn'
  return (
    <BookingContext.Provider value={{ fullName, email, country }}>
      <section className="section-book" id="section-book">
        {/* <PopUp /> */}
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
                    {countryList.map((country, index) => (
                      <option key={index} value={country} className="paragraph">
                        {country}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="email" className="form__label">
                    Country
                  </label>
                </div>
              </form>
              <div className="form__group">
                <button className={isDisabled ? btnClasses + ' btn--disabled' : btnClasses + ' btn--green'} onClick={passdataToTheNextStep}>
                  Next step &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BookingContext.Provider>
  )
}

export default SectionBook
