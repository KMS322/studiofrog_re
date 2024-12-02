import "../css/adminLogoLists.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSubHeader from "./adminSubHeader";
import AdminLogoUploadForm from "./adminLogoUploadForm";
import Loading from "./loading";
import { useLocation } from "react-router-dom";
import {
  LOAD_LOGO_LISTS_REQUEST,
  CHANGE_LOGO_LISTS_REQUEST,
  DELETE_LOGO_LISTS_REQUEST,
} from "../reducers/logoList";
const AdminLogoLists = () => {
  const dispatch = useDispatch();
  const {
    logoLists,
    addLogoListsDone,
    addLogoListsLoading,
    changeLogoListsDone,
    deleteLogoListsDone,
  } = useSelector((state) => state.logoList);
  const orderedLists =
    logoLists && logoLists.slice().sort((a, b) => a.order - b.order);
  const [openForm, setOpenForm] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("loading");
  const location = useLocation();
  const me = location.state && location.state.me;
  useEffect(() => {
    dispatch({
      type: LOAD_LOGO_LISTS_REQUEST,
    });
  }, [dispatch]);
  const [lists, setLists] = useState(orderedLists);
  useEffect(() => {
    if (orderedLists !== null && lists === null) {
      setLists(orderedLists);
    }
  }, [orderedLists, lists]);
  const moveItem = (fromIndex, toIndex) => {
    const updatedLists = [...lists];
    const movedItem = updatedLists[fromIndex];
    updatedLists.splice(fromIndex, 1);
    updatedLists.splice(toIndex, 0, movedItem);

    const updatedWithOrder = updatedLists.map((item, index) => ({
      ...item,
      order: index + 1,
    }));
    setLists(updatedWithOrder);
  };

  const handleChange = () => {
    if (window.confirm("이 순서로 저장하시겠습니까?")) {
      dispatch({
        type: CHANGE_LOGO_LISTS_REQUEST,
        data: {
          lists,
        },
      });
    }
  };
  useEffect(() => {
    if (changeLogoListsDone) {
      window.location.herf = "/adminLogoLists";
    }
  }, [changeLogoListsDone]);
  const handleDelete = (id) => {
    dispatch({
      type: DELETE_LOGO_LISTS_REQUEST,
      data: { id },
    });
  };
  useEffect(() => {
    if (deleteLogoListsDone) {
      window.location.herf = "/adminLogoLists";
    }
  }, [deleteLogoListsDone]);
  useEffect(() => {
    if (addLogoListsLoading) {
      setLoadingMsg("loading");
      setOpenLoading(true);
      setOpenForm(false);
    } else if (addLogoListsDone) {
      setLoadingMsg("done");
      setOpenLoading(true);
      const timeoutId = setTimeout(() => {
        setOpenLoading(false);
        window.location.href = "/adminLogoLists";
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [addLogoListsLoading]);
  return (
    <>
      <AdminSubHeader data={"로고 관리"} />
      {(me && me === "ganstar95") || me === "admin" ? (
        <div className="adminLogoLists">
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
              <p>No</p>
              <p>파일명</p>
              <p>로고</p>
            </div>
            {lists &&
              lists.map((list, index) => {
                return (
                  <div className="content_row row" key={index}>
                    <p>{list.order}</p>
                    <p>{list.img_src}</p>
                    <img src={`/logos/${list.img_src}`} alt="" />
                    <div className="btn_box">
                      {index === orderedLists.length - 1 ? (
                        <p></p>
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
                          handleDelete(list.id);
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
          {openForm ? (
            <AdminLogoUploadForm
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

export default AdminLogoLists;
