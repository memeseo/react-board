import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import BoardDetail from "./Routes/BoardDetail";
import LoginModal from "./Components/LoginModal";
import SignupModal from "./Components/SignupModal";
import WritePost from "./Routes/WritePost";
import { AuthModalProvider } from "./Contexts/authModalContext";
import { AuthUserProvider } from "./Contexts/authUserContext";

const App = () => {
  return (
    <AuthUserProvider>
      <AuthModalProvider>
        <LoginModal />
        <SignupModal />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<BoardDetail />} />
            <Route path="/write" element={<WritePost />} />
          </Routes>
        </BrowserRouter>
      </AuthModalProvider>
    </AuthUserProvider>
  );
};

export default App;
