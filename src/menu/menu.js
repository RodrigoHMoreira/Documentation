import React from "react";

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

const useStyles = makeStyles({
  roots: {
    scrollBehavior: 'smooth',
    marginTop: 25,
    marginLeft: 25,
    marginRight: 5,
  },

  link: {
    
    margin:0,
    padding:0,
    color: "#4f4f4f",
  },

  item: {
    
    "&:hover": {
      background: "#e0e0e0",
    },
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
  const {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    theme,
  } = props;

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
      : {border: "1px #d0d0d0 solid", borderWidth: 'thin'};

  return (
    <div className={classes.roots}>
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
      <div className="Chapter:1">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={defineTabTheme}
          >
          <AccordionSummary
            className={classes.summary}
            sx={theme === "dark" ? {":hover":{background:"#424242"}} : {":hover":{background:""}}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography
              className={classes.typography}
              color={theme === "dark" ? "#FFF" : ""}
              >
              <FolderOpenIcon 
              sx={{ color: "red" }} 
              />
              Chapter:1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={classes.item}>
                <Link
                  href={`#${one}`}
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
                  href={`#${two}`}
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
                  href={`#${three}`}
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
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="Chapter:2">
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
                  href={`#${four}`}
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
                  href={`#${five}`}
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
                  href={`#${six}`}
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
                  href={`#${seven}`}
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
                  href={`#${eight}`}
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
                  href={`#${nine}`}
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
                  href={`#${ten}`}
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
                  href={`#${eleven}`}
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
                  href={`#${twelve}`}
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
      </div>
    </div>
  );
}