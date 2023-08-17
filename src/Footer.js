import React from 'react'
import "./Footer.css"
import "./Page.css"
import "./global.css"
import Img2 from "./Image/Ideal.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
    return (
        // <div class="footer">
        //     <div class="div-row">
        //         <div class="div-col-lg-3">
        //             <div class="div-homlisti-about-2">
        //                 <div class="link-logo-svg">
        //                     <div class="logo-svg">
        //                         <svg
        //                             class="group"
        //                             width="148"
        //                             height="40"
        //                             viewBox="0 0 148 40"
        //                             fill="none"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                         >
        //                             <path
        //                                 d="M11.4999 38.53H6.99994L6.49994 23.03C4.33327 17.1967 4.29994 6.53002 21.4999 10.53C38.6999 14.53 34.9999 29.1967 30.9999 36.03L29.9999 38.53H13.4999H11.4999Z"
        //                                 fill="white"
        //                             />
        //                             <path
        //                                 d="M20.9199 23.82C20.9199 24.22 21.2499 24.56 21.6599 24.56H23.0499C23.4499 24.56 23.7899 24.23 23.7899 23.82V22.43C23.7899 22.03 23.4599 21.69 23.0499 21.69H21.6599C21.2599 21.69 20.9199 22.02 20.9199 22.43V23.82Z"
        //                                 fill="#15C39A"
        //                             />
        //                             <path
        //                                 d="M18.39 24.54C18.79 24.54 19.13 24.21 19.13 23.8V22.41C19.13 22.01 18.8 21.67 18.39 21.67H17C16.6 21.67 16.26 22 16.26 22.41V23.8C16.26 24.2 16.59 24.54 17 24.54H18.39Z"
        //                                 fill="#15C39A"
        //                             />
        //                             <path
        //                                 d="M21.6499 26.33C21.2499 26.33 20.9099 26.66 20.9099 27.07V28.44C20.9099 28.84 21.2399 29.18 21.6499 29.18H23.0399C23.4399 29.18 23.7799 28.85 23.7799 28.44V27.07C23.7799 26.67 23.4499 26.33 23.0399 26.33H21.6499Z"
        //                                 fill="#15C39A"
        //                             />
        //                             <path
        //                                 d="M19.12 27.07C19.12 26.67 18.79 26.33 18.38 26.33H17C16.6 26.33 16.26 26.66 16.26 27.07V28.44C16.26 28.84 16.59 29.18 17 29.18H18.39C18.79 29.18 19.13 28.85 19.13 28.44V27.07H19.12Z"
        //                                 fill="#15C39A"
        //                             />
        //                             <path
        //                                 d="M39.6684 17.7184L21.0111 0.898621C20.4515 0.407166 19.5521 0.407166 19.0025 0.898621L13.4063 5.96362V4.25857C13.4063 3.69691 12.9566 3.24557 12.397 3.24557H10.5183C9.95864 3.24557 9.50894 3.69691 9.50894 4.25857V9.45395L0.335178 17.7084C-0.224441 18.1998 -0.0645498 18.611 0.674948 18.611H2.42376C3.16326 18.611 3.78284 19.2228 3.78284 19.9751V37.1559C3.78284 37.8981 4.39242 38.52 5.14191 38.52H7.96V24.5586C7.96 17.8789 13.3463 12.4528 20.0118 12.4528C26.6573 12.4528 32.0636 17.8588 32.0636 24.5586C32.0636 31.2384 26.6773 36.6444 20.0118 36.6645C17.5335 36.6645 15.265 35.6816 15.265 35.6816L10.858 38.53H34.8717C35.6112 38.53 36.2308 37.9182 36.2308 37.166V19.965C36.2308 19.2228 36.8404 18.601 37.5899 18.601H39.3387C40.0682 18.6211 40.2181 18.1998 39.6684 17.7184Z"
        //                                 fill="#15C39A"
        //                             />
        //                             <path
        //                                 d="M47.23 15.52H60.59V12.17H47.23V15.52ZM58.23 5.33V23.53H61.95V5.33H58.23ZM46.01 5.33V23.53H49.73V5.33H46.01ZM66.04 17.55C66.04 18.78 66.33 19.87 66.9 20.83C67.49 21.77 68.28 22.49 69.27 23.01C70.28 23.53 71.41 23.79 72.68 23.79C73.95 23.79 75.07 23.53 76.06 23.01C77.07 22.49 77.85 21.76 78.43 20.83C79.02 19.88 79.31 18.78 79.31 17.55C79.31 16.3 79.02 15.21 78.43 14.27C77.86 13.33 77.07 12.61 76.06 12.09C75.07 11.57 73.95 11.31 72.68 11.31C71.41 11.31 70.28 11.57 69.27 12.09C68.28 12.61 67.49 13.34 66.9 14.27C66.33 15.21 66.04 16.3 66.04 17.55ZM69.48 17.55C69.48 16.87 69.62 16.28 69.9 15.76C70.19 15.24 70.58 14.84 71.07 14.56C71.56 14.28 72.09 14.14 72.68 14.14C73.27 14.14 73.81 14.28 74.29 14.56C74.78 14.84 75.16 15.24 75.43 15.76C75.72 16.28 75.87 16.88 75.87 17.55C75.87 18.23 75.72 18.82 75.43 19.34C75.15 19.84 74.77 20.24 74.29 20.54C73.8 20.82 73.27 20.96 72.68 20.96C72.09 20.96 71.55 20.82 71.07 20.54C70.58 20.25 70.19 19.85 69.9 19.34C69.62 18.82 69.48 18.23 69.48 17.55ZM100.81 15.89C100.81 14.92 100.67 14.1 100.39 13.42C100.13 12.73 99.72 12.21 99.17 11.86C98.61 11.5 97.9 11.31 97.01 11.31C96.2 11.31 95.47 11.48 94.83 11.83C94.21 12.18 93.68 12.69 93.24 13.36C92.98 12.68 92.56 12.17 91.99 11.83C91.42 11.48 90.69 11.31 89.81 11.31C89.01 11.31 88.33 11.48 87.76 11.83C87.19 12.18 86.73 12.68 86.38 13.34V11.57H83.13V23.53H86.38V16.25C86.38 15.73 86.47 15.29 86.64 14.92C86.81 14.54 87.06 14.26 87.37 14.09C87.68 13.9 88.05 13.8 88.46 13.8C89.08 13.8 89.53 14.01 89.81 14.42C90.09 14.82 90.23 15.43 90.23 16.24V23.53H93.58V16.25C93.58 15.73 93.67 15.29 93.84 14.92C94.01 14.54 94.26 14.26 94.57 14.09C94.88 13.9 95.25 13.8 95.66 13.8C96.28 13.8 96.73 14.01 97.01 14.42C97.29 14.82 97.43 15.43 97.43 16.24V23.53H100.81V15.89ZM105.43 3.25V23.53H108.81V3.25H105.43ZM113.28 6.94C113.28 7.48 113.48 7.93 113.88 8.29C114.28 8.65 114.76 8.84 115.31 8.84C115.86 8.84 116.33 8.66 116.71 8.29C117.11 7.93 117.31 7.48 117.31 6.94C117.31 6.39 117.11 5.93 116.71 5.59C116.33 5.23 115.86 5.04 115.31 5.04C114.76 5.04 114.28 5.22 113.88 5.59C113.48 5.94 113.28 6.39 113.28 6.94ZM113.64 11.57V23.53H116.92V11.57H113.64ZM122.39 19.4L120.75 21.51C121.2 21.94 121.7 22.35 122.26 22.73C122.83 23.09 123.46 23.39 124.16 23.61C124.87 23.84 125.65 23.95 126.5 23.95C127.87 23.95 128.94 23.62 129.72 22.96C130.5 22.28 130.89 21.35 130.89 20.15C130.89 19.42 130.73 18.83 130.4 18.38C130.07 17.93 129.63 17.56 129.07 17.26C128.53 16.95 127.94 16.67 127.3 16.43C126.78 16.2 126.31 16.01 125.9 15.86C125.5 15.7 125.19 15.53 124.96 15.34C124.75 15.13 124.65 14.9 124.65 14.64C124.65 14.35 124.75 14.13 124.96 13.99C125.18 13.83 125.49 13.76 125.87 13.76C126.44 13.76 127.02 13.91 127.61 14.2C128.22 14.49 128.74 14.88 129.17 15.34L130.65 13.26C130.27 12.88 129.83 12.55 129.32 12.27C128.82 11.98 128.27 11.74 127.68 11.57C127.09 11.4 126.46 11.31 125.78 11.31C124.98 11.31 124.25 11.44 123.6 11.7C122.96 11.94 122.45 12.32 122.07 12.82C121.69 13.31 121.5 13.9 121.5 14.61C121.5 15.36 121.66 15.97 121.99 16.46C122.34 16.93 122.77 17.31 123.29 17.6C123.81 17.88 124.35 18.12 124.9 18.33C125.49 18.52 125.97 18.7 126.36 18.88C126.74 19.05 127.03 19.25 127.22 19.48C127.43 19.69 127.53 19.95 127.53 20.26C127.53 20.61 127.41 20.88 127.17 21.09C126.93 21.28 126.58 21.38 126.13 21.38C125.78 21.38 125.41 21.31 125.01 21.17C124.63 21.03 124.22 20.82 123.79 20.55C123.36 20.25 122.89 19.86 122.39 19.4ZM132.98 11.57V14.4H140.36V11.57H132.98ZM135.04 7.41V23.53H138.29V7.41H135.04ZM143.3 6.94C143.3 7.48 143.5 7.93 143.9 8.29C144.3 8.65 144.78 8.84 145.33 8.84C145.88 8.84 146.35 8.66 146.73 8.29C147.13 7.93 147.33 7.48 147.33 6.94C147.33 6.39 147.13 5.93 146.73 5.59C146.35 5.23 145.88 5.04 145.33 5.04C144.77 5.04 144.3 5.22 143.9 5.59C143.5 5.94 143.3 6.39 143.3 6.94ZM143.67 11.57V23.53H146.95V11.57H143.67Z"
        //                                 fill="#006F54"
        //                             />
        //                             <path
        //                                 d="M48.1901 36.53H50.0401L50.8201 33.34C50.9701 32.7 51.1001 32.05 51.2301 31.32H51.2901C51.4401 32.05 51.5601 32.68 51.7101 33.32L52.5001 36.53H54.4201L56.1701 29.66H54.6601L53.8301 33.23C53.7001 33.89 53.5901 34.53 53.4701 35.2H53.4101C53.2601 34.53 53.1201 33.88 52.9501 33.23L52.0401 29.66H50.5701L49.6701 33.23C49.5001 33.87 49.3601 34.53 49.2401 35.2H49.1801C49.0501 34.53 48.9601 33.88 48.8201 33.23L47.9901 29.66H46.3701L48.1901 36.53ZM60.7701 35.94C61.3301 36.42 61.9301 36.7 62.5301 36.7C64.0601 36.7 65.4701 35.34 65.4701 32.99C65.4701 30.86 64.4801 29.49 62.7701 29.49C62.0101 29.49 61.2701 29.9 60.7001 30.39H60.6401L60.5301 29.66H59.2001V39.25H60.8101V37.09L60.7701 35.94ZM60.8201 34.79V31.58C61.3501 31.06 61.8301 30.81 62.3301 30.81C63.3701 30.81 63.8101 31.62 63.8101 32.99C63.8101 34.54 63.1101 35.36 62.2001 35.36C61.8001 35.37 61.3201 35.21 60.8201 34.79ZM73.3401 36.53H74.9501V32.33C75.3701 31.29 76.0301 30.92 76.5701 30.92C76.8601 30.92 77.0501 30.96 77.2801 31.03L77.5601 29.63C77.3501 29.53 77.1301 29.49 76.7801 29.49C76.0501 29.49 75.3201 29.98 74.8301 30.88H74.7701L74.6601 29.66H73.3301V36.53H73.3401ZM79.6601 33.1C79.6601 35.37 81.1401 36.7 83.0501 36.7C83.9201 36.7 84.7401 36.39 85.4001 35.96L84.8501 34.95C84.3501 35.27 83.8401 35.45 83.2501 35.45C82.1401 35.45 81.3601 34.75 81.2201 33.5H85.5901C85.6301 33.33 85.6601 33.05 85.6601 32.74C85.6601 30.82 84.6801 29.48 82.8201 29.48C81.2101 29.49 79.6601 30.86 79.6601 33.1ZM81.2101 32.48C81.3501 31.33 82.0501 30.73 82.8601 30.73C83.8001 30.73 84.2601 31.39 84.2601 32.48H81.2101ZM88.4201 34.68C88.4201 35.88 89.2601 36.7 90.4601 36.7C91.2701 36.7 91.9701 36.29 92.5901 35.78H92.6301L92.7601 36.53H94.0801V32.46C94.0801 30.54 93.2401 29.49 91.5201 29.49C90.4301 29.49 89.4601 29.91 88.7101 30.39L89.3001 31.47C89.9001 31.11 90.5501 30.8 91.2301 30.8C92.1501 30.8 92.4601 31.42 92.4801 32.14C89.6501 32.44 88.4201 33.21 88.4201 34.68ZM89.9901 34.56C89.9901 33.87 90.6101 33.38 92.4701 33.15V34.69C91.9701 35.17 91.5301 35.45 90.9701 35.45C90.4001 35.44 89.9901 35.17 89.9901 34.56ZM97.7201 34.77C97.7201 35.96 98.1401 36.7 99.2901 36.7C99.6701 36.7 99.9501 36.64 100.14 36.56L99.9301 35.36C99.8001 35.39 99.7501 35.39 99.6801 35.39C99.5101 35.39 99.3301 35.25 99.3301 34.86V26.66H97.7201V34.77ZM102.76 33.1C102.76 35.37 104.24 36.7 106.15 36.7C107.02 36.7 107.84 36.39 108.5 35.96L107.95 34.95C107.45 35.27 106.94 35.45 106.35 35.45C105.24 35.45 104.46 34.75 104.32 33.5H108.69C108.73 33.33 108.76 33.05 108.76 32.74C108.76 30.82 107.78 29.48 105.92 29.48C104.31 29.49 102.76 30.86 102.76 33.1ZM104.31 32.48C104.45 31.33 105.15 30.73 105.96 30.73C106.9 30.73 107.36 31.39 107.36 32.48H104.31ZM111.3 35.75C111.97 36.3 112.97 36.7 113.9 36.7C115.64 36.7 116.57 35.75 116.57 34.57C116.57 33.28 115.53 32.83 114.6 32.48C113.86 32.21 113.17 32 113.17 31.46C113.17 31.03 113.49 30.7 114.18 30.7C114.73 30.7 115.22 30.94 115.69 31.29L116.43 30.31C115.87 29.88 115.1 29.48 114.15 29.48C112.61 29.48 111.64 30.33 111.64 31.54C111.64 32.69 112.66 33.21 113.57 33.54C114.3 33.82 115.04 34.07 115.04 34.65C115.04 35.13 114.69 35.48 113.95 35.48C113.25 35.48 112.66 35.19 112.05 34.71L111.3 35.75ZM119.93 34.21C119.93 35.69 120.52 36.7 122.11 36.7C122.66 36.7 123.13 36.57 123.51 36.45L123.23 35.26C123.03 35.34 122.75 35.41 122.52 35.41C121.86 35.41 121.55 35.02 121.55 34.21V30.93H123.3V29.66H121.55V27.78H120.21L120.01 29.66L118.95 29.73V30.93H119.93V34.21ZM125.93 34.68C125.93 35.88 126.77 36.7 127.97 36.7C128.78 36.7 129.48 36.29 130.1 35.78H130.14L130.27 36.54H131.59V32.47C131.59 30.55 130.75 29.5 129.03 29.5C127.94 29.5 126.97 29.92 126.22 30.4L126.81 31.48C127.41 31.12 128.06 30.81 128.74 30.81C129.66 30.81 129.97 31.43 129.99 32.15C127.16 32.44 125.93 33.21 125.93 34.68ZM127.5 34.56C127.5 33.87 128.12 33.38 129.98 33.15V34.69C129.48 35.17 129.04 35.45 128.48 35.45C127.9 35.44 127.5 35.17 127.5 34.56ZM135.47 34.21C135.47 35.69 136.06 36.7 137.65 36.7C138.2 36.7 138.67 36.57 139.05 36.45L138.77 35.26C138.57 35.34 138.29 35.41 138.06 35.41C137.4 35.41 137.09 35.02 137.09 34.21V30.93H138.84V29.66H137.09V27.78H135.75L135.55 29.66L134.49 29.73V30.93H135.47V34.21ZM141.39 33.1C141.39 35.37 142.87 36.7 144.78 36.7C145.65 36.7 146.47 36.39 147.13 35.96L146.58 34.95C146.08 35.27 145.57 35.45 144.98 35.45C143.87 35.45 143.09 34.75 142.95 33.5H147.32C147.36 33.33 147.39 33.05 147.39 32.74C147.39 30.82 146.41 29.48 144.55 29.48C142.94 29.49 141.39 30.86 141.39 33.1ZM142.94 32.48C143.08 31.33 143.78 30.73 144.59 30.73C145.53 30.73 145.99 31.39 145.99 32.48H142.94Z"
        //                                 fill="#63A696"
        //                             />
        //                         </svg>
        //                     </div>
        //                 </div>
        //                 <div class="p">
        //                     <div
        //                         class="lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-ut-enim-ad-minim-veniam"
        //                     >
        //                         Lorem ipsum dolor sit amet, consectetur<br />adipisicing elit, sed
        //                         do eiusmod tempor<br />incididunt ut labore et dolore magna<br />aliqua.
        //                         Ut enim ad minim veniam
        //                     </div>
        //                 </div>
        //                 <div class="list">
        //                     <div class="item-link">
        //                         <div class="one"></div>
        //                     </div>
        //                     <div class="item-link2">
        //                         <div class="one"></div>
        //                     </div>
        //                     <div class="item-link3">
        //                         <div class="one"></div>
        //                     </div>
        //                     <div class="item-link4">
        //                         <div class="one"></div>
        //                     </div>
        //                     <div class="item-link3">
        //                         <div class="one"></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="div-col-lg-32">
        //             <div class="div-nav-menu-3">
        //                 <div class="heading-3">
        //                     <div class="quick-links">Quick Links</div>
        //                     <div class="pseudo"></div>
        //                 </div>
        //                 <div class="list2">
        //                     <div class="item-link5">
        //                         <div class="pseudo2"></div>
        //                         <div class="about-us">About Us</div>
        //                     </div>
        //                     <div class="item-link5">
        //                         <div class="pseudo2"></div>
        //                         <div class="blog-articles">Blog &amp; Articles</div>
        //                     </div>
        //                     <div class="item-link5">
        //                         <div class="pseudo2"></div>
        //                         <div class="terms-and-conditions">Terms and Conditions</div>
        //                     </div>
        //                     <div class="item-link5">
        //                         <div class="pseudo2"></div>
        //                         <div class="privacy-policy">Privacy Policy</div>
        //                     </div>
        //                     <div class="item-link5">
        //                         <div class="pseudo2"></div>
        //                         <div class="contact-us">Contact Us</div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="div-col-lg-33">
        //             <div class="div-mc-4-wp-form-widget-2">
        //                 <div class="heading-32">
        //                     <div class="newsletter">Newsletter</div>
        //                     <div class="pseudo"></div>
        //                 </div>
        //                 <div class="form">
        //                     <div class="input">
        //                         <div class="div-placeholder">
        //                             <div class="enter-e-mail-addess">Enter e-mail addess</div>
        //                         </div>
        //                     </div>
        //                     <div class="div-rt-animation-btn">
        //                         <div class="input2">
        //                             <div class="subscribe">Subscribe</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="we-never-span-you">We never span you!</div>
        //         </div>
        //         <div class="div-col-lg-34">
        //             <div class="div-rt-contact-widget-5">
        //                 <div class="heading-33">
        //                     <div class="contact">Contact</div>
        //                     <div class="pseudo"></div>
        //                 </div>
        //                 <div class="list3">
        //                     <div class="item">
        //                         <div class="i-fas">
        //                             <div class="two"></div>
        //                         </div>
        //                         <div class="p2">
        //                             <div class="_121-king-st-melbourne-den-3000-australia">
        //                                 121 King St, Melbourne den 3000,<br />Australia
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="item2">
        //                         <div class="i-fas2">
        //                             <div class="two"></div>
        //                         </div>
        //                         <div class="p3">
        //                             <div class="link-info-example-com">info@example.com</div>
        //                         </div>
        //                     </div>
        //                     <div class="item3">
        //                         <div class="i-fas2">
        //                             <div class="two"></div>
        //                         </div>
        //                         <div class="p3">
        //                             <div class="link-123-596-000">+123-596-000</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div class="div-footer-bottom">
        //         <div class="div-row2">
        //             <div class="div-col-xl-6">
        //                 <div class="list4">
        //                     <div class="item4">
        //                         <div class="link-terms-of-use">Terms of Use</div>
        //                         <div class="three">.</div>
        //                     </div>
        //                     <div class="item-link-privacy-policy">Privacy Policy</div>
        //                 </div>
        //             </div>
        //             <div class="div-col-xl-62">
        //                 <div class="_2022-all-right-reserved-by-radius-theme">
        //                     2022© All right reserved by RadiusTheme
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div className="footer">
                <div className="divfooter-bottom">
                    <div className="divrow2">
                        <div className="list24">
                            <div className="item53">
                                <div className="engage-with-our-container">Terms of Use</div>
                                <div className="div82">.</div>
                            </div>
                            <div className="engage-with-our-container">Privacy Policy</div>
                        </div>
                        <div className="all-right-reserved">
                            2023© All right reserved by Ideal Zameen
                        </div>
                    </div>
                </div>
                <div className="divmain-footer">
                    <div className="divrow3">
                        <div className="divhomlisti-about-2">
                            <div className="link-logo-lightsvg">
                                <img className="logosvg" alt="" src={Img2} />
                            </div>
                            <div className="p2">
                                <div className="lorem-ipsum-dolor-container">
                                    <span className="ideal-zameen-txt-container">
                                        <h1>Join us on</h1>
                                    </span>
                                </div>
                            </div>
                            <div className="list25">
                                <div className="item-link14">
                                    <div className="div83"><FacebookIcon /></div>
                                </div>
                                <div className="item-link15">
                                    <div className="div84"><LinkedInIcon /></div>
                                </div>
                                <div className="item-link16">
                                    <div className="div85"><EmailIcon /></div>
                                </div>
                                <div className="item-link17">
                                    <div className="div86"><InstagramIcon /></div>
                                </div>
                                <div className="item-link18">
                                    <div className="div85"><WhatsAppIcon /></div>
                                </div>
                            </div>
                        </div>
                        <div className="divnav-menu-3">
                            <div className="heading-37">
                                <div className="quick-links">Quick Links</div>
                                <div className="pseudo31" />
                            </div>
                            <div className="list26">
                                <div className="item-link19">
                                    <div className="pseudo32" />
                                    <div className="ceo-psdboss">About Us</div>
                                </div>
                                <div className="item-link20">
                                    <div className="pseudo32" />
                                    <div className="ceo-psdboss">{`Blog & Articles`}</div>
                                </div>
                                <div className="item-link21">
                                    <div className="pseudo32" />
                                    <div className="ceo-psdboss">Terms and Conditions</div>
                                </div>
                                <div className="item-link22">
                                    <div className="pseudo32" />
                                    <div className="ceo-psdboss">Privacy Policy</div>
                                </div>
                                <div className="item-link23">
                                    <div className="pseudo32" />
                                    <div className="ceo-psdboss">Contact Us</div>
                                </div>
                            </div>
                        </div>
                        <div className="divcol-lg-3">
                            <div className="divmc4wp-form-widget-2">
                                <div className="heading-37">
                                    <div className="newsletter">Newsletter</div>
                                    <div className="pseudo31" />
                                </div>
                                <div className="form1">
                                    <div className="input1">
                                        <input type="text" placeholder=" Enter e-mail addess"></input>

                                    </div>
                                    <div className="divrt-animation-btn">
                                        <div className="input2">
                                            <b className="subscribe">Subscribe</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="we-never-span">We never span you!</div>
                        </div>
                        <div className="divrt-contact-widget-5">
                            <div className="list27">
                                <div className="item54">
                                    <div className="div88"></div>
                                    <div className="p3">
                                        <div className="king-st-melbourne-container">
                                            <p className="we-provide-you">
                                                121 King St, Melbourne den 3000,
                                            </p>
                                            <p className="we-provide-you">Australia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item55">
                                    <div className="div89"></div>
                                    <div className="link-infoexamplecom">info@example.com</div>
                                </div>
                                <div className="item56">
                                    <div className="div89"></div>
                                    <div className="link-123-596-000">+123-596-000</div>
                                </div>
                            </div>
                            <div className="heading-39">
                                <div className="contact">Contact</div>
                                <div className="pseudo31" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
