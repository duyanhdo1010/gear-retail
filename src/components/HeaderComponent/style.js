import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  background-color: #189ab4;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;
  width: 1270px;
  padding: 10px 0;
`;

export const WrapperTextHeader = styled.span`
  font-size: 20px;
  color: #d4f1f4;
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  color: #d4f1f4;
  align-items: center;
  gap: 12px;
  font-size: 12px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #d4f1f4;
  white-space: nowrap;
`;

export const WrapperIconHeader = styled.span`
  font-size: 30px;
  color: #d4f1f4;
`;

export const WrapperContentPopup = styled.p`
  cursor: pointer;
  &:hover {
    color: rgb(26, 148, 255);
  }
`;
