import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../store/index";
import { useParams, useNavigate } from "react-router-dom";

const BoardDetail = () => {
  const navigate = useNavigate();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const { id } = useParams(); // URL에서 :id 값을 가져옴

  const post = posts.find((s) => s.id === Number(id));

  console.log("디테일 : ", post);

  return (
    <>
      <Box
        maxWidth="lg"
        sx={{
          mt: 6,
          p: 4,
          mx: "auto",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            minHeight: "600px", // 원하는 기본 높이
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" gutterBottom>
            {post?.title}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" color="text.secondary">
              좋아요: {post?.reactions.likes}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              싫어요: {post?.reactions.dislikes}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              views: {post?.views}
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
            {post?.body}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: "auto", pt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(-1)}
            >
              목록으로
            </Button>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default BoardDetail;
