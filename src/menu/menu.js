import React, { useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import { makeStyles, withStyles} from "@material-ui/styles";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper'

import menuList from "./menu.json";
import "./menu.css";

const CssTextField = withStyles({
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },
    },
  },
})(TextField);

const useStyles = makeStyles({
  margin:{
    width:'100%'
  },   
  noOptions: {
    color:'yellow'  }
});

export default function MenuDoc(props) {
  const { theme } = props;

  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState({"teste":"teste"});

  const handleClose = () => {
    setAnchorEl(null);
  };

  const defineTabTheme =
    theme === "dark"
      ? { backgroundColor: "#111", border: "1px #4f4f4f solid" }
      : { border: "1px #d0d0d0 solid" };

  const defineTabThemeMenu =
    theme === "dark"
      ? { border: "1px #4f4f4f solid", borderRadius: 1, ":hover": { background: "#212121" }}
      : {border: "1px #d0d0d0 solid", borderRadius: 1,":hover": { background: "#e0e0e0" }}

  const defineTabThemeSumary =
    theme === "dark"
      ? { ":hover": { background: "#212121" }}
      : { ":hover": { background: "#e0e0e0" }}

  const defineTabThemePlaceholder =
  theme === "dark"
      ? { color: "#fff", '& ::placeholder': { color: "#fff"}}
      : ''
  
  return (
    <div className="sideBar">
      <div className="searchContent">
        <Autocomplete
         classes={{noOption: classes.noOptions}}
          PaperComponent={({ children }) => (
            <Paper style={theme === 'dark' ? {backgroundColor: "#111", color:"#fff"} : {backgroundColor: "#fff", color:"#4f4f4f"}}>
              {children}
            </Paper>
            )}
          className={classes.margin}
          options={menuList}
          getOptionLabel={(option) => option.submenus}
          renderInput={(params) =>
            <div className={theme === "dark" ? "searchContentDark" : "searchContentLight"}>
                <CssTextField 
                {...params}
                className={classes.margin} 
                placeholder='pesquisar' 
                sx={defineTabThemePlaceholder}
                />
              <SearchIcon />
            </div>
              }
              onChange={(e, newValue)=>{
                setSearch(newValue)
              }}
              onKeyDown={(e) =>{if(e.key === 'Enter'){window.location.href='http://www.example.com'}
              }}
              value={search}
            />
      </div>
      <br />
      {menuList.map((menu) => { 
        return (
          <Accordion id="topicos" sx={defineTabTheme}>
            <AccordionSummary
              sx={defineTabThemeSumary}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className={classes.typography}
                color={theme === "dark" ? "#FFF" : ""}
              >
                <FolderOpenIcon
                  sx={{ color: menu.color }}
                />&nbsp;&nbsp;
                {menu.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className={classes.typography}
                color={theme === "dark" ? "#FFF" : ""}
              >
                {menu.submenus.map((submenu) => {
                  return (
                    <div className={classes.item}>
                      <Link
                        activeClass='link'
                        to={submenu.link}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        color={theme === "dark" ? "#FFF" : ""}
                      >
                        <MenuItem
                          onClick={handleClose}
                          sx={defineTabThemeMenu}
                        >
                          {submenu.title}
                        </MenuItem>
                      </Link>
                    </div>
                  );
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
