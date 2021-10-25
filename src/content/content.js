//subiu 25/10
import React from "react";
import './content.css';
import contentList from '../index/indexList.json';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { makeStyles } from '@material-ui/styles';

import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        right: 10,
        bottom: 10,
        borderRadius: '100%',
        '&:hover': {
            background: '#ff0000',
            color: "#fff"
        }
    }
})

export default function ContentDoc() {
    const classes = useStyles();

    return (
        <div id="docContent" className="docContent">
            {contentList.map((item) => {
                return (
                    <div>
                        <div id={item.link} className='content'>
                            <h1>{item.title}</h1>
                            {item.submenus.map((value) => {
                                return (
                                    <div id={value.link} className='content'>
                                        <h2>{value.title}</h2><br />
                                        <p>{value.text}</p><br />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                )
            })}
            <div >
                <Link className={classes.root}
                    activeClass='link'
                    to='content'
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={2000}
                >
                    <IconButton>
                        <ArrowUpwardIcon />
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}