import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: right;
    padding: 20px;
    color: white;
    font-style: italic;
    font-size: 20px;

    @media (max-width: 1300px) {
        padding: 15px;
        margin: 2px;
        font-size: 15px;
    };

    @media (max-width: 992px) {
        padding: 10px;
        margin: 1px;
        font-size: 10px;
    };

    @media (max-width: 768px) {
        padding: 5px;
        margin: 1px;
        font-size: 10px;
    };
`;