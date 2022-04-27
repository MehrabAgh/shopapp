import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoBagHandleOutline, IoSearch, IoPersonOutline, IoChevronDown } from "react-icons/io5";
import TextField from '@mui/material/TextField';

const List = [
    { name: "خانه", url: '/' },
    { name: "دسته بندی کالا", url: '/Category',list : true },
    { name: "تخفیف ها و پیشنهاد ها", url: '/Offer' },
    { name: "درباره ما", url: '/Aboutus' }
]
let tstList = List.reverse();

const user = ["لیست علاقه مندی", "سفارش ها", "خروج از حساب کاربری"];
/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {

    const ItemDroper = (props) => {

        const LoadItem = (props) => {
            return (
                <div className='itemHeadShow' style={{ marginBottom: '10px' }}>
                    <b>{props.name}</b>
                    <br />
                    <hr/>
                </div>
            )
        }
        return (
            <div class="dropdown">
                <div style={{ display: 'flex' }}>
                    <b>{props.name}</b>
                    <IoChevronDown style={{ marginTop: '5px', marginLeft: '5px' }} />
                </div>
                <div class="dropdown-content">
                    <div>
                        {props.name === "حساب من" ?
                            <div>
                                <h2 style={{ marginBottom: '40px' }}>{props.Username}</h2> 
                                <hr/>
                                {props.user.map((n) => <LoadItem name={n} />)}
                            </div>
                            : props.user.map((n) => <LoadItem name={n} />)}
                    </div>
                </div>
            </div>
        )
    }

    const ItemNonDrop = (props) => {
        return (
            <div>
                <Link to={'/Aboutus'}>ss</Link>
                {props.list &&
                <div class="dropdown">
                <div style={{ display: 'flex' }}>
                    <b>{props.name}</b>
                    <IoChevronDown style={{ marginTop: '5px', marginLeft: '5px' }} />
                </div>
                <div class="dropdown-content">
                    <div>
                        {props.name === "حساب من" ?
                            <div>
                                <h2 style={{ marginBottom: '40px' }}>{props.Username}</h2> 
                                <hr/>
                                {props.user.map((n) => <LoadItem name={n} />)}
                            </div>
                            : props.user.map((n) => <LoadItem name={n} />)}
                    </div>
                </div>
            </div> }
                <Link className='itemHeaderLink' to={'/'}>{props.name}</Link>
            </div>
        )
    }

    return (
        <div className='HeaderMain'>
            <div className='HeaderOp'>
                <div className='HeaderUp'>
                    <div>
                        <b>logo</b>
                    </div>
                </div>
                <div className='HeaderUp' style={{ width: '500px' }}>
                    {tstList.map((n) => { return (<ItemNonDrop name={n.name}  />) })}
                </div>
                <div className='HeaderUp' style={{ marginLeft: '10rem' , width:'400px' }}>
                    <div>                    
                        <IoSearch size={25} />                                               
                    </div>
                    <div className='stateUser'>
                        <IoPersonOutline size={25} style={{ marginRight: '10px' }} />
                        <ItemDroper name={"حساب من"} user={user} Username={"محراب آقایی"} />
                    </div>
                    <div className='stateUser'>
                        <IoBagHandleOutline size={25} style={{ marginRight: '10px' }} />
                        <b>0</b>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Header;
