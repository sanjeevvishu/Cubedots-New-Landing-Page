import React, { useEffect, useState, useRef } from "react";
import AgentPage from "./AgentPage";
// import DeveloperPage from "../agentDevelopsPage/DeveloperPage";
import AnimateHeight from 'react-animate-height';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import DeveloperPage from "./DeveloperPage"

function AgentDevelopers() {
    const [thisOne, setThisOne] = useState(true)
    return (
        <>
            {/* <DeveloperPage /> */}
            <AgentPage />
        </>
    )
}
export default AgentDevelopers;