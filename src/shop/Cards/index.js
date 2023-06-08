import { Wrapper, Image, Details, Button, Title, Price } from "./styled"

export const Cards = ({item, handleClick}) => {
    if (!item) {
        return null;
    }

    const {title, Collection, price, img} = item;
    return (
        <Wrapper>
                <Image
                    src={img}
                    alt="image"
                />
                <Title> {title} </Title>
                <Details> {Collection} </Details>
                <Price><u>Price:</u> {price} euro</Price>
            <Button onClick={() => handleClick(item)}>Add to card</Button>
        </Wrapper>
    );
};