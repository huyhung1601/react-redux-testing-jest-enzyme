import React from 'react'
import './styles.scss'
const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap" >
                <div className="logo">
                    <h6 data-test="logoIMG">LOGO</h6>
                </div>
            </div>
        </header>
    )
}

export default Header
