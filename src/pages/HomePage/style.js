import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24;
    height: 44px;
    background-color: #d4f1f4;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background-color: #189ab4;
        span {
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
`;

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
`;
