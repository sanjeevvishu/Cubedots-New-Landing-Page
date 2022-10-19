import React, { useEffect, useState, useRef } from "react";
import AgentPage from "../agentDevelopsPage/AgentPage";
import DeveloperPage from "../agentDevelopsPage/DeveloperPage";
import AnimateHeight from 'react-animate-height';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function AgentDevelopers() {
    const useMountEffect = (fun) => useEffect(fun, []);

    const [changeAgentsComponent, setChangeAgentsComponent] = useState(true)
    const [changeDeveloperComponent, setChangeDeveloperComoponent] = useState(true)
    const [heightIncrease, setHeightIncrease] = useState(true);
    const [widthIncrease, setWidthIncrease] = useState(true);
    const [zindexClass, setZindexClass] = useState(true);
    /* */
    const [oracleHeight, setOracleHeight] = useState(true);
    /* */
    const ref = useRef(null);
    const myRef = useRef(null);




    const onClickHandlerAgent = (e) => {

        setHeightIncrease(false)
        setTimeout(() => {
            setChangeAgentsComponent(false)
        }, 100000)
        setTimeout(() => {
            setWidthIncrease(false)
        }, 2000)
    }

    const onClickHandlerwidth = () => {
        // setOracleHeight(true)
        setWidthIncrease(true)
        setTimeout(() => {
            setOracleHeight(true)
        }, 400)
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
            setWidthIncrease(oracleHeight ? true : false)
        }, 400)
    }, [oracleHeight])
    return (
        <>
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
                                    <div className="col-md-4 ps-0 pe-0">
                                        <div className='firstDivSliderFirst'>
                                            <button className="backBtnSlider" onClick={onClickHandlerwidth}>
                                                <img src="/assets/images/arrow-back.svg" />
                                                <span className="backText">Back</span>
                                            </button>
                                            <h2 className="agentTabHeading">AGENTS</h2>
                                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Lorem Ipsum</button>
                                                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Lorem Ipsum</button>
                                                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Lorem Ipsum</button>
                                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Lorem Ipsum</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 ps-0 pe-0">
                                        <div className="flipCard">
                                            <div className={heightIncrease ? "firstDivSlidersecond" : 'firstDivSlidersecondAnimation'} >
                                                <div className="secondSliderContent">
                                                    <div class="tab-content" id="v-pills-tabContent">
                                                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
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
                                    </div>
                                    <div className="col-md-4 ps-0 pe-0">
                                        <div className="flipCard" >
                                            <div className={heightIncrease ? 'firstDivSliderThird' : 'firstDivSliderThirdAnimation'}>
                                                <div className="secondSliderContent">
                                                    <Carousel>
                                                        <div className="text-start">
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
                                                    </Carousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                }

            </div>
            <div className="dummyContent">
                Next Section
            </div>
        </>
    )
}
export default AgentDevelopers;