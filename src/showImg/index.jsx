import React from "react";
import './index.css';

const ShowImg = ({ url }) => {
  return (
    <div className="show-img">
      <p className="show-img-tip">以下是要展示的图片：</p>
      <img src={url || ''} alt="" />
    </div>
  )
}

export default ShowImg;