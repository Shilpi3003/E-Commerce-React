import React from "react";

import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce websites are online platforms that allow customers to
          purchase products and services from the comfort of their homes. In the
          context of clothing, e-commerce websites offer a wide range of
          clothing options for men, women, and children. They also provide a
          convenient shopping experience with features such as easy navigation,
          personalized recommendations, and user-friendly interfaces.
        </p>
        <p>
          They offer a vast array of styles that cater to a diverse customer
          base. One of unique selling propositions is the ability to turn
          fashion trends into accessible products for its customers quickly.
          They combine a wide selection of clothing and accessories with
          competitive pricing, making fashionable attire affordable for a broad
          audience.
        </p>
      </div>
    </div>
  );
};
export default DescriptionBox;
