import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(23,133,78,0.1);
    margin: 15px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 20px 20px 19px -12px black;
    transition: transform 0.3s ease-in-out;
    position: relative;
    z-index: 1;

    &:hover {
        transform: scale(1.02);
        box-shadow: 30px 30px 29px -6px black;
    }
`;

export const Image = styled.img`
    height: auto;
    width: 100%;
    border-radius: 10px;
    margin:5px;
`;

export const Details = styled.div`
    margin: 5px;
    font-size: 20px;
    color: rgb(255,159,253);
`;

export const Title = styled.p`
    margin: 10px;
    font-size: 30px;
`;

export const Price = styled.p`
    margin: 10px;
    font-size: 28px;
`;

export const Button = styled.button`
    margin: 15px;
    border-radius: 10px;
    border: none;
    height: 60px;
    width: 100%;
    background: rgba(255,240,33,0.65);
    font-weight: bold;
    font-size: 30px;
    transition: transform 0.3s ease-in-out;
    box-shadow: 10px 10px 9px -6px black;


    &:hover {
        transform: scale(1.02);
        background: rgba(255,240,33,0.85);
    }

    &:active {
        transform: scale(1.04);
        background: rgba(255,240,33,1);

    }
`;