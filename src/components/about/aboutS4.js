import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LOAD_LOGO_LISTS_REQUEST } from "../../reducers/logoList";
const AboutS4 = () => {
  const { logoLists } = useSelector((state) => state.logoList);
  const orderedLists =
    logoLists && logoLists.slice().sort((a, b) => a.order - b.order);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (orderedLists) {
      const timer = setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % Math.ceil(orderedLists.length / 10)
        );
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, orderedLists]);
  const renderLogoList = () => {
    if (orderedLists) {
      const startIndex = currentIndex * 10;
      const endIndex = Math.min(startIndex + 10, orderedLists.length);
      const slicedLists = orderedLists.slice(startIndex, endIndex);

      return slicedLists.map((logo, index) => (
        <img
          key={index}
          src={`/logos/${logo.img_src}`}
          alt={`Logo ${index + 1}`}
        />
      ));
    }
  };
  return (
    <div className="about_s4">
      <img id="pc" src="/images/about_s4_bg.jpg" alt="" />
      <img id="mobile" src="/images/about_s4_bg_mobile.jpg" alt="" />
      <p>Our Clients</p>
      <div className="article_container">{renderLogoList()}</div>
    </div>
  );
};

export default AboutS4;
