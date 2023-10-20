import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./CreateDesignPage2.css";
import BasicModal from "../modal/modal";
import { Button } from "@mui/base";

const CreateDesignPage2 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <>
      <div className="schedule">
        <button onClick={handleOpen}>
          <p>Generate a Design</p>
        </button>
      </div>
      <BasicModal open={open} handleClose={handleClose}>
        <div className="main3CreateDp">
          <div className="headDp">
            <p> Create a Design</p>
            <div className="headinput">
              <p>What are you Designing for</p>
              <select id="dropdown" className="options">
                <option value="option1">option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="middleDp">
            <div className="firstMiddle">
              <div className="begin">
                <p>Post Title *</p>
                <input type="text" />
              </div>
              <div className="inputBegin2">
                <input type="text" placeholder="Description *" />
              </div>
            </div>
            <div className="secondMiddle">
              <input type="number" placeholder="Phone Number (optional)" />
              <input type="email" placeholder="Email adrress(optional)" />
            </div>
            <div className="secondMiddle">
              <label className="filebutton" htmlFor="file-upload2">
                upload
              </label>
              <input
                type="file"
                style={{
                  display: "none",
                }}
                id="file-upload2"
                accept="image/*"
              />
              <input type="text" placeholder="Websites" />
            </div>
          </div>
          <div className="bottomDp">
            <div className="secondMiddlebottom">
              <label className="filebutton" htmlFor="file-upload">
                upload
              </label>
              <input type="file" id="file-upload" accept="image/*" />

              <div className="inputbottom2">
                <button className="choose">Choose Your Main Color*</button>

                <div className="savebtn">
                  <button>Generate Design Now</button>
                  <button>Save for Later</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BasicModal>
    </>
    // </div>
  );
};

export default CreateDesignPage2;
