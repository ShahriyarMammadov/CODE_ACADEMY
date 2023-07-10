import React from 'react'
import './index.scss'

const index = () => {
    return (
        <div>
            <header id='header'>
                <div className="logo">
                    <h2>LOGOBAKERY</h2>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <button>Contact</button>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default index