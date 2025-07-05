import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useAuthModal } from "../Contexts/authModalContext";
import { useAuthUser } from "../Contexts/authUserContext";
import { logOut } from '../apis/board';

const TopToolbar = () => {
  const { openLogin } = useAuthModal();
  const { user } = useAuthUser();
  const isLogin = user?.uid;

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
          {
            isLogin ? <Button color="inherit" onClick={logOut}>LOGOUT</Button> :   <Button color="inherit" onClick={openLogin}>Login</Button>
          }
     
      </Toolbar>
    </AppBar>
  );
};

export default TopToolbar;
