import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoBagHandleOutline, IoSearch, IoPersonOutline, IoChevronDown } from "react-icons/io5";
import TextField from '@mui/material/TextField';

const List = [
    { name: "خانه", url: '/' },
    { name: "دسته بندی کالا", url: '/Category', list: true },
    { name: "تخفیف ها و پیشنهاد ها", url: '/Offer' },
    { name: "درباره ما", url: '/Aboutus' },
]
let tstList = List.reverse();

const userLogined = [{ name: "خروج از حساب کاربری", url: '/Category' },
{ name: "سفارش ها", url: '/Offer' }, { name: "لیست علاقه مندی", url: '/Aboutus' }];

let tstuserlist = userLogined.reverse();

const userNotLogined = [{ name: "ورود", url: '/Login' },
{ name: "ثبت نام", url: '/SignUp' }];

// ["", "", ""];
/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {

    const ItemDroper = (props) => {

        const LoadItem = (props) => {
            return (
                <div className='itemHeadShow' style={{ marginBottom: '10px' }}>
                    <Link className='itemHeaderLink' to={props.url}>{props.name}</Link>
                    <br />
                    <hr />

                </div>
            )
        }
        return (
            <div className="dropdown">
                <div style={{ display: 'flex' }}>
                    <b>{props.name}</b>
                    <IoChevronDown style={{ marginTop: '5px', marginLeft: '5px' }} />
                </div>
                <div className="dropdown-content">
                    <div>
                        {!props.Login ?
                            <div>
                                <h2 style={{ marginBottom: '40px' }}>{props.Username}</h2>
                                <hr />
                                {props.user.map((n) => <LoadItem url={'#'} name={n.name} />)}
                            </div>
                            :
                            <div>
                                <h3 style={{ marginBottom: '40px' }}>! شما وارد نشدید !</h3>
                                <hr />
                                {props.not.map((n) => <LoadItem url={n.url} name={n.name} />)}
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }

    const ItemNonDrop = (props) => {
        return (
            <div>
                {props.list &&
                    <div className="dropdown">
                        <div style={{ display: 'flex' }}>
                            <b>{props.name}</b>
                            <IoChevronDown style={{ marginTop: '5px', marginLeft: '5px' }} />
                        </div>
                        <div className="dropdown-content">
                            <div>
                                {props.name === "حساب من" ?
                                    <div>
                                        <h2 style={{ marginBottom: '40px' }}>{props.Username}</h2>
                                        <hr />
                                        {props.user.map((n) => <LoadItem name={n} />)}
                                    </div>
                                    : props.user.map((n) => <LoadItem name={n} />)}
                            </div>
                        </div>
                    </div>}
                <Link className='itemHeaderLink' to={props.url}>{props.name}</Link>
            </div>
        )
    }

    return (
        <div className='HeaderMain'>
            <div className='HeaderOp'>
                <div className='HeaderUp'>
                    <div style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                        <img style={{ width: '40%', verticalAlign: 'middle' }} src={require("../Media/" + 'logo.png')} alt={'ds'} />
                    </div>
                </div>
                <div className='HeaderUp' style={{ width: '500px' }}>
                    {tstList.map((n) => { return (<ItemNonDrop url={n.url} name={n.name} />) })}
                </div>
                <div className='HeaderUp' style={{ marginLeft: '10rem', width: '400px' }}>
                    <div>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/SearchBar'}> <IoSearch size={25} /></Link>
                    </div>
                    <div>
                        <Link style={{ textDecoration: 'none', color: 'white' }} className='stateUser' to={'/Profile'}>
                            <IoPersonOutline size={25} style={{ marginRight: '10px' }} />
                            <ItemDroper name={"حساب من"} Login={true} not={userNotLogined} user={tstuserlist} Username={"محراب آقایی"} />
                        </Link>
                    </div>
                    <div>
                        <Link className='stateUser' style={{ textDecoration: 'none', color: 'white' }} to={'/Profile'}>
                        <IoBagHandleOutline size={25} style={{ marginRight: '10px' }} />
                        <b>0</b>
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Header;
