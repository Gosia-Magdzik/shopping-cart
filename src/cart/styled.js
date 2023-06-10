import styled from "styled-components";

export const AlignWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5px solid;
    font-size: 30px;

`;

export const MainWrapper = styled.article`
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: space-between;
    border: 1px solid;
    border-radius: 15px;
    padding: 20px;
    width: 75%;
    background-color: rgba(23,133,78,0.2);
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    justify-content: space-between;
    border-bottom: 1px solid;    
  
`;

export const CartBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const Title = styled.p`
    word-wrap: break-word;
    width: 500px;
`;

export const ButtonWrapper = styled.div`
    margin: 15px;
    padding: 15px;
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    padding: 20px;
    border-radius: 5px;
    margin: 3px;
    background: rgba(255,240,33,0.65);

    &:hover {
        transform: scale(1.02);
        background: rgba(255,240,33,0.8);

    }

    &:active {
        transform: scale(1.04);
        background: rgba(255,240,33,1);
    }

`;

export const Img = styled.img`
    width: 100px;
    height: auto;
    border-radius: 15px;
    margin: 20px;
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Price = styled.p`
    margin-right: 15px;
    width: 200px;
    justify-content: flex-end;
    display: flex;
`;

