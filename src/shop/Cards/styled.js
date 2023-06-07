import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8BBBC2;
    margin: 20px;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 20px 20px 19px -12px black;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`;

export const Image = styled.img`
    max-height: 350px;
    width: auto;
    border-radius: 10px;
    margin:5px;
`;

export const Details = styled.div`
    margin: 5px;
    font-size: 20px;
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