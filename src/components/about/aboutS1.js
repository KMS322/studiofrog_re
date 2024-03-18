import React, { useState, useEffect } from "react";
const AboutS1 = () => {
  const [currentImg, setCurrentImg] = useState("");
  const imgSrcs = [
    "/images/about_s1_img1.jpg",
    "/images/about_s1_img2.jpg",
    "/images/about_s1_img3.jpg",
    "/images/about_s1_img4.jpg",
    "/images/about_s1_img5.jpg",
    "/images/about_s1_img6.jpg",
    "/images/about_s1_img7.jpg",
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
    <div className="about_s1">
      <img src={currentImg} alt="" />
    </div>
  );
};

export default AboutS1;
