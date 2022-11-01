import React, { useRef, useState, useEffect } from "react"
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Carousel from 'react-bootstrap/Carousel';

const TOTAL_SLIDES = 3 // n-1 in Array

function SecondDummy() {
    let publicPath = "https://reservation.cuengine.com/cubedots_new/";
    const [projectDetail, setProjectDetail] = useState(
        [
            {
                "id": 1,
                "video_url": "/assets/videos/1.mp4",
                "image_url": "/assets/images/01.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Tema Istanbul 2",
                "min_price": "200,000",
                "max_price": "300,000"
            },
            {
                "id": 2,
                "video_url": "/assets/videos/2.mp4",
                "image_url": "/assets/images/02.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Torino Oro24",
                "min_price": "657,000",
                "max_price": "421,000"
            },
            {
                "id": 3,
                "video_url": "/assets/videos/3.mp4",
                "image_url": "/assets/images/01.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Skyland Istanbul",
                "min_price": "785,000",
                "max_price": "589,000"
            },
            {
                "id": 4,
                "video_url": "/assets/videos/4.mp4",
                "image_url": "/assets/images/02.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Alya 4 Mevsim",
                "min_price": "58,000",
                "max_price": "965,000"
            },
            {
                "id": 5,
                "video_url": "/assets/videos/5.mp4",
                "image_url": "/assets/images/01.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Nisantası Koru",
                "min_price": "130,000",
                "max_price": "236,000"
            },
            {
                "id": 6,
                "video_url": "/assets/videos/222.mp4",
                "image_url": "/assets/images/02.jpg",
                "location_name": "Istanbul Turkey",
                "project_name": "Avrupa Konutlari Yamanevler",
                "min_price": "235,000",
                "max_price": "345,000"
            }
        ]
    )

    const [current, setCurrent] = useState(0)
    const ref = useRef(null)

    const next = () => {
        if (current >= TOTAL_SLIDES) return
        else setCurrent(current + 1)
    }

    const prev = () => {
        if (current === 0) return
        else setCurrent(current - 1)
    }

    const desired = e => {
        setCurrent(Number(e.target.id))
    }

    useEffect(() => {
        ref.current.style.transition = 'all 1s ease-in-out'
        ref.current.style.transform = `translateX(-${current}00%)`
    }, [current])

    return (
        <div className='wrapper'>
            {/* <p>{current}</p> */}
            <div className='frame'>
                <div className='box-container' ref={ref}>
                    <div className='box backgroundRed'>
                        {/* <div className='box '>
                        <Video className="videoPlayer" preload playsInline autoPlay loop muted controls={false}
                            src={publicPath + projectDetail[0].video_url} /> */}
                    </div>
                    <div className='box backgroundBlue'>
                        {/* <div className='box '>
                        <Video className="videoPlayer" preload playsInline autoPlay loop muted controls={false}
                            src={publicPath + projectDetail[1].video_url} /> */}
                    </div>
                    {/* <div className='box'> */}
                    <div className='box backgroundDark'>
                        {/* <Video className="videoPlayer" preload playsInline autoPlay loop muted controls={false}
                            src={publicPath + projectDetail[2].video_url} /> */}
                    </div>
                    {/* <div className='box'> */}
                    <div className='box backgroundWoolen'>
                        {/* <Video className="videoPlayer" preload playsInline autoPlay loop muted controls={false}
                            src={publicPath + projectDetail[3].video_url} /> */}
                    </div>
                </div>
                <div>
                    <h1>Hello</h1>
                </div>
                {/* <div className="boxContent"> */}
                {/* <div className="mixBlend">
                    <div className="oneMoreMix">
                        <ul className="letterT">
                            <a >
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </a>
                        </ul>
                    </div>
                </div> */}
                {/* {
                    current === 1
                        ?
                        <div className="mixBlend">
                            <div className="oneMoreMix">
                                <ul className="letterN">
                                    <a >
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        :
                        ""
                } */}

                {/* </div> */}
            </div>
            <div className='button-container'>
                <div className='button' onClick={prev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                    </svg>
                </div>
                <div className='button' onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </div>
            </div>
            {/* <div className='button-2-container'>
                {[0, 1, 2, 3].map(num => (
                    <div
                        className={`button-2 ${num === current && 'active'}`}
                        onClick={desired}
                        id={num}
                        key={num}
                    />
                ))}
            </div> */}
        </div>
    )
}
export default SecondDummy;