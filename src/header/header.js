import React, { useState } from 'react';
import './header.css';
import contentList from '../index/indexList.json';
import logoLight from "../images/logoMybots_Light.png";

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function HeaderDoc() {

const [searchResult, setSearchResult] =  useState(0);

const list = contentList.map((option) => {return(option.submenus)})
const subList = list.map((value) => {return(value)})

  return (
    <header className="headerLight">
      <a href="https://mybots.app/" target="_blank">
        <img
          className="logo"
          src={logoLight}
          style={{ width: 220, height: 70 }}
        />
      </a>
      <div className="inputSearch">
        <Stack spacing={2}>
          {console.log(subList)}
          <Autocomplete
            disablePortal
            id="free-solo-2-demo"
            options={''}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={(e)=>setSearchResult(e.target.value)}
                placeholder="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  endAdornment: (
                  <InputAdornment sx={{mr:-3}} >
                    <SearchIcon/>
                  </InputAdornment>
                    ),
                  }}
                />    
              )}
              noOptionsText={`Sem resultados para "${searchResult}"`}
            />
          </Stack>
        </div>
      </header>
    );
  }
