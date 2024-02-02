import { Col } from "antd";
import React from "react";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader,  WrapperTextHeaderSmall } from "./style";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";


const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={5} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <WrapperTextHeader>
                    GEAR RETAIL
                    </WrapperTextHeader>
                </Col>
                <Col span={13}>
                <ButtonInputSearch placeholder="Nhập từ khóa tìm kiếm" 
                // onSearch={onSearch} 
                allowClear
                size="large"
                textButton="Tìm kiếm"

                />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '36px'}} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập, Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản </WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>

                        </div>
                    </WrapperHeaderAccount>
                    <div 
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'}}
                    >
                        <ShoppingCartOutlined style={{ fontSize: '36px', color: '#d4f1f4'}}/>
                        <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
}

export default HeaderComponent;