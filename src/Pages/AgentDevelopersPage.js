import React, { useState } from "react";
import AgentDevelopers from "../Components/home/agentDevelopsPage/AgentDevelopers";
import AgentPage from "../Components/home/agentDevelopsPage/AgentPage";
import DeveloperPage from "../Components/home/agentDevelopsPage/DeveloperPage";

function AgentDevelopersPage() {

    const [agentPart, setAgentPart] = useState(true)

    return (
        <>
            {
                // agentPart ? <AgentDevelopers/> : <AgentPage/> ||<DeveloperPage/>
            }
            <AgentDevelopers />
        </>
    )
}
export default AgentDevelopersPage;