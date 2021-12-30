import "../header/style.css";
import Srcimg from "../../assets/images/src.png";
import Textimg from "../../assets/images/text.png";
import Uparrowimg from "../../assets/images/arrow_up.png";
import Downarrow from "../../assets/images/downarrow3.png";
import Exlamationimg from "../../assets/images/exlamation.png";
import Greydown from "../../assets/images/greydown.png";
import Square from "../../assets/images/square.png";
import whitehamburger from "../../assets/images/menu.png";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

const Header = () => {
  const [courseopen, setCourseopen] = useState(0);
  const [popup, setPopup] = useState(0);
  const [mobileheader, setMobileheader] = useState(0);
  const mobileheaderHandler = (value) => {
    if (mobileheader === value) {
      setMobileheader(0);
    } else {
      setMobileheader(value);
    }
  };
  const popupHandler = (value) => {
    if (popup === value) {
      setPopup(0);
    } else {
      setPopup(value);
    }
  };
  const courseopenHandler = (value) => {
    if (courseopen === value) {
      setCourseopen(0);
    } else {
      setCourseopen(value);
    }
  };
  const [screenSize, setScreenSize] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setScreenSize(true);
    }
  }, [window.innerWidth]);
  console.log("screen 2", window.innerWidth);

  return (
    <div>
      <div className="backgroundColor">
        <div className="fulldataflex">
          <div className="fulldataleft">
            <h1 className="STANDARD-serif-family">CableCo</h1>
            <img src={Srcimg} alt="" />
          </div>
          <div className="sctearrowcol">
            <div className="sctearrowflex">
              <img src={Textimg} alt="" />
              <img
                src={Greydown}
                alt=""
                onClick={() => mobileheaderHandler(1)}
              />
            </div>
            {mobileheader === 1 && (
              <div className="backcolorscte">
                <h1>Company View</h1>
                <h4>Home</h4>
              </div>
            )}
          </div>
          <div className="hamburgercol">
            <div className="hamburgerwidtth">
              <img src={whitehamburger} alt="" onClick={()=>mobileheaderHandler(2)} />
            </div>
            {mobileheader === 2 &&
 <div className="hamburgerdowncolor">
 <ul>
   <li>Change Settings</li>
   <li>Export/Share</li>
   <li>Support/FAQs</li>
   <li>Logout</li>
 </ul>
</div>
            }
           
          </div>
        </div>
        <div className="headBackgroundImg">
          <div className="D-flexhaeder">
            <div className="L-sideup">
              <div className="L-sideone">
                <h1 className="STANDARD-serif-family">CableCo</h1>
                <img src={Srcimg} alt="" />
              </div>
              <div className="L-sidetwo">
                <ul>
                  <li className="active">HOME</li>
                  <li>COURSEWORK</li>
                  <li>CERTIFICATION</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="C-sideup">
                <div>
                  <button>Dashboard</button>
                </div>

                <ul>
                  <li>Change Settings</li>
                  <li>Export/Share</li>
                  <li>Support/FAQS</li>
                  <li>Log Out</li>
                </ul>
              </div>
            </div>

            <div className="R-sideup">
              <div>
                <img src={Textimg} />
              </div>
              <p>Company View</p>
              <h4>Home</h4>
            </div>
          </div>
          <div className="secondBackimg">
            <div className="flexBoxes">
              {/* blockOne */}
              <div className="blockOne">
                <div className="dotspopflex">
                  <div className="dotsDivmain" onClick={() => popupHandler(1)}>
                    <div className="dotsDiv"></div>
                    <div className="dotsDiv"></div>
                    <div className="dotsDiv"></div>
                  </div>
                  {popup === 1 && (
                    <div className="popupblockrelative">
                      <div className="popupblock">
                        <p>
                          Indicates average performance in courses that are
                          passed by team members
                        </p>
                        <p onClick={() => popupHandler(1)}>X</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="datanumberDiv">
                  <div onClick={() => courseopenHandler(1)}>
                    <h6>Course Performance</h6>
                  </div>
                  <div>
                    <h5 onClick={() => courseopenHandler(1)}>
                      <sup>+</sup>
                      <span>0</span>
                      <span className="extra">.1</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                {courseopen === 1 && (
                  <div>
                    <div className="blockonerelative">
                      <div className="blockoneonClick">
                        <div className="blockoneonClickcross">
                          <p>Course Performance</p>
                          <p onClick={() => courseopenHandler(1)}>X</p>
                        </div>
                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p>Period Begins</p>
                            <p>10.15.17 </p>
                          </div>
                        </div>

                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p>Period Ends</p>
                            <p>10.15.18</p>
                          </div>
                        </div>

                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "'Roboto',sens-serif",
                              }}
                            >
                              Top Performers
                            </p>
                          </div>
                        </div>

                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "'Roboto',sens-serif",
                              }}
                            >
                              Chart View
                            </p>
                          </div>
                        </div>

                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "'Roboto',sens-serif",
                              }}
                            >
                              Customize My Views
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {screenSize === false && (
                  <>
                    <div className="mixdataDiv">
                      <h5 onClick={() => courseopenHandler(1)}>
                        <span>87</span>
                        <span className="extra">.9</span>
                        <sup>%</sup>
                      </h5>
                    </div>
                    <div className="bottomdataDiv">
                      <div>
                        <p onClick={() => courseopenHandler(1)}>
                          Company Avg Score vs Others
                        </p>
                      </div>
                      <div onClick={() => courseopenHandler(1)}>
                        <img src={Uparrowimg} alt="" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* ////////////// */}
              {/* <bloctwo */}
              <div className="blocktwo">
                <div className="dottsimgflex">
                  <div onClick={() => popupHandler(2)}>
                    <div className="dotsDivmain">
                      <div className="dotsDiv"></div>
                      <div className="dotsDiv"></div>
                      <div className="dotsDiv"></div>
                    </div>
                  </div>
                  {popup === 2 && (
                    <div className="popupblockrelative2">
                      <div className="popupblock2">
                        <p>
                          Certifications completed from within total
                          certifications attempted by team members of this
                          company.
                        </p>
                        <p onClick={() => popupHandler(2)}>X</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <div onClick={() => popupHandler(2)}>
                      <img src={Exlamationimg} alt="" />
                    </div>
                  </div>
                </div>

                <div className="datanumberDiv2">
                  <div onClick={() => courseopenHandler(2)}>
                    <h6>Certification Performance</h6>
                  </div>
                  <div>
                    <h5 onClick={() => courseopenHandler(2)}>
                      <sup>-</sup>
                      <span>2</span>
                      <span className="extra">.1</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                {courseopen === 2 && (
                  <div className="blocktworelative">
                    <div className="blocktwodownonclick">
                      <div className="certificatecrossflex">
                        <p>
                          {" "}
                          Certification <br />
                          Performance
                        </p>
                        <p onClick={() => courseopenHandler(2)}>X</p>
                      </div>
                      <div className="certificateperiodflex">
                        <p>Period Begin</p>
                        <p>10.15.17</p>
                      </div>
                      <div className="certificateperiodflex">
                        <p>Period Ends</p>
                        <p>10.15.17</p>
                      </div>
                      <div className="boxtwoul">
                        <ul>
                          <li>Top Performers</li>
                          <li>Chart View</li>
                          <li>Customize My Views</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mixdataDiv2">
                  <h5 onClick={() => courseopenHandler(2)}>
                    <span>78</span>
                    <span className="extra">.6</span>
                    <sup>%</sup>
                  </h5>
                </div>
                <div className="bottomdataDiv2">
                  <div onClick={() => courseopenHandler(2)}>
                    <p>Company Avg Score vs Others</p>
                  </div>
                  <img
                    src={Downarrow}
                    alt=""
                    onClick={() => courseopenHandler(2)}
                  />
                </div>
              </div>
              {/* ////////////// */}
              {/* thirdbox */}
              <div className="blocktwo">
                <div className="dottsimgflex">
                  <div onClick={() => popupHandler(3)}>
                    <div className="dotsDivmain">
                      <div className="dotsDiv"></div>
                      <div className="dotsDiv"></div>
                      <div className="dotsDiv"></div>
                    </div>
                  </div>
                  {popup === 3 && (
                    <div className="popupblockrelative2">
                      <div className="popupblock2">
                        <p>
                          Courses completed from within total courses attempted
                          by team members of this company.
                        </p>
                        <p onClick={() => popupHandler(3)}>X</p>
                      </div>
                    </div>
                  )}
                  <div>
                    <div>
                      <img
                        src={Exlamationimg}
                        alt=""
                        onClick={() => popupHandler(3)}
                      />
                    </div>
                  </div>
                </div>
                <div className="datanumberDiv2">
                  <div>
                    <h6>Courses - Completion Rate</h6>
                  </div>
                  <div>
                    <h5>
                      <sup>-</sup>
                      <span>8</span>
                      <span className="extra">.63</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                <div className="mixdataDiv2">
                  <h5>
                    <span>30</span>
                    <span className="extra">.16</span>
                    <sup>%</sup>
                  </h5>
                </div>
                <div className="bottomdataDiv2">
                  <div>
                    <p>Company Completion Rate vs Others</p>
                  </div>
                  <img src={Downarrow} alt="" />
                </div>
              </div>
              {/* ////////////// */}

              <div className="blockOne">
                <div className="dotspopflex">
                  <div className="dotsDivmain" onClick={() => popupHandler(4)}>
                    <div className="dotsDiv"></div>
                    <div className="dotsDiv"></div>
                    <div className="dotsDiv"></div>
                  </div>
                  {popup === 4 && (
                    <div className="popupblockrelative">
                      <div className="popupblock">
                        <p>
                          Percentage of courses passed against courses
                          attempted.
                        </p>
                        <p onClick={() => popupHandler(4)}>X</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="datanumberDiv">
                  <div onClick={() => courseopenHandler(4)}>
                    <h6>Course Pass Rate</h6>
                  </div>
                  <div>
                    <h5 onClick={() => courseopenHandler(4)}>
                      <sup>+</sup>
                      <span>3</span>
                      <span className="extra">.41</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                {courseopen === 4 && (
                  <div>
                    <div className="blockonerelative">
                      <div
                        className="blockoneonClick"
                        style={{ background: "rgba(2, 107, 193, 0.9)" }}
                      >
                        <div className="blockoneonClickcross">
                          <p>Course Pass Rate</p>
                          <p onClick={() => courseopenHandler(4)}>X</p>
                        </div>
                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p>Period Begins</p>
                            <p>10.15.17 </p>
                          </div>
                        </div>

                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p>Period Ends</p>
                            <p>10.15.18</p>
                          </div>
                        </div>

                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "'Roboto',sens-serif",
                              }}
                            >
                              Top Performers
                            </p>
                          </div>
                        </div>

                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "'Roboto',sens-serif",
                              }}
                            >
                              Chart View
                            </p>
                          </div>
                        </div>

                        <div className="courseperformancedowndata">
                          <div className="dataonecourse">
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "'Roboto',sens-serif",
                              }}
                            >
                              Customize My Views
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mixdataDiv">
                  <h5 onClick={() => courseopenHandler(4)}>
                    <span>98</span>
                    <span className="extra">.41</span>
                    <sup>%</sup>
                  </h5>
                </div>
                <div className="bottomdataDiv">
                  <div onClick={() => courseopenHandler(4)}>
                    <p>Company Pass Rate vs Others</p>
                  </div>
                  <img
                    src={Uparrowimg}
                    alt=""
                    onClick={() => courseopenHandler(4)}
                  />
                </div>
              </div>
              {/* ////////////// */}

              <div className="blockfive">
                <div className="dottsimgflex">
                  <div>
                    <div
                      className="dotsDivmain"
                      onClick={() => popupHandler(5)}
                    >
                      <div className="dotsDiv"></div>
                      <div className="dotsDiv"></div>
                      <div className="dotsDiv"></div>
                    </div>
                  </div>
                  {popup === 5 && (
                    <div className="popupblockrelative5">
                      <div className="popupblock5">
                        <p>
                          Percentage of courses failed against courses
                          attempted.
                        </p>
                        <div onClick={() => popupHandler(5)}>
                          <p>X</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <div>
                      <img src={Exlamationimg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="datanumberDiv5">
                  <div onClick={() => courseopenHandler(5)}>
                    <h6>Course Fail Rate</h6>
                  </div>
                  <div>
                    <h5 onClick={() => courseopenHandler(5)}>
                      <sup>-</sup>
                      <span>3</span>
                      <span className="extra">.43</span>
                      <sup>%</sup>
                    </h5>
                  </div>
                </div>
                {courseopen === 5 && (
                  <div className="boxfiverelative">
                    <div className="boxfiveabsolute">
                      <div className="crosscrossflex">
                        <p>Course Fail Rate</p>
                        <p onClick={() => courseopenHandler(5)}>X</p>
                      </div>
                      <div className="boxfivedowndata">
                        <p>Period Begins</p>
                        <p>10.15.17</p>
                      </div>
                      <div className="boxfivedowndata">
                        <p>Period Begins</p>
                        <p>10.15.17</p>
                      </div>
                      <div className="boxfiveul">
                        <ul>
                          <li>Top Performers</li>
                          <li>Chart View</li>
                          <li>Customize My Views</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mixdataDiv5">
                  <h5 onClick={() => courseopenHandler(5)}>
                    <span>1</span>
                    <span className="extra">.57</span>
                    <sup>%</sup>
                  </h5>
                </div>
                <div className="bottomdataDiv5">
                  <div onClick={() => courseopenHandler(5)}>
                    <p>Company Fail vs Others</p>
                  </div>
                  <img
                    src={Downarrow}
                    alt=""
                    onClick={() => courseopenHandler(5)}
                  />
                </div>
              </div>
              {/* ////////////// */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
