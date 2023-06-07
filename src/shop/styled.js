import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    margin: 40px 100px 100px 10px;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    };

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 6px;
    };

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 5px;
    };
`;





