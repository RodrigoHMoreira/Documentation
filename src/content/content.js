//subiu 26/10
import React, { useEffect, useState } from "react";
import "./content.css";
import contentList from '../index/indexList.json';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { Link } from "react-scroll";

import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";

export default function ContentDoc() {

	const listVideo = [video1, video2, video3, video4];
	const videoList = listVideo.map((itemVideo) => { return (itemVideo) });
	const [newItemVideo, setNewItemVideo] = useState(videoList.filter(itemList => itemList === video1));

	const videoOptions = () => { }

	useEffect(() => {
		videoOptions()
	}, [])

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
					hashSpy
				>
					<ArrowUpwardIcon className="root" />
				</Link>
			</div>
			{contentList.map((item) => {
				return (
					<div id={item.link} className="content">
						<h1>{item.title}</h1>
						<br />
						< div className="videoContent" >
							<video className="video" controls>
								<source src={newItemVideo} type="video/mp4" />
							</video>
						</div>
						{item.submenus.map((value) => {
							return (
								<div id={value.link} className="content">
									<h2>{value.title}</h2>
									<br />
									<p>{value.text1}</p>
									<br />
									<p>{value.text2}</p>
									<br />
								</div>
							)
						})
						}
					</div>
				)
			})}
		</div >
	)
}