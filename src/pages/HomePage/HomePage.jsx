import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
    const arr = ['Keyboard', 'Mouse', 'Headphone', 'Monitor', 'PC', 'Laptop']
    return (
        <>
            <div style={{margin: '0 auto'}}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return <TypeProduct key={item} name={item}/>
                    })}
                </WrapperTypeProduct>
            </div>
            <div className='body' style={{width: '100%', backgroundColor: '#efefef'}}>
                <div id="container" style={{backgroundColor: '#efefef', height: '1000px' ,  margin: '0 auto'}}>
                    <SliderComponent arrImages={[slider1, slider2, slider3]}/>
                    <WrapperProducts style={{width:'1270px', margin: '0 auto'}}>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                    </WrapperProducts>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                        <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                            border: '1px solid #189AB4', color: '#189AB4', width: '240px', height: '38px'
                            ,borderRadius: '4px'
                        }}
                        styleTextButton={{fontWeight: '500'}}
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomePage