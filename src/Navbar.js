import React, { useState } from "react";
// import './Page.css'
// import './global.css'
import Img2 from "./Image/Ideal.png";
import './Nav.css'
import { Link } from "react-router-dom";
export default function Navbar() {
    const [selectedOption] = useState("")

    return (
        <div class="header">
            <div class="div-header-content">
                <div class="link-logo-svg">
                    <img className="group" alt="logo" src={Img2} width="50" height="50" />
                    <div class="ideal-zameen">
                        <span
                        ><span class="ideal-zameen-span">Ideal</span
                        ><span class="ideal-zameen-span2"> Zameen</span></span
                        >
                    </div>

                </div>
                <div class="nav-list">
                    <div class="item-link">
                        <select value={selectedOption} className='home '>
                            <option value="">Home</option>
                            <option value="red">My Account</option>
                            <option value="blue">Blue</option>
                            <option value="green">green</option>

                        </select>
                    </div>
                    <div class="item-link-about">About</div>
                    <div class="item-link2">
                        <div class="property">Property</div>
                        <div class="pseudo2"></div>
                    </div>
                    <div class="item-link3">
                        <div class="pages">Pages</div>
                        <div class="pseudo3"></div>
                    </div>
                    <div class="item-link4">
                        <div class="blog">Blog</div>
                        <div class="pseudo4"></div>
                    </div>
                    <div ><Link to="/contact" class="item-link-contact">Contact</Link></div>
                </div>
                <div class="list">
                    <div class="item-link5">
                        <div class="i-flaticon-left-and-right-arrows">
                            <div class=""></div>
                        </div>
                        <div class="span-count">
                            <div class="_0">0</div>
                        </div>
                    </div>
                    <div class="item-link5">
                        <div class="i-flaticon-heart">
                            <div class=""></div>
                        </div>
                        <div class="span-count">
                            <div class="_0">0</div>
                        </div>
                    </div>
                    <div class="item-link6">
                        <div class="one"></div>
                    </div>
                    <div class="item-link7">
                        <div class="add-property">Add Property</div>
                        <div class="span4">
                            <div class="two"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
