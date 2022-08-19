import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Tiles from "./components/HorizontalTiles/Tiles";
import Footer from "./components/Footer/Footer";
import SecondaryFooter from "./components/SecondaryFooter/SecondaryFooter";

import { bannerArgs, products } from "./constants";
import { categories } from "./constants/NavBarArgs";
import { sections, socials, legalLinks } from "./constants/FooterArgs";
class App extends React.Component {
  render() {
    return (
      <>
        <NavBar categories={categories}/>
        <Banner {...bannerArgs} />
        <Tiles products={products} />
        <Footer sections={sections} socials={socials} />
        <SecondaryFooter footerLinks={legalLinks} />
      </>
    );
  }
}

export default App;
