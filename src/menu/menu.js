import React, { useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

import menuList from "../index/indexList.json";
import "./menu.css";


export default function MenuDoc() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div className="sideBar"> 
      {menuList.map((menu) => { 
        return (
          <Accordion id="topicos" 
            sx={{border: "1px #d0d0d0 solid"}}>
            <AccordionSummary
              sx={ {":hover": { background: "#e0e0e0" }}}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
              <Typography >
                <FolderOpenIcon
                  sx={{ color: menu.color }}
                />&nbsp;&nbsp;
                {menu.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
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
                          onClick={handleClose}
                          sx={{border: "1px #d0d0d0 solid", borderRadius: 1,":hover": { background: "#e0e0e0" }}}
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
