import "../css/adminLogoUploadForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_LOGO_LISTS_REQUEST } from "../reducers/logoList";
import axios from "axios";

const AdminLogoUploadForm = ({ handlePopup }) => {
  const dispatch = useDispatch();
  const { addLogoListsDone, logoLists } = useSelector(
    (state) => state.logoList
  );
  const [logoImages, setLogoImages] = useState([""]);
  const addInput = () => {
    setLogoImages([...logoImages, ""]);
    console.log("add 속 logoImages : ", logoImages);
  };

  const removeInput = (index) => {
    const newImages = [...logoImages];
    newImages.splice(index, 1);
    setLogoImages(newImages);
  };

  const handleFileChange = (e, index) => {
    const newImages = [...logoImages];
    newImages[index] = e.target.files[0];
    setLogoImages(newImages);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const imageSrcs = logoImages
      .filter((logoImage) => logoImage)
      .map((logoImage) => logoImage.name);

    for (let i = 0; i < logoImages.length; i++) {
      if (!logoImages[i]) {
        alert(`${i + 1}번째 썸네일 이미지가 등록되지 않았습니다.`);
        return;
      }
    }

    const duplicatedFileNames = [];
    imageSrcs.forEach((src) => {
      if (logoLists.some((logo) => logo.img_src === src)) {
        duplicatedFileNames.push(src);
      }
    });

    if (duplicatedFileNames.length > 0) {
      alert(`${duplicatedFileNames.join(", ")}는 이미 등록된 파일명입니다.`);
      return;
    }

    dispatch({
      type: ADD_LOGO_LISTS_REQUEST,
      data: { imageSrcs },
    });
    console.log("imageSrcs : ", imageSrcs);
    try {
      for (let i = 0; i < logoImages.length; i++) {
        const formData = new FormData();
        formData.append(
          "file",
          logoImages[i],
          encodeURIComponent(logoImages[i].name)
        );

        const response = await axios.post("/logo/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };
  useEffect(() => {
    if (addLogoListsDone) {
      window.location.reload();
    }
  }, [addLogoListsDone]);
  return (
    <div className="adminLogoUploadForm">
      <img src="/images/delete_btn.png" alt="" onClick={handlePopup} />
      <div className="form_container">
        {logoImages.map((logoImage, index) => (
          <div className="input_container" key={index}>
            <div className="label_container">
              <label htmlFor={`file-${index}`}>
                <div className="upload_btn">
                  <p>로고이미지 등록</p>
                </div>
              </label>
              <input
                id={`file-${index}`}
                type="file"
                onChange={(e) => handleFileChange(e, index)}
              />
              <p>
                {logoImage ? logoImage.name : "로고 이미지 파일을 선택하세요."}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="btn_box">
        <div
          className="list_btn"
          onClick={() => removeInput(logoImages.length - 1)}
        >
          삭제
        </div>
        <div className="list_btn" onClick={addInput}>
          추가
        </div>
      </div>

      <div className="submit_btn" onClick={sendData}>
        업로드
      </div>
    </div>
  );
};

export default AdminLogoUploadForm;
