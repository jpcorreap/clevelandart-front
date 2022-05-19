import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

function PaginationActions({ count, page, rowsPerPage, onPageChange }) {
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon style={{ color: page === 0 ? "#C9af84" : "white" }} />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft
          style={{ color: page === 0 ? "#C9af84" : "white" }}
        />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight
          style={{
            color:
              page >= Math.ceil(count / rowsPerPage) - 1 ? "#C9af84" : "white",
          }}
        />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon
          style={{
            color:
              page >= Math.ceil(count / rowsPerPage) - 1 ? "#C9af84" : "white",
          }}
        />
      </IconButton>
    </Box>
  );
}

export default function Pagination({
  rowsPerPage,
  count,
  page,
  handleChangePage,
}) {
  return (
    <TablePagination
      style={{ width: "100%", color: "white" }}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      ActionsComponent={PaginationActions}
      labelRowsPerPage={false}
      rowsPerPageOptions={false}
    />
  );
}

Pagination.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};
