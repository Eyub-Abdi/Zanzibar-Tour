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

export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTour />
        <SectionStories />
        <SectionBook />
      </Main>
      <Footer />
      <PopUp />
    </>
  )
}
