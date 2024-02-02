import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton } = props;
  return (
    <div style={{display: 'flex'}}>
        <InputComponent 
        size={size}  
        placeholder={placeholder} 
        style={{ border: 'none' , backgroundColor: '#d4f1f4', 
        borderRadius: '0', borderTopLeftRadius: '12px', 
        borderBottomLeftRadius: '12px', color: '#05445e'}}/>

        <ButtonComponent
        size={size} 
        icon={<SearchOutlined/>} 
        styleButton={{border: 'none', backgroundColor: '#75e6da', 
        borderRadius: '0', borderTopRightRadius: '12px', 
        borderBottomRightRadius: '12px', color: '#05445e'}}
        textButton={textButton}
        styleTextButton={{color: '#05445e'}}
        />
    </div>
  )
}

export default ButtonInputSearch