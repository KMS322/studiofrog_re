import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import PortfolioModal from "./portfolioModal";
const PortfolioS2 = () => {
  const { lists } = useSelector((state) => state.videoList);
  const [listCnt, setListCnt] = useState(0);
  const [on, setOn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const portfolioLists =
    lists && lists.filter((list) => list.type === "portfolio");
  const chunkSize = 9; // 각 하위 배열의 크기

  const divided9Lists =
    portfolioLists &&
    portfolioLists.reduce((acc, curr, index) => {
      const chunkIndex = Math.floor(index / chunkSize); // 현재 요소의 인덱스가 몇 번째 하위 배열에 속하는지 계산
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = []; // 현재 하위 배열이 없으면 새로운 하위 배열 생성
      }
      acc[chunkIndex].push(curr); // 현재 요소를 현재 하위 배열에 추가
      return acc;
    }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowWidth = window.innerWidth;
      let triggerPosition;

      if (windowWidth <= 550) {
        triggerPosition = (0 * windowWidth) / 100;
      } else {
        triggerPosition = (30 * windowWidth) / 100;
      }

      if (scrollPosition >= triggerPosition) {
        setOn(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="portfolio_s2">
      <p>#업무영역</p>
      <div className="hash_box">
        <p>#기업홍보영상</p>
        <p>#소셜미디어영상</p>
        <p>#행사·공연영상</p>
        <p>#온·오프라인중계</p>
        <p>#제품영상</p>
        <p>#광고·홍보</p>
        <p>#커머스영상</p>
        <p>#항공영상</p>
        <p>#CG영상</p>
      </div>
      <div className="article_container">
        {divided9Lists &&
          divided9Lists.map((subList, index1) => {
            if (index1 <= listCnt) {
              return subList.map((list, index2) => (
                <div
                  className={on ? "video_box portfolioS2" : "video_box"}
                  key={`${index1}-${index2}`}
                  onClick={() => {
                    setSelectedVideo(list);
                    setOpenModal(true);
                  }}
                >
                  <YouTube
                    videoId={list.file_id}
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
                  <p>{list.file_title}</p>
                  <p>프로그 스튜디오</p>
                </div>
              ));
            }
          })}
      </div>
      {divided9Lists && listCnt < divided9Lists.length - 1 ? (
        <p
          onClick={() => {
            setListCnt(listCnt + 1);
          }}
        >
          + MORE
        </p>
      ) : (
        ""
      )}
      {openModal ? (
        <PortfolioModal onClose={closeModal} data={selectedVideo} />
      ) : (
        ""
      )}
    </div>
  );
};

export default PortfolioS2;
