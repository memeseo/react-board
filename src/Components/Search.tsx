import { Box, TextField } from "@mui/material";
import type { SearchProps } from '../types/board';

const Search = ({ query, setQuery }: SearchProps) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <TextField
          value={query}
          onChange={e => setQuery(e.target.value)}

          label="검색어를 입력하세요."
          variant="outlined"
          size="small"
          sx={{
            width: 200,
            "& .MuiInputBase-root": {
              height: 32, 
            },
            "& .MuiInputBase-input": {
              padding: "6px 8px", 
              fontSize: "0.75rem", 
            },
            "& .MuiInputLabel-root": {
              fontSize: "0.75rem",
              top: -1,
            },
          }}
        />
      </Box>
    </>
  );
};

export default Search;
