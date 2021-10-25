import React, { useState, useEffect } from "react";
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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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

  details: {
    padding: 0,
  },

  item: {
    ":hover": { background: "#e0e0e0" },
  },
})

export default function MenuDoc() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchResult, setSearchResult] = useState('');
  const [listMap, setListMap] = useState([]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const searchList = menuList.filter(item => item.title.startsWith(searchResult))
  const searchList2 = menuList

  const handleText = () => {
    searchResult == '' ? setListMap(searchList2) : setListMap(searchList)
  }

  useEffect(() => {
    handleText()
  })

  return (
    <div className="sideBar">
      <div className="inputSearch">
        <Autocomplete
          options={searchList}
          getOptionLabel={(option) => option.title}
          autoHighlight
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Pesquisar"
              InputProps={{
                ...params.InputProps,
                autoComplete: 'new-password',
                startAdornment: (
                  <InputAdornment >
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              value={searchResult}
              onChange={(e) => setSearchResult(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' ? console.log('salvo') : console.log('nãoSalvo')}
            />
          )}
          noOptionsText={`Sem resultados para "${searchResult}"`}
        />
      </div><br />
      {listMap.map((menu) => {
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
                  <FolderOpenIcon sx={{ mr: 1 }} />
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
                          <DescriptionIcon sx={{ mr: 1 }} />
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
