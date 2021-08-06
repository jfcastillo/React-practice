import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import EndavaLogo from '../assets/img/endava-white.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 80,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background: '#e0441c',
  },
  title: {
    flexDirection: 'row',
    alignSelf: 'center',
    
  },
  titleMenu: {    
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonTop:{
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    color: 'white',    
    alignSelf: 'center',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  points: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: theme.spacing(6),
  },
}));

const TopBar = props =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
            <div className={classes.title}>
              <img
                //className={classes.image}
                //height="150"
                alt="SickImg"
                src={EndavaLogo}
              />
              
               
            </div>
            <div className={classes.title}>
                <Typography variant="h5" >
                  Reconigtion Program
                </Typography>
              </div>
                    
              <div className={classes.titleMenu}>
                <Button className={classes.buttonTop}>Points</Button>  
                <Button className={classes.buttonTop}>Shop</Button>  
                <Button className={classes.buttonTop}>Events</Button>  
                <Button className={classes.buttonTop}>Add points</Button> 
              </div> 
              <div className={classes.points}>
                <Typography variant="h6" color="red">Your points 600</Typography>
              </div>
              <div className={classes.profile}>
                <Avatar>J</Avatar>
                <Typography variant="h6">juan.castillorincon</Typography>
              </div>
              
              
            </Toolbar>
        </AppBar>
      </div>
    );


};
export default TopBar;