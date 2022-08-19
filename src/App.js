import React from "react";
import Banner from "./components/Banner/Banner";
import Tiles from "./components/HorizontalTiles/Tiles";
import Footer from "./components/Footer/Footer";
import { bannerArgs, products } from "./constants";

class App extends React.Component {
  render() {
    
    return (
      <>
        <Banner {...bannerArgs} />
        <Tiles products={products} />
        <Footer />
      </>
    );
  }
}

export default App;
