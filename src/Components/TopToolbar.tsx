import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

const TopToolbar = () => {
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
            alignItems: "center"
          }}
        >
          <Typography sx={{ fontWeight: 900 }} variant="h6" component="div">
            SIDE.
          </Typography>
        </Box>

        {/* 오른쪽: 로그인 버튼 */}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopToolbar;
