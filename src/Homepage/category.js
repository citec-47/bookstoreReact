import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoryElement = useSelector((state) => state.Category);
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status

      </button>
      <h2>{categoryElement}</h2>
    </>
  );
};
export default Categories;
