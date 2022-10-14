import React, { useEffect, useState } from "react";
import AgentPage from "../agentDevelopsPage/AgentPage";
import DeveloperPage from "../agentDevelopsPage/DeveloperPage";
import AnimateHeight from 'react-animate-height';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function AgentDevelopers() {

    const [changeAgentsComponent, setChangeAgentsComponent] = useState(true)
    const [changeDeveloperComponent, setChangeDeveloperComoponent] = useState(true)
    const [heightIncrease, setHeightIncrease] = useState(true);
    const [widthIncrease, setWidthIncrease] = useState(true);
    const [zindexClass, setZindexClass] = useState(true);
    /* */
    const [oracleHeight, setOracleHeight] = useState(true);
    /* */
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
        setTimeout(() => {
            setHeightIncrease(false)
        }, 400)
        setOracleHeight(false)
        setTimeout(() => {
            setZindexClass(false)
        }, 500)
    }

    useEffect(() => {
        setTimeout(() => {
            setWidthIncrease(oracleHeight ? true : false)
        }, 400)
    }, [oracleHeight])
    return (
        <>
            <div className={oracleHeight ? 'oracleSection' : 'oracleSectionHeight'}>
                <div className="">
                    <div className="firstDivFlex">
                        <div className={oracleHeight ? "firstDiv" : widthIncrease ? "oracleFirstDiv" : "oraclefirstDivTranslate"}>
                            <div className={oracleHeight ? "firstDiv1" : "firstDiv0"}>
                                <h6 className="forAgents" onClick={onClickHandlerWidthFalse}>For Agents</h6>
                                {/* <button onClick={onClickHandlerwidth} >Back</button> */}
                                <span onClick={onClickHandlerWidthFalse} className="clickFirstDivSection"></span>
                            </div>

                        </div>
                        <div className={oracleHeight ? "secondDiv" : widthIncrease ? "oracleSecondDiv" : "oracleSecondDivTranslate"}>
                            <div className={oracleHeight ? "firstDiv1" : "firstDiv0"}>
                                <h6 className="forAgents" onClick={onClickHandlerWidthFalse}>For Developers</h6>
                                <span onClick={onClickHandlerWidthFalse} className="clickFirstDivSection"></span>
                                {/* <button onClick={onClickHandlerwidth} >Back</button> */}
                            </div>

                        </div>
                    </div>
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
                                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
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
                                                            <h2>Agents</h2>
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                            </p>
                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">

                                                        </div>
                                                    </div>
                                                    <button className="exploreMoreBtn" onClick={onClickHandlerAgent}>
                                                        Explore More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 ps-0 pe-0">
                                        <div className="flipCard">
                                            <div className={heightIncrease ? 'firstDivSliderThird' : 'firstDivSliderThirdAnimation'}>
                                                <div className="secondSliderContent">
                                                    <Carousel>
                                                        <div>
                                                            <h2>Developes</h2>
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow Lorem Ipsum is simply dummy text of the printing and typesettincenturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pnsktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                            </p>
                                                            <button className="exploreMoreBtn" onClick={onClickHandlerAgent}>
                                                                Explore More
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <h2>Agents</h2>
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow Lorem Ipsum is simply dummy text of the printing and typesettincenturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pnsktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                            </p>
                                                            <button className="exploreMoreBtn" onClick={onClickHandlerAgent}>
                                                                Explore More
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <h2>Agents</h2>
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow Lorem Ipsum is simply dummy text of the printing and typesettincenturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pnsktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                            </p>
                                                            <button className="exploreMoreBtn" onClick={onClickHandlerAgent}>
                                                                Explore More
                                                            </button>
                                                        </div>
                                                    </Carousel>
                                                    {/* <div class="tab-content" id="v-pills-tabContent">
                                                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                            <h2>Agents</h2>
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                            </p>
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                            </p>
                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                                                        </div>
                                                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">

                                                        </div>
                                                    </div> */}
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
            {/* <div className="dummyContent">

            </div> */}

            {/* <div className="agentDevelopersSection">
                {
                    changeAgentsComponent ?
                        changeDeveloperComponent ?
                            <>
                                <div className='agentDeveloperSectionagent'>
                                    <div className="container-fluid">

                                        {
                                            widthIncrease
                                                ?
                                                <div className="row justify-content-center">
                                                    <div className="col-md-6 ps-0 pe-0">
                                                        <div className={heightIncrease ? "agentSection" : 'agentSectionheight'}>
                                                            <h3>AGENTS</h3>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                            </p>
                                                            <button className="exploreMoreBtn" onClick={onClickHandlerAgent}>
                                                                Explore More</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pe-0 ps-0">
                                                        <div className={heightIncrease ? "developerSection" : 'developerSectionheight'}>
                                                            <h3>DEVELOPERS</h3>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                            </p>
                                                            <button className="exploreMoreBtn" onClick={onClickHandlerDeveloper} >Explore More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className="row justify-content-center">
                                                <div className="col-md-4 ps-0 pe-0">
                                                    <div className='show-transition agentSectionWidth'>
                                                        <button onClick={onClickBackHandler}>Back</button>
                                                        <h3>AGENTS</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                        </p>
                                                        <button className="exploreMoreBtn" onClick={onClickHandlerAgent}>
                                                            Explore More</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 ps-0 pe-0">
                                                    <div className='show-transition agentSectionWidth animate__animated animate__flipInY '>
                                                        <h3>AGENTS</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                        </p>
                                                        <button className="exploreMoreBtn" onClick={onClickHandlerAgent}>
                                                            Explore More</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 ps-0 pe-0">
                                                    <div className='show-transition agentSectionWidth animate__animated animate__flipInY'>
                                                        <h3>AGENTS</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                        </p>
                                                        <button className="exploreMoreBtn" onClick={onClickHandlerAgent}>
                                                            Explore More</button>
                                                    </div>
                                                </div>
                                                </div>
                                        }

                                    </div>
                                </div>
                            </>
                            :
                            <DeveloperPage setChangeDeveloperComoponent={setChangeDeveloperComoponent} setHeightIncrease={setHeightIncrease} />
                        :
                        <AgentPage setChangeAgentsComponent={setChangeAgentsComponent} setHeightIncrease={setHeightIncrease} />
                }
                <div className="dummyContent">

                </div>
            </div> */}
        </>
    )
}
export default AgentDevelopers;