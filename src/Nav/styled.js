import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    background-color: ${({ transparent }) => ( transparent ? 'transparent' : 'rgba(87,98,102,0.7)' )};
    padding: 32px 26px;
    height: auto;
    position: sticky;
    top: 0;
    transition: background-color .3s ease-in-out;
    width: 100%;
    cursor: pointer;
`;

export const Title = styled.div`
    color: white;
    font-size: 50px;
`;

export const Svg = styled.img`
    width: 4em;
    height: auto;
`;

export const NavBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;