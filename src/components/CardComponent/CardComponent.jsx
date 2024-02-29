import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style';
import {StarFilled} from '@ant-design/icons'
import logo from '../../assets/images/offical.png'

const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        headStyle={{width: '200px', height: '200px'}}
        style={{ width: 200 }}
        bodyStyle={{padding: '10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>

        <img src={logo} alt='legit-logo' style={{ width: '89px', height: '20px', position: 'absolute', top: '4px', left: '4px' }}/>
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span style={{marginRight: '4px'}}>
                <span>4.96 </span>
                <StarFilled style={{fontSize: '12px', color: 'rgb(253,216,54)'}} />
            </span>
            <span>| Đã bán: 1000+</span>
        </WrapperReportText>
        <WrapperPriceText>
            <span style={{ marginRight: '8px'}}>1.000.000đ</span>
            <WrapperDiscountText>
                -10%
            </WrapperDiscountText>
        </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent