import { useState } from "react";
import { MainWrapper, CartBox, ButtonWrapper, Button, Img, Wrapper, Title, AlignWrapper, PriceWrapper, Price } from "./styled";

export const Cart = ({ cart, setCart }) => {
  
  const [price, setPrice] = useState(0);

    return (
      <AlignWrapper>
        <MainWrapper>
          {
            cart?.map((item) => {      
              return ( 
                <Wrapper key={ item.id }>
                  <CartBox>
                    <Img src = { item.img } />
                    <Title> { item.title } </Title>
                  </CartBox>
                  <ButtonWrapper>
                      <Button> + </Button>
                      <Button> { item.amount } </Button>
                      <Button> - </Button>
                  </ButtonWrapper>
                    <PriceWrapper>
                        <Price> { item.price.toFixed(2) } € </Price>
                        <Button>Remove</Button>
                    </PriceWrapper>
                </Wrapper>
              );
            })}
          <div>
              <span>Total price: </span>
              <span> { price } euro </span>
          </div>
        </MainWrapper>
      </AlignWrapper>
    );
}