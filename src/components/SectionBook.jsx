function SectionBook() {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
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
                  <option value="Tanzania">TZ</option>
                  <option>Uk</option>
                  <option>USA</option>
                  <option>France</option>
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
