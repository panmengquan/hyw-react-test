import React from "react";
import './index.css';

const MyButton = ({ label, bgc }) => {
  return (
    <div className="my-btn"
      style={{ backgroundColor: bgc || '#1EA7FD' }}
    >{ label || 'Button' }</div>
  )
}

export default MyButton;