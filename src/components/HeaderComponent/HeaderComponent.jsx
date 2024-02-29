import { Badge, Col } from "antd";
import React from "react";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader,  WrapperTextHeaderSmall } from "./style";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";


const HeaderComponent = () => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', background: '#189AB4'}}>
            <WrapperHeader gutter={16}>
                <Col span={5}>
                    <WrapperTextHeader style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    GEAR RETAIL
                    </WrapperTextHeader>
                </Col>
                <Col span={13}>
                <ButtonInputSearch 
                placeholder="Nhập từ khóa tìm kiếm" 
                bordered={false}
                allowClear
                size="large"
                textButton="Tìm kiếm"
                />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px'}} />
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
                        <Badge count={4} size='small'>
                            <ShoppingCartOutlined style={{ fontSize: '36px', color: '#d4f1f4'}}/>
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
}

export default HeaderComponent;