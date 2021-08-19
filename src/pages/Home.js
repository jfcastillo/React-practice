import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TablePoints from "../components/TablePoints";
import TableEventsHistory from "../components/TableEventsHistory";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Button, Box } from "@material-ui/core";
import { NavLink, withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: 440,
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
  },
  contentBody: {
    width: "50%",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const Home = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Points" {...a11yProps(0)} />
        <Tab label="Events History" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TablePoints />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableEventsHistory />
      </TabPanel>
    </div>
  );
};

export default withRouter(Home);
