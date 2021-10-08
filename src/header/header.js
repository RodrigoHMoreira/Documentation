import React, { useState, useEffect, Fragment }  from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../theme/theme';
import GlobalTheme from '../theme/global';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness2Icon from '@mui/icons-material/Brightness2';

import { makeStyles } from '@material-ui/styles';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import logoLight from '../images/logoMybots_Light.png';
import logoDark from '../images/logoMybots_Dark.png';

const useStyles = makeStyles({

  roots:{
    height:80,
    margin:30
},
  divider:{
    width:'100%',
    height:25,
  },
  btnTheme: {
    float:'right',
    textAlign:'center'
  }
})

export default function HeaderDoc() {

  const classes = useStyles();
 
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

    return (
      <div className={classes.roots}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Fragment >
            <GlobalTheme />
            <FormGroup className={classes.btnTheme} >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography><Brightness2Icon sx={{marginBottom:-1}} fontSize="small" /></Typography>
                    <FormControlLabel control={<Switch defaultChecked size="small" />} onChange={toggleTheme}  label="" />
                  <Typography><Brightness5Icon sx={{marginBottom:-1}} fontSize="small" /></Typography>
                </Stack>
              </FormGroup>
          </Fragment>
        </ThemeProvider>
          <Link href=''>
            <img className="logo" src={theme === "light" ? logoLight : logoDark} style={{width: 220, height: 70}} />
          </Link>
        <Divider className={classes.divider} light={true}/>
      </div>
    );
  }
  
