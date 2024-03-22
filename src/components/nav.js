import "../css/nav.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const tagRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowWidth = window.innerWidth;
      let triggerPosition;

      if (windowWidth <= 550) {
        triggerPosition = (40 * windowWidth) / 100;
      } else {
        triggerPosition = (30 * windowWidth) / 100;
      }

      if (tagRef.current) {
        if (scrollPosition >= triggerPosition && tagRef.current) {
          tagRef.current.classList.add("display");
        } else {
          tagRef.current.classList.remove("display");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tagRef.current]);
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <div id="pc" className="nav" ref={tagRef}>
      <img
        src="/images/logo_white.png"
        alt=""
        onClick={() => {
          navigate("/");
          scrollToTop();
        }}
      />
      <div
        className="nav_box"
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

export default Nav;
