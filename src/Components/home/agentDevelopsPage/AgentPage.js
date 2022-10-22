import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import React, { useEffect, useState, useRef } from "react";
// import DeveloperPage from "../agentDevelopsPage/DeveloperPage";
import AnimateHeight from 'react-animate-height';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


function AgentPage() {

    let publicPath = "https://reservation.cuengine.com/cubedots_new";

    const useMountEffect = (fun) => useEffect(fun, []);

    const [changeAgentsComponent, setChangeAgentsComponent] = useState(true)
    const [changeDeveloperComponent, setChangeDeveloperComoponent] = useState(true)
    const [heightIncrease, setHeightIncrease] = useState(true);
    const [widthIncrease, setWidthIncrease] = useState(true);
    const [zindexClass, setZindexClass] = useState(true);
    const [contentChange, setContentChange] = useState(true)
    const [crossbtn, setCrossBtn] = useState(true)
    // const [isMobile, setIsMobile] = useState(true)
    /* */
    const [oracleHeight, setOracleHeight] = useState(true);
    /* */
    const mobileCheck = () => {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
    const ref = useRef(null);
    const myRef = useRef(null);



    const onClickHandlerAgent = (e) => {

        setHeightIncrease(false)
        setTimeout(() => {
            setChangeAgentsComponent(false)
        }, 100000)
        setTimeout(() => {
            setWidthIncrease(false)
        }, 500)
    }
    const onclickChangeContentHandler = () => {
        if (contentChange == true) {
            setContentChange(true)
        }
        else {
            onClickHandlerwidth()
        }
    }
    const onClickHandlerwidth = () => {
        // setOracleHeight(true)
        setWidthIncrease(true)
        setTimeout(() => {
            setOracleHeight(true)
        }, 1000)
        setHeightIncrease(true)
    }
    const onClickHandlerWidthFalse = () => {
        myRef.current.scrollIntoView();
        setTimeout(() => {
            setHeightIncrease(false)
        }, 400)
        setOracleHeight(false)
        setTimeout(() => {
            setZindexClass(false)
        }, 500)
        executeScroll();
    }
    const executeScroll = () => myRef.current.scrollIntoView();
    useMountEffect(executeScroll);
    useEffect(() => {
        setTimeout(() => {
            // window.addEventListener("resize", handleResize)
            setWidthIncrease(oracleHeight ? true : false)
        }, 420)
    }, [oracleHeight])

    return (
        <>
            <div>
                <div className={oracleHeight ? 'oracleSection' : 'oracleSectionHeight'}>
                    <div className="firstDivFlex">
                        <div className={oracleHeight ? "firstDiv" : widthIncrease ? "oracleFirstDiv" : "oraclefirstDivTranslate"}>
                            <div className={oracleHeight ? "firstDiv1" : "firstDiv0"}>
                                <h6 className="forAgents" onClick={onClickHandlerWidthFalse}>For Agents</h6>
                                <span onClick={onClickHandlerWidthFalse} className="clickFirstDivSection"></span>
                            </div>
                        </div>
                        <div className={oracleHeight ? "secondDiv" : widthIncrease ? "oracleSecondDiv" : "oracleSecondDivTranslate"}>
                            <div className={oracleHeight ? "firstDiv1" : "firstDiv0"}>
                                <h6 className="forAgents" onClick={onClickHandlerWidthFalse}>For Developers</h6>
                                <span onClick={onClickHandlerWidthFalse} className="clickFirstDivSection"></span>
                            </div>
                        </div>
                        <div ref={myRef}></div>
                    </div>
                    {
                        !oracleHeight
                            ?
                            <div className="firstDivSlider">
                                <div className="container-fliud">
                                    <div className="row p-0 m-0">
                                        <div className="col-lg-4 ps-0 pe-0">
                                            <div className='firstDivSliderFirst '>
                                                <>
                                                    {
                                                        !isMobile || window.innerWidth > 700
                                                            ?
                                                            <div className="overflowOracle">
                                                                {
                                                                    contentChange
                                                                        ?
                                                                        <div className="animate__animated animate__backInRight">
                                                                            <button className="backBtnSlider" onClick={onClickHandlerwidth}>
                                                                                <img src={publicPath + "/assets/images/arrow-back.svg"} />
                                                                                <span className="backText">Back</span>
                                                                            </button>
                                                                            <h2 className="agentTabHeading">AGENTS</h2>
                                                                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                                                <button class="nav-link active" onClick={() => { setContentChange(false) }} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Lorem Ipsum</button>
                                                                                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Lorem Ipsum</button>
                                                                                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Lorem Ipsum</button>
                                                                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Lorem Ipsum</button>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        <div className="animate__animated animate__fadeInRight">
                                                                            <button className="backBtnSlider" onClick={() => { setContentChange(true) }}>
                                                                                <img src={publicPath + "/assets/images/arrow-back.svg"} />
                                                                                <span className="backText">Back</span>
                                                                            </button>
                                                                            <h2 className="agentTabHeading">AGENTS</h2>
                                                                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                                                <button class="nav-link active" onClick={() => { setContentChange(false) }} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">First</button>
                                                                                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Second</button>
                                                                                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Third</button>
                                                                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Fourth</button>
                                                                            </div>
                                                                        </div>
                                                                }
                                                            </div>
                                                            :
                                                            <div className="collapseCard">
                                                                <div className="d-flex justify-content-between">
                                                                    <button className="backBtnSlider" onClick={onclickChangeContentHandler}>
                                                                        <img src={publicPath + "/assets/images/arrow-back.svg"} />
                                                                        <span className="backText">Back</span>
                                                                    </button>
                                                                    {
                                                                        crossbtn
                                                                            ?
                                                                            <a onClick={() => { setCrossBtn(false) }} class="me-3 d-flex align-items-center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                                </svg>
                                                                            </a>
                                                                            :
                                                                            <a onClick={() => { setCrossBtn(true) }} class="me-3 d-flex align-items-center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                                                                </svg>
                                                                            </a>
                                                                    }
                                                                </div>
                                                                <div class="collapse" id="collapseExample">
                                                                    <div class="card card-body">
                                                                        <div className="">
                                                                            {
                                                                                contentChange
                                                                                    ?
                                                                                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                                                        <button class="nav-link active" onClick={() => { setContentChange(false) }} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Lorem Ipsum</button>
                                                                                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Lorem Ipsum</button>
                                                                                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Lorem Ipsum</button>
                                                                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Lorem Ipsum</button>
                                                                                    </div>
                                                                                    :
                                                                                    <div className="animate__animated animate__fadeInRight">
                                                                                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                                                            <button class="nav-link active" onClick={() => { setContentChange(false) }} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">First</button>
                                                                                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Second</button>
                                                                                            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Third</button>
                                                                                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Fourth</button>
                                                                                        </div>
                                                                                    </div>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    }
                                                </>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ps-0 pe-0">
                                            <div className="flipCard">
                                                {
                                                    contentChange
                                                        ?
                                                        <div className={heightIncrease ? "firstDivSlidersecond" : 'firstDivSlidersecondAnimation'} >
                                                            <div className="secondSliderContent">
                                                                <div className="overflowOracle">
                                                                    <div class="tab-content" id="v-pills-tabContent">
                                                                        <div class="tab-pane fade show active p-1" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                                            <h2>AGENTS</h2>
                                                                            <p>
                                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typg Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                                            </p>
                                                                            <p>
                                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimpularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                                            </p>
                                                                            <p><strong>Lorem Ipsum</strong></p>
                                                                            <p>Chief Analyst, XYZ</p>
                                                                        </div>
                                                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                                                                        </div>
                                                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                                                                        </div>
                                                                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">

                                                                        </div>
                                                                    </div>
                                                                    <button className="projectBtn" onClick={onClickHandlerAgent}>
                                                                        Learn More</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="firstContentDataFirstSlide">
                                                            <div className="secondSliderContent">
                                                                <div class="tab-content" id="v-pills-tabContent">
                                                                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                                        <h2>First</h2>
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thewith desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                                        </p>
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gaker including versions of Lorem Ipsum.
                                                                        </p>
                                                                        <p><strong>Lorem Ipsum</strong></p>
                                                                        <p>Chief Analyst, XYZ</p>
                                                                    </div>
                                                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                                                                    </div>
                                                                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                                                                    </div>
                                                                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">

                                                                    </div>
                                                                </div>
                                                                <button className="projectBtn" onClick={onClickHandlerAgent}>
                                                                    Learn More</button>
                                                            </div>
                                                        </div>
                                                }


                                            </div>
                                        </div>
                                        <div className="col-lg-4 ps-0 pe-0">
                                            <div className="flipCard" >
                                                {
                                                    contentChange
                                                        ?
                                                        <div className={heightIncrease ? 'firstDivSliderThird' : 'firstDivSliderThirdAnimation'}>
                                                            <div className="secondSliderContent">
                                                                <Carousel>
                                                                    {/* <div className="overflowOracle"> */}
                                                                    <div className="text-start p-1">
                                                                        <h2>AGENTS</h2>
                                                                        <h3><strong>Lorem Ipsum is simply dummy text of the prry.</strong></h3>
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow Lorem Ipsum is simply dummy text of the printing and tyts containing Lorem Ipsum passages, and more recently with desktop pnsktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                                        </p>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <button className="projectBtnExplore" onClick={onClickHandlerAgent}>
                                                                            Read the story
                                                                        </button>
                                                                    </div>
                                                                    {/* </div> */}
                                                                    {/* <div className="overflowOracle"> */}
                                                                    <div className="text-start">
                                                                        <h2>AGENTS</h2>
                                                                        <h3><strong>Lorem Ipsum is simply dummy text of the pritry.</strong></h3>
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow Lorem Ipsum is simply dummy text of the printing and tyts containing Lorem Ipsum passages, and more recently with desktop pnsktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                                        </p>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <button className="projectBtnExplore" onClick={onClickHandlerAgent}>
                                                                            Read the story
                                                                        </button>
                                                                    </div>
                                                                    {/* </div> */}
                                                                    {/* <div className="overflowOracle"> */}
                                                                    <div className="text-start">
                                                                        <h2>AGENTS</h2>
                                                                        <h3><strong>Lorem Ipsum is simply dummy text of the pritry.</strong></h3>
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow Lorem Ipsum is simply dummy text of the printing and tyts containing Lorem Ipsum passages, and more recently with desktop pnsktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                                        </p>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <button className="projectBtnExplore" onClick={onClickHandlerAgent}>
                                                                            Read the story
                                                                        </button>
                                                                    </div>
                                                                    {/* </div> */}
                                                                </Carousel>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="firstContentData">
                                                            <div className="secondSliderContent">
                                                                <Carousel>
                                                                    <div className="text-start">
                                                                        <h2>First</h2>
                                                                        <h3><strong>Lorem Ipsum is simply dummy text of the prry.</strong></h3>
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow Lorem Ipsum is simply dummy text of the printing and tyts containing Lorem Ipsum passages, and more recently with desktop pnsktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                                        </p>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <h4><strong>Lorem Ipsum</strong></h4>
                                                                        <button className="projectBtnExplore" onClick={onClickHandlerAgent}>
                                                                            Read the story
                                                                        </button>
                                                                    </div>
                                                                </Carousel>
                                                            </div>
                                                        </div>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                    }
                </div>
            </div>
        </>
    )
}
export default AgentPage;