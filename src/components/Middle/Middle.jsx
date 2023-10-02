import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi';
import "./Middle.css";
import ChannelListData from "../../Data/ChannelList";

const Middle = () => {
  return (
    <div className="MainMiddle">
      <div className="topMiddle">
      <p>All</p>
        <div className="OutLine">
         
          <div className="inLine"></div>
        </div>
      </div>
      <div className="search">
        <div className="search2">
          <div className="icon"><FiSearch  color="#1D8CFB" />
</div>
          <div className="input2">
            <input type="text" placeholder="Search Design by Names,or Sales" className="inputText2" />
          </div>
        </div>
      </div>

      <div className="channels">
        <div className="checkbox">
          <input type="checkbox" />
        </div>
        <div className="channel">CHANNELS</div>
        <div className="posttitle">POST TITLE</div>
        <div className="status">STATUS</div>
        <div className="caption">CAPTION</div>
        <div className="hashtags">HASHTAGS</div>
        <div className="image">IMAGE</div>
      </div>

      

      <div className="channelistData"> 
      {ChannelListData.map((item, index) => (
  <div className="channelistData" key={index}>
    <div className="channelsFirst">
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <div className="channelImage">
        <img src={item.channel} alt="Channel" />
      </div>
      <div className="postText">{item.postText}</div>

      <div className="statusPosted">
        <div className="list">{item.status.text}</div>
        <div className="paraStatus">{item.status.date}</div>
      </div>

      <div className="captionText">
        <p>{item.captionText}</p>
      </div>
      <div className="hashtagsText">
  <p>
    <strong>{item.hashtags.slice(0, 2).join(', ')}</strong>
  </p>
  <p>
    <strong>{item.hashtags[2]}</strong>
  </p>
</div>

      <div className="imageView">
        <div className="viewImage">View Images</div>
      </div>
      <div className="threeIcon">
        <div className="icon-container">
          <div className="icon-column">
          <FaEllipsisV /> 
          </div>
        </div>
      </div>
    </div>
  </div>
))}
       
      </div>
    </div>
  );
};

export default Middle;
