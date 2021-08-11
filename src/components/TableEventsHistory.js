import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  contentBody: {
    width: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
}));
const TablePoints = (props) => {
  const classes = useStyles();
  const columns = [
    {
      id: "id",
      headerName: "#",
      minWidth: 100,
      headerAlign: "center",
    },
    {
      id: "event",
      headerName: "Event",
      minWidth: 500,
      headerAlign: "center",
    },
    {
      id: "date",
      headerName: "Date",
      minWidth: "30%",
      headerAlign: "center",
    },
    {
      id: "points",
      headerName: "Points",
      minWidth: "30%",
      headerAlign: "center",
    },
  ];

  const rows = [
    {
      id: 1,
      event: "GoTrainingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      date: "07/25/2021 4:00pm",
      points: 10,
    },
    { id: 2, event: "AllHands", date: "07/25/2021 3:00pm", points: 8 },
    { id: 3, event: "PassItOn", date: "07/25/2021 11:00pm", points: 10 },
    { id: 4, event: "PassItOn", date: "07/25/2021 9:00pm", points: 8 },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div id="table-points-container" className={classes.container}>
      <div className={classes.contentBody}>
        <div className={classes.title}>
          <Typography variant="h5">Endava Events History</Typography>
        </div>

        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default TablePoints;
