import { useNavigate } from 'react-router-dom'
import PopUp from './PopUp'
import { useState, useEffect } from 'react'
import axios from 'axios'
import countries from '../countries'
function SectionBook() {
  const [countryList, setCountryList] = useState(countries)
  console.log(countryList)
  // useEffect(() => {
  //   axios
  //     .get('https://restcountries.com/v3.1/all')
  //     .then(respose => {
  //       console.log(respose.data)
  //     })
  //     .catch(err => console.log(err.message))
  // }, [])
  const navigate = useNavigate()
  const passdataToTheNextStep = () => {
    // alert('Passing data to the popup')
    // navigate('#popup')
  }
  return (
    <section className="section-book" id="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form onSubmit={passdataToTheNextStep} className="form">
              <div className="u-margin-bottom-small">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>

              <div className="form__group">
                <input type="text" className="form__input" placeholder="Full name" id="name" required />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>

              <div className="form__group">
                <input type="email" className="form__input" placeholder="Email address" id="email" required />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                <select className="form__input" placeholder="Where are you from?" id="email" required>
                  <option value="">Where are you from?</option>
                  {countryList.map((country, index) => (
                    <option key={index} value={country} className="paragraph">
                      {country}
                    </option>
                  ))}

                  {/* <option>USA</option>
                  <option>France</option> */}
                </select>
                <label htmlFor="email" className="form__label">
                  Country
                </label>
              </div>

              <div className="form__group">
                <button className="btn btn--green">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBook
