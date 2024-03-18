import React, { useRef, useEffect } from "react";
const MainS6 = () => {
  const tagRef1 = useRef(null);
  const tagRef2 = useRef(null);
  const tagRef3 = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowWidth = window.innerWidth;
      let triggerPosition;

      if (windowWidth <= 550) {
        triggerPosition = (40 * windowWidth) / 100;
      } else {
        triggerPosition = (80 * windowWidth) / 100;
      }

      if (scrollPosition >= triggerPosition && tagRef1.current) {
        tagRef1.current.classList.add("animate_s6");
        tagRef2.current.classList.add("animate_s6");
        tagRef3.current.classList.add("animate_s6");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main_s6">
      <img src="/images/main_s6_bg.jpg" alt="" />
      <p className="title" ref={tagRef1}>
        Our Clients
      </p>
      <p className="title" ref={tagRef2}>
        고객을 만족시키는 수준 높은 업무 프로세스를 통해 정성껏 만듭니다.
      </p>
      <div className="logo_container" ref={tagRef3}>
        <img src="/logos/logo1.png" alt="" />
        <img src="/logos/logo2.png" alt="" />
        <img src="/logos/logo3.png" alt="" />
        <img src="/logos/logo4.png" alt="" />
        <img src="/logos/logo5.png" alt="" />
        <img src="/logos/logo1.png" alt="" />
        <img src="/logos/logo2.png" alt="" />
        <img src="/logos/logo3.png" alt="" />
        <img src="/logos/logo4.png" alt="" />
        <img src="/logos/logo5.png" alt="" />
        <img src="/logos/logo1.png" alt="" />
        <img src="/logos/logo2.png" alt="" />
        <img src="/logos/logo3.png" alt="" />
        <img src="/logos/logo4.png" alt="" />
        <img src="/logos/logo5.png" alt="" />
        <img src="/logos/logo1.png" alt="" />
        <img src="/logos/logo2.png" alt="" />
        <img src="/logos/logo3.png" alt="" />
        <img src="/logos/logo4.png" alt="" />
        <img src="/logos/logo5.png" alt="" />
        <img src="/logos/logo1.png" alt="" />
        <img src="/logos/logo2.png" alt="" />
        <img src="/logos/logo3.png" alt="" />
        <img src="/logos/logo4.png" alt="" />
        <img src="/logos/logo5.png" alt="" />
        <img src="/logos/logo1.png" alt="" />
        <img src="/logos/logo2.png" alt="" />
        <img src="/logos/logo3.png" alt="" />
        <img src="/logos/logo4.png" alt="" />
        <img src="/logos/logo5.png" alt="" />
      </div>
    </div>
  );
};

export default MainS6;
