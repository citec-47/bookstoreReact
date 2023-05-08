import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
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
