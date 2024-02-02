import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({size, styleButton, styleTextButton, textButton, ...rests}) => {
  return (
    <Button 
    size={size} 
    {...rests}
    // icon={icon} 
    style={styleButton}>
    <span style={styleTextButton}>{textButton}</span>
    </Button>
  )
}

export default ButtonComponent