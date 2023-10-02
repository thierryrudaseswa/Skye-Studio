import React from 'react';
import "./Shoe.css"
import BasicModal from '../modal/modal';

const Shoe = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
<>
<div className="mainCreateDp4">
<button >
          <p>Generate a Design</p>
        </button>
      <button onClick={handleOpen}>
          <p>Schedule a Design</p>
        </button>
        
        </div>
        <BasicModal open={open} handleClose={handleClose} >
    <div class="shadow">
    <div class="portal">
         <img src="/images/shoe.png" alt="jphoto" />
         <div class="btns">
          <a href="#">Download</a>
          <a href="#">Copy Link</a>
         </div>
    </div>
</div>
</BasicModal>
</>
  )
}

export default Shoe
