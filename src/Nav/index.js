import { Wrapper, Title, Svg, NavBox, Img } from "./styled";
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
                <span>{size}</span>
                <Svg src={basket}/>
                
            </NavBox>
        </Wrapper>
    );
};