import React from 'react';
import "./ChooseCategory.css";
import DataArray from '../../Data/ViewImage';
import { Carousel } from 'antd';

const ChooseCategory = () => {
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
                <p>Choose Your Designs</p>
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

export default ChooseCategory
