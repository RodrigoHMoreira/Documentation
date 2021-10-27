import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import menuList from "../index/indexList.json";
import "./menu.css";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DescriptionIcon from '@mui/icons-material/Description';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link } from "react-scroll";
// import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

export default function MenuDoc() {

	const [anchorEl, setAnchorEl] = useState(null);
	const [searchResult, setSearchResult] = useState('');
	const [contentValue, setContentValue] = useState(menuList);
	const [contentValue2, setContentValue2] = useState(menuList);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const searchList = () => {
		if (searchResult != "") {
			const newList = contentValue2.filter(value => value.title.includes(searchResult))
			setContentValue(newList)
		} else {
			setContentValue(contentValue2)
		}
	}

	useEffect(() => {
		searchList()
	}, [searchResult])

	return (
		<div className="sideBar">
			<div className="inputSearch">
				<TextField
					placeholder="Pesquisar"
					InputProps={{
						startAdornment: (
							<InputAdornment >
								<SearchIcon />
							</InputAdornment>
						),
					}}
					value={searchResult}
					onChange={(e) => setSearchResult(e.target.value)}
				// onKeyDown={(e) => e.key === 'Enter' ? console.log('salvo') : console.log('nãoSalvo')}
				/>
			</div><br />
			{(contentValue.length === 0)
				?
				<div className="erro">
					<div >
						<p><strong>Não existe opção para "</strong>{searchResult}<strong>"</strong></p>
					</div>
				</div>
				:
				contentValue.map((item) => {
					return (
						<Accordion id="topicos">
							<div className="title">
								<Link
									activeClass='link'
									to={item.link}
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									hashSpy
								>
									<div className="sumary">
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel1a-content"
											id="panel1a-header"
										>
											<FolderOpenIcon sx={{ mr: 1 }} />
											{item.title}
										</AccordionSummary>
									</div>
								</Link>
							</div>
							{item.submenus.map((submenu) => {
								return (
									<div className="item">
										<Link
											activeClass='link'
											to={submenu.link}
											spy={true}
											smooth={true}
											offset={-100}
											duration={500}
											hashSpy
										>
											<MenuItem
												onClick={handleClose}>
												<DescriptionIcon sx={{ ml: 2, mr: 1 }} />
												{submenu.title}
											</MenuItem>
										</Link>
									</div>
								);
							})}
						</Accordion>
					);
				})}
		</div>
	);
}
