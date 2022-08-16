import React from "react";
import Banner from "./components/Banner/Banner";
import Button from "./components/Button/Button";

class App extends React.Component {
  render() {
    const { name } = this.props;

    const learnMoreArgs = {
      url: './src/pages/Shop.js',
      ctaTxt: 'Learn More',
      opensNewTab: true
    }

    const shopNowArgs = {
      url: './src/pages/Shop.js',
      ctaTxt: 'Shop Now',
      opensNewTab: true
    }

    const bannerArgs = {
      imgUrl:
        "https://www.specialized.com/medias/Specialized-SS22-Prime-HP-DESKTOP-COM-2880x1620.jpg?context=bWFzdGVyfGltYWdlc3wyNTQwNzc3fGltYWdlL2pwZWd8aGY5L2gzYy85NjI1MzMwMjUzODU0L1NwZWNpYWxpemVkX1NTMjJfUHJpbWVfSFBfREVTS1RPUF9DT01fMjg4MHgxNjIwLmpwZ3w3NWUxMTAwMWNmMjQ4ZTZkYmRiYzRjYjQ1ZWI1ZTk4OGEzZmRhOTIxZjBmOTg1Y2MzNjA5ZjdhNzNiYjZlNTBi",
      subtitle: "NEW PRIME APPAREL",
      title: "For Your Best Day",
      shopNowArgs,
      learnMoreArgs
    }

    return (
      <>
        <Banner {...bannerArgs }/>
        <Button {...learnMoreArgs}/>
      </>
    );
  }
}

export default App;
