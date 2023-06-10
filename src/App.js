import { GlobalStyle } from "./GlobalStyle";
import { Nav } from "./Nav";
import { useState, useEffect } from "react";
import { Shop } from "./shop";
import { Cart } from "./cart"
import { Footer } from "./footer";
import { WarningStyled, WarningWrapper } from "./styled";

export default () => {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
      isPresent = true;
      }
    })
      if (isPresent) {
        setWarning(true);
          setTimeout (() => {
            setWarning(false);
          }, 2000);
        return;
      }
        setCart([...cart, item]);
  }

  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
          const isTransparent = window.scrollY < 20;  
          setTransparent(isTransparent);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


    return (
      <>
        <GlobalStyle />
          <Nav transparent={transparent} size={cart.length} setShow={ setShow }/>
          {
            warning && <WarningWrapper><WarningStyled>☝️ Item is already in your cart</WarningStyled></WarningWrapper>
          } 
          {
            show ? <Shop handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />      
          }
          <Footer />
      </>
    );
};


