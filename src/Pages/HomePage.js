import React, { useEffect } from "react";
import Navbar from "../common/Navbar"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import axios from "axios"
import AgentDevelopersPage from "./AgentDevelopersPage"
import ReactPlayer from 'react-player'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import $ from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

function HomePage() {

    const [index, setIndex] = useState(0);
    const [projectsData, setProjectsData] = useState([])
    const [proName, setProName] = useState(["Tema Istanbul 2", "Torino Oro24", "Skyland Istanbul", "Alya 4 Mevsim", "Nişantaşı Koru", "Avrupa Konutlari Yamanevler"])
    const [projectDetail, setProjectDetail] = useState(
        [
            {
                "id": 1,
                "video_url": "/assets/homevideo/2.mp4",
                "image_url": "/assets/images/01.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Tema Istanbul 2",
                "min_price": "200,000",
                "max_price": "300,000"
            },
            {
                "id": 2,
                "video_url": "/assets/homevideo/2.mp4",
                "image_url": "/assets/images/02.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Torino Oro24",
                "min_price": "657,000",
                "max_price": "421,000"
            },
            {
                "id": 3,
                "video_url": "/assets/homevideo/2.mp4",
                "image_url": "/assets/images/skyland1.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Skyland Istanbul",
                "min_price": "785,000",
                "max_price": "589,000"
            },
            {
                "id": 4,
                "video_url": "/assets/homevideo/2.mp4",
                "image_url": "/assets/images/alya1.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Alya 4 Mevsim",
                "min_price": "58,000",
                "max_price": "965,000"
            },
            {
                "id": 5,
                "video_url": "/assets/homevideo/2.mp4",
                "image_url": "/assets/images/nishantasi1.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Nişantaşı Koru",
                "min_price": "130,000",
                "max_price": "236,000"
            },
            {
                "id": 6,
                "video_url": "/assets/homevideo/3.mp4",
                "image_url": "/assets/images/yaman3.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Avrupa Konutlari Yamanevler",
                "min_price": "235,000",
                "max_price": "345,000"
            }
        ]
    )


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

    $(document).ready(function () {


        $(".slider").slick({
            infinite: true,
            arrows: false,
            dots: false,
            autoplay: false,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        //ticking machine
        var percentTime;
        var tick;
        var time = 1;
        var progressBarIndex = 0;

        $('.progressBarContainer .progressBar').each(function (index) {
            var progress = "<div class='inProgress inProgress" + index + "'></div>";
            $(this).html(progress);
        });

        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            tick = setInterval(interval, 10);
        }

        function interval() {
            if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
                progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
                startProgressbar();
            } else {
                percentTime += 1 / (time + 5);
                $('.inProgress').parent().parent().removeClass("yellow-text");
                $('.inProgress' + progressBarIndex).parent().parent().addClass("yellow-text");
                $('.inProgress' + progressBarIndex).css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    $('.single-item').slick('slickNext');
                    progressBarIndex++;
                    if (progressBarIndex > 2) {
                        progressBarIndex = 0;
                    }
                    startProgressbar();
                }
            }
        }

        function resetProgressbar() {
            $('.inProgress').css({
                width: 0 + '%'
            });
            clearInterval(tick);
        }
        startProgressbar();
        // End ticking machine

        $('.progressBarContainer div').click(function () {
            clearInterval(tick);
            var goToThisIndex = $(this).find("span").data("slickIndex");
            $('.single-item').slick('slickGoTo', goToThisIndex, false);
            startProgressbar();
        });
    });
    useEffect(() => {
        fetchProjects();
    }, [])


    return (
        <>
            <div className="mainHomePage">
                <Navbar />
                {/* <Carousel showThumbs={false} showStatus={false} interval={3000} transitionTime={2000}
                    infiniteLoop={true} swipeScrollTolerance={6} autoPlay={false}
                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                        const defStyle = { marginLeft: 20, color: "rgba(255,255,255,0.5)", cursor: "pointer", fontWeight: "bold" };
                        const style = isSelected
                            ? { ...defStyle, color: "rgba(255,255,255,1)", fontWeight: "bold" }
                            : { ...defStyle };
                        return (
                            <span
                                style={style}
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                value={index}
                                key={index}
                                role="button"
                                tabIndex={0}
                                aria-label={`${label}${index + 1}`}
                            >
                                {proName[index]}
                            </span>
                        );
                    }}
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
                                        <ReactPlayer url="/assets/homevideo/1.mp4" width='100%'
                                            height='100vh'
                                            playing={true}
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
                                            <div className="projectLable">
                                                {row.project_name}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </Carousel> */}
                <section id="slideshow ">
                    <div class="slick">
                        <div class="sliderContainer ">
                            <div class="slider single-item">
                                <div>
                                    <img className="img-fluid" src="/assets/images/01.jpg" />
                                    <div className="container" >
                                        <div className="row">
                                            <div className="projectDetailSlider">
                                                <h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.8" height="24" viewBox="0 0 16.8 24">
                                                        <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M15.9,3a8.394,8.394,0,0,0-8.4,8.4c0,6.3,8.4,15.6,8.4,15.6s8.4-9.3,8.4-15.6A8.394,8.394,0,0,0,15.9,3Zm0,11.4a3,3,0,1,1,3-3A3,3,0,0,1,15.9,14.4Z" transform="translate(-7.5 -3)" fill="#fff" />
                                                    </svg>
                                                    {projectDetail[0].location_name}
                                                </h4>
                                                <h1>{projectDetail[0].project_name}</h1>
                                                <h5>${`${projectDetail[0].min_price} - ${projectDetail[0].max_price}`}</h5>
                                                <button className="projectBtn">View Projects</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className="img-fluid" src="/assets/images/01.jpg" />
                                    <div className="container" >
                                        <div className="row">
                                            <div className="projectDetailSlider">
                                                <h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.8" height="24" viewBox="0 0 16.8 24">
                                                        <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M15.9,3a8.394,8.394,0,0,0-8.4,8.4c0,6.3,8.4,15.6,8.4,15.6s8.4-9.3,8.4-15.6A8.394,8.394,0,0,0,15.9,3Zm0,11.4a3,3,0,1,1,3-3A3,3,0,0,1,15.9,14.4Z" transform="translate(-7.5 -3)" fill="#fff" />
                                                    </svg>
                                                    {projectDetail[1].location_name}
                                                </h4>
                                                <h1>{projectDetail[1].project_name}</h1>
                                                <h5>${`${projectDetail[1].min_price} - ${projectDetail[1].max_price}`}</h5>
                                                <button className="projectBtn">View Projects</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className="img-fluid" src="/assets/images/01.jpg" />
                                    <div className="container" >
                                        <div className="row">
                                            <div className="projectDetailSlider">
                                                <h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.8" height="24" viewBox="0 0 16.8 24">
                                                        <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M15.9,3a8.394,8.394,0,0,0-8.4,8.4c0,6.3,8.4,15.6,8.4,15.6s8.4-9.3,8.4-15.6A8.394,8.394,0,0,0,15.9,3Zm0,11.4a3,3,0,1,1,3-3A3,3,0,0,1,15.9,14.4Z" transform="translate(-7.5 -3)" fill="#fff" />
                                                    </svg>
                                                    {projectDetail[2].location_name}
                                                </h4>
                                                <h1>{projectDetail[2].project_name}</h1>
                                                <h5>${`${projectDetail[2].min_price} - ${projectDetail[2].max_price}`}</h5>
                                                <button className="projectBtn">View Projects</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className="img-fluid" src="/assets/images/01.jpg" />
                                    <div className="container" >
                                        <div className="row">
                                            <div className="projectDetailSlider">
                                                <h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.8" height="24" viewBox="0 0 16.8 24">
                                                        <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M15.9,3a8.394,8.394,0,0,0-8.4,8.4c0,6.3,8.4,15.6,8.4,15.6s8.4-9.3,8.4-15.6A8.394,8.394,0,0,0,15.9,3Zm0,11.4a3,3,0,1,1,3-3A3,3,0,0,1,15.9,14.4Z" transform="translate(-7.5 -3)" fill="#fff" />
                                                    </svg>
                                                    {projectDetail[3].location_name}
                                                </h4>
                                                <h1>{projectDetail[3].project_name}</h1>
                                                <h5>${`${projectDetail[3].min_price} - ${projectDetail[3].max_price}`}</h5>
                                                <button className="projectBtn">View Projects</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className="img-fluid" src="/assets/images/01.jpg" />
                                    <div className="container" >
                                        <div className="row">
                                            <div className="projectDetailSlider">
                                                <h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.8" height="24" viewBox="0 0 16.8 24">
                                                        <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M15.9,3a8.394,8.394,0,0,0-8.4,8.4c0,6.3,8.4,15.6,8.4,15.6s8.4-9.3,8.4-15.6A8.394,8.394,0,0,0,15.9,3Zm0,11.4a3,3,0,1,1,3-3A3,3,0,0,1,15.9,14.4Z" transform="translate(-7.5 -3)" fill="#fff" />
                                                    </svg>
                                                    {projectDetail[4].location_name}
                                                </h4>
                                                <h1>{projectDetail[4].project_name}</h1>
                                                <h5>${`${projectDetail[4].min_price} - ${projectDetail[4].max_price}`}</h5>
                                                <button className="projectBtn">View Projects</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className="img-fluid" src="/assets/images/01.jpg" />
                                    <div className="container" >
                                        <div className="row">
                                            <div className="projectDetailSlider">
                                                <h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.8" height="24" viewBox="0 0 16.8 24">
                                                        <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M15.9,3a8.394,8.394,0,0,0-8.4,8.4c0,6.3,8.4,15.6,8.4,15.6s8.4-9.3,8.4-15.6A8.394,8.394,0,0,0,15.9,3Zm0,11.4a3,3,0,1,1,3-3A3,3,0,0,1,15.9,14.4Z" transform="translate(-7.5 -3)" fill="#fff" />
                                                    </svg>
                                                    {projectDetail[5].location_name}
                                                </h4>
                                                <h1>{projectDetail[5].project_name}</h1>
                                                <h5>${`${projectDetail[5].min_price} - ${projectDetail[5].max_price}`}</h5>
                                                <button className="projectBtn">View Projects</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="progressBarContainer">
                                <div>
                                    <span data-slick-index="0" class="progressBar"></span>
                                    <h3>{proName[0]}</h3>
                                </div>
                                <div>
                                    <span data-slick-index="1" class="progressBar"></span>
                                    <h3>{proName[1]}</h3>
                                </div>
                                <div>
                                    <span data-slick-index="2" class="progressBar"></span>
                                    <h3>{proName[2]}</h3>
                                </div>
                                <div>
                                    <span data-slick-index="3" class="progressBar"></span>
                                    <h3>{proName[3]}</h3>
                                </div>
                                <div>
                                    <span data-slick-index="4" class="progressBar"></span>
                                    <h3>{proName[4]}</h3>
                                </div>
                                <div>
                                    <span data-slick-index="5" class="progressBar"></span>
                                    <h3>{proName[5]}</h3>
                                </div>
                            </div>

                            {/* {
                                        projectsData && projectsData.map((row, index) => {
                                            return (
                                                <>
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
                                                </>
                                            )
                                        })
                                    } */}
                            {/* </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <AgentDevelopersPage />
            </div>
        </>
    )
}
export default HomePage;