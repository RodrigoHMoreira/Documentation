import React, { useEffect } from "react";

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

  // item: {
  //   "&:hover": {
  //     background: "#e0e0e0",
  //   },
  // },

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

  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState("");

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
  panel:['panel1', 'panel2', 'panel3', 'panel4'],
  chapter:[{
    chapter1:['one', 'two', 'three'],
    chapter2:['four', 'five', 'six'],
    chapter3:['seven', 'eight', 'nine'],
    chapter4:['ten', 'eleven', 'twelve']
  }]
}]

const chapter =  array.map((value)=>{return(value.chapter)});
const chapter1 = chapter.map((value)=>{return(value[0].chapter1)});
const chapter2 = chapter.map((value)=>{return(value[0].chapter2)});
const chapter3 = chapter.map((value)=>{return(value[0].chapter3)});
const chapter4 = chapter.map((value)=>{return(value[0].chapter4)});
 
useEffect(() => {
  console.log(chapter1)
 },[chapter1])

  return (
            array.map((item,index)=>{
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
                  {item.chapter.map((itemChap)=>{
                      return(
                        <AccordionDetails>
                        <Typography 
                        className={classes.typography}
                        color={theme === "dark" ? "#FFF" : ""}
                        >
                          {chapter1.map((valueChap)=>{return(
                          <div className={classes.item}>
                            {valueChap.map((contChap)=>{return(                                  
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
                              )
                            })
                          }
                          </div>
                          )
                        })
                      }
                    </Typography>
                  </AccordionDetails>
                )         
              })
            }
        </Accordion>
        </div>
       )
    })
  }
      
        {/* <Accordion
          expanded={expanded === item.panel}
          onChange={handleChange(item.panel)}
          style={defineTabTheme}
          >
          <AccordionSummary
            className={classes.summary}
            sx={theme === "dark" ? {":hover":{background:"#424242"}} : {":hover":{background:""}}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.panel}bh-content`}
            id={`${item.panel}bh-header`}
            >
            <Typography
              className={classes.typography}
              color={theme === "dark" ? "#FFF" : ""}
              >
              <FolderOpenIcon 
              sx={{ color: "red" }} 
              />
              {item.title}
            </Typography>
          </AccordionSummary> */}
          {/* <AccordionDetails>
            <Typography>
              <div className={classes.item}>
                <Link
                  href={`#${props.one}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    One
                  </MenuItem>
                </Link>
              </div>
              <hr width = '100% '/>
              <div className={classes.item}>
                <Link
                  href={`#${props.two}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Two
                  </MenuItem>
                </Link>
              </div>
              <hr width = '100% '/>
              <div className={classes.item}>
                <Link
                  href={`#${props.three}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Three
                  </MenuItem>
                </Link>
              </div>
            </Typography>
          </AccordionDetails> */}
        {/* </Accordion> */}
   

      {/* <div className="Chapter:2">
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={defineTabTheme}
          >
          <AccordionSummary
            className={classes.summary}
            sx={theme === "dark" ? {":hover":{background:"#424242"}} : {":hover":{background:""}}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography
              className={classes.typography}
              color={theme === "dark" ? "#FFF" : ""}
              >
              <FolderOpenIcon sx={{ color:"green" }} />
              Chapter:2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={classes.item}>
                <Link
                  href={`#${props.four}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Four
                  </MenuItem>
                </Link>
              </div>
              <hr width = '100% '/>
              <div className={classes.item}>
                <Link
                  href={`#${props.five}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Five
                  </MenuItem>
                </Link>
              </div>
              <hr width = '100% '/>
              <div className={classes.item}>
                <Link
                  href={`#${props.six}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Six
                  </MenuItem>
                </Link>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="Chapter:3">
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={defineTabTheme}
          >
          <AccordionSummary
            className={classes.summary}
            sx={theme === "dark" ? {":hover":{background:"#424242"}} : {":hover":{background:""}}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography
              className={classes.typography}
              color={theme === "dark" ? "#FFF" : ""}
              >
              <FolderOpenIcon sx={{ color: "Blue" }} />
              Chapter:3
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={classes.item}>
                <Link
                  href={`#${props.seven}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Seven
                  </MenuItem>
                </Link>
              </div>
              <hr width = '100% '/>
              <div className={classes.item}>
                <Link
                  href={`#${props.eight}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Eight
                  </MenuItem>
                </Link>
              </div>
              <hr width = '100% '/>
              <div className={classes.item}>
                <Link
                  href={`#${props.nine}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Nine
                  </MenuItem>
                </Link>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="Chapter:4">
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          style={defineTabTheme}
          >
          <AccordionSummary
            className={classes.summary}
            sx={theme === "dark" ? {":hover":{background:"#424242"}} : {":hover":{background:""}}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography
              className={classes.typography}
              color={theme === "dark" ? "#FFF" : ""}
              >
              <FolderOpenIcon sx={{ color: "orange" }} />
              Chapter:4
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={classes.item}>
                <Link
                  href={`#${props.ten}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Ten
                  </MenuItem>
                </Link>
              </div>
              <hr width = '100% '/>
              <div className={classes.item}>
                <Link
                  href={`#${props.eleven}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                  >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Eleven
                  </MenuItem>
                </Link>
              </div>
              <hr width = '100% '/>
              <div className={classes.item}>
                <Link
                  href={`#${props.twelve}`}
                  className={classes.link}
                  underline="none"
                  color={theme === "dark" ? "#FFF" : ""}
                >
                  <MenuItem 
                  onClick={handleClose}
                  sx={theme === "dark" ? {":hover":{background:"#212121"}} : {":hover":{background:""}}}>
                    Twelve
                  </MenuItem>
                </Link>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div> */}
      </div> 
      )
    })
  );
}