import React from 'react'
import SecondaryNavBar from '../components/SecondaryNavBar/SecondayNavBar';
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import Tiles from '../components/HorizontalTiles/Tiles';
import QuadBanner from '../components/QuadBanner/QuadBanner';
import Footer from '../components/Footer/Footer';
import SecondaryFooter from '../components/SecondaryFooter/SecondaryFooter';

import { categories } from '../constants/NavBarArgs';
import { bannerArgs, products } from '../constants';
import { sections, socials, legalLinks } from '../constants/FooterArgs';
import QuadBannerArgs from '../constants/QuadBannerArgs';

const HomePage = () => {
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
        ctaWidth="600px"
      />
      <Tiles products={products} />
      <QuadBanner
        {...QuadBannerArgs}
        headerSize="36px"
        justify="center"
        ctaWidth="100%"
      />
      <Footer sections={sections} socials={socials} />
      <SecondaryFooter footerLinks={legalLinks} />
    </>
  );
}

export default HomePage;