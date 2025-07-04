import { TablePagination } from "@mui/material";
import React from "react";
import type { PaginationProps } from '../types/board';

const Pagination = ({
  page,
  rowsPerPage,
  totalCount,
  onChangePage,
  onChangeRowsPerPage,
}: PaginationProps) => {

  const handleChangePage = (event: unknown, newPage: number) => {
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChangeRowsPerPage(+event.target.value);
    onChangePage(0);
  };

  return (
    <>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default Pagination;
