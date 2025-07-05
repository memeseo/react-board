import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { useAuthModal } from "../Contexts/authModalContext";
import { logIn } from "../apis/board";

const style = {
  position: "fixed" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  minWidth: 320,
};

const LoginModal = () => {
  const { openModal, closeModal, openSignup } = useAuthModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    logIn(email, password);
    
    setEmail("");
    setPassword("");
    closeModal();
  };

  return (
    <Modal open={openModal === "login"} onClose={closeModal}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          로그인
        </Typography>

        <TextField
          label="이메일"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="비밀번호"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
          disabled={!email || !password}
        >
          로그인
        </Button>

        <Button
          variant="text"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => {
            openSignup();
          }}
        >
          회원가입 하기
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
