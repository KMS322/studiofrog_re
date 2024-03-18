import YouTube from "react-youtube";
const PortfolioModal = ({ onClose, data }) => {
  return (
    <div className="portfolioModal">
      <p>{data.file_title}</p>
      <div className="video_box">
        <YouTube
          videoId={data.file_id}
          opts={{
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
              controls: 0,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </div>
      <div className="delete_box" onClick={onClose}></div>
    </div>
  );
};
export default PortfolioModal;
