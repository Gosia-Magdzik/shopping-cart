import { list }  from "./Products/list";
import { Cards } from "./Cards";
import { Wrapper, Container } from "./styled";

export const Shop = () => {
    return (
            <Container>
                <Wrapper>
                    {list.map((item) => (
                        item && (
                            <Cards item= { item } />
                    )
                    ))}
                </Wrapper>
            </Container>
    );
};