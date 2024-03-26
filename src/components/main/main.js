import "../../css/main.css";
import "../../css/main_mobile.css";
import { useState } from "react";
import MainS1 from "./mainS1";
import MainS2 from "./mainS2";
import MainS3 from "./mainS3";
import MainS4 from "./mainS4";
import MainS5 from "./mainS5";
import MainS6 from "./mainS6";
import MainS7 from "./mainS7";
import EventPopup from "./eventPopup";
const Main = () => {
  const [openPopup, setOpenPopup] = useState(true);

  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <>
      <MainS1 />
      <MainS2 />
      <MainS3 />
      <MainS4 />
      <MainS5 />
      <MainS6 />
      <MainS7 />
      {openPopup ? <EventPopup onClose={handleClose} /> : ""}
    </>
  );
};

export default Main;
