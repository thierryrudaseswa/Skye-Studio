import React from 'react';
import "./ImageDownLoad.css";

const ImageDownLoad = () => {
  return (
    <div className='MainImageDownLoad'>
<div className="MainImageDownLoad2">

        <div className="logos">
        <div className="logo">
          <div className="paraLogo">Logo</div>
        </div>
<div className="image"><img src="/images/arender.png" alt="" /></div>
      
        </div>
        <div className="ImageText">
          <p>Images</p>
        </div>
        <div className="images">
       <div className="oneImage"><img src="/images/shoe.png" alt="" /></div>
       <div className="oneImage"><img src="/images/shoe.png" alt="" /></div>
       <div className="oneImage"><img src="/images/shoe.png" alt="" /></div>
       <div className="oneImage"><img src="/images/shoe.png" alt="" /></div>
        </div>
        <div className="download">
          <button>Download</button>
        </div>
      </div>
    </div>
  )
}

export default ImageDownLoad;
