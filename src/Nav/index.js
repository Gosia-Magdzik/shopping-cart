import { Wrapper, Title, Svg, NavBox, Img, Size, CartWrapper } from "./styled";
import  basket  from "./basket.svg";
import racket from "./racket.svg";

export const Nav = ({transparent, size}) => {
    return (
        <Wrapper transparent={ transparent } >
            <NavBox>
                <Title>
                    Tennis Shop 
                    &nbsp;
                    <Img src={racket}/>
                </Title>
                <CartWrapper>
                    <Svg src={basket}/>
                    <Size>{size}</Size>
                </CartWrapper>
            </NavBox>
        </Wrapper>
    );
};