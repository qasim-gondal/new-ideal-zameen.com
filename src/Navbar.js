import React from "react";
// import './Page.css'
// import './global.css'
import Img2 from "./Image/Ideal.png";
import './Nav.css'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div class="header">
            <div class="div-header-content">
                <div class="link-logo-svg">
                    <img className="group" alt="logo" src={Img2} width="50" height="50" />                    {/* <Img2 /> */}
                    {/* <div class="logo-svg">
                        <svg
                            class="group"
                            width="40"
                            height="39"
                            viewBox="0 0 40 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.5 38.5H7L6.5 23C4.33333 17.1667 4.3 6.49999 21.5 10.5C38.7 14.5 35 29.1667 31 36L30 38.5H13.5H11.5Z"
                                fill="white"
                            />
                            <path
                                d="M20.92 23.79C20.92 24.19 21.25 24.53 21.66 24.53H23.05C23.45 24.53 23.79 24.2 23.79 23.79V22.4C23.79 22 23.46 21.66 23.05 21.66H21.66C21.26 21.66 20.92 21.99 20.92 22.4V23.79Z"
                                fill="#15C39A"
                            />
                            <path
                                d="M18.39 24.51C18.79 24.51 19.13 24.18 19.13 23.77V22.38C19.13 21.98 18.8 21.64 18.39 21.64H17C16.6 21.64 16.26 21.97 16.26 22.38V23.77C16.26 24.17 16.59 24.51 17 24.51H18.39Z"
                                fill="#15C39A"
                            />
                            <path
                                d="M21.65 26.3C21.25 26.3 20.91 26.63 20.91 27.04V28.41C20.91 28.81 21.24 29.15 21.65 29.15H23.04C23.44 29.15 23.78 28.82 23.78 28.41V27.04C23.78 26.64 23.45 26.3 23.04 26.3H21.65Z"
                                fill="#15C39A"
                            />
                            <path
                                d="M19.12 27.04C19.12 26.64 18.79 26.3 18.38 26.3H17C16.6 26.3 16.26 26.63 16.26 27.04V28.41C16.26 28.81 16.59 29.15 17 29.15H18.39C18.79 29.15 19.13 28.82 19.13 28.41V27.04H19.12Z"
                                fill="#15C39A"
                            />
                            <path
                                d="M39.6684 17.6884L21.0111 0.868591C20.4515 0.377136 19.5521 0.377136 19.0025 0.868591L13.4063 5.93359V4.22854C13.4063 3.66688 12.9566 3.21554 12.397 3.21554H10.5183C9.95864 3.21554 9.50894 3.66688 9.50894 4.22854V9.42392L0.335178 17.6784C-0.224441 18.1698 -0.0645498 18.581 0.674948 18.581H2.42376C3.16326 18.581 3.78284 19.1928 3.78284 19.9451V37.1259C3.78284 37.8681 4.39242 38.49 5.14191 38.49H7.96V24.5286C7.96 17.8489 13.3463 12.4228 20.0118 12.4228C26.6573 12.4228 32.0636 17.8288 32.0636 24.5286C32.0636 31.2084 26.6773 36.6144 20.0118 36.6345C17.5335 36.6345 15.265 35.6516 15.265 35.6516L10.858 38.5H34.8717C35.6112 38.5 36.2308 37.8882 36.2308 37.136V19.935C36.2308 19.1928 36.8404 18.571 37.5899 18.571H39.3387C40.0682 18.5911 40.2181 18.1698 39.6684 17.6884Z"
                                fill="#15C39A"
                            />
                        </svg>
</div> */}
                    <div class="ideal-zameen">
                        <span
                        ><span class="ideal-zameen-span">Ideal</span
                        ><span class="ideal-zameen-span2"> Zameen</span></span
                        >
                    </div>

                </div>
                <div class="nav-list">
                    <div class="item-link">
                        <div ><Link to="/" className="home">Home</Link></div>
                        <div class="pseudo"></div>
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
