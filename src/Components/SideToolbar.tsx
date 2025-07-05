import { Box } from "@mui/material";
import { useAuthUser } from "../Contexts/authUserContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePostsById } from "../store/posts";
import { useDispatch } from "react-redux";
import type { SideToolbarProps } from "../types/board";


const SideToolbar = ({ postLength, selected}: SideToolbarProps) => {
  const { user } = useAuthUser();
  const isAdmin = user?.role === "admin";
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePostsById(selected));
    alert('삭제 되었습니다');
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <span
          style={{
            fontSize: "12px",
            fontFamily: '"Noto Sans KR", sans-serif',
            color: "gray",
            paddingBottom: "10px",
          }}
        >
          총 게시글 수: {postLength}개
        </span>

        {isAdmin && <DeleteIcon fontSize="small" color="error" sx={{cursor: "pointer"}} onClick={handleDelete} />}
      </Box>
    </>
  );
};

export default SideToolbar;
