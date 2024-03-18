import React, { useRef, useEffect, useState } from "react";
const MainS4 = () => {
  const elements = new Array(10).fill(null);
  const [pos, setPos] = useState("0vw");
  const videoContainerRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      let numberPart = parseFloat(pos);
      const newPost = `${numberPart - 35.58}vw`;
      setPos(newPost);
      console.log("pos : ", pos);
    }, 5000);

    return () => clearInterval(interval);
  }, [pos]);

  return (
    <div className="main_s4">
      <img src="/images/main_s4_bg.jpg" alt="" />
      <p>창의적이고 감각적인 영상을 만드는</p>
      <img src="/images/logo_white.png" alt="" />
      <div className="article_container">
        <div className="text_box">
          <p>WORKS</p>
          <p>클라이언트가 필요로 하는 영상 업무를 수행합니다.</p>
        </div>
        <div className="video_box_container">
          <div
            className="video_scroll"
            ref={videoContainerRef}
            style={{ left: pos }}
          >
            {elements.map((image, index) => {
              return (
                <img
                  src={`/test/image${index + 1}.jpg`}
                  alt=""
                  key={index}
                  className="slide-img"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="btn_box">
        <img src="/images/btn_left.png" alt="" />
        <img src="/images/btn_right.png" alt="" />
      </div>
      <p>+ MORE</p>
    </div>
  );
};

export default MainS4;
