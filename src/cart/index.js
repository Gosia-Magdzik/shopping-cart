import { useState } from "react";
import { MainWrapper, CartBox, ButtonWrapper, Button, Img } from "./styled";

export const Cart = ({ cart, setCart }) => {
  
  const [price, setPrice] = useState(0);

    return (
      <MainWrapper>
        {
          cart?.map((item) => {      
            return ( 
              <div key={item.id}>
              <CartBox key = { item.id }>
                <Img src = { item.img } />
                <p> { item.title } </p>
              </CartBox>
              <ButtonWrapper>
                  <Button> + </Button>
                  <Button> - </Button>
              </ButtonWrapper>
                <div>
                    <span> { item.price } </span>
                    <Button></Button>
                </div>
              </div>
            );
          })}
        <div>
            <span>Total price: </span>
            <span> { price } euro </span>
        </div>
      </MainWrapper>
    );
}