import React, { useState, useEffect } from "react";
const PortfolioS1 = () => {
  const [currentImg, setCurrentImg] = useState("");
  const [currentMobileImg, setCurrentMobileImg] = useState("");
  const imgSrcs = [
    "/images/portfolio_s1_img1.png",
    "/images/portfolio_s1_img2.png",
    "/images/portfolio_s1_img3.png",
    "/images/portfolio_s1_img4.png",
    "/images/portfolio_s1_img5.png",
    "/images/portfolio_s1_img6.png",
    "/images/portfolio_s1_img7.png",
    "/images/portfolio_s1_img8.png",
    "/images/portfolio_s1_img9.png",
    "/images/portfolio_s1_img10.png",
    "/images/portfolio_s1_img11.png",
    "/images/portfolio_s1_img12.png",
    "/images/portfolio_s1_img13.png",
    "/images/portfolio_s1_img14.png",
    "/images/portfolio_s1_img15.png",
    "/images/portfolio_s1_img16.png",
    "/images/portfolio_s1_img17.png",
    "/images/portfolio_s1_img18.png",
    "/images/portfolio_s1_img19.png",
    "/images/portfolio_s1_img20.png",
    "/images/portfolio_s1_img21.png",
    "/images/portfolio_s1_img22.png",
    "/images/portfolio_s1_img23.png",
    "/images/portfolio_s1_img24.png",
    "/images/portfolio_s1_img25.png",
    "/images/portfolio_s1_img26.png",
    "/images/portfolio_s1_img27.png",
  ];
  const imgMobileSrcs = [
    "/images/portfolio_s1_img1_mobile.jpg",
    "/images/portfolio_s1_img2_mobile.jpg",
    "/images/portfolio_s1_img3_mobile.jpg",
    "/images/portfolio_s1_img4_mobile.jpg",
    "/images/portfolio_s1_img5_mobile.jpg",
    "/images/portfolio_s1_img6_mobile.jpg",
    "/images/portfolio_s1_img7_mobile.jpg",
    "/images/portfolio_s1_img8_mobile.jpg",
    "/images/portfolio_s1_img9_mobile.jpg",
    "/images/portfolio_s1_img10_mobile.jpg",
    "/images/portfolio_s1_img11_mobile.jpg",
    "/images/portfolio_s1_img12_mobile.jpg",
    "/images/portfolio_s1_img13_mobile.jpg",
    "/images/portfolio_s1_img14_mobile.jpg",
    "/images/portfolio_s1_img15_mobile.jpg",
    "/images/portfolio_s1_img16_mobile.jpg",
    "/images/portfolio_s1_img17_mobile.jpg",
    "/images/portfolio_s1_img18_mobile.jpg",
    "/images/portfolio_s1_img19_mobile.jpg",
    "/images/portfolio_s1_img20_mobile.jpg",
    "/images/portfolio_s1_img21_mobile.jpg",
    "/images/portfolio_s1_img22_mobile.jpg",
    "/images/portfolio_s1_img23_mobile.jpg",
    "/images/portfolio_s1_img24_mobile.jpg",
    "/images/portfolio_s1_img25_mobile.jpg",
    "/images/portfolio_s1_img26_mobile.jpg",
    "/images/portfolio_s1_img27_mobile.jpg",
  ];
  useEffect(() => {
    let currentIndex = 0;
    const updateText = () => {
      setCurrentImg(imgSrcs[currentIndex]);

      currentIndex = (currentIndex + 1) % imgSrcs.length;

      setTimeout(updateText, 2000);
    };

    updateText();
    return () => clearTimeout(updateText);
  }, []);
  useEffect(() => {
    let currentIndex = 0;
    const updateText = () => {
      setCurrentMobileImg(imgMobileSrcs[currentIndex]);

      currentIndex = (currentIndex + 1) % imgMobileSrcs.length;

      setTimeout(updateText, 2000);
    };

    updateText();
    return () => clearTimeout(updateText);
  }, []);
  return (
    <div className="portfolio_s1">
      <img id="pc" src={currentImg} alt="" />
      <img id="mobile" src={currentMobileImg} alt="" />
    </div>
  );
};

export default PortfolioS1;
