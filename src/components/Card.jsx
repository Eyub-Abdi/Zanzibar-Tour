import React from 'react'

function Card() {
  return (
    <div className="d-flex gap-5">
      <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded w-25 mt-5">
        <div className="card-body">
          <h5 className="card-title fs-1">Visitors</h5>
          <p className="card-text xcard__price-value">{800}</p>
        </div>
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded w-25 mt-5">
        <div className="card-body">
          <h5 className="card-title fs-1">Today Tours</h5>
          <p className="card-text xcard__price-value">{8}</p>
        </div>
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded w-25 mt-5">
        <div className="card-body">
          <h5 className="card-title fs-1">Total Tours</h5>
          <p className="card-text xcard__price-value">{8}</p>
        </div>
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded w-25 mt-5">
        <div className="card-body">
          <h5 className="card-title fs-1">Zanzibar</h5>
          <p className="card-text xcard__price-value">{8}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
