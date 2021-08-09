import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {Typography, Button} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
    container: {
        maxHeight: 440,
        display: "flex",
        alignItems: 'center',
    },
}));
const Home = props => {
    const classes = useStyles();
    const columns = [        
         {
            field: 'name',
            headerName: 'Name',
            width: 300,
          },
          {
            field: 'points',
            headerName: 'Points',
            width: 150,
          },
      ];
      
      const rows = [
        { id: 1, name: 'Jhondoe 1', points: 3000},
        { id: 2, name: 'Jhondoe 2', points: 5400},
        { id: 3, name: 'Jhondoe 3', points: 4800},
        { id: 4, name: 'Jhondoe 4', points: 1000},
        { id: 5, name: 'Jhondoe 5', points: 2200},
        { id: 6, name: 'Jhondoe 6', points: 3500},
      ];
    
    return(

        <div id="table-points-container" className={classes.container} style={{ height: 400, width: '50%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={6}
            checkboxSelection
            disableSelectionOnClick
            />
        </div>
    );
}

export default Home;