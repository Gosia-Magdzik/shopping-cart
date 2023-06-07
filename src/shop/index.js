import { list }  from "./Products/list";
import { Cards } from "./Cards";
import { Wrapper, Flex } from "./styled";

export const Shop = () => {
    return (
                <Wrapper>
                    {list.map((item) => (
                        item && (
                            <Cards item= { item } />
                    )
                    ))}
                </Wrapper>
    );
};