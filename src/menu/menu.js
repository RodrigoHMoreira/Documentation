import React, { useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import { makeStyles } from "@material-ui/styles";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

import menuList from "./menu.json";
import "./menu.css";

const useStyles = makeStyles({
  // root: {
  //   height: "100%",
  //   width: "85%",
  //   position: "absolute",
  //   top: 25,
  //   left: 25,
  //   right: 0,
  // },

  typography: {
    color: "#4f4f4f",
  },

});

export default function MenuDoc(props) {
  const { theme } = props;

  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const defineTabTheme =
    theme === "dark"
      ? {
        backgroundColor: "#111",
        color: "#111",
        border: "1px #4f4f4f solid",
      }
      : {
        border: "1px #d0d0d0 solid",
      };

  const defineTabThemeMenu =
    theme === "dark"
      ? {
        border: "1px #4f4f4f solid",
        borderRadius: 1,
        ":hover": { background: "#212121" },
      }
      : {
        border: "1px #d0d0d0 solid",
        borderRadius: 1,
        ":hover": { background: "#bdbdbd" },
      };

  const defineTabThemeSumary =
    theme === "dark"
      ? {
        ":hover": { background: "#212121" },
      }
      : {
        ":hover": { background: "#bdbdbd" }
      }

  return (
    <div className="sideBar">
      <div
        className="searchContent"
        onClick={(e) => setSearch(e.target.value)}
        color="inherit"
        sx={
          theme === "dark"
            ? { border: "1px #4f4f4f solid" }
            : { border: "1px #d0d0d0 solid" }
        }
      >
        <div className={theme === "dark" ? "searchContentDark" : "searchContentLight"}>
          <input
            type="text"
            placeholder="Pesquisar"
            className={theme === "dark" ? "dark" : "light"}
            style={{ padding: 10 }}
          />
          <SearchIcon color={theme === "dark" ? "#4f4f4f" : "#d0d0d0"} />
        </div>
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
                        offset={-130}
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