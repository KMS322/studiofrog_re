import "../css/adminMain.css";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AdminSubHeader from "./adminSubHeader";
const AdminMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const me = location.state && location.state.me;

  console.log("me : ", me);
  useEffect(() => {
    if (!me) {
      navigate("/admin");
    }
  }, [me]);
  return (
    <>
      <AdminSubHeader data={"관리자 페이지"} />
      <div className="adminMain">
        <p
          onClick={() => {
            navigate("/adminVideoLists", { state: { me } });
          }}
        >
          영상 리스트 등록/삭제/순서 변경
        </p>
        <p
          onClick={() => {
            navigate("/adminLogoLists", { state: { me } });
          }}
        >
          로고 리스트 등록/삭제/순서 변경
        </p>
        <p
          onClick={() => {
            navigate("/adminPopup", { state: { me } });
          }}
        >
          팝업 창 관리
        </p>
      </div>
    </>
  );
};

export default AdminMain;
