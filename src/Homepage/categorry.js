import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categoris = () => {
  const categoryEl = useSelector((state) => state.Category);
  const dispatchBooks = useDispatch();
  return (
    <div className="categoryEL">
      <button
        className="btnEL"
        type="button"
        onClick={() => {
          dispatchBooks(checkStatus());
        }}
      >
        Check status

      </button>
      <h2>{categoryEl}</h2>
    </div>
  );
};
export default Categoris;
