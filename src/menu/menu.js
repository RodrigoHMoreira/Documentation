import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/styles";
import MenuItem from "@mui/material/MenuItem";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Link from "@mui/material/Link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { TwelveMpOutlined } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    width:'100%',
    marginTop: 25,
    marginLeft: 25,
    marginRight: 0,
  },

  link: {
    margin:0,
    padding:0,
    color: "#4f4f4f",
  },

  typography: {
    color: "#4f4f4f",
  },

  summary: {
    "&:hover": {
      background: "#bdbdbd",
    },
  },
  
});

export default function MenuDoc(props) {
  const {theme} = props;

  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState('');
  const [chapterDef, setChapterDef] = useState(['']);

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
          color:"#111",
          border: "1px #4f4f4f solid",
        }
      : 
      {
        border: "1px #d0d0d0 solid", 
        borderWidth: 'thin'
      };

  const defineTabThemeMenu = 
    theme === "dark" 
    ? {
      border: "0.5px #4f4f4f solid", 
      borderRadius:1, 
      borderWidth: 'thin',
      ":hover":{background:"#212121"
      }
    } : 
      {
        border: "1px #d0d0d0 solid", 
        borderRadius:1, 
        borderWidth: 'thin',
        ":hover":{
          background:"#bdbdbd"
        }
      }

  const defineTabThemeSumary = 
     theme === "dark" 
     ? {
       ":hover":{
         background:"#424242"
        }
      } : 
        {
          ":hover":{
            background:""
          }
        }

const array = [{
  title:['Chapter 1',' Chapter 2', 'Chapter 3', 'Chapter 4'],
  chapter:[{
    chapter1:['one', 'two', 'three'],
    chapter2:['four', 'five', 'six'],
    chapter3:['seven', 'eight', 'nine'],
    chapter4:['ten', 'eleven', 'twelve']
  }],
  panel:['panel1', 'panel2', 'panel3', 'panel4']
}]

  return (
            array.map((item)=>{
              return(

            <div className={classes.root}>
              <div className="btnPesquisar">
                <TextField
                  size="small"
                  placeholder="Pesquisar..."
                  className="inputSearch"
                  sx={theme === "dark" ? {border: "0.5px #4f4f4f solid", borderRadius:1, borderWidth: 'thin'} : ''}
                  onChange={(e) => setSearch(e.target.value)}
                  >
                  <SearchIcon position="end"/>
                </TextField>
              </div>
              <br />
              
              {item.title.map((itemMap)=>{
                return(
                  <div className=''>
                <Accordion
                onChange={handleChange('panel1')}
                sx={defineTabTheme}>
                  <AccordionSummary
                    className={classes.summary}
                    sx={defineTabThemeSumary}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography 
                    className={classes.typography}
                    color={theme === "dark" ? "#FFF" : ""}
                    >
                      {itemMap}
                    </Typography>
                  </AccordionSummary>
                    <AccordionDetails>
                      <Typography 
                        className={classes.typography}
                        color={theme === "dark" ? "#FFF" : ""}
                        >
                          {item.chapter.map((valueChap)=>{return(
                            valueChap.chapter1.map((contChap)=>{return(
                            <div className={classes.item}>
                              <Link
                                href={`#${contChap}`}
                                className={classes.link}
                                underline="none"
                                color={theme === "dark" ? "#FFF" : ""}
                                >
                                <MenuItem 
                                onClick={handleClose}
                                sx={defineTabThemeMenu}>
                                {contChap}
                                </MenuItem>
                              </Link>
                            </div>
                            )})
                          )})}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )})}
          </div> 
        )})
    );
}