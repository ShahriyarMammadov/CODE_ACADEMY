import React from 'react'
import "./index.scss"

function Footer() {
    return (
        <footer>
            <div className="left">
                <ul>
                    <h3>USEFUL LINKS</h3>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>

            <div className="orta">
                <h2>NEWSLETTER</h2>

                <input type="text" placeholder='Take a took' /><br />

                <button>SUBSCRIBE NOW</button>
            </div>

            <div className="right">
                <h3>Contact</h3>
                <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nam.</em>

                <div className="icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-behance"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer