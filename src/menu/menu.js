import React from "react";

import { makeStyles } from '@material-ui/styles';
import MenuItem from '@mui/material/MenuItem';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({

    roots:{
      marginTop: 25,
      marginLeft:25,
      marginRight:5,
      border:'none'
    },

    link:{
      color:'#4f4f4f',
      '&:hover': {
        color:'#ffffff'
      }
    },

    item:{
        background: 'transparent',
        '&:hover': {
           background: '#9e9e9e'
        }
    },

    typography:{
      color:'#4f4f4f',
      
    },
    summary:{
      background: 'transparent',
      '&:hover': {
         background: '#e0e0e0'
      }
    }
})

export default function MenuDoc(props) {

  const {one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve} = props

  const classes = useStyles();
  
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

      return (
        <div className={classes.roots}>
           <div className="btnPesquisar">
            <TextField 
              size="small" 
              placeholder="Pesquisar..." 
              variant="outlined" 
              className="inputSearch" 
              onChange={(e) => setSearch(e.target.value)} 
              > 
                <SearchIcon className="IconButton" />
            </TextField>
          </div>
          <div className="Chapter:1">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  className={classes.summary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.typography}>
                      <FolderOpenIcon sx={{color:'Blue'}}/>Chapter:1
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.item}>
                          <Link href={`#${one}`} className={classes.link} underline="none" color="default">
                            <MenuItem  onClick={handleClose}> 
                              One
                            </MenuItem>
                          </Link>
                      </div>
                      <div className={classes.item}>
                        <Link href={`#${two}`} className={classes.link} underline="none" color="default">
                          <MenuItem  onClick={handleClose}>
                            Two
                          </MenuItem>
                        </Link>
                      </div>
                      <div className={classes.item}>
                        <Link href={`#${three}`} className={classes.link} underline="none" color="default">
                          <MenuItem  onClick={handleClose}>
                            Three
                          </MenuItem>
                        </Link>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="Chapter:2">
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                 className={classes.summary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.typography}>
                      <FolderOpenIcon sx={{color:'red'}}/>Chapter:2
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.item}>
                      <Link href={`#${four}`} className={classes.link} underline="none" color="default">
                        <MenuItem  onClick={handleClose}> 
                          Four
                        </MenuItem>
                      </Link>
                      </div>
                      <div className={classes.item}>
                        <Link href={`#${five}`} className={classes.link} underline="none" color="default">
                          <MenuItem  onClick={handleClose}> 
                            Five
                          </MenuItem>
                        </Link>
                      </div>
                      <div className={classes.item}>
                        <Link href={`#${six}`} className={classes.link} underline="none" color="default">
                          <MenuItem  onClick={handleClose}> 
                            Six
                          </MenuItem>
                        </Link>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="Chapter:3">
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  className={classes.summary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.typography}>
                      <FolderOpenIcon sx={{color:'Green'}}/>Chapter:3
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.item}>
                      <Link href={`#${seven}`} className={classes.link} underline="none" color="default">
                          <MenuItem  onClick={handleClose}> 
                            Seven
                          </MenuItem>
                        </Link>
                      </div>
                      <div className={classes.item}>
                      <Link href={`#${eight}`} className={classes.link} underline="none" color="default">
                          <MenuItem  onClick={handleClose}> 
                            Eight
                          </MenuItem>
                      </Link>
                      </div>
                      <div className={classes.item}>
                        <Link href={`#${nine}`} className={classes.link} underline="none" color="default">
                          <MenuItem  onClick={handleClose}> 
                            Nine
                          </MenuItem>
                        </Link>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="Chapter:4">
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  className={classes.summary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.typography}>
                      <FolderOpenIcon sx={{color:'orange'}}/>Chapter:4
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  <div className={classes.item}>
                    <Link href={`#${ten}`} className={classes.link} underline="none" color="default">
                      <MenuItem  onClick={handleClose}> 
                        Ten
                      </MenuItem>
                      </Link>
                    </div>
                    <div className={classes.item}>
                      <Link href={`#${eleven}`} className={classes.link} underline="none" color="default">
                        <MenuItem  onClick={handleClose}> 
                          Eleven
                        </MenuItem>
                      </Link>                    
                    </div>
                    <div className={classes.item}>
                      <Link href={`#${twelve}`} className={classes.link} underline="none" color="default">
                        <MenuItem  onClick={handleClose}> 
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