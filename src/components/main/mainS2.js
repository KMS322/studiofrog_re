import React, { useRef, useEffect } from "react";
const MainS2 = () => {
  const tagRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowWidth = window.innerWidth;
      let triggerPosition;

      if (windowWidth <= 550) {
        triggerPosition = (40 * windowWidth) / 100;
      } else {
        triggerPosition = (40 * windowWidth) / 100;
      }

      if (scrollPosition >= triggerPosition && tagRef.current) {
        tagRef.current.classList.add("animate_s2_1");
        setTimeout(() => {
          tagRef.current.classList.add("animate_s2_2");
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main_s2">
      <img src="/videos/main_s2.gif" alt="" />
      <div className="text_box" ref={tagRef}>
        <img src="/images/logo_white.png" alt="" />
        <p>
          스튜디오 프로그는
          <br />
          콘텐츠 안에 메시지가 담길 수 있도록 정직하고 투명한 업무를 약속합니다.
        </p>
      </div>
    </div>
  );
};

export default MainS2;
