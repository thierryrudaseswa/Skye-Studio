import React from "react";
import "./CreateDesignPage.css";
import { FaPlusCircle } from "react-icons/fa";
import BasicModal from "../modal/modal";

const CreateDesignPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="mainCreateDp4">
        <button onClick={handleOpen}>
          <p>Schedule a Post</p>
        </button>
      </div>
      <BasicModal open={open} handleClose={handleClose}>
        <div className="headDp">
          <p> Schedule Post</p>
        </div>
        <div className="middleDp4">
          <div className="firstMiddle">
            <div className="begin">
              <p>Post Title *</p>
              <input type="text" />
            </div>
            <div className="inputBegin2">
              <input type="text" placeholder="caption *" />
            </div>
          </div>
          <div className="secondMiddle">
            <input type="text" placeholder="Hashtag *" />
            <input type="Date" placeholder="Schedule Post Date" />
          </div>
          <div className="secondMiddle">
            <input
              type="text"
              placeholder="Upload Design Poster or paste link"
            />
            <input type="time" placeholder="Schedule Post Time" />
          </div>
        </div>
        <div className="bottomDp">
          <div className="x">
            <FaPlusCircle className="icon" />
          </div>
        </div>
        <div className="media">
          <div className="allMedia">
            <p>Post to what Media*</p>
            <button>
              Instagram <span>X</span>
            </button>
            <button>
              LinkedIn <span>X</span>
            </button>
          </div>
        </div>
        <div className="ManyButons">
          <div className="ManyButtons2">
            <button>Save</button>
            <button>Publish Now</button>
            <button>Delete</button>
          </div>
        </div>
      </BasicModal>
    </>
  );
};

export default CreateDesignPage;
