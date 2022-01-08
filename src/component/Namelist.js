import React from 'react';

function Namelist(props) {
    const names = ["Ayush", "Test1", "Test2"]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return nameList;
}

export default Namelist;