import React from "react";

import Banner from "./Banner";

export default {
  title: "Banner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgUrl:
    "https://www.specialized.com/medias/Specialized-SS22-Prime-HP-DESKTOP-COM-2880x1620.jpg?context=bWFzdGVyfGltYWdlc3wyNTQwNzc3fGltYWdlL2pwZWd8aGY5L2gzYy85NjI1MzMwMjUzODU0L1NwZWNpYWxpemVkX1NTMjJfUHJpbWVfSFBfREVTS1RPUF9DT01fMjg4MHgxNjIwLmpwZ3w3NWUxMTAwMWNmMjQ4ZTZkYmRiYzRjYjQ1ZWI1ZTk4OGEzZmRhOTIxZjBmOTg1Y2MzNjA5ZjdhNzNiYjZlNTBi",
  subtitle: "NEW PRIME APPAREL",
  title: "For Your Best Day",
  ctaOne: {
    url: "https://www.google.com",
    ctaTxt: "Shop Now",
    opensNewTab: true,
    ctaStyle: "primary",
  },
};
