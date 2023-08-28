
import { Button } from 'antd';
import React, { Component } from 'react'


class CustomButton extends Component {

    render() {
        const { text = "确定", disabled = false } = this.props;
        return (
     	      <Button style={{backgroundColor:'red'}}>CustomButton</Button>
        )
    }
}

export default CustomButton