import React, { useState } from 'react';
import img from "../Media/logo.png"
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Category = () => {
    const data = [2, 3, 4, 5, 65, 67, 8, 89, 3, 4, 41, 152, 15, 15, 4, 8]

    const ShowCategory = () => {
        return (
            <div id="grid">
                {data.map(er => {
                    return (
                        <>
                            <Link to={'/Searchbar'} state={er} style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: 15 }}>
                                <div >
                                    <h2 style={{ padding: 20 }} >sasas</h2>
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            <ShowCategory />
            <Footer />
        </div>
    );
}

export default Category;
