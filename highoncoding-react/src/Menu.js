import React, { Component } from 'react'
import './Menu.css'



class Menu extends Component {
    render() {

        return (
            <div className = "menu">
                <h1 className = "pageName">HighOnCoding</h1> 
                <a className = "home" href="http://localhost:3000/" style={{ textDecoration: 'none' }}>Home</a>
                <a className = "categories" href="http://localhost:3000/" style={{ textDecoration: 'none' }}>Categories</a>
            </div>
        )
    }
    
}

export default Menu