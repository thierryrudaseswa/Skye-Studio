import React from 'react';
import "./ChooseCatCss.css"
import DataArray from '../../Data/ViewImage';
// import { Carousel } from 'antd';

const ChooseCategory2 = () => {
  return (
    <div className='MainChooseCat'>

        <div className="topChooseCat">
            <div className="lefTopCat">
                <div className="lefTopCat2">
                <img src="/images/logo.png" alt="" />
                    <button>Back</button>
                </div>
            </div>
            <div className="rightTopCat">
                <div className="right2TopCat2">
<h2>For Restaurants</h2>
<h5>Filter</h5>
<div className="butonFilter2">
    <button>All</button>
    <button>Images</button>
    <button>Image Slides</button>
    <button>Videos</button>
</div>

                </div>
            </div>
        </div>

        <div className="bottomChooseCat">
            <div className="headChoose">
            <h>Recommended For You </h>
            <span>View all</span>
            </div>
            <div className="ImageChoose">
           
            <div className="ViewDesign2">
            
        {DataArray.map((item, index) => (
         
          
            <div className="OneView2" key={index}>
              <div className="ViewImage2">
                <img src={item.image} alt="" />
              </div>
              <div className="NameView2">{item.text}</div>
              <div className="ViewButton2">
                <button>View</button>
              </div>
            </div>
          
          
        ))}

      </div>
   
            </div>

        </div>
        <div className="bottomChooseCat">
            <div className="headChoose">
            <h>For Hear Saloons</h>
            <span>View all</span>
            </div>
            <div className="ImageChoose">
           
            <div className="ViewDesign2">
            
        {DataArray.map((item, index) => (
         
          
            <div className="OneView2" key={index}>
              <div className="ViewImage2">
                <img src={item.image} alt="" />
              </div>
              <div className="NameView2">{item.text}</div>
              <div className="ViewButton2">
                <button>View</button>
              </div>
            </div>
          
          
        ))}
          
      </div>
   
            </div>

        </div>
      
    </div>
  )
}

export default ChooseCategory2;
