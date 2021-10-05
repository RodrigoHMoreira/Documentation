import React from "react";

import { makeStyles } from '@material-ui/styles';
import MenuItem from '@mui/material/MenuItem';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Link from '@mui/material/Link';

const useStyles = makeStyles({

    roots:{
      marginTop: 25,
      marginLeft:25
    },

    item:{
        background: 'transparent',
        '&:hover': {
           background: "#bdbdbd",
        },
    }

})

export default function Menu(props) {
  const {one, two, three, four, five} = props
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.roots}>
      <div className={classes.item}>
        <MenuItem  onClick={handleClose}>
            <Link href={`#${one}`} underline="none" color="default">
              <FolderOpenIcon/>&nbsp;One
            </Link>
          </MenuItem>
      </div>
      <div className={classes.item}>
        <MenuItem  onClick={handleClose}>
            <Link href={`#${two}`} underline="none" color="default">
              <FolderOpenIcon/>&nbsp;Two
            </Link>
          </MenuItem>
      </div>
      <div className={classes.item}>
        <MenuItem  onClick={handleClose}>
            <Link href={`#${three}`} underline="none" color="default">
              <FolderOpenIcon/>&nbsp;Three
            </Link>
          </MenuItem>
      </div>
      <div className={classes.item}>
        <MenuItem  onClick={handleClose}>
            <Link href={`#${four}`} underline="none" color="default">
              <FolderOpenIcon/>&nbsp;Four
            </Link>
          </MenuItem>
      </div>
      <div className={classes.item}>
        <MenuItem  onClick={handleClose}>
            <Link href={`#${five}`} underline="none" color="default">
              <FolderOpenIcon/>&nbsp;Five
            </Link>
          </MenuItem>
      </div>
    </div>
  );
}