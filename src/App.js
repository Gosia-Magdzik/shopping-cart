import { GlobalStyle } from "./GlobalStyle";
import { Nav } from "./Nav";
import { useState, useEffect } from "react";
import { Shop } from "./shop";
import { Cart } from "./cart"
import { Footer } from "./footer";

export default () => {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(item);
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
          <Nav transparent={transparent} size={cart.length}/>
          <Shop handleClick={handleClick} />
          <Cart />
          <Footer />
      </>
    );
};


