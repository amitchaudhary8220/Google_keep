import React from 'react';
import logo from './Images/logo.png'


const Header = () => {
    console.log("header is renderd");
    return (<>
        <div className="header">
           

            <img src={logo} alt="log" width='80' height='80'/> 
            <h1>Google Keep</h1>
        </div>
    </>);
}

export default Header;

 //if we have to use html inside jsx , we have to use{} curly braces


 //Curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value.