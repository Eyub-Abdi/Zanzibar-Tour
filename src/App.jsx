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
import Login from './components/Login'
// SERVICES
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useReducer, useState } from 'react'
import ErrorContext from './ErrorContext'
import Dashboard from './components/Dashboard'
import { jwtDecode } from 'jwt-decode'

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case 'showErr':
        // state.flashError = { ...state, showErr: true, massage: 'Test massage' }
        setFlashError({ ...state, showErr: true, massage: action.payload })
        break
      case 'mawe':
        console.log('Tumepokea mawe')
        // console.log('This is a draft', draft)
        break
      case 'greenMsg':
        setGreenMsg({ ...state, showMsg: true, massage: action.payload })
        break
      default:
        return
    }
  }
  const [prevData, setPrevData] = useState(localStorage.getItem('prevData'))
  const [flashError, setFlashError] = useState({ showErr: false, massage: '' })
  const [greenMsg, setGreenMsg] = useState({ showMsg: false, massage: null })
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(jwtDecode(localStorage.getItem('znz-token')))
  console.log(user)
  useEffect(() => {
    setPrevData(true)
  }, [prevData])

  useEffect(() => {
    if (flashError.showErr) setFlashError({ showErr: false })
  }, [flashError.showErr])

  useEffect(() => {
    setGreenMsg(false)
  }, [greenMsg])

  useEffect(() => {
    if (localStorage.getItem('znz-token')) setLoggedIn(true)
  }, [loggedIn])

  console.log(user.admin)
  const [state, dispatch] = useReducer(reducer, flashError)
  return (
    <BrowserRouter>
      <ErrorContext.Provider value={dispatch}>
        {/* <Login /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Navigation />
                <Main>
                  <SectionAbout />
                  <SectionFeatures />
                  <SectionTour />
                  <SectionStories />
                  <SectionBook />
                  <Footer />
                </Main>
              </>
            }
          />
          <Route path="/mawe" element={<Login />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Navigation />
                <Main>
                  <SectionAbout />
                  <SectionFeatures />
                  <SectionTour />
                  <SectionStories />
                  <SectionBook />
                  <Footer />
                </Main>
              </>
            }
          />
          <Route path="/uongozi" element={user.admin ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/popup" element={prevData ? <PopUp /> : <Navigate to="/" />} />

          {/* <Route path="/popup" element={prevData ? <PopUp /> : window.history.replaceState({}, '', '/')} /> */}
        </Routes>
        <FlashMassage showFlash={greenMsg.showMsg} status={'success'} title={'Great choice.'} description={greenMsg.massage} />
        <FlashMassage showFlash={flashError.showErr} status={'error'} title={'Error'} description={flashError.massage} />
      </ErrorContext.Provider>
    </BrowserRouter>
  )
}
