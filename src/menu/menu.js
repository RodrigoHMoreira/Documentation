import React, { useState, useEffect } from "react";
import menuList from "../index/indexList.json";
import "./menu.css";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DescriptionIcon from '@mui/icons-material/Description';
import { makeStyles } from '@material-ui/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles({
  root: {
    border: "0.1px solid #e0e0e0"
  },

  summary: {
    '&:hover': { background: '#e0e0e0' },
  },

  item: {
    "&:hover": { background: "#e0e0e0" },
  },
})

export default function MenuDoc() {
  const classes = useStyles();

  const arrayError = 
  [
    {
    "title": 'Sem opções',
    "link": '',
    "submenus": ['']
    }
]

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchResult, setSearchResult] = useState('');
  const [contentValue, setContentValue] = useState(menuList);
  const [contentValue2, setContentValue2] = useState(menuList);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const searchList = () => {
     if(searchResult != ""){
       const newList = contentValue2.filter(value => value.title.includes(searchResult))
       setContentValue(newList)
     }else{
       setContentValue(contentValue2)
     }
     console.log(contentValue.length)
  }

  const listSearch = () => {
      if(contentValue.length === 0){
        setContentValue(arrayError)
      }
  }

  useEffect(()=>{
    searchList()
    listSearch()
  }, [searchResult])

  return (
    <div className="sideBar">
      <div className="inputSearch">
            <TextField
              placeholder="Pesquisar"
              InputProps={{
                startAdornment: (
                  <InputAdornment >
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              value={searchResult}
              onChange={(e) => setSearchResult(e.target.value)}
              // onKeyDown={(e) => e.key === 'Enter' ? console.log('salvo') : console.log('nãoSalvo')}
            />
      </div><br />
      {contentValue.map((item) => {
        return (
          <Accordion
            id="topicos"
            className={classes.root}>
            <Link
              activeClass='link'
              to={item.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}>
              <AccordionSummary
                className={classes.summary}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>
                  <FolderOpenIcon sx={{ mr: 1 }} />
                  {item.title}
                </Typography>
              </AccordionSummary>
            </Link>
                {item.submenus.map((submenu) => {
                  return (
                    <div className={classes.item} >
                      <Link 
                        activeClass='link'
                        to={submenu.link}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                      >
                        <MenuItem
                          onClick={handleClose}>
                          <DescriptionIcon sx={{ ml: 2, mr:1}} />
                          {submenu.title}
                        </MenuItem>
                      </Link>
                    </div>
                  );
                })}
          </Accordion>
        );
      })}
    </div>
  );
}
