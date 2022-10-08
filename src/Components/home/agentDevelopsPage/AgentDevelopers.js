import React, { useState } from "react";
import AgentPage from "../agentDevelopsPage/AgentPage";
import DeveloperPage from "../agentDevelopsPage/DeveloperPage";
import AnimateHeight from 'react-animate-height';


function AgentDevelopers() {

    const [height, setHeight] = useState(500);

    const [changeAgentsComponent, setChangeAgentsComponent] = useState(true)
    const [changeDeveloperComponent, setChangeDeveloperComoponent] = useState(true)

    const onClickHandlerAgent = () => {
        setChangeAgentsComponent(false)
    }
    const onClickHandlerDeveloper = () => {
        setChangeDeveloperComoponent(false)
    }

    return (
        <>
            <div>
                {
                    changeAgentsComponent ?
                        changeDeveloperComponent ?
                            <>
                               
                                    <div className="agentDeveloperSection">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-md-5">
                                                    <div className="agentSection">
                                                        <h3>AGENTS</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                        </p>
                                                        {/* <button
                                            aria-expanded={height !== 300}
                                            className="exploreMoreBtn"
                                            aria-controls="example-panel"
                                            onClick={() => setHeight(height === 300 ? 800 : 300)}
                                        >
                                            {height === 300 ? 'Open' : 'Close'}
                                            Explore More
                                        </button> */}

                                                        <button className="exploreMoreBtn" onClick={onClickHandlerAgent}>
                                                            Explore More</button>

                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="developerSection">
                                                        <h3>DEVELOPERS</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                        </p>
                                                        {/* <button
                                            aria-expanded={height !== 0}
                                            aria-controls="example-panel"
                                            onClick={() => setHeight(height === 0 ? 'auto' : 0)}
                                        >
                                            {height === 0 ? 'Open' : 'Close'}
                                        </button> */}
                                                        <button className="exploreMoreBtn" onClick={onClickHandlerDeveloper} >Explore More</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </>
                            :
                            <DeveloperPage setChangeDeveloperComoponent={setChangeDeveloperComoponent}/>
                        :
                        <AgentPage setChangeAgentsComponent={setChangeAgentsComponent} />
                }
            </div>
        </>
    )
}
export default AgentDevelopers;