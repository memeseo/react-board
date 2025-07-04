import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import BoardDetail from "./Routes/BoardDetail";
import LoginModal from "./Components/LoginModal";
import SignupModal from "./Components/SignupModal";
import { AuthModalProvider } from "./Contexts/authModalContext";
const App = () => {
  return (
    <AuthModalProvider>
      <LoginModal />
      <SignupModal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<BoardDetail />} />
        </Routes>
      </BrowserRouter>
    </AuthModalProvider>
  );
};

export default App;
