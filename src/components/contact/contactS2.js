import React, { useRef } from "react";
const ContactS2 = () => {
  const videoRef = useRef(null);
  const handleVideoEnd = () => {
    videoRef.current.play();
  };
  return (
    <>
      <div className="contact_s2">
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          autoPlay
          onEnded={handleVideoEnd}
          id="pc"
        >
          <source src="/videos/contact_s2_bg.mp4" type="video/mp4" />
        </video>
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          autoPlay
          onEnded={handleVideoEnd}
          id="mobile"
        >
          <source src="/videos/contact_s2_bg_mobile.mp4" type="video/mp4" />
        </video>
        <div className="article_container">
          <p>찾아오시는 길</p>
          <p>대구광역시 동구 경안로 722 3층 STUDIOFROG</p>
          <div className="text_box_container">
            <div className="text_box">
              <p>PHONE</p>
              <p>010-7747-5367</p>
            </div>
            <div className="text_box">
              <p>FAX</p>
              <p>0508-910-5367</p>
            </div>
            <div className="text_box">
              <p>EMAIL</p>
              <p>studiofrogg@gmail.com</p>
            </div>
          </div>
          <img id="pc" src="/images/contact_s2_map.jpg" alt="" />
        </div>
      </div>
      <img
        className="mobile_map"
        id="mobile"
        src="/images/contact_s2_map.jpg"
        alt=""
      />
    </>
  );
};

export default ContactS2;
