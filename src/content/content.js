import './content.css'
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import contentList from './content.json'

export default function ContentDoc(props) {
    const { theme } = props;

    return (
        <div id="docContent" className="docContent">
            {contentList.map((item) => {
                return (
                    <div>
                        <div id={item.link} className='content'>
                            <h1>{item.title}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit id dictum iaculis fermentum feugiat venenatis mauris,consequat tellus ut lobortis blandit himenaeos mattis nisi est magnis sapien aptent. Sollicitudin augue suspendissedapibus non aliquet sodales accumsan nulla, porttitor ultricies molestie odio faucibus eget hendrerit tellus inceptos, massa risus torquent vitae erat maximus semper. Venenatis fames mattis semper tincidunt per eros finibusnon morbi pulvinar montes volutpat. Luctus lacinia porttitor natoque semper eleifend varius est id tincidunt quam, risus lobortis sit condimentum donec justo vel aptent ultrices augue, convallis maecenas quisque nisi ligula commodo pulvinar pretium nibh. Dis aliquet venenatis sit finibus commodo scelerisque lorem senectus, aenean id consectetur ut proin porta. Dignissim nullam maximus phasellus potenti consectetur sollicitudin quam elit feugiat, montes neque dictumst enim lectus maecenas aenean tincidunt odio ipsum, tempus magna finibus interdum consequat tristique hac porttitor.</p>
                        </div>
                    </div>
                )
            })}
            <Link
                activeClass='link'
                to='content'
                spy={true}
                smooth={true}
                offset={-120}
                duration={2000}
            >
                <IconButton
                    sx={theme === "dark" ? { background: 'white', color: 'black', position: 'fixed', bottom: 10, right: 20, '&:hover': { background: 'red', color: 'white' } } : { background: 'black', color: 'white', position: 'fixed', bottom: 10, right: 20, '&:hover': { background: 'red', color: 'white' } }}>
                    <ArrowUpwardIcon />
                </IconButton>
            </Link>
        </div>
    )
}