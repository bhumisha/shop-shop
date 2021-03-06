import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { useQuery } from "@apollo/react-hooks";

import { idbPromise } from "../../utils/helpers";
import { QUERY_CATEGORIES } from "../../utils/queries";
// import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CURRENT_CATEGORY, UPDATE_CATEGORIES, UPDATE_CART_QUANTITY } from "../../utils/reduxActions";

function CategoryMenu() {
  // const [state, dispatch] = useStoreContext();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { categories } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  
  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } 
    else if (!loading) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        categories: categories,
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;