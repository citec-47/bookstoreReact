import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import BookList from './components/myBookList';
import Categories from './components/myCategories';
import Header from './components/myHeader';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>

  );
}

export default App;
