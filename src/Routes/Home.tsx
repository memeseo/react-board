import { Container } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/index";
import { setPosts, setLoading } from "../store/posts";
import TopToolbar from "../Components/TopToolbar";
import Search from "../Components/Search";
import Board from "../Components/Board";
import { Button, Box } from "@mui/material";
import { useState } from "react";

export const Home = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const dispatch = useDispatch<AppDispatch>();

  const [searchQuery, setSearchQuery] = useState("");
  const filteredPosts = posts.filter(
    (post) =>
      post.title.includes(searchQuery) || post.body.includes(searchQuery)
  );

  useEffect(() => {
    dispatch(setLoading(true));
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPosts(data.posts));
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  if (loading) return <div>로딩 중...</div>;


  return (
    <>
      <TopToolbar />

      <Container maxWidth="lg" sx={{ mt: 6, px: 0 }}>
        <Search query={searchQuery} setQuery={setSearchQuery} />
        <div
          style={{
            fontSize: "12px",
            fontFamily: '"Noto Sans KR", sans-serif',
            color: "gray",
            paddingBottom: "10px",
          }}
        >
          총 게시글 수 : {filteredPosts.length}
        </div>
        <Board posts={filteredPosts} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2, mt: 2 }}>
          <Button
            color="primary"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              border: "1px solid black",
              color: "black",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "black",
              },
            }}
          >
            글쓰기
          </Button>
        </Box>
      </Container>
    </>
  );
};
