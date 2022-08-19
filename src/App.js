import React from "react";
import Banner from "./components/Banner/Banner";
import Tiles from "./components/HorizontalTiles/Tiles";
import Footer from "./components/Footer/Footer";
import { bannerArgs, products, sections } from "./constants";

class App extends React.Component {
  render() {
    
    return (
      <>
        <Banner {...bannerArgs} />
        <Tiles products={products} />
        <Footer sections={sections} />
      </>
    );
  }
}

export default App;
