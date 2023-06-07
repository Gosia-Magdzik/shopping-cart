import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    background-color: ${({ transparent }) => ( transparent ? 'transparent' : 'rgba(57,66,67,0.85)' )};
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
    font-size: 60px;
    font-style: italic;
    font-weight: bold;

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

export const Img = styled.img`

`;