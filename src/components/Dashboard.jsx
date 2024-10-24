import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Table from './Table'
import DashboardNav from './DashboardNav'

function Dashboard() {
  const [visitors, setVisitors] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Visitors')
      .then(res => setVisitors(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(visitors)

  return (
    <section className="dashboard position-relative">
      <DashboardNav />
      <section className="p-4">
        <Card />
        <Table visitors={visitors} />
      </section>
    </section>
  )
}

export default Dashboard
