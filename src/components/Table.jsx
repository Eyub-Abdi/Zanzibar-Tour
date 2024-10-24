import React from 'react'

function Table({ visitors }) {
  const formatDate = date => {
    const year = String(date.getFullYear()).slice(-2) // Get last two digits of the year
    const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0') // Pad with zero if needed

    return `${year}-${month}-${day}` // Format: yy-mm-dd
  }

  //const date = new Date() // Replace this with your date object
  // console.log(formatDate(date)) // Outputs: "24-10-24" for October 24, 2024

  return (
    <table className="table table-dark table-hover">
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
