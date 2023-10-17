import React, { useState } from "react";
import "./Category.css";
import categories from "../../Data/Data";
import BasicModal from "../modal/modal";
import { FaChevronDown } from "react-icons/fa";
import { Hidden } from "@mui/material";

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    
    if (checked) {
      if (selectedCategories.length >= 3) {
        setErrorMessage("You can select up to three categories.");
        event.target.checked = false;
      } else {
        setSelectedCategories([...selectedCategories, value]);
        setErrorMessage("");
      }
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
      setErrorMessage("");
      
    }
  };

  return (
    <div >
      {/* <div className="iconSign">
        <FaChevronDown onClick={handleOpen}/>
        </div> */}
              <div onClick={handleOpen}>
              <FaChevronDown />
      </div>
      <BasicModal open={open} handleClose={handleClose}>
        <form className="mainCat">
      <div className="main2Cat">
        
      <div className="headCat">
        <div className="rightCat">
        <div className="choose2">Choose Your Business Category</div>
          <input type="text" placeholder="Search" />
        </div>
         
          <div className="leftCat">
            <div className="buttonCat2">
            <button>save</button>
          </div></div> 
          
        </div>
        <div className="checkboxes">
          {categories.map((category) => (
            <div className="checkBox" key={category.id}>
              <input
                type="checkbox"
                className="checkBox3"
                id={category.id}
                name="categories"
                value={category.id}
                checked={selectedCategories.includes(category.id)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={category.id}>{category.name}</label>
            </div>
          ))}
        </div>

        {errorMessage &&<>
          <p className="error-message " id="Hidden">{errorMessage}</p>
         </> 
        
        
        }
      </div>
      </form>
      </BasicModal>
    </div>
    
  );
};

export default Category;
