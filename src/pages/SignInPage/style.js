import styled from "styled-components";

export const WrapperContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 40px 45px 24px;
`;

export const WrapperContainerRight = styled.div`
    width: 300px;
    background: linear-gradient(
        136deg,
        rgb(240, 248, 255) -1%,
        rgba(219, 238, 255) 95%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

export const WrapperTextLight = styled.span`
    color: rgb(13, 92, 182);
    font-size: 13px;
    cursor: pointer;
`;
