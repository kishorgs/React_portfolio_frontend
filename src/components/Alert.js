import React from 'react'
import '../css/Alert.css'

const Alert = ({ message, type, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
      <button onClick={onClose} className="close-button">
        &times;
      </button>
    </div>
  )
}

export default Alert