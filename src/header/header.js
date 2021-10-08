import React, { useEffect, Fragment, useState } from "react";

import GlobalTheme from "../theme/global";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness2Icon from "@mui/icons-material/Brightness2";

import { makeStyles } from "@material-ui/styles";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

import logoLight from "../images/logoMybots_Light.png";
import logoDark from "../images/logoMybots_Dark.png";

const useStyles = makeStyles({
  roots: {
    height: 80,
    margin: 30,
  },

  btnTheme: {
    float: "right",
    textAlign: "center",
  },
  
});

export default function HeaderDoc({ theme, toggleTheme, setTheme }) {
  const classes = useStyles();

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const defineTabTheme =
  theme === "dark"
    ? 
      true
      
    : false

  return (
    <div className={classes.roots}>
      <>
        <GlobalTheme />
        <FormGroup className={classes.btnTheme}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>
              <Brightness2Icon sx={{ marginBottom: -1 }} fontSize="small" />
            </Typography>
            <FormControlLabel
              control={<Switch defaultChecked size="small" />}
              onChange={toggleTheme}
              label=""
            />
            <Typography>
              <Brightness5Icon sx={{ marginBottom: -1 }} fontSize="small" />
            </Typography>
          </Stack>
        </FormGroup>
      </>
      <Link href="">
        <img
          className="logo"
          src={theme === "light" ? logoLight : logoDark}
          style={{ width: 220, height: 70 }}
        />
      </Link>
        <hr width = '100% '/>
    </div>
  );
}
  
