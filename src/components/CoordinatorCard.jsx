import React from "react"

const CoordinatorCard = ({ name, event, phone, email }) => {
  return (
    <div className="card h-100 coordinator-card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{event}</h6>
        <p className="card-text">
          <i className="bi bi-telephone"></i> {phone}
          <br />
          <i className="bi bi-envelope"></i> {email}
        </p>
      </div>
    </div>
  )
}

export default CoordinatorCard

