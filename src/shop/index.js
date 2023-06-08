import { list }  from "./Products/list";
import { Cards } from "./Cards";
import { Wrapper } from "./styled";

export const Shop = ({handleClick}) => {
    return (
                <Wrapper>
                    {list.map((item) => (
                        item && (
                            <Cards item={ item } key={item.id} handleClick={handleClick}/>
                    )
                    ))}
                </Wrapper>
    );
};