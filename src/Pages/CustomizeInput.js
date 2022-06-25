import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme, TextField } from '@mui/material';
import { useRef, useState } from 'react';


// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });  
  const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
  
  export default function EdInputRtl(props) {   
    const valueRef = useRef('') 
    const xx = () =>{
        props.value = "xx";
    }
    return (
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div dir="rtl">
            <TextField label={props.labal} inputRef={valueRef} variant="standard" onChange={()=>{console.log(valueRef.current.value)}   } />         
            {xx}
          </div>
        </ThemeProvider>
      </CacheProvider>
    );
  }