// PublicTest.jsx

import React, { useState } from "react";
import './publicTest.css';

const PublicTest = (props) => {

  const { color } = props;
  const [hcolor, setHcolor] = useState('#000');

  return <div className="public-test">
    <h1 style={{color: `${hcolor}`}}>hello react!</h1>
    <button className="btn"
      onClick={() => {setHcolor(color || 'pink')}}
    >click me</button>
  </div>
}

export default PublicTest;
