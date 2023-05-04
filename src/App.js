// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import './components/style/Style.css';
import AllCategories from './components/Categories/Categories';
import MyTodoList from './components/Todo/Todo';
import MyLink from './components/AllLinks/Links';

const TodoApp = () => (
  <>
    <MyLink />
    <Routes>
      <Route path="/" element={<MyTodoList />} />
      <Route path="/category" element={<AllCategories />} />
    </Routes>
  </>
);
export default TodoApp;
