import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Navbar';
import { Category } from './redux/categories/categories';
import style from './CategorisPage.module.css';

function CategoriesPage() {
  const dispatch = useDispatch();

  const position = useSelector((state) => state.Categories);
  return (
    <div style={{ border: 'solid 3px #e8e8e8', height: '100vh' }} className={style.container}>
      <Nav />
      <div className={style.div}>Categories</div>
      <button className={style.butt} type="button" onClick={() => dispatch(Category())}>
        Check Status
      </button>
      <p className={style.para}>{position}</p>
    </div>
  );
}

export default CategoriesPage;
