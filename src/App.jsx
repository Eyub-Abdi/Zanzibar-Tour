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
import Alert from './components/Alert'
//import Loader from './components/Loader'
// SERVICES
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useReducer, useState } from 'react'
import ErrorContext from './contexts/ErrorContext'
import Dashboard from './components/Dashboard'
import { jwtDecode } from 'jwt-decode'

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case 'showErr':
        setFlashError({ ...state, showErr: true, massage: action.payload })
        break
      case 'login':
        localStorage.setItem('znz-token', action.payload)
        console.log(action.navigate)
        action.navigate('/uongozi')
        break
      case 'logout':
        localStorage.removeItem('znz-token')
        break
      case 'greenMsg':
        setGreenMsg({ ...state, showMsg: true, massage: action.payload })
        break
      case 'showAlert':
        delay(setShowAlert(true))
        break
      default:
        return
    }
  }

  const token = localStorage.getItem('znz-token')
  const [prevData, setPrevData] = useState(localStorage.getItem('prevData'))
  const [flashError, setFlashError] = useState({ showErr: false, massage: '' })
  const [greenMsg, setGreenMsg] = useState({ showMsg: false, massage: null })
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('znz-token'))
  const [user] = useState(token ? jwtDecode(token) : '')
  const [showAlert, setShowAlert] = useState(false)
  console.log(user)

  const delay = target => {
    return setTimeout(target, 5000)
  }

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false)
      }, 20000)
    }
  }, [showAlert])

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
  console.log(loggedIn, 'Nimesta login')

  const [state, dispatch] = useReducer(reducer, flashError)
  return (
    <BrowserRouter>
      <ErrorContext.Provider value={dispatch}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAlert && <Alert />}
                {/* <Loader /> */}
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
          <Route path="/uongozi" element={loggedIn && user.admin ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/popup" element={prevData ? <PopUp /> : <Navigate to="/" />} />
        </Routes>
        <FlashMassage showFlash={greenMsg.showMsg} status={'success'} title={'Great choice.'} description={greenMsg.massage} />
        <FlashMassage showFlash={flashError.showErr} status={'error'} title={'Error'} description={flashError.massage} />
      </ErrorContext.Provider>
    </BrowserRouter>
  )
}
