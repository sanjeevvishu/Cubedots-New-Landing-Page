import React from "react";
import Carousel from 'react-bootstrap/Carousel';
function SecondDummy() {
    return (
        <>
            <section className="dummyNuterDigital">
                <Carousel height="100%">
                    <Carousel.Item className="dummyFirstSlider" interval={1000}>
                        <ul className="dummyBackgroundVideos">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Carousel.Caption  className="animate__animated animate__fadeInUpBig">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="dummySecondSlider" interval={500}>
                        <Carousel.Caption  className="animate__animated animate__fadeInUpBig">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="dummyThirdSlider">
                        <Carousel.Caption className="animate__animated animate__fadeInUpBig">
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}
export default SecondDummy;