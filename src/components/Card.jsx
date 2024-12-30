import React, { useContext, useEffect, useState } from 'react'
import { formatDate } from '../utils/formatDate'
import VisitorContext from '../contexts/VisitorContext'

function Card() {
  const getTodayTours = tours => {
    const todayTours = tours.filter(tour => formatDate(new Date(tour.arrivingDate)) === formatDate(new Date()))
    if (!todayTours || todayTours.length === 0) return 0
    return todayTours.length
  }
  const visitors = useContext(VisitorContext)
  const [cards, setCards] = useState([
    { id: 1, title: 'All Tours', value: visitors.length },
    { id: 2, title: 'Today Tours', value: getTodayTours(visitors) },
    { id: 3, title: 'This Week', value: 24 },
    { id: 4, title: 'This Month', value: 40 }
  ])
  const allCards = cards.filter(card => card.id === 1 || card.id === 2 || card.id === 3 || card.id === 4)
  useEffect(() => {
    //setCards([...callCards, (allCards[0].value = visitors.length)])

    console.log(allCards)
  }, [visitors, cards])

  return (
    <div className="d-flex gap-5">
      {cards.map(card => (
        <div key={card.id} className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded w-25 mt-5">
          <div className="card-body">
            <h5 className="card-title fs-1">{card.title}</h5>
            <p className="card-text xcard__price-value text-info">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
