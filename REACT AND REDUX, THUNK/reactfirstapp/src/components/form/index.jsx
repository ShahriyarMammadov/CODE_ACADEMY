import React from 'react'
import './index.scss'

const RegistrationForm = () => {
    return (
        <div id='registration-form'>

            <div className="forms">
                <header>
                    <h2>GET IN TOUCH</h2>
                </header>

                <div className="inputs">
                    <div className="firstInput">
                        <div className="first">
                            <label htmlFor="name">Tell us your name*</label><br />
                            <input type="text" placeholder='Enter your name' id='name' />

                        </div>
                        <div className="second">
                            <label htmlFor="email">Tell us your email*</label><br />
                            <input type="email" placeholder='Enter your email' id='email' />

                        </div>
                    </div>

                    <div className="secondInput">
                        <div className="website">

                            <label htmlFor="website">Your Website</label>
                            <input type="text" placeholder='http://' id='website' />
                        </div>

                        <div className="text">

                            <label htmlFor="textarea">Message</label>
                            <textarea name="" id="textarea" cols="30" rows="10" placeholder='Your message here. .  . . .'></textarea>
                        </div>
                    </div>
                </div>
                <button >SUBMIT</button>

            </div>
        </div>
    )
}

export default RegistrationForm