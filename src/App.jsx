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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function App() {
  const [prevData, setPrevData] = useState(localStorage.getItem('prevData'))
  useEffect(() => {
    setPrevData(true)
  }, [prevData])
  return (
    <BrowserRouter>
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
      {/* <FlashMassege /> */}
      <Footer />
    </BrowserRouter>
  )
}
