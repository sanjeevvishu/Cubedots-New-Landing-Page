import { React, useState } from "react"
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function NurterDigital() {
    let publicPath = "https://reservation.cuengine.com/cubedots_new/";

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [temaModal, setTemaModal] = useState(true)


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

    return (
        <>
            <section className="nutureDigitalSection" >
                <div className="nutureMainSection" >
                    <Video className="videoPlayer" preload playsInline autoPlay loop muted controls={false}
                        src={publicPath + projectDetail[3].video_url} />
                    {/* <div className={temaModal ? "mixBlend" : "mixBlendFalse"}> */}
                    <div className="temaBackgroundColor">
                        {/* <div className={temaModal ? "mixBlend" : "mixBlendFalse"} > */}
                        <div className="mixBlend">
                            <div className="oneMoreMix">
                                {/* <Button variant="primary" onClick={handleShow}> */}
                                <ul className="letterT">
                                    <a onClick={() => { setTemaModal(false) }}>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </a>
                                </ul>
                                {/* </Button> */}
                            </div>
                        </div>
                    </div>
                    <div className="tema2dContent">
                        {
                            temaModal
                                ?
                                <div className="temaContentBoxTrue">
                                    <h3>Tema 2d Sales System</h3>
                                </div>
                                :
                                <div className="temaContentBoxFalse">
                                    <h3>Tema 2d Sales System</h3>
                                </div>
                        }
                    </div>
                    {
                        temaModal
                            ?
                            <div className="tema2dArrow">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                    </svg>
                                </div>
                            </div>
                            :
                            <div className="tema2dArrowFalse" >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg> */}
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                    </svg>
                                </div>
                            </div>
                    }
                    {
                        !temaModal
                            ?
                            <div className="tema2dClose" onClick={() => { setTemaModal(true) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </div>
                            :
                            <div className="tema2dCloseFalse">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </div>
                    }
                </div>
                {
                    temaModal
                        ?
                        <div className="temaVideoBox">
                            <Video className="videoPlayer" preload playsInline autoPlay={true} loop muted controls={false}
                                src={publicPath + projectDetail[3].video_url} />
                        </div>
                        :
                        <div className="temaVideoBoxFalse" onClick={() => { setTemaModal(true) }}>
                            <Video className="videoPlayer" preload playsInline autoPlay={true} loop muted controls={false}
                                src={publicPath + projectDetail[3].video_url} />
                        </div>
                }
            </section>
            {/* <Modal className="temaModal" show={show} onHide={handleClose} animation={false}>
                <Video className="videoPlayer" preload playsInline autoPlay={true} loop muted controls={false}
                    src={publicPath + projectDetail[3].video_url} />
            </Modal> */}
        </>
    )
}
export default NurterDigital;