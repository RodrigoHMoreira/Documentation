import React from "react";

import { makeStyles } from '@material-ui/styles';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import logo from '../images/logoMybots.png'

const useStyles = makeStyles({

  roots:{
    height:80,
    margin:30
},
  divider:{
    height:25,
  }
})

export default function HeaderDoc() {

  const classes = useStyles();

    return (
      <div className={classes.roots}>
        <Link href=''><img className="logo" src={logo} style={{width: 220, height: 70}} /></Link>
        <Divider className={classes.divider} />
      </div>
    );
  }
  
