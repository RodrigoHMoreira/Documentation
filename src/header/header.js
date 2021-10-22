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

const [searchResult, setSearchResult] =  useState('');

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
          <Autocomplete
            id="free-solo-2-demo"
            options={contentList.map(value=>value.submenus[0])}
            autoHighlight
            getOptionLabel={(options) => options.text}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={(e)=>setSearchResult(e.target.value)}
                onKeyDown={(e)=>e.key === 'Enter' ? console.log('salvo') : console.log('nãoSalvo')}
                placeholder="Search input"
                InputProps={{
                  ...params.InputProps,
                  autoComplete: 'new-password',
                  startAdornment: (
                  <InputAdornment >
                    <SearchIcon/>
                  </InputAdornment>
                    ),
                  }}
                />    
              )}
              value={searchResult}
              noOptionsText={`Sem resultados para "${searchResult}"`}
            />
          </Stack>
        </div>
      </header>
    );
  }
