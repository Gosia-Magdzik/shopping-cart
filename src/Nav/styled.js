import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ transparent }) => ( transparent ? 'transparent' : '#16302B' )};
    padding: 22px 16px;
    height: 90px;
    position: fixed;
    top: 0;
    transition: background-color .3s ease-in-out;
    width: 100%;
`;

export const Title = styled.div`
    color: white;
    font-size: 50px;
`;