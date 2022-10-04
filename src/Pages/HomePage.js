import React, { useEffect } from "react";
import Navbar from "../common/Navbar"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import axios from "axios"


function HomePage() {
    const [index, setIndex] = useState(0);
    const [projectsData, setProjectsData] = useState([])

    async function fetchProjects() {
        try {
            const res = await axios.get("/assets/data/projects.json");
            if (res.data) {
                setProjectsData(res.data);
            }
        } catch (error) {
            console.error("error ", error);
        }
    }

    useEffect(() => {
        fetchProjects();
    }, [])


    return (
        <>
            <div className="mainHomePage">
                <Navbar />
                <Carousel showThumbs={false} showStatus={false} interval={3000} transitionTime={2000}
                    infiniteLoop={true} swipeScrollTolerance={6} autoPlay={false}
                >
                    {
                        projectsData && projectsData.map((row, index) => {
                            return (
                                <>
                                    <div className="videoSlider" key={index}>
                                        <img
                                            className="img-fluid"
                                            src={row.image_url}
                                            alt="First slide"
                                        />
                                        <div className="container" >
                                            <div className="row">
                                                <div className="projectDetailSlider">
                                                    <h4>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.8" height="24" viewBox="0 0 16.8 24">
                                                            <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M15.9,3a8.394,8.394,0,0,0-8.4,8.4c0,6.3,8.4,15.6,8.4,15.6s8.4-9.3,8.4-15.6A8.394,8.394,0,0,0,15.9,3Zm0,11.4a3,3,0,1,1,3-3A3,3,0,0,1,15.9,14.4Z" transform="translate(-7.5 -3)" fill="#fff" />
                                                        </svg>
                                                        {row.location_name}
                                                    </h4>
                                                    <h1>{row.project_name}</h1>
                                                    <h5>$ {row.min_price}-{row.max_price}</h5>
                                                    <button className="projectBtn">View Projects</button>
                                                </div>
                                            </div>
                                            {/* <div className="projectLable">
                                                {row.project_name}
                                            </div> */}
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}
export default HomePage;