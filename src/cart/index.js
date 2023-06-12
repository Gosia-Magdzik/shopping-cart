import { useState,  useEffect } from "react";
import { MainWrapper, CartBox, ButtonWrapper, Button, Img, Wrapper, Title, AlignWrapper, PriceWrapper, Price, Summary } from "./styled";
import bin from "./bin.svg";

export const Cart = ({ cart, setCart, handleChange }) => {
  
  const [price, setPrice] = useState(0);

    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (
        ans += item.amount * item.price
      ))
      setPrice(ans);
    }

    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
    }

  useEffect(() => {
    handlePrice();
  })

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
                      <Button onClick={() => handleChange(item, +1)}> + </Button>
                      <Button> { item.amount } </Button>
                      <Button onClick={() => handleChange(item, -1)}> - </Button>
                  </ButtonWrapper>
                    <PriceWrapper>
                        <Price> { item.price.toFixed(2) } € </Price>
                        <Button className="remove" icon={bin} onClick={() => handleRemove(item.id)}>Remove</Button>
                    </PriceWrapper>
                </Wrapper>
              );
            })}
          <Summary>
              <span><u>Total price</u>: </span>
              <span> { price.toFixed(2) } euro </span>
          </Summary>
        </MainWrapper>
      </AlignWrapper>
    );
}