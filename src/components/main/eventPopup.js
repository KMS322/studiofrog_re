import "../../css/eventPopup.css";

const EventPopup = ({ onClose }) => {
  return (
    <div className="eventPopup">
      <img onClick={onClose} src="/images/delete_btn.png" alt="" />
      <img src="/popups/popupImage.jpg" alt="" />
    </div>
  );
};

export default EventPopup;
