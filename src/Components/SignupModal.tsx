import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import { useAuthModal } from "../Contexts/authModalContext";

const style = {
  position: "fixed" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  width: 400,
};

const SignupModal = () => {
  const { openModal, closeModal } = useAuthModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSignup = async () => {
    alert("회원가입 성공");
    closeModal();
   
  };
console.log('켜지긴함 //', openModal)
  return (
    <Modal open={openModal === "signup"} onClose={closeModal}>
      <Box sx={style}>
        <Typography variant="h5" mb={2}>
          회원가입
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          select
          label="계정 유형"
          fullWidth
          value={role}
          onChange={(e) => setRole(e.target.value)}
          margin="normal"
        >
          <MenuItem value="admin">관리자</MenuItem>
          <MenuItem value="user">일반</MenuItem>
          <MenuItem value="guest">게스트</MenuItem>
        </TextField>
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSignup}>
          가입하기
        </Button>
      </Box>
    </Modal>
  );
};

export default SignupModal;
