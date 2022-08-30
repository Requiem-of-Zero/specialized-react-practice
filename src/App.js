import React from "react";
import NavBar from "./components/NavBar/NavBar";
import MegaNav from "./components/MegaNav/MegaNav";
import Banner from "./components/Banner/Banner";
import Tiles from "./components/HorizontalTiles/Tiles";
import QuadBanner from "./components/QuadBanner/QuadBanner";
import Footer from "./components/Footer/Footer";
import SecondaryNavBar from "./components/SecondaryNavBar/SecondayNavBar";
import SecondaryFooter from "./components/SecondaryFooter/SecondaryFooter";

import { bannerArgs, products } from "./constants";
import { categories } from "./constants/NavBarArgs";
import { sections, socials, legalLinks } from "./constants/FooterArgs";
import QuadBannerArgs from "./constants/QuadBannerArgs";

class App extends React.Component {
  render() {
    return (
      <>
        <SecondaryNavBar />
        <NavBar categories={categories} />
        <Banner
          {...bannerArgs}
          imgHeight="1100px"
          headerSize="48px"
          align="left"
          justify="right"
          ctaWidth='600px'
        />
        <Tiles products={products} />
        <QuadBanner {...QuadBannerArgs} headerSize="36px" justify='center' ctaWidth='100%'/>
        <Footer sections={sections} socials={socials} />
        <SecondaryFooter footerLinks={legalLinks} />
      </>
    );
  }
}

export default App;
