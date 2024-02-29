import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
  width: 200px;
  & img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  },
  position: relative;
`;

export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;

export const WrapperReportText = styled.div`
  font-size: 10px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
  margin: 6px 0 4px;
`;

export const WrapperPriceText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgb(255, 66, 78);
`;

export const WrapperDiscountText = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: rgb(255, 66, 78);
`;
