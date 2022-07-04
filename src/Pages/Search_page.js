import React from 'react';


let data = [{ id: 0 }, { id: 1 }, { id: 2 }]

const SearchPage = () => {
    return (
        <div>
            <div style={{backgroundColor:'yellow' , width:'70%' , margin:30 , borderRadius:10}}>
            {data.map(e => {
                return (<div>
                    <b>{e.id}</b>
                </div>
                )
            })}
            </div>
        </div>
    );
}

export default SearchPage;
