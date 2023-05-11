import { Route, Routes } from 'react-router-dom';
import Navbars from './components/navbars';
import BookPages from './Homepage/home';
import Categoris from './Homepage/categorry';

function App() {
  return (
    <main className="main">
      <Navbars />
      <Routes>
        <Route exact path="/" element={<BookPages />} />
        <Route exact path="/category" element={<Categoris />} />
      </Routes>
    </main>
  );
}

export default App;
