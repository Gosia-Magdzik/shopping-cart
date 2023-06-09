import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    background-color: ${({ transparent }) => ( transparent ? 'transparent' : 'rgba(57,66,67,0.90)' )};
    padding: 32px 26px;
    height: auto;
    position: sticky;
    z-index: 3;
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

    @media (max-width: 1300px) {
        font-size: 50px;
    };

    @media (max-width: 992px) {
        font-size: 40px;
    };

    @media (max-width: 768px) {
        font-size: 30px;
    };

`;

export const Svg = styled.img`
    width: 4em;
    height: auto;

    @media (max-width: 768px) {
        width: 3em;
        height: auto;
        margin-left: 5px;
    };
`;

export const NavBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;

export const Img = styled.img`

@media (max-width: 768px) {
        display: none;
    };
`;

export const Size = styled.span`
    color: white;
    background-color: #c33b3b;
    padding: 10px 16px 11px 16px;
    border-radius: 50%;
    z-index: 1;
    margin-top: -15px;
    
`;

export const CartWrapper = styled.div`
    display: flex;
    align-items: flex-start;

    &:hover {
        scale: 1.1;
        filter: brightness(1.2);
    } 
`;