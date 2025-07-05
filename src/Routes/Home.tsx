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
import Loading from "../Components/Common/Loading";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../Contexts/authUserContext";
import { getPosts } from "../apis/board";

export const Home = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuthUser();
  const isAdminOrUser = ["admin", "user"].includes(user?.role);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.includes(searchQuery) || post.body.includes(searchQuery)
  );

  useEffect(() => {
    if (posts.length > 0) return;

    dispatch(setLoading(true));

    const getPostFunc = async () => {
      const data = await getPosts();
      const posts = data.posts;

      if (posts) {
        dispatch(setPosts(posts));
        dispatch(setLoading(false));
      }
    };

    getPostFunc();

  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <>
      <TopToolbar />
      <Container maxWidth="lg" sx={{ mt: 6, px: 0 }}>
        <Search query={searchQuery} setQuery={setSearchQuery} />
        <Board posts={filteredPosts} />
        {isAdminOrUser ? (
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mb: 2, mt: 2 }}
          >
            <Button
              onClick={() => navigate(`/write`)}
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
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};
