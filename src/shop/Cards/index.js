import { Wrapper, ImageBox, Image, Details, Button } from "./styled"


export const Cards = ({item}) => {
    if (!item) {
        return null;
      }

    const {title, Collection, price, img} = item;
    return (
        <Wrapper>
            <ImageBox>
                <Image
                    src={img}
                    alt="image"
                />
            </ImageBox>
            <Details>
                <p> {title} </p>
                <p> {Collection} </p>
                <p>Price: {price} euro</p>
            </Details>
            <Button>Add to card</Button>
        </Wrapper>
    );
};