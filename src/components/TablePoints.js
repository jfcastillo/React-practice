import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
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
    minWidth: 1000,
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
      id: "name",
      headerName: "Name",
      minWidth: "50%",
      headerAlign: "center",
    },
    {
      id: "points",
      headerName: "Points",
      minWidth: "50%",
      headerAlign: "center",
    },
  ];

  const rows = [
    { id: 1, name: "Jhondoe 1", points: 3000 },
    { id: 2, name: "Jhondoe 2", points: 5400 },
    { id: 3, name: "Jhondoe 3", points: 4800 },
    { id: 4, name: "Jhondoe 4", points: 1000 },
    { id: 5, name: "Jhondoe 5", points: 2200 },
    { id: 6, name: "Jhondoe 6", points: 3500 },
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
        {/* <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
                alignItems='center'
                autoHeight='true'
                /> */}

        <div className={classes.title}>
          <Typography variant="h5">Reconigtion Program</Typography>
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
