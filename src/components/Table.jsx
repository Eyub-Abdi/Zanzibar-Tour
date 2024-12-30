import React, { useContext } from 'react'
import { formatDate } from '../utils/formatDate'
import VisitorContext from '../contexts/VisitorContext'

function Table() {
  const visitors = useContext(VisitorContext)
  return (
    <table className="table table-dark table-hover mt-5">
      <thead>
        <tr>
          <th>NO/ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Number of Visitors</th>
          <th>Arriving Date</th>
        </tr>
      </thead>
      <tbody>
        {visitors.map(visitor => (
          <tr key={visitor._id} className="p-2">
            <th scope="row">{visitor._id}</th>
            <td className="table-activedd">{visitor.fullName}</td>
            <td>{visitor.email}</td>
            <td>{visitor.country}</td>
            <td>{visitor.numberOfVisitor}</td>
            <td>{formatDate(new Date(visitor.arrivingDate))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
