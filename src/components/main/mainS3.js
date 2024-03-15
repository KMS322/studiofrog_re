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
      <div class="article_container" ref={tagRef}>
        <div class="article">
          <img src="/images/main_s3_img1.png" alt="" />
          <div class="text_box">
            <p class="korean">홈페이지 제작</p>
            <p class="english">Homepage Production</p>
            <p class="korean">영상제작자동화 시스템</p>
            <p class="english">Video Production Automation System</p>
            <p class="korean">언리얼엔진기반 설계</p>
            <p class="english">Unreal Engine-based Design</p>
            <p class="korean">3D 설계</p>
            <p class="english">3D Design</p>
          </div>
        </div>
        <div class="article">
          <img src="/images/main_s3_img2.png" alt="" />
          <div class="text_box">
            <p class="korean">브랜드 디자인</p>
            <p class="english">Brand Design</p>
            <p class="korean">일러스트 디자인</p>
            <p class="english">Illustration Design</p>
            <p class="korean">애니메이션 디자인</p>
            <p class="english">Animation Design</p>
            <p class="korean">사운드 디자인</p>
            <p class="english">Sound Design</p>
            <p class="korean">브랜드 커뮤니케이션</p>
            <p class="english">Brand Communication</p>
          </div>
        </div>
        <div class="article">
          <img src="/images/main_s3_img3.png" alt="" />
          <div class="text_box">
            <p class="korean">기업홍보영상</p>
            <p class="english">Corporate Promotion Videos</p>
            <p class="korean">소셜미디어영상</p>
            <p class="english">Social Media Videos</p>
            <p class="korean">행사,공연영상</p>
            <p class="english">Event, Performance Videos</p>
            <p class="korean">온,오프라인중계</p>
            <p class="english">Online/Offline Broadcasting</p>
            <p class="korean">제품영상</p>
            <p class="english">Product Videos</p>
            <p class="korean">광고,홍보</p>
            <p class="english">Advertising, Promotion</p>
            <p class="korean">커머스영상</p>
            <p class="english">E-commerce Videos</p>
            <p class="korean">항공영상</p>
            <p class="english">Aerial Videos</p>
            <p class="korean">CG영상</p>
            <p class="english">CG Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainS3;
