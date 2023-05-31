import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background-color: green;
    padding: 22px 16px;
    height: 90px;
    position: fixed;

    z-index: 1;
    transition: .5 ease-in-out;
`;

export const Title = styled.div`
    color: white;
    font-size: 50px;
`;