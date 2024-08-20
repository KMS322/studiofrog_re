import "../css/adminVideoLists.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  LOAD_LISTS_REQUEST,
  DELETE_LIST_REQUEST,
  CHANGE_MAIN_REQUEST,
  CHANGE_ABOUT_REQUEST,
} from "../reducers/videoList";
// import { DELETE_FILE_REQUEST } from "../reducers/contact";
import {
  CHANGE_LISTS_REQUEST,
  UPDATE_LISTS_REQUEST,
} from "../reducers/videoList";
import UploadForm from "./adminUploadForm";
import Loading from "./loading";
import AdminSubHeader from "./adminSubHeader";

const AdminVideoLists = () => {
  const location = useLocation();
  const me = location.state && location.state.me;
  const [openForm, setOpenForm] = useState(false);
  const [mainUrl, setMainUrl] = useState("");
  const [aboutUrl, setAboutUrl] = useState("");
  const [mainChange, setMainChange] = useState(false);
  const [aboutChange, setAboutChange] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("loading");
  const dispatch = useDispatch();

  const {
    lists,
    addListsDone,
    addListsLoading,
    changeListsDone,
    changeMainDone,
    changeAboutDone,
    deleteListDone,
    updateListsDone,
    updateListsLoading,
  } = useSelector((state) => state.videoList);
  // const { deleteFileDone } = useSelector((state) => state.contact);
  const mainList = lists && lists.filter((list) => list.type === "main");
  const aboutList = lists && lists.filter((list) => list.type === "about");
  const portfolioLists =
    lists && lists.filter((list) => list.type === "portfolio");
  const orderedLists =
    portfolioLists && portfolioLists.slice().sort((a, b) => a.order - b.order);
  useEffect(() => {
    if (deleteListDone) {
      window.location.href = "/adminVideoLists";
    }
  }, [deleteListDone]);

  useEffect(() => {
    setMainChange(
      !lists || lists.filter((list) => list.type === "main").length === 0
    );
  }, [lists]);
  useEffect(() => {
    setAboutChange(
      !lists || lists.filter((list) => list.type === "about").length === 0
    );
  }, [lists]);
  useEffect(() => {
    if (changeMainDone) {
      window.location.href = "/adminVideoLists";
    }
  }, [changeMainDone]);
  useEffect(() => {
    if (changeAboutDone) {
      window.location.href = "/adminVideoLists";
    }
  }, [changeAboutDone]);
  useEffect(() => {
    dispatch({
      type: LOAD_LISTS_REQUEST,
    });
  }, [dispatch]);
  const deleteList = (id) => {
    dispatch({
      type: DELETE_LIST_REQUEST,
      data: {
        id,
      },
    });
  };
  const handleMain = (e) => {
    setMainUrl(e.target.value);
  };
  const handleAbout = (e) => {
    setAboutUrl(e.target.value);
  };
  const changeMain = () => {
    dispatch({
      type: CHANGE_MAIN_REQUEST,
      data: { mainUrl },
    });
  };
  const changeAbout = () => {
    dispatch({
      type: CHANGE_ABOUT_REQUEST,
      data: { aboutUrl },
    });
  };
  useEffect(() => {
    if (addListsLoading) {
      setLoadingMsg("loading");
      setOpenLoading(true);
      setOpenForm(false);
    } else if (addListsDone) {
      setLoadingMsg("done");
      setOpenLoading(true);
      const timeoutId = setTimeout(() => {
        setOpenLoading(false);
        window.location.href = "/adminVideoLists";
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [addListsLoading]);
  // const deleteFile = () => {
  //   dispatch({
  //     type: DELETE_FILE_REQUEST,
  //   });
  // };

  const [arrLists, setArrLists] = useState(null);

  useEffect(() => {
    if (orderedLists !== null && arrLists === null) {
      setArrLists(orderedLists);
    }
  }, [orderedLists, arrLists]);
  const moveItem = (fromIndex, toIndex) => {
    const updatedLists = [...arrLists];
    const movedItem = updatedLists[fromIndex];
    updatedLists.splice(fromIndex, 1);
    updatedLists.splice(toIndex, 0, movedItem);
    const updatedWithOrder = updatedLists.map((item, index) => ({
      ...item,
      order: index + 1,
    }));
    setArrLists(updatedWithOrder);
  };
  const moveFirst = (index) => {
    if (index === arrLists.length - 1) {
      const updatedLists = [...arrLists];
      const movedItem = updatedLists.pop();
      updatedLists.unshift(movedItem);
      const updatedWithOrder = updatedLists.map((item, index) => ({
        ...item,
        order: index + 1,
      }));
      setArrLists(updatedWithOrder);
    }
  };
  const handleChange = () => {
    dispatch({
      type: CHANGE_LISTS_REQUEST,
      data: {
        arrLists,
      },
    });
  };
  useEffect(() => {
    if (changeListsDone) {
      window.location.href = "/adminVideoLists";
    }
  }, [changeListsDone]);

  const handleUpdate = () => {
    dispatch({
      type: UPDATE_LISTS_REQUEST,
    });
  };
  useEffect(() => {
    if (updateListsLoading) {
      setLoadingMsg("loading");
      setOpenLoading(true);
      setOpenForm(false);
    } else if (updateListsDone) {
      setLoadingMsg("done");
      setOpenLoading(true);
      const timeoutId = setTimeout(() => {
        setOpenLoading(false);
        window.location.href = "/adminVideoLists";
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [updateListsLoading]);
  useEffect(() => {
    if (updateListsDone) {
      window.location.href = "/adminVideoLists";
    }
  }, [updateListsDone]);
  return (
    <>
      <AdminSubHeader data={"영상 관리"} />
      {/* <div className="file_delete_btn" onClick={deleteFile}>
        첨부파일삭제
      </div> */}
      {(me && me === "ganstar95") || me === "admin" ? (
        <div className="adminVideoLists">
          <div className="upload_btn">
            <p
              onClick={() => {
                setOpenForm(true);
              }}
            >
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
            <div className="content_row row main">
              <p>Main</p>
              {mainChange ? (
                <input
                  type="text"
                  value={mainUrl}
                  onChange={(e) => {
                    handleMain(e);
                  }}
                />
              ) : (
                <p>{mainList && mainList.length && mainList[0].file_url}</p>
              )}
              {mainChange ? (
                <p></p>
              ) : (
                <p>{mainList && mainList.length && mainList[0].file_title}</p>
              )}

              <div className="delete_btn">
                {mainChange ? (
                  <p onClick={changeMain}>저장</p>
                ) : (
                  <p
                    onClick={() => {
                      setMainChange(true);
                    }}
                  >
                    수정
                  </p>
                )}
              </div>
            </div>
            <div className="content_row row main">
              <p>About</p>
              {aboutChange ? (
                <input
                  type="text"
                  value={aboutUrl}
                  onChange={(e) => {
                    handleAbout(e);
                  }}
                />
              ) : (
                <p>{aboutList && aboutList.length && aboutList[0].file_url}</p>
              )}
              {aboutChange ? (
                <p></p>
              ) : (
                <p>
                  {aboutList && aboutList.length && aboutList[0].file_title}
                </p>
              )}

              <div className="delete_btn">
                {aboutChange ? (
                  <p onClick={changeAbout}>저장</p>
                ) : (
                  <p
                    onClick={() => {
                      setAboutChange(true);
                    }}
                  >
                    수정
                  </p>
                )}
              </div>
            </div>
            {arrLists &&
              arrLists.map((list, index) => {
                return (
                  <div
                    className={
                      index % 2 === 0
                        ? "content_row row"
                        : "content_row row even_row"
                    }
                    key={index}
                  >
                    <p>{list.order}</p>
                    <p>{list.file_url}</p>
                    <p>{list.file_title}</p>
                    <div className="delete_btn">
                      {index === orderedLists.length - 1 ? (
                        <p
                          onClick={() => moveFirst(index)}
                          style={{
                            border: "1px solid black",
                            cursor: "pointer",
                          }}
                        >
                          맨위로 ▲
                        </p>
                      ) : (
                        <p onClick={() => moveItem(index, index + 1)}>
                          아래로 ▼
                        </p>
                      )}
                      {index === 0 ? (
                        ""
                      ) : (
                        <p onClick={() => moveItem(index, index - 1)}>위로 ▲</p>
                      )}
                      <p
                        onClick={() => {
                          deleteList(list.id);
                        }}
                      >
                        삭제
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="change_btn">
            <p onClick={handleChange}>순서저장</p>
          </div>
          <div className="update_btn">
            <p onClick={handleUpdate}>Title Update</p>
          </div>
          {openForm ? (
            <UploadForm
              handlePopup={() => {
                setOpenForm(false);
              }}
            />
          ) : (
            ""
          )}
          {openLoading ? <Loading data={loadingMsg} /> : ""}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminVideoLists;
