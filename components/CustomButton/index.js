
import React, { useState } from "react";
import './index.css';

// class CustomButton extends Component {

//     render() {
//         const { text = "确定", disabled = false } = this.props;
//         return (
//      	      <Button style={{backgroundColor:'red'}}>CustomButton</Button>
//         )
//     }
// }

const CustomButton = (props) => {

    const { color } = props;
    const [hcolor, setHcolor] = useState('#000');
  
    return <div className="public-test">
      <h1 style={{color: `${hcolor}`}}>hello react!</h1>
      <button className="btn"
        onClick={() => {setHcolor(color || 'pink')}}
      >CustomButton</button>
      {/* <Button type="primary">antd 的按钮</Button> */}
    </div>
  }

export default CustomButton