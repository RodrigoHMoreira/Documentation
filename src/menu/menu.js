import React, { useState } from "react";
import menuList from "../index/indexList.json";
import "./menu.css";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DescriptionIcon from '@mui/icons-material/Description';
import { makeStyles } from '@material-ui/styles';

import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles({
  root: {
      border:"0.1px solid #e0e0e0"
  },

  summary:{
    '&:hover': { background: '#e0e0e0'},
  },

  details:{
      padding:0,
  },

  item:{
    ":hover": { background: "#e0e0e0" },
  },
})

export default function MenuDoc() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div className="sideBar"> 
      {menuList.map((menu) => { 
        return (
          <Accordion 
          id="topicos" 
          className={classes.root}>
            <Link
              activeClass='link'
              to={menu.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}>
              <AccordionSummary
                className={classes.summary}
                aria-controls="panel1a-content"
                id="panel1a-header">
                  <Typography>
                      <FolderOpenIcon sx={{mr:1}}/>
                      {menu.title}
                  </Typography>
                </AccordionSummary>
              </Link>
              <AccordionDetails className={classes.details}>
                <Typography>
                  {menu.submenus.map((submenu) => {
                    return (
                      <div className='item'>
                        <Link
                          activeClass='link'
                          to={submenu.link}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={1000}
                          >
                          <MenuItem
                            className={classes.item} 
                            onClick={handleClose}>
                              <DescriptionIcon sx={{mr:1}}/>
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
