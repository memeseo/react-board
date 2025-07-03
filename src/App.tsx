import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Routes/Home';
import BoardDetail from './Routes/BoardDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;