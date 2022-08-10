
import { FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Slider, Switch, TextField } from '@mui/material';
import React from 'react';
import {useLocation} from 'react-router-dom';

import { IoSearch } from 'react-icons/io5';
import Cards from './Cards';
import EdInputRtl from './CustomizeInput';
import Footer from './Footer';


let data = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }]

const SearchPage = () => {
    
    const location = useLocation()
    const Name = location.state
    {console.log(Name)}

    return (
        <div style={{marginTop:50}}>
            <TextField
             inputProps={{ style: { fontFamily: 'Arial', color: 'white' , borderColor:'white'}}}
                id="search-bar"
                sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" , borderRadius:10},
                    },
                  }}
                className="text"
                onInput={(e) => {
                 //   setSearchQuery(e.target.value);
                }}               
                variant="outlined"
                placeholder="جستجو ..."
                size="small"
            />
            <IconButton type="submit" aria-label="search">
                <IoSearch  style={{ fill: "white" }} />
            </IconButton>
            <div style={{ display: 'flex' }}>

                <div style={{ width: '70%', margin: 30, borderRadius: 10, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {data.map(e => {
                        return (<Cards Name={"s"} img={'fifa-18-800x450.jpg'} rates={100} price={'50000'} />)
                    })}
                </div>

                <div style={{ borderStyle: 'groove', width: '20%', position: 'sticky', height: '600px', top: 0, marginTop: '2%', borderRadius: 14 , backgroundColor:'#363c48',boxShadow:'-1px 7px 20px 5px rgba(0,0,0,0.58)'}}>
                    <h2>فیلتر ها</h2>
                    <div style={{ margin: 'auto' }}>
                        <FormLabel style={{ color: 'white' }} id="demo-radio-buttons-group-label">مرتب سازی</FormLabel>
                        <RadioGroup
                            style={{ marginRight: 50, marginTop: 20, marginBottom: 10 }}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="newer"
                            name="radio-buttons-group">
                            <FormControlLabel value="newer" labelPlacement="start" control={<Radio />} label="جدید ترین ها" />
                            <FormControlLabel value="orderer" labelPlacement="start" control={<Radio />} label="پرفروش ترین ها" />
                            <FormControlLabel value="seener" labelPlacement="start" control={<Radio />} label="پربازدید ترین ها" />
                            <FormControlLabel value="cheaper" labelPlacement="start" control={<Radio />} label="ارزان ترین ها" />
                            <FormControlLabel value="costlyer" labelPlacement="start" control={<Radio />} label="گران ترین ها" />
                        </RadioGroup>
                    </div>
                    <div>
                        <FormControlLabel control={<Switch />} label="فقط کالاهای موجود " />
                    </div>
                    <div>
                        <h4>محدوده قیمت</h4>
                        <b>از</b>
                        <EdInputRtl color={'white'} />  
                  <br/>
                        <b>تا</b>
                        <EdInputRtl color={'white'} />                     
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SearchPage;
