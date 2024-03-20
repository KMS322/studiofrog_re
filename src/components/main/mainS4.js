import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MainS4 = () => {
  const { lists } = useSelector((state) => state.videoList);
  const portfolioLists =
    lists && lists.filter((list) => list.type === "portfolio");
  const [pos, setPos] = useState("0vw");
  const [posMobile, setPosMobile] = useState("0vw");
  const [arrLength, setArrLength] = useState(0);
  const videoContainerRef = useRef(null);
  const videoContainerMobileRef = useRef(null);
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      let numberPart = parseFloat(pos);
      if (arrLength > 2 && parseFloat(pos) >= (arrLength - 2) * -35.58) {
        const newPost = `${numberPart - 35.58}vw`;
        setPos(newPost);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [pos, arrLength]);

  useEffect(() => {
    const interval = setInterval(() => {
      let numberPart = parseFloat(posMobile);
      if (arrLength > 2 && parseFloat(posMobile) >= (arrLength - 2) * -80) {
        const newPost = `${numberPart - 80}vw`;
        setPosMobile(newPost);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [posMobile, arrLength]);

  const newArr = portfolioLists && portfolioLists.slice(0, 5);
  useEffect(() => {
    if (newArr) {
      setArrLength(newArr.length);
    }
  }, [newArr]);
  const handlePrev = () => {
    if (pos !== "0vw") {
      let numberPart = parseFloat(pos);
      const prevPost = `${numberPart + 35.58}vw`;
      setPos(prevPost);
    }
  };
  const handleNext = () => {
    if (parseFloat(pos) !== 35.58 * -(arrLength - 1)) {
      let numberPart = parseFloat(pos);
      const nextPost = `${numberPart - 35.58}vw`;
      setPos(nextPost);
    }
  };

  return (
    <div className="main_s4">
      <img id="pc" src="/images/main_s4_bg.jpg" alt="" />
      <p>창의적이고 감각적인 영상을 만드는</p>
      <img src="/images/logo_white.png" alt="" />
      <img id="mobile" src="/images/main_s4_bg_mobile.jpg" alt="" />

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
            id="pc"
            onMouseEnter={() => setHoveredIndex(null)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {newArr &&
              newArr.map((list, index) => {
                return (
                  <div className="hover_box" key={index}>
                    <img
                      src={`https://img.youtube.com/vi/${list.file_id}/mqdefault.jpg`}
                      alt=""
                      onMouseEnter={() => setHoveredIndex(index)}
                    />
                    {hoveredIndex === index && (
                      <div className="hover">{list.file_title}</div>
                    )}
                  </div>
                );
              })}
          </div>
          <div
            className="video_scroll"
            ref={videoContainerMobileRef}
            style={{ left: posMobile }}
            id="mobile"
          >
            {newArr &&
              newArr.map((list, index) => {
                return (
                  <>
                    <img
                      // src={`/test/image${index + 1}.jpg`}
                      src={`https://img.youtube.com/vi/${list.file_id}/mqdefault.jpg`}
                      alt=""
                    />
                    {/* <div className="overlay"></div> */}
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <div className="btn_box">
        <img src="/images/btn_left.png" alt="" onClick={handlePrev} />
        <img src="/images/btn_right.png" alt="" onClick={handleNext} />
      </div>
      <p
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        + MORE
      </p>
    </div>
  );
};

export default MainS4;
