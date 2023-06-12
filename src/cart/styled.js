import styled, {css} from "styled-components";

export const AlignWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5px solid;
    font-size: 30px;

    @media (max-width: 1300px) {
        font-size: 20px;
    };

    @media (max-width: 992px) {
        font-size: 15px;
    };

    @media (max-width: 768px) {
        font-size: 15px;
    };
`;

export const MainWrapper = styled.article`
    display: flex;
    flex-direction: column;
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
    align-items: flex-start;
    text-align: center;
    width: 500px;

    @media (max-width: 1300px) {
        flex-direction: column;
        word-wrap: break-word;
        align-items: center;
        justify-content: left;
    };

    @media (max-width: 992px) {
        max-width: 150px;
    };

    @media (max-width: 768px) {
        max-width: 100px;
    };
`;

export const Title = styled.p`
    max-width: 500px;
    text-align: center;
    display: inline-block;
    align-self: center;

    @media (max-width: 1300px) {
        align-items: center;
        max-width: 100px;
    };

    @media (max-width: 992px) {
        max-width: 100px;
    };

    @media (max-width: 768px) {
        max-width: 100px;
    };

`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
    };
`;

export const Button = styled.button`
    padding: 20px;
    border-radius: 5px;
    margin: 3px;
    background: rgba(255,240,33,0.65);
    font-size: 20px;

    @media (max-width: 1300px) {
        padding: 15px;
        margin: 2px;
    };

    @media (max-width: 992px) {
        padding: 10px;
        margin: 1px;
        min-width: 35px
    };

    @media (max-width: 768px) {
        padding: 5px;
        margin: 1px;
    }

    &:hover {
        transform: scale(1.02);
        background: rgba(255,240,33,0.8);
    }

    &:active {
        transform: scale(1.04);
        background: rgba(255,240,33,1);
    }

    ${props =>
        props.remove &&
        css`

        @media (max-width: 768px) {
            font-size: 0;
            padding: 5px;
            margin: 1px;

            &::before {
                content: '';
                display: inline-block;
                width: 20px;
                height: 20px;
                background-image: url(${props.icon});
                background-size: cover;
                margin-right: 5px;
            }
        }`}
`;

export const Img = styled.img`
    max-width: 100px;
    height: auto;
    border-radius: 15px;
    margin: 20px;
    display: inline-block;
    align-self: center;

    @media (max-width: 1300px) {
        margin: 5px;
    };
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    };
`;

export const Price = styled.p`
    margin-right: 15px;
    width: 200px;
    display: flex;
    white-space: nowrap;
    justify-content: center;

    @media (max-width: 1300px) {
        width: 100px;
        margin-bottom: 5px;
    };

    @media (max-width: 992px) {
        width: 50px;
    };
`;

export const Summary = styled.div`
    text-align: right;
    margin-right: 20px;
    font-size: 40px;
    color: rgb(255,159,253);

    @media (max-width: 1300px) {
        font-size: 35px;
    };

    @media (max-width: 992px) {
        font-size: 30px;
    };

    @media (max-width: 768px) {
        font-size: 25px;
    };
`;


