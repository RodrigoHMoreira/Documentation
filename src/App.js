import React, { useState, useEffect, Fragment } from 'react';

import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme, darkTheme } from './theme/theme';
import GlobalTheme from './theme/global'

import { makeStyles } from '@material-ui/styles';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness2Icon from '@mui/icons-material/Brightness2';

import Index from './index/index'

const useStyles = makeStyles({
  
  btnTheme: {
      float:'right',
      marginRight:25,
      textAlign:'center'
  }
})

function App() {

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
    <div className="App">
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Fragment >
            <GlobalTheme />
            <FormGroup className={classes.btnTheme} >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography><Brightness5Icon fontSize="small" /></Typography>
                    <FormControlLabel control={<Switch defaultChecked size="small" />}  onChange={toggleTheme}  label="" />
                  <Typography><Brightness2Icon fontSize="small" /></Typography>
                </Stack>
              </FormGroup>
          </Fragment>
        </ThemeProvider>
        <Index />
    </div>
  );
}

const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
`;

export default App;

