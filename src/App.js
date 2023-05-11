import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbars';
import BookPage from './Homepage/home';
import Categories from './Homepage/categorry';

function App() {
  return (
    <main className="main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookPage />} />
        <Route exact path="/category" element={<Categories />} />
      </Routes>
    </main>
  );
}

export default App;
