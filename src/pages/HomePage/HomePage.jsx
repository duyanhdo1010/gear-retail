import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'

const HomePage = () => {
    const arr = ['Keyboard', 'Mouse', 'Headphone', 'Monitor', 'PC', 'Laptop']
    return (
        <>
            <div>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return <TypeProduct key={item} name={item}/>
                    })}
                </WrapperTypeProduct>
            </div>
            <div id="container" style={{backgroundColor: '#efefef', padding: '0 32px'}}>
                <SliderComponent arrImages={[slider1, slider2, slider3]}/>
            </div>
        </>

    )
}

export default HomePage