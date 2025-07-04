import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import Pagination from "../Components/Pagination";
import type { Column, Posts, Props } from "../types/board";
import { useNavigate } from "react-router-dom";

const columns: readonly Column[] = [
  { id: "id", label: "No", minWidth: 10 },
  { id: "title", label: "title", minWidth : 300},
  { id: "body", label: "contents", minWidth: 300 },
  {
    id: "views",
    label: "views",
    minWidth: 10,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

const Board = ({ posts }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate();

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {posts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: Posts) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      sx={{ cursor: "pointer" }}
                      onClick={() => navigate(`/posts/${row.id}`)}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={
                              column.id === "body"
                                ? {
                                    maxWidth: 200,
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                  }
                                : { width: column.minWidth }
                            }
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          page={page}
          rowsPerPage={rowsPerPage}
          totalCount={posts.length}
          onChangePage={setPage}
          onChangeRowsPerPage={(rows) => {
            setRowsPerPage(rows);
            setPage(0);
          }}
        />
      </Paper>
    </>
  );
};

export default Board;
