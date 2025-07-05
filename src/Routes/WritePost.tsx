import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { insertPost } from "../store/posts";
import { useDispatch } from "react-redux";
import { useAuthUser } from "../Contexts/authUserContext";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuthUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      id: user?.email,
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      views : 0
    };

    dispatch(insertPost(newPost));
    setTitle("");
    setBody("");
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          게시글 작성
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="내용"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            margin="normal"
            required
            multiline
            rows={6}
          />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!title || !body}
            >
              등록하기
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default WritePost;
