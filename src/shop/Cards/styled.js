import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8BBBC2;
    margin: 15px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 20px 20px 19px -12px black;
    transition: transform 0.3s ease-in-out;

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
    color: #545454;
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
    background: #E0D648;
    font-weight: bold;
    font-size: 30px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`;