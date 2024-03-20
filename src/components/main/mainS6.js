import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_LOGO_LISTS_REQUEST } from "../../reducers/logoList";
const MainS6 = () => {
  const dispatch = useDispatch();
  const { logoLists } = useSelector((state) => state.logoList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const tagRef1 = useRef(null);
  const tagRef2 = useRef(null);
  const tagRef3 = useRef(null);
  useEffect(() => {
    if (!logoLists) {
      dispatch({
        type: LOAD_LOGO_LISTS_REQUEST,
      });
    }
  }, [dispatch, logoLists]);
  useEffect(() => {
    if (logoLists) {
      const timer = setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % Math.ceil(logoLists.length / 30)
        );
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, logoLists]);
  useEffect(() => {
    if (logoLists) {
      const timer = setTimeout(() => {
        setCurrentMobileIndex(
          (prevIndex) => (prevIndex + 1) % Math.ceil(logoLists.length / 10)
        );
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentMobileIndex, logoLists]);

  const renderLogoList = () => {
    if (logoLists) {
      const startIndex = currentIndex * 30;
      const endIndex = Math.min(startIndex + 30, logoLists.length);
      const slicedLists = logoLists.slice(startIndex, endIndex);

      return slicedLists.map((logo, index) => (
        <img
          key={index}
          src={`/logos/${logo.img_src}`}
          alt={`Logo ${index + 1}`}
        />
      ));
    }
  };
  const renderMobileLogoList = () => {
    if (logoLists) {
      const startIndex = currentMobileIndex * 10;
      const endIndex = Math.min(startIndex + 10, logoLists.length);
      const slicedLists = logoLists.slice(startIndex, endIndex);

      return slicedLists.map((logo, index) => (
        <img
          key={index}
          src={`/logos/${logo.img_src}`}
          alt={`Logo ${index + 1}`}
        />
      ));
    }
  };
  return (
    <div className="main_s6">
      <img id="pc" src="/images/main_s6_bg.jpg" alt="" />
      <p className="title" ref={tagRef1}>
        Our Clients
      </p>
      <p id="pc" className="title" ref={tagRef2}>
        고객을 만족시키는 수준 높은 업무 프로세스를 통해 정성껏 만듭니다.
      </p>
      <p id="mobile" className="title" ref={tagRef2}>
        고객을 만족시키는 수준 높은
        <br /> 업무 프로세스를 통해 정성껏 만듭니다.
      </p>
      <div id="pc" className="logo_container" ref={tagRef3}>
        {renderLogoList()}
      </div>
      <div id="mobile" className="logo_container">
        {renderMobileLogoList()}
      </div>
      <img id="mobile" src="/images/main_s6_bg_mobile.jpg" alt="" />
    </div>
  );
};

export default MainS6;
