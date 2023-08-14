import React from "react";
import "./Page.css";
import "./global.css"
import Img from "./Image/home-4-sec-1.jpg.jpg";
import Img2 from "./Image/Ideal.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { NavLink } from "react-router-dom";
const Page = () => {
  return (
    <div className="page">
      <div className="divwrapper">
        <div className="header">
          <div className="divheader-content">
            <div className="link-logosvg">
              <div className="logosvg">
                <img className="group-icon" alt="" src={Img2} />
                <div className="ideal-zameen">
                  <span className="ideal-zameen-txt-container">
                    <span>Ideal</span>
                    <span className="zameen"> Zameen</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="nav-list">
              <div className="item-link">
                <div className="home">Home</div>
                <div className="pseudo" />
              </div>
              <div className="item-link1">About</div>
              <div className="item-link2">
                <div className="home">Property</div>
                <div className="pseudo1" />
              </div>
              <div className="item-link3">
                <div className="home">Pages</div>
                <div className="pseudo2" />
              </div>
              <div className="item-link4">
                <div className="home">Blog</div>
                <div className="pseudo3" />
              </div>
              <div className="item-link5">Contact</div>
            </div>
            <div className="list">
              <div className="item-link6">
                <div className="iflaticon-left-and-right-arro">
                  <div className="div"></div>
                </div>
                <div className="spancount">
                  <div className="div1">0</div>
                </div>
              </div>
              <div className="item-link6">
                <div className="iflaticon-left-and-right-arro">
                  <div className="div"></div>
                </div>
                <div className="spancount">
                  <div className="div1">0</div>
                </div>
              </div>
              <div className="item-link8">
                <div className="div"></div>
              </div>
              <div className="item-link9">
                <div className="add-property">Add Property</div>
                <div className="span">
                  <div className="div5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divelementor">
          <div className="section">
            <div className="form">
              <div className="divsearch-item">
                <div className="divinput-group">
                  <div className="input">
                    <div className="divplaceholder">
                      <div className="enter-keyword-here">
                        <input type="text" placeholder=" Enter keyword here...."></input>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divsearch-item1">
                <div className="options">
                  <div className="div6">
                    <div className="select-type">Select Type</div>
                  </div>
                </div>
                <div className="combobox">
                  <div className="textbox">
                    <div className="select-type1">Select Type</div>
                  </div>
                  <div className="presentation" />
                </div>
              </div>
              <div className="divsearch-item2">
                <div className="options">
                  <div className="div6">
                    <div className="select-location">Select Location</div>
                  </div>
                </div>
                <div className="combobox1">
                  <div className="textbox1">
                    <div className="select-type1">Select Location</div>
                  </div>
                  <div className="presentation" />
                </div>
              </div>
              <div className="divsearch-item3">
                <div className="button">
                  <div className="div8"></div>
                </div>
                <div className="button1">
                  <div className="search">{`Search `}</div>
                  <div className="div9"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="section1">
            <div className="section2">
              <div className="divproduct-thumb">
                <div className="spanlisting-type-badge">
                  <div className="for-rent">For Rent</div>
                </div>
                <div className="divrtcl-price">
                  <div className="bdi">
                    <b className="b">$</b>
                    <b className="b">13,500</b>
                  </div>
                  <div className="spanrtcl-price-unit-label">
                    <div className="div10">/</div>
                    <div className="yr">yr</div>
                  </div>
                </div>
              </div>
              <div className="divproduct-top-content">
                <div className="heading-1">Triple Story House for Rent</div>
                <div className="list-item">
                  <div className="div11"></div>
                  <div className="new-jersey">New Jersey</div>
                </div>
                <div className="list1">
                  <div className="item">
                    <div className="irtcl-icon">
                      <div className="div12"></div>
                    </div>
                    <div className="spanlistable-value">
                      <div className="sqft">Beds 3</div>
                    </div>
                  </div>
                  <div className="item1">
                    <div className="irtcl-icon">
                      <div className="div12"></div>
                    </div>
                    <div className="spanlistable-value">
                      <div className="sqft">Baths 2</div>
                    </div>
                  </div>
                  <div className="item2">
                    <div className="irtcl-icon">
                      <div className="div14"></div>
                    </div>
                    <div className="spanlistable-value2">
                      <div className="sqft">1500 Sqft</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="section-icon" alt="" src="/section1.svg" />
          <div className="section3">
            <div className="divelementor-widget-wrap">
              <img
                className="layer-1-h4png-icon"
                alt=""
                src="/layer1h4png@2x.png"
              />
              <img
                className="layer-2-h4png-icon"
                alt=""
                src="/layer2h4png@2x.png"
              />
              <img
                className="layer-4-h4png-icon"
                alt=""
                src="/layer4h4png@2x.png"
              />
              <img
                className="layer-3-h4png-icon"
                alt=""
                src="/layer3h4png@2x.png"
              />
              <div className="section4">
                <div className="divelementor-widget-wrap1">
                  <div className="divsection-title-wrapper">
                    <div className="about-us">About Us</div>
                    <div className="divtitle-inner-wrapper">
                      <div className="spantop-sub-title">
                        <div className="div15"></div>
                        {/* <div className="who-we-are">Who We Are</div> */}
                      </div>
                      {/* <div className="heading-2">
                        <b className="we-provide-you-container">
                          <span className="ideal-zameen-txt-container">
                            <p className="we-provide-you">
                              Ideal Zameen Provide You The Best Service
                            </p>
                            <p className="we-provide-you">
                              Of Real Estate Industries
                            </p>
                          </span>
                        </b>
                      </div> */}
                      <div className="divdescription">
                        <div className="p">
                          <div className="building-when-an-container">
                            <span className="ideal-zameen-txt-container">
                              <p className="we-provide-you">
                                Ideal Zameen is a Pakistan-based Real Estate Company, specializing in providing exclusive services to individual and institutional clients from Commercial to Residential areas.
                              </p>
                              <p className="we-provide-you">
                                We are a dedicated team of truly passionate, property professionals who understand our client’s needs and wants. When making property decisions that impact your family now and in the future,
                              </p>
                              <p className="we-provide-you">
                                Premium property partner. We understand that your home is an important part of your life, it houses your family, it’s where memories are made and it provides for your future.
                              </p>
                              <p className="we-provide-you">
                                Ideal Zameen’s team has been building a wealth of experience and knowledge in the high-value, luxury property market. We specialize in the finest lifestyle, luxury, and executive real estate in Pakistan.
                              </p>
                              <p className="we-provide-you">
                                Ideal Zameen has established a relationship with a select and prestige network of developers to deliver the properties to our client to an investor,                               </p>
                              <p className="we-provide-you">
                                a luxurious world-class private sector in the heart of the green (Agriculture) & brown (Commercial) to carry on its business in an organized and efficient manner.
                              </p>
                              <p className="we-provide-you">
                                Ideal Zameen is a fully developed system to manage the property, we know already a few systems working in the market but we assure you Ideal Zameen is different and easy to use for our associates where they can easily manage their deals with square.                              </p>

                            </span>
                          </div>
                        </div>
                        {/* <div className="p1">
                          <div className="when-an-unknown-container">
                            <span className="ideal-zameen-txt-container">
                              <p className="we-provide-you">
                                when an unknown printer took a galley of type
                                andetry scram bled it to make
                              </p>
                              <p className="we-provide-you">
                                a type specimen bookhas survived not only
                                centuriesalwith the release of
                              </p>
                              <p className="we-provide-you">
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently.
                              </p>
                            </span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="button2">
                    <div className="contact-us">Contact Us</div>
                  </div>
                </div>
                <img
                  className="home-4-sec-1jpg-icon"
                  alt=""
                  src={Img}
                />
              </div>
            </div>
          </div>
          <div className="section5">
            <div className="divelementor-widget-wrap2">
              <div className="section6">
                <div className="properties">Properties</div>
                <div className="divtitle-inner-wrapper1">
                  <div className="our-properties">Our PROPERTIES</div>
                  <b className="heading-21">Latest Properties</b>
                </div>
              </div>
              {/* <div className="section7">
                <div className="divfeaturedcontainer">
                  <div className="divswiper-wrapper">
                    <div className="divproduct-box">
                      <div className="divproduct-thumb1">
                        <img
                          className="divthumbnail-bg-icon"
                          alt=""
                          src="/divthumbnailbg@2x.png"
                        />
                        <div className="pseudo4" />
                        <div className="spanbadge">
                          <div className="popular">Popular</div>
                        </div>
                      </div>
                      <div className="divproduct-content">
                        <div className="divproduct-top-content1">
                          <div className="heading-3-link">
                            <div className="triple-story-house">
                              Triple Story House for Rent
                            </div>
                          </div>
                          <div className="list2">
                            <div className="item3">
                              <div className="irtcl-icon3">
                                <div className="div12"></div>
                              </div>
                              <div className="spanlistable-value3">
                                <div className="sqft">Baths 2</div>
                              </div>
                            </div>
                            <div className="item4">
                              <div className="irtcl-icon3">
                                <div className="div14"></div>
                              </div>
                              <div className="spanlistable-value4">
                                <div className="sqft">1500 Sqft</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divproduct-bottom-content">
                          <div className="list-item-link">
                            <div className="details">Details</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divproduct-box1">
                      <div className="divproduct-thumb1">
                        <img
                          className="divthumbnail-bg-icon1"
                          alt=""
                          src="/divthumbnailbg1@2x.png"
                        />
                        <div className="divproduct-type">
                          <div className="spanlisting-type-badge1">
                            <div className="for-rent">For Buy</div>
                          </div>
                          <img
                            className="pseudomask-group-icon"
                            alt=""
                            src="/pseudomaskgroup.svg"
                          />
                          <img
                            className="pseudo-icon"
                            alt=""
                            src="/pseudo.svg"
                          />
                        </div>
                        <div className="pseudo4" />
                        <div className="spanbadge1">
                          <div className="popular">Popular</div>
                        </div>
                        <div className="divrtcl-price1">
                          <div className="bdi1">
                            <b className="b2">$</b>
                            <b className="b2">30,000</b>
                          </div>
                          <div className="spanrtcl-price-unit-label1">
                            <div className="div10">/</div>
                            <div className="yr">total</div>
                          </div>
                        </div>
                      </div>
                      <div className="divproduct-content1">
                        <div className="divproduct-top-content1">
                          <div className="link">
                            <div className="apartments">Apartments</div>
                          </div>
                          <div className="heading-3-link1">
                            <div className="brand-new-shopping">
                              Brand New Shopping Mall for buy
                            </div>
                          </div>
                          <div className="list-item1">
                            <div className="div11"></div>
                            <div className="new-jersey1">New Jersey</div>
                          </div>
                          <div className="list3">
                            <div className="item5">
                              <div className="irtcl-icon3">
                                <div className="div12"></div>
                              </div>
                              <div className="spanlistable-value3">
                                <div className="sqft">Beds 3</div>
                              </div>
                            </div>
                            <div className="item3">
                              <div className="irtcl-icon3">
                                <div className="div12"></div>
                              </div>
                              <div className="spanlistable-value3">
                                <div className="sqft">Baths 3</div>
                              </div>
                            </div>
                            <div className="item4">
                              <div className="irtcl-icon3">
                                <div className="div14"></div>
                              </div>
                              <div className="spanlistable-value4">
                                <div className="sqft">2000 Sqft</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divproduct-bottom-content1">
                          <div className="list4">
                            <div className="item8">
                              <img
                                className="robert-blue-150x150jpg-icon"
                                alt=""
                                src="/robert-blue150x150jpg@2x.png"
                              />
                              <div className="divitem-title">
                                <div className="by">{`By `}</div>
                                <div className="link1">
                                  <div className="by">Robert Blue</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-link10">
                              <div className="details">Details</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divproduct-box2">
                      <div className="divproduct-thumb1">
                        <img
                          className="divthumbnail-bg-icon1"
                          alt=""
                          src="/divthumbnailbg2@2x.png"
                        />
                        <div className="divproduct-type">
                          <div className="spanlisting-type-badge1">
                            <div className="for-rent">For Buy</div>
                          </div>
                          <img
                            className="pseudomask-group-icon"
                            alt=""
                            src="/pseudomaskgroup1.svg"
                          />
                          <img
                            className="pseudo-icon"
                            alt=""
                            src="/pseudo1.svg"
                          />
                        </div>
                        <div className="pseudo4" />
                        <div className="divrtcl-listing-badge-wrap">
                          <div className="spanbadge2">
                            <div className="popular">Popular</div>
                          </div>
                          <div className="spanbadge3">
                            <div className="popular">Top</div>
                          </div>
                        </div>
                        <div className="bdi2">
                          <b className="b2">$</b>
                          <b className="b2">450,000</b>
                        </div>
                      </div>
                      <div className="divproduct-content1">
                        <div className="divproduct-top-content1">
                          <div className="link">
                            <div className="apartments">Apartments</div>
                          </div>
                          <div className="heading-3-link1">
                            <div className="northwest-office-space">
                              Northwest Office Space
                            </div>
                          </div>
                          <div className="list-item1">
                            <div className="div11"></div>
                            <div className="new-jersey1">New Jersey</div>
                          </div>
                          <div className="list3">
                            <div className="item5">
                              <div className="irtcl-icon3">
                                <div className="div12"></div>
                              </div>
                              <div className="spanlistable-value3">
                                <div className="sqft">Beds 3</div>
                              </div>
                            </div>
                            <div className="item3">
                              <div className="irtcl-icon3">
                                <div className="div12"></div>
                              </div>
                              <div className="spanlistable-value3">
                                <div className="sqft">Baths 3</div>
                              </div>
                            </div>
                            <div className="item4">
                              <div className="irtcl-icon3">
                                <div className="div14"></div>
                              </div>
                              <div className="spanlistable-value4">
                                <div className="sqft">1500 Sqft</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divproduct-bottom-content1">
                          <div className="list4">
                            <div className="item12">
                              <img
                                className="robert-blue-150x150jpg-icon"
                                alt=""
                                src="/daziy-millar150x150jpg@2x.png"
                              />
                              <div className="divitem-title">
                                <div className="by">{`By `}</div>
                                <div className="link1">
                                  <div className="by">Daziy Millar</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-link10">
                              <div className="details">Details</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divproduct-box3">
                      <div className="divproduct-thumb1">
                        <img
                          className="divthumbnail-bg-icon1"
                          alt=""
                          src="/divthumbnailbg3@2x.png"
                        />
                        <div className="divproduct-type2">
                          <div className="spanlisting-type-badge3">
                            <div className="for-rent">For Rent</div>
                          </div>
                          <img
                            className="pseudomask-group-icon2"
                            alt=""
                            src="/pseudomaskgroup2.svg"
                          />
                          <img
                            className="pseudo-icon2"
                            alt=""
                            src="/pseudo2.svg"
                          />
                        </div>
                        <div className="pseudo4" />
                        <div className="spanbadge4">
                          <div className="popular">Featured</div>
                        </div>
                        <div className="bdi2">
                          <b className="b2">$</b>
                          <b className="b2">2,500</b>
                        </div>
                      </div>
                      <div className="divproduct-content1">
                        <div className="divproduct-top-content1">
                          <div className="link4">
                            <div className="apartments">Villa</div>
                          </div>
                          <div className="heading-3-link1">
                            <div className="diamond-manco-apartment">
                              Diamond Manco Apartment
                            </div>
                          </div>
                          <div className="list-item1">
                            <div className="div11"></div>
                            <div className="new-jersey1">New Jersey</div>
                          </div>
                          <div className="list3">
                            <div className="item5">
                              <div className="irtcl-icon3">
                                <div className="div12"></div>
                              </div>
                              <div className="spanlistable-value3">
                                <div className="sqft">Beds 3</div>
                              </div>
                            </div>
                            <div className="item3">
                              <div className="irtcl-icon3">
                                <div className="div12"></div>
                              </div>
                              <div className="spanlistable-value3">
                                <div className="sqft">Baths 3</div>
                              </div>
                            </div>
                            <div className="item4">
                              <div className="irtcl-icon3">
                                <div className="div14"></div>
                              </div>
                              <div className="spanlistable-value4">
                                <div className="sqft">2500 Sqft</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divproduct-bottom-content1">
                          <div className="list4">
                            <div className="item12">
                              <img
                                className="robert-blue-150x150jpg-icon"
                                alt=""
                                src="/daziy-millar150x150jpg1@2x.png"
                              />
                              <div className="divitem-title">
                                <div className="by">{`By `}</div>
                                <div className="link1">
                                  <div className="by">Daziy Millar</div>
                                </div>
                              </div>
                            </div>
                            <div className="item-link10">
                              <div className="details">Details</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divproduct-box4">
                      <div className="divproduct-thumb1">
                        <img
                          className="divthumbnail-bg-icon1"
                          alt=""
                          src="/divthumbnailbg4@2x.png"
                        />
                        <div className="divproduct-type2">
                          <div className="spanlisting-type-badge3">
                            <div className="for-rent">For Rent</div>
                          </div>
                          <img
                            className="pseudomask-group-icon2"
                            alt=""
                            src="/pseudomaskgroup3.svg"
                          />
                          <img
                            className="pseudo-icon2"
                            alt=""
                            src="/pseudo3.svg"
                          />
                        </div>
                        <div className="pseudo4" />
                      </div>
                      <div className="divproduct-content1">
                        <div className="divproduct-top-content1">
                          <div className="link6">
                            <div className="apartments">Restaurant</div>
                          </div>
                          <div className="heading-3-link1">
                            <div className="affordable-green-villa">
                              Affordable Green Villa House for
                            </div>
                          </div>
                          <div className="list-item1">
                            <div className="div11"></div>
                            <div className="new-jersey1">New Jersey</div>
                          </div>
                          <div className="list3">
                            <div className="item5">
                              <div className="irtcl-icon3">
                                <div className="div12"></div>
                              </div>
                              <div className="spanlistable-value3">
                                <div className="sqft">Beds 2</div>
                              </div>
                            </div>
                            <div className="item3">
                              <div className="irtcl-icon3">
                                <div className="div12"></div>
                              </div>
                              <div className="spanlistable-value3">
                                <div className="sqft">Baths 2</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divproduct-bottom-content1">
                          <div className="list-item5">
                            <img
                              className="robert-blue-150x150jpg-icon"
                              alt=""
                              src="/tom-steven150x150jpg@2x.png"
                            />
                            <div className="divitem-title3">
                              <div className="by">{`By `}</div>
                              <div className="link1">
                                <div className="by">Tom Steven</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divswiper-pagination">
                  <div className="button-go-to-slide-2" />
                  <div className="button-go-to-slide-3" />
                  <div className="button-go-to-slide-1" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="section8">
            <div className="divsection-title-wrapper1">
              <div className="locations">Locations</div>
              <div className="divtitle-inner-wrapper2">
                <div className="spantop-sub-title1">
                  <div className="div15"></div>
                  <div className="who-we-are">Top Areas</div>
                </div>
                <b className="heading-22">Find Your Neighborhood</b>
              </div>
            </div>
          </div>
          <div className="section9">
            <div className="divelementor-container">
              <div className="divelementor-widget-wrap3">
                <div className="section10">
                  <div className="divcategory-box">
                    <div className="divimg-wrap">
                      <div className="divitem-img">
                        <div className="pseudo9" />
                      </div>
                    </div>
                    <div className="divitem-content">
                      <div className="divitem-count">
                        <div className="properties1">04 Properties</div>
                      </div>
                      <div className="heading-3">California</div>
                      <div className="ifas">
                        <div className="div35"></div>
                      </div>
                    </div>
                  </div>
                  <div className="divcategory-box1">
                    <div className="divimg-wrap">
                      <div className="divitem-img1">
                        <div className="pseudo9" />
                      </div>
                    </div>
                    <div className="divitem-content">
                      <div className="divitem-count">
                        <div className="properties1">04 Properties</div>
                      </div>
                      <div className="heading-31">Claremont</div>
                      <div className="ifas">
                        <div className="div35"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divcategory-box2">
                  <div className="divimg-wrap2">
                    <div className="divitem-img2">
                      <div className="pseudo11" />
                    </div>
                  </div>
                  <div className="divitem-content">
                    <div className="divitem-count2">
                      <div className="properties1">02 Properties</div>
                    </div>
                    <div className="heading-32">Kansas</div>
                    <div className="ifas">
                      <div className="div35"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divelementor-widget-wrap4">
                <div className="divcategory-box3">
                  <div className="divimg-wrap2">
                    <div className="divitem-img3">
                      <div className="pseudo11" />
                    </div>
                  </div>
                  <div className="divitem-content">
                    <div className="divitem-count2">
                      <div className="properties1">04 Properties</div>
                    </div>
                    <div className="heading-3">California</div>
                    <div className="ifas">
                      <div className="div35"></div>
                    </div>
                  </div>
                </div>
                <div className="section11">
                  <div className="divcategory-box">
                    <div className="divimg-wrap">
                      <div className="divitem-img4">
                        <div className="pseudo9" />
                      </div>
                    </div>
                    <div className="divitem-content">
                      <div className="divitem-count">
                        <div className="property1">01 Property</div>
                      </div>
                      <div className="heading-34">Louisiana</div>
                      <div className="ifas">
                        <div className="div35"></div>
                      </div>
                    </div>
                  </div>
                  <div className="divcategory-box1">
                    <div className="divimg-wrap">
                      <div className="divitem-img5">
                        <div className="pseudo9" />
                      </div>
                    </div>
                    <div className="divitem-content">
                      <div className="divitem-count">
                        <div className="properties1">02 Properties</div>
                      </div>
                      <div className="heading-35">Abilene</div>
                      <div className="ifas">
                        <div className="div35"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section12">
            <div className="divelementor-background-overl" />
            <div className="divelementor-container1">
              <div className="divelementor-widget-wrap5">
                <div className="divtitle-inner-wrapper3">
                  <div className="spantop-sub-title2">
                    <div className="div41"></div>
                    <div className="lets-take-a">Let’s Take a Tour</div>
                  </div>
                  <div className="heading-23">
                    <b className="search-property-smarter-container">
                      <span className="ideal-zameen-txt-container">
                        <p className="we-provide-you">
                          Search Property Smarter,
                        </p>
                        <p className="we-provide-you">{`Quicker & Anywhere`}</p>
                      </span>
                    </b>
                  </div>
                </div>
                <img className="link-icon" alt="" src="/link.svg" />
                <div className="link-play">Play Video</div>
              </div>
              <div className="divsection-title-wrapper2">
                <div className="property-for-al">Property For Al</div>
                <div className="l">l</div>
              </div>
            </div>
          </div>
          <div className="section13">
            <div className="divsection-title-wrapper3">
              <div className="properties6">Properties</div>
              <div className="divtitle-inner-wrapper4">
                <div className="latest-listings">Latest Listings</div>
                <b className="heading-24">Featured Property For Sale</b>
              </div>
            </div>
            <div className="divrow">
              <div className="divproduct-box5">
                <div className="divproduct-thumb6">
                  <img
                    className="divthumbnail-bg-icon5"
                    alt=""
                    src="/divthumbnailbg5@2x.png"
                  />
                  <div className="pseudo15" />
                </div>
                <div className="divproduct-content5">
                  <div className="divproduct-top-content6">
                    <div className="heading-3-link5">
                      <div className="countryside-modern-lake">
                        Brand New Shopping Mall f…
                      </div>
                    </div>
                    <div className="list-item6">
                      <div className="apartments"></div>
                      <div className="louisiana">New Jersey</div>
                    </div>
                    <div className="list10">
                      <div className="item19">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Beds 3</div>
                        </div>
                      </div>
                      <div className="item20">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Baths 3</div>
                        </div>
                      </div>
                      <div className="item21">
                        <div className="apartments"></div>
                        <div className="spanlistable-value4">
                          <div className="sqft">2000 Sqft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divproduct-bottom-content5">
                    <div className="list11">
                      <div className="item22">
                        <img
                          className="mike-hussy-1-150x150jpg-icon"
                          alt=""
                          src="/robert-blue150x150jpg1@2x.png"
                        />
                        <div className="divitem-title4">
                          <div className="mike-hussy">{`By `}</div>
                          <div className="link1">
                            <div className="mike-hussy">Robert Blue</div>
                          </div>
                        </div>
                      </div>
                      <div className="item23">
                        <div className="bdi4">
                          <b className="b8">$</b>
                          <b className="k">30,000</b>
                        </div>
                        <div className="spanrtcl-price-unit-label2">
                          <div className="div46">/</div>
                          <div className="total1">total</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divproduct-box6">
                <div className="divproduct-thumb6">
                  <img
                    className="divthumbnail-bg-icon5"
                    alt=""
                    src="/divthumbnailbg6@2x.png"
                  />
                  <div className="pseudo15" />
                </div>
                <div className="divproduct-content5">
                  <div className="divproduct-top-content6">
                    <div className="heading-3-link6">
                      <div className="countryside-modern-lake">
                        Northwest Office Space
                      </div>
                    </div>
                    <div className="list-item6">
                      <div className="apartments"></div>
                      <div className="louisiana">New Jersey</div>
                    </div>
                    <div className="list10">
                      <div className="item19">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Beds 3</div>
                        </div>
                      </div>
                      <div className="item20">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Baths 3</div>
                        </div>
                      </div>
                      <div className="item21">
                        <div className="apartments"></div>
                        <div className="spanlistable-value4">
                          <div className="sqft">1500 Sqft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divproduct-bottom-content5">
                    <div className="list11">
                      <div className="item27">
                        <img
                          className="mike-hussy-1-150x150jpg-icon"
                          alt=""
                          src="/daziy-millar150x150jpg2@2x.png"
                        />
                        <div className="divitem-title4">
                          <div className="mike-hussy">{`By `}</div>
                          <div className="link1">
                            <div className="mike-hussy">Daziy Millar</div>
                          </div>
                        </div>
                      </div>
                      <div className="item28">
                        <b className="b8">$</b>
                        <b className="k">450,000</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divproduct-box7">
                <div className="divproduct-thumb6">
                  <img
                    className="divthumbnail-bg-icon5"
                    alt=""
                    src="/divthumbnailbg7@2x.png"
                  />
                  <div className="pseudo15" />
                </div>
                <div className="divproduct-content5">
                  <div className="divproduct-top-content6">
                    <div className="heading-3-link7">
                      <div className="countryside-modern-lake">
                        Diamond Manco Apartment
                      </div>
                    </div>
                    <div className="list-item6">
                      <div className="apartments"></div>
                      <div className="louisiana">New Jersey</div>
                    </div>
                    <div className="list10">
                      <div className="item19">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Beds 3</div>
                        </div>
                      </div>
                      <div className="item20">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Baths 3</div>
                        </div>
                      </div>
                      <div className="item21">
                        <div className="apartments"></div>
                        <div className="spanlistable-value4">
                          <div className="sqft">2500 Sqft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divproduct-bottom-content5">
                    <div className="list11">
                      <div className="item27">
                        <img
                          className="mike-hussy-1-150x150jpg-icon"
                          alt=""
                          src="/daziy-millar150x150jpg3@2x.png"
                        />
                        <div className="divitem-title4">
                          <div className="mike-hussy">{`By `}</div>
                          <div className="link1">
                            <div className="mike-hussy">Daziy Millar</div>
                          </div>
                        </div>
                      </div>
                      <div className="item33">
                        <b className="b8">$</b>
                        <b className="k">2,500</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divproduct-box8">
                <div className="divproduct-thumb6">
                  <img
                    className="divthumbnail-bg-icon5"
                    alt=""
                    src="/divthumbnailbg8@2x.png"
                  />
                  <div className="pseudo15" />
                </div>
                <div className="divproduct-content5">
                  <div className="divproduct-top-content6">
                    <div className="heading-3-link8">
                      <div className="countryside-modern-lake">
                        Affordable Green Villa Hous…
                      </div>
                    </div>
                    <div className="list-item6">
                      <div className="apartments"></div>
                      <div className="louisiana">New Jersey</div>
                    </div>
                    <div className="list10">
                      <div className="item19">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Beds 2</div>
                        </div>
                      </div>
                      <div className="item20">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Baths 2</div>
                        </div>
                      </div>
                      <div className="item21">
                        <div className="apartments"></div>
                        <div className="spanlistable-value4">
                          <div className="sqft">1300 Sqft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divproduct-bottom-content8">
                    <div className="list-item10">
                      <img
                        className="mike-hussy-1-150x150jpg-icon"
                        alt=""
                        src="/tom-steven150x150jpg1@2x.png"
                      />
                      <div className="divitem-title7">
                        <div className="mike-hussy">{`By `}</div>
                        <div className="link1">
                          <div className="mike-hussy">Tom Steven</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divproduct-box9">
                <div className="divproduct-thumb6">
                  <img
                    className="divthumbnail-bg-icon5"
                    alt=""
                    src="/divthumbnailbg9@2x.png"
                  />
                  <div className="pseudo15" />
                </div>
                <div className="divproduct-content5">
                  <div className="divproduct-top-content6">
                    <div className="heading-3-link9">
                      <div className="countryside-modern-lake">
                        Countryside Modern Lake…
                      </div>
                    </div>
                    <div className="list-item6">
                      <div className="apartments"></div>
                      <div className="louisiana">New Jersey</div>
                    </div>
                    <div className="list10">
                      <div className="item19">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Beds 4</div>
                        </div>
                      </div>
                      <div className="item20">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Baths 2</div>
                        </div>
                      </div>
                      <div className="item21">
                        <div className="apartments"></div>
                        <div className="spanlistable-value4">
                          <div className="sqft">2000 Sqft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divproduct-bottom-content5">
                    <div className="list11">
                      <div className="item40">
                        <img
                          className="mike-hussy-1-150x150jpg-icon"
                          alt=""
                          src="/tom-steven150x150jpg2@2x.png"
                        />
                        <div className="divitem-title7">
                          <div className="mike-hussy">{`By `}</div>
                          <div className="link1">
                            <div className="mike-hussy">Tom Steven</div>
                          </div>
                        </div>
                      </div>
                      <div className="item41">
                        <b className="b8">$</b>
                        <b className="k">50K</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divproduct-box10">
                <div className="divproduct-thumb6">
                  <img
                    className="divthumbnail-bg-icon5"
                    alt=""
                    src="/divthumbnailbg10@2x.png"
                  />
                  <div className="pseudo15" />
                </div>
                <div className="divproduct-content5">
                  <div className="divproduct-top-content6">
                    <div className="heading-3-link10">
                      <div className="countryside-modern-lake">
                        Sky Pool Villa House for Sale
                      </div>
                    </div>
                    <div className="list-item12">
                      <div className="apartments"></div>
                      <div className="louisiana">Louisiana</div>
                    </div>
                    <div className="list10">
                      <div className="item19">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Beds 3</div>
                        </div>
                      </div>
                      <div className="item20">
                        <div className="div43"></div>
                        <div className="spanlistable-value16">
                          <div className="sqft">Baths 3</div>
                        </div>
                      </div>
                      <div className="item21">
                        <div className="apartments"></div>
                        <div className="spanlistable-value4">
                          <div className="sqft">1850 Sqft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divproduct-bottom-content5">
                    <div className="list11">
                      <div className="item45">
                        <img
                          className="mike-hussy-1-150x150jpg-icon"
                          alt=""
                          src="/mike-hussy1150x150jpg@2x.png"
                        />
                        <div className="divitem-title9">
                          <div className="mike-hussy">{`By `}</div>
                          <div className="link1">
                            <div className="mike-hussy">Mike Hussy</div>
                          </div>
                        </div>
                      </div>
                      <div className="item33">
                        <b className="b8">$</b>
                        <b className="k">1,500</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button3">
              <div className="contact-us">View All Properties</div>
            </div>
          </div>
          <div className="section14">
            <div className="divelementor-container2">
              <div className="divelementor-widget-wrap6">
                <div className="divsection-title-wrapper4">
                  <div className="testimonia">Testimonia</div>
                  <div className="ls">ls</div>
                  <div className="divtitle-inner-wrapper5">
                    <div className="customer-testimonials">
                      Customer Testimonials
                    </div>
                    <b className="heading-25">What’s Our Customer Say</b>
                  </div>
                </div>
                <div className="divslide-wrap">
                  <div className="div67"></div>
                  <div className="divtestimonial-carousel">
                    <div className="divtestimonial-content">
                      <div className="span1">
                        <div className="engage-with-our-container">
                          <p className="we-provide-you">
                            “ Engage with our professional realestaeyeagents
                            sell buy
                          </p>
                          <p className="we-provide-you">
                            or rent your home aeweGet emails directly areain
                            falls
                          </p>
                          <p className="we-provide-you">
                            box andery manage the lead ithe ”
                          </p>
                        </div>
                      </div>
                      <div className="divtestimonial-footer">
                        <div className="divfooter-content">
                          <div className="divstar-rating">
                            <div className="apartments"></div>
                            <div className="apartments"></div>
                            <div className="apartments"></div>
                            <div className="apartments"></div>
                            <div className="apartments"></div>
                          </div>
                          <div className="heading-36">Maria Zokatti</div>
                          <div className="divitem-subtitle">
                            <div className="pseudo21" />
                            <div className="ceo-psdboss">CEO, PSDBOSS</div>
                          </div>
                        </div>
                        <div className="divslider-button">
                          <div className="button-next-slide">
                            <div className="div73"></div>
                          </div>
                          <div className="button-next-slide">
                            <div className="div73"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="testimonial-personjpg-icon"
                alt=""
                src="/testimonialpersonjpg@2x.png"
              />
            </div>
          </div>
          <div className="section15">
            <div className="section16">
              <div className="divsection-title-wrapper5">
                <div className="blogs">Blogs</div>
                <div className="divtitle-inner-wrapper6">
                  <div className="spantop-sub-title3">
                    <div className="div15"></div>
                    <div className="who-we-are">What’s New Trending</div>
                  </div>
                  <b className="heading-26">{`Latest Blog & Posts`}</b>
                </div>
              </div>
              <div className="button4">
                <div className="contact-us">See All Blogs</div>
              </div>
            </div>
            <div className="divrow1">
              <div className="divblog-box">
                <div className="divpost-img">
                  <img className="link-icon1" alt="" src="/link1@2x.png" />
                </div>
                <div className="divpopup-date">
                  <div className="pseudo22" />
                  <div className="div76">13</div>
                  <div className="aug">Aug</div>
                </div>
                <div className="divpost-content">
                  <div className="list21">
                    <div className="item47">
                      <div className="pseudo23" />
                      <div className="link-real-estate">Real-estate</div>
                    </div>
                    <div className="item48">
                      <div className="pseudo23" />
                      <div className="link-1">1 Min</div>
                    </div>
                  </div>
                  <div className="heading-3-link11">
                    <div className="develop-relationships-with-container">
                      <p className="we-provide-you">
                        Develop Relationships With
                      </p>
                      <p className="we-provide-you">Human Resource</p>
                    </div>
                  </div>
                  <div className="link14">
                    <div className="read-more">{`Read More `}</div>
                    <div className="div77"></div>
                  </div>
                </div>
              </div>
              <div className="divblog-box1">
                <div className="divpost-img">
                  <img className="link-icon1" alt="" src="/link2@2x.png" />
                </div>
                <div className="divpopup-date">
                  <div className="pseudo25" />
                  <div className="div76">13</div>
                  <div className="aug">Aug</div>
                </div>
                <div className="divpost-content">
                  <div className="list21">
                    <div className="item49">
                      <div className="pseudo23" />
                      <div className="link-building">Building</div>
                    </div>
                    <div className="item50">
                      <div className="pseudo23" />
                      <div className="link-1">1 Min</div>
                    </div>
                  </div>
                  <div className="heading-3-link12">
                    <div className="develop-relationships-with-container">
                      <p className="we-provide-you">Connect With Corporate</p>
                      <p className="we-provide-you">Recruiters</p>
                    </div>
                  </div>
                  <div className="link14">
                    <div className="read-more">{`Read More `}</div>
                    <div className="div79"></div>
                  </div>
                </div>
              </div>
              <div className="divblog-box2">
                <div className="divpost-img">
                  <img className="link-icon1" alt="" src="/link3@2x.png" />
                </div>
                <div className="divpopup-date2">
                  <div className="pseudo25" />
                  <div className="div76">13</div>
                  <div className="aug">Aug</div>
                </div>
                <div className="divpost-content2">
                  <div className="list21">
                    <div className="item51">
                      <div className="pseudo23" />
                      <div className="link-entertainment">Entertainment</div>
                    </div>
                    <div className="item52">
                      <div className="pseudo23" />
                      <div className="link-1">1 Min</div>
                    </div>
                  </div>
                  <div className="heading-3-link13">
                    <div className="develop-relationships-with-container">
                      <p className="we-provide-you">Unique Real Estate</p>
                      <p className="we-provide-you">Marketing: Have A Tent</p>
                      <p className="we-provide-you">Business Card</p>
                    </div>
                  </div>
                  <div className="link16">
                    <div className="read-more">{`Read More `}</div>
                    <div className="div79"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section17">
            <div className="divelementor-container3">
              <div className="divelementor-widget-wrap7">
                <div className="divelementor-element">
                  <img
                    className="cta-parallax-3png-icon"
                    alt=""
                    src="/ctaparallax3png@2x.png"
                  />
                  <img
                    className="cta-parallax-2png-icon"
                    alt=""
                    src="/ctaparallax2png@2x.png"
                  />
                  <img
                    className="cta-parallax-1png-icon"
                    alt=""
                    src="/ctaparallax1png@2x.png"
                  />
                </div>
                <img
                  className="cta-manpng-icon"
                  alt=""
                  src="/ctamanpng@2x.png"
                />
              </div>
              <div className="divelementor-widget-wrap8">
                <div className="divtitle-inner-wrapper7">
                  <b className="heading-27">Become a Real Estate Agent</b>
                  <div className="we-only-work">
                    We only work with the best companies around the globe to
                    survey
                  </div>
                </div>
                <img
                  className="divelementor-element-icon"
                  alt=""
                  src="/divelementorelement.svg"
                />
                <img
                  className="divelementor-element-icon1"
                  alt=""
                  src="/divelementorelement1.svg"
                />
              </div>
              <div className="button5">
                <div className="contact-us">Register Now</div>
              </div>
            </div>
          </div>
        </div>
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
                    <div className="div85"><TwitterIcon /></div>
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
                      {/* <div className="divplaceholder1">
                        <div className="enter-e-mail-addess">
                          Enter e-mail addess
                        </div>
                      </div> */}
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
      <div className="link17">
        <div className="div91"></div>
      </div>
    </div>
  );
};

export default Page;
