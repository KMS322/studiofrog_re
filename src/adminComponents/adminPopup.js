import "../css/adminPopup.css";
import AdminSubHeader from "./adminSubHeader";
const AdminPopup = () => {
  return (
    <>
      <AdminSubHeader data={"팝업 관리"} />
      <div className="adminPopup">
        <div className="upload_btn">팝업 이미지 업로드</div>
      </div>
    </>
  );
};

export default AdminPopup;
