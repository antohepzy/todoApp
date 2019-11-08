 import React from 'react';
 import '../todo.css';

const Header = () =>{
    return(
        <div className="header">
            <img class= "note" src={require("../images/note.png")} width="60px" height="100px"></img>
            <h1>Todos</h1> 
        </div>
    )
}

export default Header;