import React, { useState, useEffect } from "react";
const PortfolioS1 = () => {
  const [currentImg, setCurrentImg] = useState("");
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
    "/images/portfolio_s1_img28.png",
    "/images/portfolio_s1_img29.png",
    "/images/portfolio_s1_img30.png",
    "/images/portfolio_s1_img31.png",
    "/images/portfolio_s1_img32.png",
    "/images/portfolio_s1_img33.png",
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
  return (
    <div className="portfolio_s1">
      <img src={currentImg} alt="" />
    </div>
  );
};

export default PortfolioS1;
