import { useNavigate } from "react-router-dom";
const AboutS3 = () => {
  const navigate = useNavigate();
  return (
    <div className="about_s3">
      <img src="/images/about_s3_bg.jpg" alt="" />
      <p>안녕하세요!</p>
      <p>
        많은 영상들이 만들어지고 필요해지는 지금,
        <br />
        진심을 담아 상담하고 만족할 수 있도록 스튜디오프로그가 함께 하겠습니다.
      </p>
      <div className="article_container">
        <div className="article">
          <img src="/images/about_s3_img1.png" alt="" />
          <p>PLAN</p>
          <p>
            클라이언트가 원하는
            <br />
            아웃풋이 명확해질 수<br />
            있도록 다양한 레퍼런스를
            <br />
            통해 커뮤니케이션 합니다.
          </p>
        </div>
        <div className="article">
          <img src="/images/about_s3_img2.png" alt="" />
          <p>FLIM</p>
          <p>
            최고의 품질로 촬영하기 <br />
            위해 크레에이티브 <br />
            전문가가 촬영합니다.
          </p>
        </div>
        <div className="article">
          <img src="/images/about_s3_img1.png" alt="" />
          <p>EDIT</p>
          <p>
            가장 중요한 최종본을 위해 <br />
            능숙한 에디터들이 편집, <br />
            디자인, 색보정을 통해 <br />
            영상을 연출합니다.
          </p>
        </div>
      </div>
      <div
        className="contact_box"
        onClick={() => {
          navigate("/contact");
        }}
      >
        <p>contact</p>
        <img src="/images/btn_right.png" alt="" />
      </div>
    </div>
  );
};

export default AboutS3;
