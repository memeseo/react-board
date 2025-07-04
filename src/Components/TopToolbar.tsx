import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useAuthModal } from "../Contexts/authModalContext";

const TopToolbar = () => {
  const { openLogin } = useAuthModal();
  const [showSignup, setShowSignup] = useState(false);

  const handleShowSignup = () => {
    setShowSignup(true); // 버튼 누르면 SignupForm 보여줌
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        fontFamily: '"Noto Sans KR", sans-serif',
        bgcolor: "white",
        color: "black",
        borderTop: "25px solid black",
        borderBottom: "1px solid black",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            fontFamily: '"Noto Sans KR", sans-serif',
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 900 }} variant="h6" component="div">
            SIDE.
          </Typography>
        </Box>

        <Button color="inherit" onClick={openLogin}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopToolbar;
