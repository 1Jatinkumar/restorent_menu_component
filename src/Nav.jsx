import React from "react";

const Nav = ({ items, course }) => {
  // const tempCategories = items.map(item=>item.category);
  // const tempSet = new Set(tempCategories);
  // const tempItems = ['all', ...tempSet];

  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  return (
    <div className="btn-container">
      {allCategories.map((item) => {
        return (
          <button
          className="btn"
            key={item}
            onClick={() => {
              course(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Nav;
