import "../css/footer.css";
import "../css/footer_mobile.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <div className="footer">
      <img
        src="/images/footer_logo.png"
        alt=""
        onClick={() => {
          navigate("/");
          scrollToTop();
        }}
      />
      <div className="text_container">
        <div className="text_box">
          <p>주소</p>
          <div className="address_box">
            <p>대구광역시 남구 이천동 577-20</p>
            <p>2층 STUDIOFROG</p>
            <p id="pc">.</p>
          </div>
        </div>
        <div className="text_box">
          <p>문의 및 연락처</p>
          <div className="sub_box_container">
            <div className="sub_box">
              <p>PHONE</p>
              <p>010-7747-5367</p>
            </div>
            <div className="sub_box">
              <p>FAX</p>
              <p>0508-910-5367</p>
            </div>
            <div className="sub_box">
              <p>EMAIL</p>
              <p>studiofrogg@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="nav_box_container">
          <div className="nav_box">
            <p
              onClick={() => {
                navigate("/about");
                scrollToTop();
              }}
            >
              ABOUT
            </p>
            <p
              onClick={() => {
                navigate("/portfolio");
                scrollToTop();
              }}
            >
              PORTFOLIO
            </p>
            <p
              onClick={() => {
                navigate("/contact");
                scrollToTop();
              }}
            >
              CONTACT
            </p>
          </div>
          <p id="pc">Copyright © 2023 STUDIOFROG All Rights Reserved.</p>
        </div>
      </div>
      <p id="mobile">Copyright © 2023 STUDIOFROG All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
