import "../sectionone/style.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ZingChart from "zingchart-react";
import "zingchart/es6";
import AOS from "aos";
import "aos/dist/aos.css";
import Gridimg from "../../assets/images/grid.png";
import arrowsigndown from "../../assets/images/arrowsigndown.png";
import arrowsignup from "../../assets/images/arrowsignup.png";
import Chat2img from "../../assets/images/chat2.png";
import Greyup from "../../assets/images/greyup.png";
import Greydown from "../../assets/images/greydown.png";
import Whiteup from "../../assets/images/whiteup.png";
import Whitedown from "../../assets/images/whitedown.png";
import Arrow_up from "../../assets/images/arrow_up.png";
import Profile from "../../assets/images/user.png";
import Closeimg from "../../assets/images/close.png";
import { useEffect, useRef, useState } from "react";

const Sectionone = () => {
  const [openclose, setOpenclose] = useState(0);
  const [addopen, setAddopen] = useState(0);
  const [mobarrowone, setMobarrowone] = useState(0);
  const [mobpop, setMobpop] = useState(0);
  const [mobdata, setMobdata] = useState(0);
  const [mobperformer, setMobperformer] = useState(0);
  const [mobtopperformer, setmobtopperformer] = useState(0);
  const [mobaddmore, setMobaddmore] = useState(1);
  const [lineclose, setLineclose] = useState(1);
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, [AOS]);
  const mobaddmoreHandler = (value) => {
    if (mobaddmore === 1) {
      setMobaddmore(0);
    } else {
      setMobaddmore(value);
    }
  };
  const linecloseHandler = (value) => {
    if (lineclose === 1) {
      setLineclose(0);
    } else {
      setLineclose(value);
    }
  };
  const mobcustomizeHandler = (value) => {
    if (mobperformer === value) {
      setMobperformer(0);
    } else {
      setMobperformer(0);
    }
  };
  const mobtopperformerHandler = (value) => {
    if (mobtopperformer === value) {
      setmobtopperformer(0);
    } else {
      setmobtopperformer(value);
    }
  };
  const mobperformerHandler = (value) => {
    if (mobperformer === value) {
      setMobperformer(0);
    } else {
      setMobperformer(value);
    }
  };
  const mobdataHandler = (value) => {
    if (mobdata === value) {
      setMobdata(0);
    } else {
      setMobdata(value);
    }
  };
  const mobpopHandler = (value) => {
    if (mobpop === value) {
      setMobpop(0);
    } else {
      setMobpop(value);
    }
  };
  const mobarrowoneHandler = (value) => {
    if (mobarrowone === value) {
      setMobarrowone(0);
    } else {
      setMobarrowone(value);
    }
  };
  const box = useRef(0);
  useEffect(() => {
    if (openclose === 1) {
      box.current.style.width = "90%";
    }
    if (openclose === 2) {
      box.current.style.width = "90%";
    }
    if (openclose === 3) {
      box.current.style.width = "90%";
    }
    if (openclose === 4) {
      box.current.style.width = "90%";
    }
    if (openclose === 5) {
      box.current.style.width = "90%";
    }
    if (openclose === 6) {
      box.current.style.width = "90%";
    }
    if (openclose === 7) {
      box.current.style.width = "90%";
    }
    if (openclose === 8) {
      box.current.style.width = "90%";
    }
    if (openclose === 9) {
      box.current.style.width = "90%";
    }
    if (openclose === 10) {
      box.current.style.width = "90%";
    }
    console.log("openClose", openclose);
  }, [openclose]);
  const opencloseHnadler = (value) => {
    if (openclose === value) {
      setOpenclose(0);
    } else {
      setOpenclose(value);
    }
  };
  const addmoreHandler = (value) => {
    console.log("value", value);
    console.log("addopen", addopen);
    if (addopen === value) {
      setAddopen(0);
    } else {
      setAddopen(value);
    }
  };
  var Line = {
    type: "line",
    "background-color": "transparent",
    series: [
      {
        values: [20, 30, 25, 30, 18, 22, 25, 30],
        "line-color": "#6666FF",
        "line-style": "dashed",
        "line-width": 5,
      },
    ],
  };

  let state = {
    gui: {
      contextMenu: {
        backgroundColor: "#306EAA", // sets background for entire contextMenu
        button: {
          backgroundColor: "#2D66A4",
          lineColor: "#2D66A4",
          visible: false,
        },
        docked: true,
        gear: {
          alpha: 1,
          backgroundColor: "#2D66A4",
        },
        item: {
          backgroundColor: "#306EAA",
          borderColor: "#306EAA",
          borderWidth: "0px",
          color: "#fff",
          fontFamily: "Lato",
        },
        position: "right",
      },
    },
    graphset: [
      {
        type: "ring",
        backgroundColor: "transparent",
        title: {
          text: "",
          padding: "15px",
          fontColor: "#1E5D9E",
          fontFamily: "Lato",
          fontSize: "14px",
        },
        subtitle: {
          text: "",
          padding: "5px",
          fontColor: "#777",
          fontFamily: "Lato",
          fontSize: "12px",
        },
        legend: {
          adjustLayout: true,
          align: "center",
          backgroundColor: "#FBFCFE",
          borderWidth: "0px",
          item: {
            cursor: "pointer",
            fontColor: "#777",
            fontSize: "12px",
            offsetX: "-6px",
          },
          marker: {
            type: "circle",
            borderWidth: "0px",
            cursor: "pointer",
            size: 5,
          },
          mediaRules: [
            {
              maxWidth: "500px",
              visible: false,
            },
          ],
          toggleAction: "remove",
          verticalAlign: "bottom",
        },
        plot: {
          valueBox: [
            {
              type: "all",
              text: "%t",
              placement: "out",
            },
            {
              type: "all",
              text: "%npv%",
              placement: "in",
            },
          ],
          animation: {
            effect: "ANIMATION_EXPAND_VERTICAL",
            sequence: "ANIMATION_BY_PLOT_AND_NODE",
          },
          backgroundColor: "#FBFCFE",
          borderWidth: "0px",
          hoverState: {
            cursor: "hand",
          },
          slice: "60%",
        },
        plotarea: {
          margin: "70px 0px 10px 0px",
          backgroundColor: "transparent",
          borderRadius: "10px",
          borderWidth: "0px",
        },
        scaleR: {
          refAngle: 270,
        },
        tooltip: {
          text: '<span style="color:%color">Page Url: %t</span><br><span style="color:%color">Pageviews: %v</span>',
          anchor: "c",
          backgroundColor: "none",
          borderWidth: "0px",
          fontSize: "16px",
          mediaRules: [
            {
              maxWidth: "500px",
              y: "54%",
            },
          ],
          sticky: true,
          thousandsSeparator: ",",
          x: "50%",
          y: "50%",
        },
        noData: {
          text: "No Selection",
          alpha: 0.6,
          backgroundColor: "#20b2db",
          bold: true,
          fontSize: "18px",
          textAlpha: 0.9,
        },
        series: [
          {
            text: "",
            values: [106541],
            backgroundColor: "#00BAF2",
            lineColor: "#00BAF2",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#00BAF2",
            },
          },
          {
            text: "",
            values: [56711],
            backgroundColor: "#E80C60",
            lineColor: "#E80C60",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#E80C60",
            },
          },
          {
            text: "",
            values: [43781],
            backgroundColor: "#9B26AF",
            lineColor: "#9B26AF",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#9B26AF",
            },
          },
        ],
      },
    ],
  };

  return (
    <div>
      {/* responsive */}
      <div className="displaydiv">
        {mobarrowone === 1 ? (
          ""
        ) : (
          <div className="greencourseback">
            <div onClick={() => mobarrowoneHandler(1)}>
              <h6>Course Performance</h6>
            </div>
            <div onClick={() => mobarrowoneHandler(1)}>
              <img src={Whiteup} alt="" />
            </div>
          </div>
        )}

        {
          mobarrowone === 1 && (
            <div className="greencourseabsolute">
              <div className="mob-dotsarrowflex">
                <div>
                  <div className="mob-dots" onClick={() => mobpopHandler(1)}>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                  </div>
                </div>
                {mobpop === 1 && (
                  <div className="mob-popup">
                    <div>
                      <p>
                        Indicates average performance in courses that are passed
                        by team members
                      </p>
                    </div>
                    <div>
                      <img
                        src={Closeimg}
                        alt=""
                        onClick={() => mobpopHandler(1)}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div
                    className="mob-downarrow"
                    onClick={() => mobarrowoneHandler(1)}
                  >
                    <img src={Whitedown} alt="" />
                  </div>
                </div>
              </div>
              <div className="mob-courseflex">
                <div>
                  <h6 onClick={() => mobdataHandler(1)}>Course Performance</h6>
                </div>
                <div>
                  <h5 onClick={() => mobdataHandler(1)}>
                    <sup>+</sup>
                    <span>0</span>
                    <span className="mob-extra">.1</span>
                    <sup>%</sup>
                  </h5>
                </div>
              </div>
              <div className="opacitydataDiv">
                <h5 onClick={() => mobdataHandler(1)}>
                  <span>87</span>
                  <span className="opacity-extra">.9</span>
                  <sup>%</sup>
                </h5>
              </div>
              <div className="mob-companyarrowflex">
                <div onClick={() => mobdataHandler(1)}>
                  <p>Company Avg Score vs Others</p>
                </div>
                <div className="mob-arrow-up">
                  <img
                    src={Arrow_up}
                    alt=""
                    onClick={() => mobdataHandler(1)}
                  />
                </div>
              </div>
              {mobdata === 1 && (
                <div>
                  <div className="mob-numberscol">
                    <div className="mob-periodbegin">
                      <p>Period Begins</p>
                      <p>10.15.17 </p>
                    </div>
                    <div className="mob-periodbegin">
                      <p>Period Ends</p>
                      <p>10.15.18 </p>
                    </div>
                    <div className="mob-lastthree">
                      <p onClick={() => mobperformerHandler(1)}>
                        Top Performers
                      </p>
                      {mobperformer === 1 && (
                        <div>
                          <div className="topperformercol">
                            {/* 1 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Ryan Grubb</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //// */}
                            {/* 2 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Andrew LaPine</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////// */}
                            {/* 3 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Patrick Eberhard</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* /////////// */}
                            {/* viewall */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div onClick={() => mobtopperformerHandler(1)}>
                                <p>View All Top Performers</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////////// */}
                            {mobtopperformer === 1 && (
                              <div>
                                {/* 4*/}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 5 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 6 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 7 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <p>Chart View</p>
                      <p onClick={() => mobcustomizeHandler(1)}>
                        Customize My Views
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
          /* ///// */
        }
        {/* ///end/////////// */}

        {/* certification*/}
        <div className="greencourseback" style={{ background: "#F70065" }}>
          <div onClick={() => mobarrowoneHandler(3)}>
            <h6>Certification Performance</h6>
          </div>
          <div onClick={() => mobarrowoneHandler(3)}>
            <img src={Whiteup} alt="" />
          </div>
        </div>
        {
          mobarrowone === 3 && (
            <div
              className="greencourseabsolute"
              style={{ background: "#F70065" }}
            >
              <div className="mob-dotsarrowflex">
                <div>
                  <div className="mob-dots" onClick={() => mobpopHandler(3)}>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                  </div>
                </div>
                {mobpop === 3 && (
                  <div className="mob-popup">
                    <div>
                      <p>
                        Indicates average performance in courses that are passed
                        by team members
                      </p>
                    </div>
                    <div>
                      <img
                        src={Closeimg}
                        alt=""
                        onClick={() => mobpopHandler(3)}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div
                    className="mob-downarrow"
                    onClick={() => mobarrowoneHandler(3)}
                  >
                    <img src={Whitedown} alt="" />
                  </div>
                </div>
              </div>
              <div className="mob-courseflex">
                <div>
                  <h6 onClick={() => mobdataHandler(3)}>Course Performance</h6>
                </div>
                <div>
                  <h5 onClick={() => mobdataHandler(3)}>
                    <sup>+</sup>
                    <span>0</span>
                    <span className="mob-extra">.1</span>
                    <sup>%</sup>
                  </h5>
                </div>
              </div>
              <div className="opacitydataDiv">
                <h5 onClick={() => mobdataHandler(3)}>
                  <span>87</span>
                  <span className="opacity-extra">.9</span>
                  <sup>%</sup>
                </h5>
              </div>
              <div className="mob-companyarrowflex">
                <div onClick={() => mobdataHandler(3)}>
                  <p>Company Avg Score vs Others</p>
                </div>
                <div className="mob-arrow-up">
                  <img
                    src={Arrow_up}
                    alt=""
                    onClick={() => mobdataHandler(3)}
                  />
                </div>
              </div>
              {mobdata === 3 && (
                <div>
                  <div className="mob-numberscol">
                    <div className="mob-periodbegin">
                      <p>Period Begins</p>
                      <p>10.15.17 </p>
                    </div>
                    <div className="mob-periodbegin">
                      <p>Period Ends</p>
                      <p>10.15.18 </p>
                    </div>
                    <div className="mob-lastthree">
                      <p onClick={() => mobperformerHandler(3)}>
                        Top Performers
                      </p>
                      {mobperformer === 3 && (
                        <div>
                          <div className="topperformercol">
                            {/* 1 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Ryan Grubb</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //// */}
                            {/* 2 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Andrew LaPine</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////// */}
                            {/* 3 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Patrick Eberhard</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* /////////// */}
                            {/* viewall */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div onClick={() => mobtopperformerHandler(3)}>
                                <p>View All Top Performers</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////////// */}
                            {mobtopperformer === 3 && (
                              <div>
                                {/* 4*/}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 5 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 6 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 7 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <p>Chart View</p>
                      <p onClick={() => mobcustomizeHandler(3)}>
                        Customize My Views
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
          /* ///// */
        }
        {/* ///end/////////// */}

        {/* coursesCompletion */}
        <div className="greencourseback" style={{ background: "#544E9F" }}>
          <div onClick={() => mobarrowoneHandler(2)}>
            <h6>Courses-Completion Rate</h6>
          </div>
          <div onClick={() => mobarrowoneHandler(2)}>
            <img src={Whiteup} alt="" />
          </div>
        </div>
        {
          mobarrowone === 2 && (
            <div
              className="greencourseabsolute"
              style={{ background: "#544E9F" }}
            >
              <div className="mob-dotsarrowflex">
                <div>
                  <div className="mob-dots" onClick={() => mobpopHandler(2)}>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                  </div>
                </div>
                {mobpop === 2 && (
                  <div className="mob-popup">
                    <div>
                      <p>
                        Indicates average performance in courses that are passed
                        by team members
                      </p>
                    </div>
                    <div>
                      <img
                        src={Closeimg}
                        alt=""
                        onClick={() => mobpopHandler(2)}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div
                    className="mob-downarrow"
                    onClick={() => mobarrowoneHandler(2)}
                  >
                    <img src={Whitedown} alt="" />
                  </div>
                </div>
              </div>
              <div className="mob-courseflex">
                <div>
                  <h6 onClick={() => mobdataHandler(2)}>Course Performance</h6>
                </div>
                <div>
                  <h5 onClick={() => mobdataHandler(2)}>
                    <sup>+</sup>
                    <span>0</span>
                    <span className="mob-extra">.1</span>
                    <sup>%</sup>
                  </h5>
                </div>
              </div>
              <div className="opacitydataDiv">
                <h5 onClick={() => mobdataHandler(2)}>
                  <span>87</span>
                  <span className="opacity-extra">.9</span>
                  <sup>%</sup>
                </h5>
              </div>
              <div className="mob-companyarrowflex">
                <div onClick={() => mobdataHandler(2)}>
                  <p>Company Avg Score vs Others</p>
                </div>
                <div className="mob-arrow-up">
                  <img
                    src={Arrow_up}
                    alt=""
                    onClick={() => mobdataHandler(2)}
                  />
                </div>
              </div>
              {mobdata === 2 && (
                <div>
                  <div className="mob-numberscol">
                    <div className="mob-periodbegin">
                      <p>Period Begins</p>
                      <p>10.15.17 </p>
                    </div>
                    <div className="mob-periodbegin">
                      <p>Period Ends</p>
                      <p>10.15.18 </p>
                    </div>
                    <div className="mob-lastthree">
                      <p onClick={() => mobperformerHandler(2)}>
                        Top Performers
                      </p>
                      {mobperformer === 2 && (
                        <div>
                          <div className="topperformercol">
                            {/* 1 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Ryan Grubb</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //// */}
                            {/* 2 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Andrew LaPine</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////// */}
                            {/* 3 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Patrick Eberhard</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* /////////// */}
                            {/* viewall */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div onClick={() => mobtopperformerHandler(2)}>
                                <p>View All Top Performers</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////////// */}
                            {mobtopperformer === 2 && (
                              <div>
                                {/* 4*/}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 5 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 6 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 7 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <p>Chart View</p>
                      <p onClick={() => mobcustomizeHandler(2)}>
                        Customize My Views
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
          /* ///// */
        }
        {/* ///end/////////// */}

        {/* coursepassrate */}
        <div className="greencourseback" style={{ background: "#0075D5" }}>
          <div onClick={() => mobarrowoneHandler(5)}>
            <h6>Courses pass Rate</h6>
          </div>
          <div onClick={() => mobarrowoneHandler(5)}>
            <img src={Whiteup} alt="" />
          </div>
        </div>
        {
          mobarrowone === 5 && (
            <div
              className="greencourseabsolute"
              style={{ background: "#0075D5" }}
            >
              <div className="mob-dotsarrowflex">
                <div>
                  <div className="mob-dots" onClick={() => mobpopHandler(5)}>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                  </div>
                </div>
                {mobpop === 5 && (
                  <div className="mob-popup">
                    <div>
                      <p>
                        Indicates average performance in courses that are passed
                        by team members
                      </p>
                    </div>
                    <div>
                      <img
                        src={Closeimg}
                        alt=""
                        onClick={() => mobpopHandler(5)}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div
                    className="mob-downarrow"
                    onClick={() => mobarrowoneHandler(5)}
                  >
                    <img src={Whitedown} alt="" />
                  </div>
                </div>
              </div>
              <div className="mob-courseflex">
                <div>
                  <h6 onClick={() => mobdataHandler(5)}>Course Performance</h6>
                </div>
                <div>
                  <h5 onClick={() => mobdataHandler(5)}>
                    <sup>+</sup>
                    <span>0</span>
                    <span className="mob-extra">.1</span>
                    <sup>%</sup>
                  </h5>
                </div>
              </div>
              <div className="opacitydataDiv">
                <h5 onClick={() => mobdataHandler(5)}>
                  <span>87</span>
                  <span className="opacity-extra">.9</span>
                  <sup>%</sup>
                </h5>
              </div>
              <div className="mob-companyarrowflex">
                <div onClick={() => mobdataHandler(5)}>
                  <p>Company Avg Score vs Others</p>
                </div>
                <div className="mob-arrow-up">
                  <img
                    src={Arrow_up}
                    alt=""
                    onClick={() => mobdataHandler(2)}
                  />
                </div>
              </div>
              {mobdata === 5 && (
                <div>
                  <div className="mob-numberscol">
                    <div className="mob-periodbegin">
                      <p>Period Begins</p>
                      <p>10.15.17 </p>
                    </div>
                    <div className="mob-periodbegin">
                      <p>Period Ends</p>
                      <p>10.15.18 </p>
                    </div>
                    <div className="mob-lastthree">
                      <p onClick={() => mobperformerHandler(5)}>
                        Top Performers
                      </p>
                      {mobperformer === 5 && (
                        <div>
                          <div className="topperformercol">
                            {/* 1 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Ryan Grubb</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //// */}
                            {/* 2 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Andrew LaPine</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////// */}
                            {/* 3 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Patrick Eberhard</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* /////////// */}
                            {/* viewall */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div onClick={() => mobtopperformerHandler(5)}>
                                <p>View All Top Performers</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////////// */}
                            {mobtopperformer === 5 && (
                              <div>
                                {/* 4*/}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 5 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 6 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 7 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <p>Chart View</p>
                      <p onClick={() => mobcustomizeHandler(5)}>
                        Customize My Views
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
          /* ///// */
        }
        {/* ///end/////////// */}

        {/* coursefailrate */}
        <div className="greencourseback" style={{ background: "#FCAC2A" }}>
          <div onClick={() => mobarrowoneHandler(4)}>
            <h6>Courses Fail Rate</h6>
          </div>
          <div onClick={() => mobarrowoneHandler(4)}>
            <img src={Whiteup} alt="" />
          </div>
        </div>
        {
          mobarrowone === 4 && (
            <div
              className="greencourseabsolute"
              style={{ background: "#FCAC2A" }}
            >
              <div className="mob-dotsarrowflex">
                <div>
                  <div className="mob-dots" onClick={() => mobpopHandler(4)}>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                    <div className="mob-dots-three"></div>
                  </div>
                </div>
                {mobpop === 4 && (
                  <div className="mob-popup">
                    <div>
                      <p>
                        Indicates average performance in courses that are passed
                        by team members
                      </p>
                    </div>
                    <div>
                      <img
                        src={Closeimg}
                        alt=""
                        onClick={() => mobpopHandler(4)}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div
                    className="mob-downarrow"
                    onClick={() => mobarrowoneHandler(4)}
                  >
                    <img src={Whitedown} alt="" />
                  </div>
                </div>
              </div>
              <div className="mob-courseflex">
                <div>
                  <h6 onClick={() => mobdataHandler(4)}>Course Performance</h6>
                </div>
                <div>
                  <h5 onClick={() => mobdataHandler(4)}>
                    <sup>+</sup>
                    <span>0</span>
                    <span className="mob-extra">.1</span>
                    <sup>%</sup>
                  </h5>
                </div>
              </div>
              <div className="opacitydataDiv">
                <h5 onClick={() => mobdataHandler(4)}>
                  <span>87</span>
                  <span className="opacity-extra">.9</span>
                  <sup>%</sup>
                </h5>
              </div>
              <div className="mob-companyarrowflex">
                <div onClick={() => mobdataHandler(4)}>
                  <p>Company Avg Score vs Others</p>
                </div>
                <div className="mob-arrow-up">
                  <img
                    src={Arrow_up}
                    alt=""
                    onClick={() => mobdataHandler(2)}
                  />
                </div>
              </div>
              {mobdata === 4 && (
                <div>
                  <div className="mob-numberscol">
                    <div className="mob-periodbegin">
                      <p>Period Begins</p>
                      <p>10.15.17 </p>
                    </div>
                    <div className="mob-periodbegin">
                      <p>Period Ends</p>
                      <p>10.15.18 </p>
                    </div>
                    <div className="mob-lastthree">
                      <p onClick={() => mobperformerHandler(4)}>
                        Top Performers
                      </p>
                      {mobperformer === 4 && (
                        <div>
                          <div className="topperformercol">
                            {/* 1 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Ryan Grubb</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //// */}
                            {/* 2 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Andrew LaPine</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////// */}
                            {/* 3 */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div>
                                <p>Patrick Eberhard</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* /////////// */}
                            {/* viewall */}
                            <div className="topperformerflex">
                              <div>
                                <img src={Profile} alt="" />
                              </div>
                              <div onClick={() => mobtopperformerHandler(4)}>
                                <p>View All Top Performers</p>
                              </div>
                              <div>
                                <div className="justdot"></div>
                              </div>
                            </div>
                            {/* //////////// */}
                            {mobtopperformer === 4 && (
                              <div>
                                {/* 4*/}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 5 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 6 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                                {/* 7 */}
                                <div className="topperformerflex">
                                  <div>
                                    <img src={Profile} alt="" />
                                  </div>
                                  <div>
                                    <p>Patrick Eberhard</p>
                                  </div>
                                  <div>
                                    <div className="justdot"></div>
                                  </div>
                                </div>
                                {/* /////////// */}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <p>Chart View</p>
                      <p onClick={() => mobcustomizeHandler(4)}>
                        Customize My Views
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
          /* ///// */
        }
        {/* ///end/////////// */}
      </div>
      {/* website */}
      <div className="background-color-Div">
        <div className="back-color">
          {/* responsiveness */}
          <div className="carouselnone">
            <Carousel>
              <div>
                <div className="carouselData">
                  <div className="carouselDotsflex">
                    <div className="carouseldots"></div>
                    <div className="carouseldots"></div>
                    <div className="carouseldots"></div>
                  </div>
                  <div className="carouselpara">
                    <p>Utilization</p>
                  </div>
                </div>
                <div className="justifyCenter">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={66} />
                  </div>
                </div>
              </div>

              <div className="charttwo">
                <div className="carouselData">
                  <div className="carouselDotsflex">
                    <div className="carouseldots"></div>
                    <div className="carouseldots"></div>
                    <div className="carouseldots"></div>
                  </div>
                  <div className="carouselpara">
                    <p>Utilization</p>
                  </div>
                </div>
                <div className="justifyCenter">
                  <ZingChart data={state} />
                  <div id="myChart" class="chart--container">
                    <a class="zc-ref" href="https://www.zingchart.com/"></a>
                  </div>
                </div>
              </div>

              <div>
                <div className="carouselData">
                  <div className="carouselDotsflex">
                    <div className="carouseldots"></div>
                    <div className="carouseldots"></div>
                    <div className="carouseldots"></div>
                  </div>
                  <div className="carouselpara">
                    <p>Utilization</p>
                  </div>
                </div>
                <div className="chartthree">
                  <h1>51</h1>
                </div>
              </div>
            </Carousel>
          </div>

          <div className="linechartnone">
            <div className="linedotsflex">
              {lineclose === 0 ? (
                ""
              ) : (
                <div>
                  <div className="dotslineflex">
                    <div className="linedots3"></div>
                    <div className="linedots3"></div>
                    <div className="linedots3"></div>
                  </div>
                </div>
              )}

              <div>
                <div className="linedivarrow">
                  {lineclose === 0 ? (
                    <div
                      onClick={() =>
                        lineclose === 1
                          ? linecloseHandler(0)
                          : linecloseHandler(1)
                      }
                    >
                      <img src={Whitedown} alt="" />
                    </div>
                  ) : (
                    <img
                      src={Whiteup}
                      alt=""
                      onClick={() => linecloseHandler(1)}
                    />
                  )}
                </div>
              </div>
            </div>
            {lineclose === 1 && (
              <div>
                <div className="dataflexend2">
                  <div className="dataupone2">
                    <h3>Professional Development Index</h3>
                  </div>
                  <div className="mixdataLis2">
                    <ul>
                      <li>Average</li>
                      <li>Your Company 2018</li>
                      <li>Your Company 2017</li>
                    </ul>
                  </div>
                </div>
                <div className="linebackimg">
                  <div className="lineChart">
                    <ZingChart data={Line} />
                    <div id="myChart"></div>
                  </div>
                </div>
                <div className="monthsDivflex2">
                  <div className="months2">Jan</div>
                  <div className="months2">Feb</div>
                  <div className="months2">Mar</div>
                  <div className="months2">Apr</div>
                  <div className="months2">May</div>
                  <div className="months2">Jun</div>
                  <div className="months2">jul</div>
                  <div className="months2">Aug</div>
                  <div className="months2">Sep</div>
                  <div className="months2">Oct</div>
                  <div className="months2">Nov</div>
                  <div className="months2">Dec</div>
                </div>
              </div>
            )}
          </div>

          {/* /////////////// */}
          <div className="flexDotts">
            <div className="dottsone">
              <div className="dotone"></div>
              <div className="dotone"></div>
              <div className="dotone"></div>
            </div>
            <div className="dottsone">
              <div className="dotone"></div>
              <div className="dotone"></div>
              <div className="dotone"></div>
            </div>
          </div>
          <div className="chartcenter">
          <div>
                <h3>Utilization</h3>
              </div>
          <div className="chartupflex2">
                <div className="chartone2">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={66} />
                  </div>
                </div>
                <div className="charttwo2">
                  <ZingChart data={state} />
                  <div id="myChart" class="chart--container">
                    <a class="zc-ref" href="https://www.zingchart.com/"></a>
                  </div>
                </div>
              </div>
              <div className="chartdownflex2">
                <div>
                  <div className="chartthree3">
                    <h1>51</h1>
                  </div>
                </div>
                <div>
                  <div className="chartfour4">
                    <div style={{ width: 200, height: 200 }}>
                      <CircularProgressbar value={66} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="doubledotflex2">
                <div className="firstDot2">
                  <div className="firstdottts2">
                    <div className="leftdots2"></div>
                    <div className="leftdots2"></div>
                    <div className="leftdots2"></div>
                  </div>
                  <div className="datadowndot2">
                    <h3>
                      Course Duration Average <br />
                      <span>(in Days)</span>
                    </h3>
                  </div>
                </div>

                <div className="firstDot2">
                  <div className="firstdottts2">
                    <div className="leftdots2"></div>
                    <div className="leftdots2"></div>
                    <div className="leftdots2"></div>
                  </div>
                  <div className="datadowndot2">
                    <h3>Single Engagement</h3>
                  </div>
                </div>
              </div>
              
          </div>
          <div className="linechart3">
          <div className="carouselDotsflex">
                    <div className="carouseldots"></div>
                    <div className="carouseldots"></div>
                    <div className="carouseldots"></div>
                  </div>
          <div className="dataflexend3">
                  <div className="dataupone3">
                    <h3>Professional Development Index</h3>
                  </div>
                  <div className="mixdataLis3">
                    <ul>
                      <li>Average</li>
                      <li>Your Company 2018</li>
                      <li>Your Company 2017</li>
                    </ul>
                  </div>
                </div>
                <div className="linebackimg3">
                  <div className="lineChart">
                    <ZingChart data={Line} />
                    <div id="myChart"></div>
                  </div>
                </div>
                <div className="monthsDivflex2">
                  <div className="months2">Jan</div>
                  <div className="months2">Feb</div>
                  <div className="months2">Mar</div>
                  <div className="months2">Apr</div>
                  <div className="months2">May</div>
                  <div className="months2">Jun</div>
                  <div className="months2">jul</div>
                  <div className="months2">Aug</div>
                  <div className="months2">Sep</div>
                  <div className="months2">Oct</div>
                  <div className="months2">Nov</div>
                  <div className="months2">Dec</div>
                </div>
            </div>
          <div className="bothsideDiv">
            {/* leftsideDiv */}
            <div className="leftsideDiv">
              <div>
                <h3>Utilization</h3>
              </div>
              <div className="chartupflex">
                <div className="chartone">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={66} />
                  </div>
                </div>
                <div className="charttwo">
                  <ZingChart data={state} />
                  <div id="myChart" class="chart--container">
                    <a class="zc-ref" href="https://www.zingchart.com/"></a>
                  </div>
                </div>
              </div>

              <div className="chartdownflex">
                <div>
                  <div className="chartthree">
                    <h1>51</h1>
                  </div>
                </div>
                <div>
                  <div className="chartfour">
                    <div style={{ width: 200, height: 200 }}>
                      <CircularProgressbar value={66} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="doubledotflex">
                <div className="firstDot">
                  <div className="firstdottts">
                    <div className="leftdots"></div>
                    <div className="leftdots"></div>
                    <div className="leftdots"></div>
                  </div>
                  <div className="datadowndot">
                    <h3>
                      Course Duration Average <br />
                      <span>(in Days)</span>
                    </h3>
                  </div>
                </div>

                <div className="firstDot">
                  <div className="firstdottts">
                    <div className="leftdots"></div>
                    <div className="leftdots"></div>
                    <div className="leftdots"></div>
                  </div>
                  <div className="datadowndot">
                    <h3>Single Engagement</h3>
                  </div>
                </div>
              </div>
              <div className="InsightDiv">
                <h1>Insights</h1>
              </div>
              <div className="cardsSection">
                <div className="cardOne" data-aos="fade-right">
                  <p>
                    Looks like your company's Coursework Performance has
                    increased in several areas since last month. Nice job!
                  </p>
                </div>
                <div className="cardtwoend">
                  <div className="cardtwo" data-aos="fade-left">
                    <p>
                      Your company's Wi-Fi competencies might need some
                      attention. Here are a few Courses you might consider:
                      httpz:/bit.ly.kashjf45
                    </p>
                  </div>
                </div>
                <div className="cardthree" data-aos="fade-right">
                  <p>
                    Did you know that you can customize your Company's Home
                    Screen by selecting "Add to Home" under the Extras Menu?
                    Just look for the three dots.
                  </p>
                </div>
                <div className="cardfourend">
                  <div className="cardfour" data-aos="fade-left">
                    <p>
                      Certification is one of the best ways to keep your
                      company's skills current and remain competitive. Stay on
                      top of your company's Certification Performance.
                    </p>
                  </div>
                </div>
                <div className="cardfive" data-aos="fade-right">
                  <p>
                    Did you know that you can customize your Company's Home
                    Screen by selecting "Add to Home" under the Extras Menu?
                    Just look for the three dots.
                  </p>
                </div>
              </div>
              <div className="leftdownimg">
                <div>
                  <img src={Chat2img} alt="" />
                </div>
              </div>
            </div>
            {/* RightsideDiv */}
            <div className="rightsideDiv">
              <div className="dataflexend">
                <div className="dataupone">
                  <h3>Professional Development Index</h3>
                </div>
                <div className="mixdataLis">
                  <ul>
                    <li>Average</li>
                    <li>Your Company 2018</li>
                    <li>Your Company 2017</li>
                  </ul>
                </div>
              </div>
              <div className="lineChart">
                <ZingChart data={Line} />
                <div id="myChart"></div>
              </div>
              <div className="monthsDivflex">
                <div className="months">Jan</div>
                <div className="months">Feb</div>
                <div className="months">Mar</div>
                <div className="months">Apr</div>
                <div className="months">May</div>
                <div className="months">Jun</div>
                <div className="months">jul</div>
                <div className="months">Aug</div>
                <div className="months">Sep</div>
                <div className="months">Oct</div>
                <div className="months">Nov</div>
                <div className="months">Dec</div>
              </div>
              <div className="bigtextdiv">
                <h1>Company Competencies</h1>
                <div className="bitextarrow">
                  {mobaddmore === 1 ? (
                    <div>
                      <img
                        src={Whiteup}
                        alt=""
                        onClick={() => mobaddmoreHandler(1)}
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        src={Whitedown}
                        alt=""
                        onClick={() =>
                          mobaddmore === 1
                            ? mobaddmoreHandler(0)
                            : mobaddmoreHandler(1)
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
              {mobaddmore === 1 && (
                <div>
                  <div className="griddataFlex">
                    <div
                      onClick={() => addmoreHandler(1)}
                      style={{ display: "flex" }}
                    >
                      <div>
                        <img src={Gridimg} />
                      </div>
                      <div>
                        <span>Add More</span>
                      </div>
                    </div>
                  </div>
                  {addopen === 1 && (
                    <div className="gridimgonclick">
                      <div className="gridsheetdata">
                        {/* wifi */}
                        <div
                          className="crosscancel"
                          onClick={() => addmoreHandler(1)}
                        >
                          <p>X</p>
                        </div>

                        <div className="wififlexbetween">
                          <div className="crossswififlex">
                            <div>
                              <div className="crossback">
                                <p>x</p>
                              </div>
                            </div>
                            <div>
                              <div className="wifireddd">
                                <p>wifi</p>
                              </div>
                            </div>
                          </div>
                          <div className="wificolred">
                            <div className="wificolredDots"></div>
                            <div className="wificolredDots"></div>
                            <div className="wificolredDots"></div>
                          </div>
                        </div>
                        {/* accessnetwork */}
                        <div className="AccessNetworkbetween">
                          <div className="arrowdataleft">
                            <div className="updownarrowleft">
                              <img src={Greyup} alt="" />
                              <img src={Greydown} alt="" />
                            </div>
                            <div className="Accesscontent">
                              <p>Access NetWork</p>
                            </div>
                          </div>
                          <div className="accessdots">
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                          </div>
                        </div>
                        {/* ////////// */}
                        {/* cabling */}
                        <div className="AccessNetworkbetween">
                          <div className="arrowdataleft">
                            <div className="updownarrowleft">
                              <img src={Greyup} alt="" />
                              <img src={Greydown} alt="" />
                            </div>
                            <div className="Accesscontent">
                              <p>Cabling</p>
                            </div>
                          </div>
                          <div className="accessdots">
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                          </div>
                        </div>
                        {/* ////////// */}
                        {/* docsis */}
                        <div className="AccessNetworkbetween">
                          <div className="arrowdataleft">
                            <div className="updownarrowleft">
                              <img src={Greyup} alt="" />
                              <img src={Greydown} alt="" />
                            </div>
                            <div className="Accesscontent">
                              <p>DOCSIS</p>
                            </div>
                          </div>
                          <div className="accessdots">
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                          </div>
                        </div>
                        {/* ////////// */}
                        {/* Headend */}
                        <div className="AccessNetworkbetween">
                          <div className="arrowdataleft">
                            <div className="updownarrowleft">
                              <img src={Greyup} alt="" />
                              <img src={Greydown} alt="" />
                            </div>
                            <div className="Accesscontent">
                              <p>Headend</p>
                            </div>
                          </div>
                          <div className="accessdots">
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                          </div>
                        </div>
                        {/* ////////// */}
                        {/* home networkinf */}
                        <div className="AccessNetworkbetween">
                          <div className="arrowdataleft">
                            <div className="updownarrowleft">
                              <img src={Greyup} alt="" />
                              <img src={Greydown} alt="" />
                            </div>
                            <div className="Accesscontent">
                              <p>Home Networking</p>
                            </div>
                          </div>
                          <div className="accessdots">
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                          </div>
                        </div>
                        {/* ////////// */}
                        {/* video */}
                        <div className="AccessNetworkbetween">
                          <div className="arrowdataleft">
                            <div className="updownarrowleft">
                              <img src={Greyup} alt="" />
                              <img src={Greydown} alt="" />
                            </div>
                            <div className="Accesscontent">
                              <p>Video</p>
                            </div>
                          </div>
                          <div className="accessdots">
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                          </div>
                        </div>
                        {/* ////////// */}
                        {/* VIOP */}
                        <div className="AccessNetworkbetween">
                          <div className="arrowdataleft">
                            <div className="updownarrowleft">
                              <img src={Greyup} alt="" />
                              <img src={Greydown} alt="" />
                            </div>
                            <div className="Accesscontent">
                              <p>VOIP</p>
                            </div>
                          </div>
                          <div className="accessdots">
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                            <div className="accessnetworkdot"></div>
                          </div>
                        </div>
                        {/* ////////// */}
                      </div>
                    </div>
                  )}
                  <div className="onclickflex">
                    {/* wifiBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(1)}
                        >
                          <p>Wifi</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 1 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                      </div>
                    )}

                    {/* RFBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(2)}
                        >
                          <p>RF</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 2 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                        {/* ////////////// */}
                      </div>
                    )}

                    {/* VideoFBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(3)}
                        >
                          <p>Video</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 3 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                        {/* //////////////// */}
                      </div>
                    )}

                    {/* Optical ThoeryBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(4)}
                        >
                          <p>Optical Thoery</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 4 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                        {/* //////////////// */}
                      </div>
                    )}

                    {/* MultiplexingBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(5)}
                        >
                          <p>Multiplexing</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 5 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                        {/* //////////////// */}
                      </div>
                    )}

                    {/*Electrical ThoeryFBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(6)}
                        >
                          <p>Electrical Thoery</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 6 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                        {/* //////////////// */}
                      </div>
                    )}

                    {/* networkBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(7)}
                        >
                          <p>Network Data</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 7 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                        {/* //////////////// */}
                      </div>
                    )}

                    {/* HeadendBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(8)}
                        >
                          <p>Headend</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 8 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                        {/* //////////////// */}
                      </div>
                    )}

                    {/* Circuit SwitchedBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(9)}
                        >
                          <p>Circuit Switched network</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 9 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                        {/* //////////////// */}
                      </div>
                    )}

                    {/* EthernetBlock */}
                    <div className="wififlex">
                      <div className="imgwifitxt">
                        <div className="arrowclickimg">
                          <img src={arrowsigndown} alt="" />
                          <img src={arrowsignup} alt="" />
                        </div>
                        <div
                          className="wifitxt"
                          onClick={() => opencloseHnadler(10)}
                        >
                          <p>Ethernet</p>
                        </div>
                      </div>
                      <div className="wifidotts">
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                        <div className="wifidotscol"></div>
                      </div>
                    </div>
                    {openclose === 10 && (
                      <div>
                        <div className="progressdataflex">
                          <div>
                            <h4>Primer WiFi</h4>
                          </div>
                          <div className="companydataflex">
                            <span className="purpleDot"></span>
                            <span className="yellowDot"></span>
                            <span className="yourcompany">Your Company</span>
                          </div>
                          <div className="similarcompanydataflex">
                            <span className="blueDot"></span>
                            <span className="similarcompany">
                              Similar Company
                            </span>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div
                            className=""
                            ref={box}
                            style={{
                              width: "0px",
                              background: "#31d6c4",
                              height: "100%",
                              transitionProperty: "width",
                              transitionDuration: "2s",
                              borderRadius: "10px",
                            }}
                          ></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp2"></div>
                        </div>
                        {/* firstTwo */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Fundamental WiFi</h4>
                          </div>

                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp3"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp4"></div>
                        </div>
                        {/* firstThree */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div>
                            <h5>Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp5"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp6"></div>
                        </div>
                        {/* firstfour */}
                        <div className="progressdataflex">
                          <div>
                            <h4>Advanced WiFi</h4>
                          </div>
                          <div className="suggestionyellow">
                            <h5> Suggestions</h5>
                          </div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp7"></div>
                        </div>
                        <div className="progrssDown">
                          <div className="progressUp8"></div>
                        </div>
                        {/* //////////////// */}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sectionone;
