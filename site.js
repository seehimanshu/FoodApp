import React from 'react';
import ReactDOM from 'react-dom';

/*
*Header
*-Logo
*-Nav Items
*Body
*-search bar
*restaurants container
*-restaurants card
*footer
*-Copyright
*-links
*-contacts
*/
const Header=()=>{
    return 
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.google.com/imgres?q=food%20app%20logo&imgurl=https%3A%2F%2Fwww.logodesign.net%2Flogo%2Fsmoking-burger-with-lettuce-3624ld.png%3Fnwm%3D1%26nws%3D1%26industry%3Dfast-food%26sf%3D%26txt_keyword%3DAll&imgrefurl=https%3A%2F%2Fwww.logodesign.net%2Flogos%2Ffast-food&docid=7dHlwPJk-MkDvM&tbnid=hXdeg1sHFMWVNM&vet=12ahUKEwi_zNeN6NOFAxUVSWwGHfPQBAkQM3oECCYQAA..i&w=405&h=309&hcb=2&ved=2ahUKEwi_zNeN6NOFAxUVSWwGHfPQBAkQM3oECCYQAA"/>

            </div>
            <div className="Nav-Item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    
};


const AppLayout=()=>{
    return
        <div className="app">
            {Header}
        </div>
     
};

const root=ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);