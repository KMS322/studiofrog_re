import "../css/adminLogoLists.css";
import AdminSubHeader from "./adminSubHeader";
import { useLocation } from "react-router-dom";

const AdminLogoLists = () => {
  const location = useLocation();
  const me = location.state && location.state.me;
  return (
    <>
      <AdminSubHeader />
      {(me && me === "studiofrog95") || me === "admin" ? (
        <div className="adminLogoLists">
          <div className="upload_btn">
            <p onClick={() => {}}>
              <span>+</span> 업로드
            </p>
          </div>
          <div className="table">
            <div className="head_row row">
              <p>NO</p>
              <p>Youtube Url</p>
              <p>Youtube title</p>
              <p></p>
            </div>
          </div>
          <div className="content_row row">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminLogoLists;
