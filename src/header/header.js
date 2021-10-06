import React from "react";

import { makeStyles } from '@material-ui/styles';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import logo from '../images/logoMybots.png'
import './header.css'

const useStyles = makeStyles({

  roots:{
    height:80,
    margin:30
  },

  divider:{
    width:'100vw',
    height:25,
  }

})

export default function Header() {

  const classes = useStyles();

    return (
      <div className={classes.roots}>
        <Link href=''><img className="logo" src={logo} /></Link>
        <Divider className={classes.divider} />
      </div>
    );
  }
  
