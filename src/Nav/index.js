import { Wrapper, Title, Svg, NavBox } from "./styled";
import  basket  from "./basket.svg";

export const Nav = ({transparent}) => {
    return (
        <Wrapper transparent={ transparent }>
            <NavBox>
                <Title>
                    Ekologiczne gospodarstwo rolne ☘️
                </Title>
                <Svg src={basket}/>
            </NavBox>
        </Wrapper>
    );
};