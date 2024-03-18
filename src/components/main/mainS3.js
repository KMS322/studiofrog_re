import React, { useRef, useEffect } from "react";
const MainS3 = () => {
  const tagRef = useRef(null);
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

      if (scrollPosition >= triggerPosition && tagRef.current) {
        tagRef.current.classList.add("animate_s3");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main_s3">
      <img src="/videos/main_s3.gif" alt="" />
      <div className="article_container" ref={tagRef}>
        <div className="article">
          <img src="/images/main_s3_img1.png" alt="" />
          <div className="text_box">
            <p className="korean">홈페이지 제작</p>
            <p className="english">Homepage Production</p>
            <p className="korean">영상제작자동화 시스템</p>
            <p className="english">Video Production Automation System</p>
            <p className="korean">언리얼엔진기반 설계</p>
            <p className="english">Unreal Engine-based Design</p>
            <p className="korean">3D 설계</p>
            <p className="english">3D Design</p>
          </div>
        </div>
        <div className="article">
          <img src="/images/main_s3_img2.png" alt="" />
          <div className="text_box">
            <p className="korean">브랜드 디자인</p>
            <p className="english">Brand Design</p>
            <p className="korean">일러스트 디자인</p>
            <p className="english">Illustration Design</p>
            <p className="korean">애니메이션 디자인</p>
            <p className="english">Animation Design</p>
            <p className="korean">사운드 디자인</p>
            <p className="english">Sound Design</p>
            <p className="korean">브랜드 커뮤니케이션</p>
            <p className="english">Brand Communication</p>
          </div>
        </div>
        <div className="article">
          <img src="/images/main_s3_img3.png" alt="" />
          <div className="text_box">
            <p className="korean">기업홍보영상</p>
            <p className="english">Corporate Promotion Videos</p>
            <p className="korean">소셜미디어영상</p>
            <p className="english">Social Media Videos</p>
            <p className="korean">행사,공연영상</p>
            <p className="english">Event, Performance Videos</p>
            <p className="korean">온,오프라인중계</p>
            <p className="english">Online/Offline Broadcasting</p>
            <p className="korean">제품영상</p>
            <p className="english">Product Videos</p>
            <p className="korean">광고,홍보</p>
            <p className="english">Advertising, Promotion</p>
            <p className="korean">커머스영상</p>
            <p className="english">E-commerce Videos</p>
            <p className="korean">항공영상</p>
            <p className="english">Aerial Videos</p>
            <p className="korean">CG영상</p>
            <p className="english">CG Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainS3;
