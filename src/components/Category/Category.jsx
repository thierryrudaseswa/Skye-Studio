import React, { useState } from "react";
import "./Category.css";
import categories from "../../Data/Data";

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState(true);

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
    <div className="main">
      <div className="main2">
        <div className="head">
          <div className="choose">Choose Your Business Category</div>
          <div className="button">
            <button>save</button>
          </div>
        </div>

        <div className="checkboxes">
          {categories.map((category) => (
            <div className="checkBox" key={category.id}>
              <input
                type="checkbox"
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

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Category;
