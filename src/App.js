import { GlobalStyle } from "./GlobalStyle";
import { Nav } from "./Nav";
import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { Shop } from "./shop";

export default () => {

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
          <Nav transparent={transparent}/>
          <Cards />
          <Shop />
      </>
    );
};


