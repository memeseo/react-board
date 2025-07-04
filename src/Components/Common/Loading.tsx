import { Box, Typography } from "@mui/material";
import Spinner from '../../asset/Spinner.gif';

const Loading = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 500,
          mb: 2,
        }}
      >
        잠시만 기다려 주세요.
      </Typography>
      <img src={Spinner} alt="로딩중" style={{ width: "4%" }} />
    </Box>
  );
};

export default Loading;
