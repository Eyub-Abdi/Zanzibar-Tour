import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Table from './Table'
import DashboardNav from './DashboardNav'
import FlashMassage from './FlashMassage'
import VisitorContext from '../contexts/VisitorContext'
import SideBar from './SideBar'

function Dashboard() {
  const [visitors, setVisitors] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Visitors')
      .then(res => setVisitors(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <section className="dashboard position-relative">
      <VisitorContext.Provider value={visitors}>
        <DashboardNav />

        <section className="p-4">
          <Card />
          <FlashMassage />
          {visitors.length > 0 && <Table />}
        </section>
      </VisitorContext.Provider>
    </section>
  )
}

export default Dashboard
