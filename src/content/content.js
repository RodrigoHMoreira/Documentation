//subiu 26/10
import React from "react";
import "./content.css";
import contentList from '../index/indexList.json';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { Link, animateScroll as scroll } from "react-scroll";

export default function ContentDoc() {

	return (
		<div id="docContent" className="docContent">
			 <div className="iconButtonTop">
				<Link
					activeClass='link'
					to='content'
					spy={true}
					smooth={true}
					offset={-120}
					duration={2000}
				>
					<ArrowUpwardIcon className="root"/>
				</Link>
			</div>
			{contentList.map((item) => {
				return (
						<div id={item.link} className="content">
							<h1>{item.title}</h1>
							{item.submenus.map((value) => {
									return (
										<div id={value.link} className="content">
											<h2>{value.title}</h2><br />
											<p>{value.text}</p><br />
										</div>
									 )
								})
							}
						</div>
					)
				})}
		</div>
	)
}