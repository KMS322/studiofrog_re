import React from "react";
import { useNavigate } from "react-router-dom";
const MainS5 = () => {
  const navigate = useNavigate();
  return (
    <div className="main_s5">
      <img src="/videos/main_s5.gif" alt="" />
      <div className="article_container">
        <div className="text_box">
          <p>
            스튜디오 프로그는 기획부터 편집까지
            <br />
            최고의 인력과 기획 능력을 통해 콘텐츠를 제공드립니다.
          </p>
          <div
            className="contact_box"
            onClick={() => {
              navigate("/contact");
            }}
          >
            <p>contact</p>
            <img src="/images/main_s5_btn.png" alt="" />
          </div>
        </div>
        <div className="img_box">
          <img src="/images/main_s5_img.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainS5;
