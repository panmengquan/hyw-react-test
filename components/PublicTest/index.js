
import React, { useState } from "react";
import './index.css';
import {Button} from 'antd'

const PublicTest = (props) => {

  const { color } = props;
  const [hcolor, setHcolor] = useState('#000');

  return <div className="public-test">
    <h1 style={{color: `${hcolor}`}}>hello react!</h1>
    <button className="btn"
      onClick={() => {setHcolor(color || 'pink')}}
    >click me</button>
    <Button type="primary">antd 的按钮</Button>
  </div>
}

export default PublicTest;
