import React from 'react'

function Alert() {
  return (
    <div className="alert alert-info position-sticky top-0 end-0 fade show" role="alert">
      <p>
        Your booking has been confirmed. Please check your email for more information. We recommend to stay in touch via <strong>Whats App</strong>. We can't wait to see you in Zanzibar.
      </p>
      {/* <button type="button" className="btn-close d-block" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
    // <div  role="alert">
    //   {/* <h4 className="alert-heading">Well done!</h4> */}
    // </div>
  )
}

export default Alert
