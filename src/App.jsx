import './App.scss'
// COMPONENTS
import Header from './components/Header'
import Main from './components/Main'
import SectionAbout from './components/SectionAbout'
import SectionFeatures from './components/SectionFeatures'
import SectionTour from './components/SectionTour'
import SectionStories from './components/SectionStories'
import SectionBook from './components/SectionBook'
import Footer from './components/Footer'
import PopUp from './components/PopUp'
import Navigation from './components/Navigation'
import FlashMassage from './components/FlashMassage'
// SERVICES
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useReducer, useState } from 'react'
import ErrorContext from './ErrorContext'
import Loader from './components/Loader'

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case 'showErr':
        // state.flashError = { ...state, showErr: true, massage: 'Test massage' }
        setFlashError({ ...state, showErr: true, massage: action.payload })
        console.log('dispatched')
        break
      case 'mawe':
        console.log('Tumepokea mawe')
        // console.log('This is a draft', draft)
        break
      case 'spinner':
        setSpinner(true)
        break
      case 'greenMsg':
        setGreenMsg(true)
        break
      default:
        return
    }
  }
  const [prevData, setPrevData] = useState(localStorage.getItem('prevData'))
  const [flashError, setFlashError] = useState({ showErr: false, massage: '' })
  const [greenMsg, setGreenMsg] = useState(false)
  const [spinner, setSpinner] = useState(true)
  console.log(`Flash error ${flashError.showErr}`)
  useEffect(() => {
    setPrevData(true)
    // setFlashError({ showEroor: true, message: 'Nakuja' })
    if (flashError.showErr.showErr) {
      console.log(flashError.massage)
    }
  }, [prevData, flashError, greenMsg, flashError.massage])

  const [state, dispatch] = useReducer(reducer, flashError)
  console.log(state)
  // onClick={ () => dispatch({ type: 'showErr' })}
  return (
    <BrowserRouter>
      <ErrorContext.Provider value={dispatch}>
        {/* {spinner && <Loader />} */}
        <Header />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <SectionAbout />
                <SectionFeatures />
                <SectionTour />
                <SectionStories />
                <SectionBook />
              </Main>
            }
          />
          <Route
            path="*"
            element={
              <Main>
                <SectionAbout />
                <SectionFeatures />
                <SectionTour />
                <SectionStories />
                <SectionBook />
              </Main>
            }
          />

          <Route path="/popup" element={prevData ? <PopUp /> : window.history.replaceState({}, '', '/')} />
        </Routes>
        <FlashMassage showFlash={greenMsg} status={'success'} title={'All done.'} description={'Your booking is done, See you in Zanzibar'} />
        <FlashMassage showFlash={flashError.showErr} status={'error'} title={'Error'} description={flashError.massage} />
        <Footer />
      </ErrorContext.Provider>
    </BrowserRouter>
  )
}
