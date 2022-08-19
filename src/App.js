import React from "react";
import Banner from "./components/Banner/Banner";
import Tiles from "./components/HorizontalTiles/Tiles";

class App extends React.Component {
  render() {
    const { name } = this.props;

    const shopNowArgs = {
      url: "./src/pages/Shop.js",
      ctaTxt: "Shop Now",
      opensNewTab: true,
      color: "primary",
    };

    const learnMoreArgs = {
      url: "./src/pages/Shop.js",
      ctaTxt: "Learn More",
      opensNewTab: true,
      color: "secondary",
    };

    const helmetArgs = {
      productImgUrl:
        "https://www.specialized.com/medias/002.1-Homepage-Components-Align2.jpg?context=bWFzdGVyfGltYWdlc3w3MDY1NXxpbWFnZS9qcGVnfGg0ZC9oNTkvOTU2MjE4ODA4NzMyNi8wMDIuMV9Ib21lcGFnZS1Db21wb25lbnRzLUFsaWduMi5qcGd8ZTA3YmFjM2I5YmI4ZWUzOGUwYWFjMDk4OGQ4MzgwYzE5ODg3ZWVhODM2YWFkZjhjY2MwZjJlMTRiMGEzYTcwNQ",
      productName: "Helmet",
      redirectUrl: "https://www.google.com/",
      opensNewTab: true,
    };

    const shoeArgs = {
      productImgUrl:
        "https://www.specialized.com/medias/002.2-Homepage-Components-Torch.jpg?context=bWFzdGVyfGltYWdlc3w2MTk0N3xpbWFnZS9qcGVnfGhhNS9oNTkvOTU2MjE4ODA1NDU1OC8wMDIuMl9Ib21lcGFnZS1Db21wb25lbnRzLVRvcmNoLmpwZ3w3MmVlZjI4MmMxMjMyMDlmNzA2MjlmNWQ4ZWRlZDMwNDQ4YTMyNTgwMWUwOWJiZWVkY2E3NDAyNjY3ZDkyZTRl",
      productName: "Shoe",
      redirectUrl: "https://www.google.com/",
      opensNewTab: true,
    };

    const tireArgs = {
      productImgUrl:
        "https://www.specialized.com/medias/002.3-Homepage-Components-Tire.jpg?context=bWFzdGVyfGltYWdlc3wxMzgxMzZ8aW1hZ2UvanBlZ3xoM2QvaDU2Lzk1NjIxODgxNTI4NjIvMDAyLjNfSG9tZXBhZ2UtQ29tcG9uZW50cy1UaXJlLmpwZ3w0ZjFmY2IxN2I5ODlhYWU3ZmJiODQwMTQwN2Q2ZmI2NWM5YzYzOGQzNDk0NmQwYTZhZjgwZTVkY2Y0YzUxZjQ1",
      productName: "Tire",
      redirectUrl: "https://www.google.com/",
      opensNewTab: true,
    };

    const saddleArgs = {
      productImgUrl:
        "https://www.specialized.com/medias/002.4-BRD-9850-Homepage-Components.jpg?context=bWFzdGVyfGltYWdlc3w2MTIxNnxpbWFnZS9qcGVnfGg3MS9oMGYvOTYxMDEzODM4NjQ2Mi8wMDIuNF9CUkRfOTg1MF9Ib21lcGFnZV9Db21wb25lbnRzLmpwZ3w5MTQyYmZkNGUzMmJhOGUyMWQyMTIxZGY2NDI4ZjczOTE4YzQwZDZlYTJjYjg2NDA4NzIzNjc3MjdhMDdkMjVm",
      productName: "Saddle",
      redirectUrl: "https://www.google.com/",
      opensNewTab: true,
    };

    const products = [helmetArgs, shoeArgs, tireArgs, saddleArgs];

    const bannerArgs = {
      imgUrl:
        "https://www.specialized.com/medias/Specialized-SS22-Prime-HP-DESKTOP-COM-2880x1620.jpg?context=bWFzdGVyfGltYWdlc3wyNTQwNzc3fGltYWdlL2pwZWd8aGY5L2gzYy85NjI1MzMwMjUzODU0L1NwZWNpYWxpemVkX1NTMjJfUHJpbWVfSFBfREVTS1RPUF9DT01fMjg4MHgxNjIwLmpwZ3w3NWUxMTAwMWNmMjQ4ZTZkYmRiYzRjYjQ1ZWI1ZTk4OGEzZmRhOTIxZjBmOTg1Y2MzNjA5ZjdhNzNiYjZlNTBi",
      subtitle: "NEW PRIME APPAREL",
      title: "For Your Best Day",
      ctas: [shopNowArgs, learnMoreArgs],
    };

    return (
      <>
        <Banner {...bannerArgs} />
        <Tiles products={products} />
      </>
    );
  }
}

export default App;
