import React, { useRef, useEffect } from "react";
const MainS2 = () => {
  const tagRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowWidth = window.innerWidth;
      let triggerPosition;

      if (windowWidth <= 550) {
        triggerPosition = (0 * windowWidth) / 100;
      } else {
        triggerPosition = (40 * windowWidth) / 100;
      }
      if (scrollPosition >= triggerPosition && tagRef.current) {
        tagRef && tagRef.current.classList.add("animate_s2_1");
        setTimeout(() => {
          tagRef && tagRef.current.classList.add("animate_s2_2");
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const videoRef = useRef(null);
  const handleVideoEnd = () => {
    videoRef.current.play();
  };
  useEffect(() => {
    const video = videoRef.current;
    console.log("AA");
    video.oncanplay = () => {
      video.play();
      console.log("BB");
    };

    return () => {
      console.log("CC");
      video.oncanplay = null;
    };
  }, []);
  return (
    <div className="main_s2">
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        autoPlay
        onEnded={handleVideoEnd}
      >
        <source
          src="https://static.videezy.com/system/resources/previews/000/042/349/original/4K-7.mp4"
          type="video/mp4"
        />
      </video>
      <a className="source" href="http://www.videezy.com">
        Stock video by Videezy.com
      </a>
      <div className="text_box" ref={tagRef}>
        <img src="/images/logo_white.png" alt="" />
        <p id="pc">
          스튜디오 프로그는
          <br />
          콘텐츠 안에 메시지가 담길 수 있도록 정직하고 투명한 업무를 약속합니다.
        </p>
        <p id="mobile">
          스튜디오 프로그는 콘텐츠 안에 메시지가 담길 수 있도록 <br />
          정직하고 투명한 업무를 약속합니다.
        </p>
      </div>
    </div>
  );
};

export default MainS2;
