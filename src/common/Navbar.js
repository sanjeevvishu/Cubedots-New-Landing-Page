import React from "react";
import { Link, a } from 'react-router-dom';
import { useState } from "react";
import { isMobile } from 'react-device-detect';


function Navbar() {
    let publicPath = "https://reservation.cuengine.com/cubedots_new";
    const [active, setActive] = useState(null)

    const mobileCheck = () => {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|ipad|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    return (
        <>
            <div className="mainNavBar">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" href="#">
                            <img src={publicPath + "/assets/images/cubedotslogo/cubedots_logo.png"} height="28" />
                            <ul className="signNavbarSecond">
                                <li className="nav-item">
                                    {
                                        isMobile ? <a className="nav-link" href="#">
                                            <svg className="me-4" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35.013">
                                                <g id="User" transform="translate(-568.5 -147.622)">
                                                    <path id="Path_25" data-name="Path 25" d="M603,163.924v2.39a1.527,1.527,0,0,0-.062.255,15.6,15.6,0,0,1-.4,2.516,16.992,16.992,0,0,1-18.9,12.875,16.434,16.434,0,0,1-8.669-3.906,16.683,16.683,0,0,1-5.7-9.942c-.107-.6-.177-1.2-.264-1.8v-2.39c.074-.545.132-1.094.225-1.636a17.03,17.03,0,0,1,13.749-13.9c.606-.111,1.22-.18,1.83-.268H587.2a1.584,1.584,0,0,0,.254.061,15.077,15.077,0,0,1,4.876,1.15,16.8,16.8,0,0,1,10.409,12.794C602.853,162.72,602.913,163.324,603,163.924Zm-12.89,5.232c.011.036.012.051.018.054q.119.058.239.113a10.592,10.592,0,0,1,3.12,2.158,10.473,10.473,0,0,1,2.635,4.351c.063.2.113.271.283.082.222-.247.472-.468.687-.72,4.085-4.788,5.083-10.167,2.669-15.968a14.982,14.982,0,1,0-24.216,16.639c.209.208.266.191.358-.09a10.5,10.5,0,0,1,5.787-6.477c.071-.033.179-.03.2-.142a7.406,7.406,0,1,1,9.068-11.664,7.165,7.165,0,0,1,2.44,5.4A7.334,7.334,0,0,1,590.11,169.156Zm-4.163,1.228c-.275.016-.608.017-.937.057a8.592,8.592,0,0,0-7.425,6.735.394.394,0,0,0,.2.489,15,15,0,0,0,16.433,0,.4.4,0,0,0,.2-.486A8.612,8.612,0,0,0,585.947,170.384ZM586,157.6a5.392,5.392,0,1,0,5.386,5.394A5.372,5.372,0,0,0,586,157.6Z" transform="translate(0 0)" fill="#fff" stroke="#fff" stroke-width="1" />
                                                </g>
                                            </svg>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                            </svg> */}
                                        </a>
                                            :
                                            ''
                                    }
                                </li>
                            </ul>
                        </Link>
                        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarMenu">
                                <li className="nav-item">
                                    <a className="nav-link home" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Agents</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Developers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Articles</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <ul className="signNavbar">
                            <li className="nav-item">
                                {
                                    !isMobile ? <a className="nav-link signBtn" href="#">
                                        <a className="nav-link" href="#">
                                            <svg className="me-4" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35.013">
                                                <g id="User" transform="translate(-568.5 -147.622)">
                                                    <path id="Path_25" data-name="Path 25" d="M603,163.924v2.39a1.527,1.527,0,0,0-.062.255,15.6,15.6,0,0,1-.4,2.516,16.992,16.992,0,0,1-18.9,12.875,16.434,16.434,0,0,1-8.669-3.906,16.683,16.683,0,0,1-5.7-9.942c-.107-.6-.177-1.2-.264-1.8v-2.39c.074-.545.132-1.094.225-1.636a17.03,17.03,0,0,1,13.749-13.9c.606-.111,1.22-.18,1.83-.268H587.2a1.584,1.584,0,0,0,.254.061,15.077,15.077,0,0,1,4.876,1.15,16.8,16.8,0,0,1,10.409,12.794C602.853,162.72,602.913,163.324,603,163.924Zm-12.89,5.232c.011.036.012.051.018.054q.119.058.239.113a10.592,10.592,0,0,1,3.12,2.158,10.473,10.473,0,0,1,2.635,4.351c.063.2.113.271.283.082.222-.247.472-.468.687-.72,4.085-4.788,5.083-10.167,2.669-15.968a14.982,14.982,0,1,0-24.216,16.639c.209.208.266.191.358-.09a10.5,10.5,0,0,1,5.787-6.477c.071-.033.179-.03.2-.142a7.406,7.406,0,1,1,9.068-11.664,7.165,7.165,0,0,1,2.44,5.4A7.334,7.334,0,0,1,590.11,169.156Zm-4.163,1.228c-.275.016-.608.017-.937.057a8.592,8.592,0,0,0-7.425,6.735.394.394,0,0,0,.2.489,15,15,0,0,0,16.433,0,.4.4,0,0,0,.2-.486A8.612,8.612,0,0,0,585.947,170.384ZM586,157.6a5.392,5.392,0,1,0,5.386,5.394A5.372,5.372,0,0,0,586,157.6Z" transform="translate(0 0)" fill="#fff" stroke="#fff" stroke-width="1" />
                                                </g>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </a>
                                    </a>
                                        :
                                        <a className="nav-link" href="#">
                                            <svg className="me-4" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35.013">
                                                <g id="User" transform="translate(-568.5 -147.622)">
                                                    <path id="Path_25" data-name="Path 25" d="M603,163.924v2.39a1.527,1.527,0,0,0-.062.255,15.6,15.6,0,0,1-.4,2.516,16.992,16.992,0,0,1-18.9,12.875,16.434,16.434,0,0,1-8.669-3.906,16.683,16.683,0,0,1-5.7-9.942c-.107-.6-.177-1.2-.264-1.8v-2.39c.074-.545.132-1.094.225-1.636a17.03,17.03,0,0,1,13.749-13.9c.606-.111,1.22-.18,1.83-.268H587.2a1.584,1.584,0,0,0,.254.061,15.077,15.077,0,0,1,4.876,1.15,16.8,16.8,0,0,1,10.409,12.794C602.853,162.72,602.913,163.324,603,163.924Zm-12.89,5.232c.011.036.012.051.018.054q.119.058.239.113a10.592,10.592,0,0,1,3.12,2.158,10.473,10.473,0,0,1,2.635,4.351c.063.2.113.271.283.082.222-.247.472-.468.687-.72,4.085-4.788,5.083-10.167,2.669-15.968a14.982,14.982,0,1,0-24.216,16.639c.209.208.266.191.358-.09a10.5,10.5,0,0,1,5.787-6.477c.071-.033.179-.03.2-.142a7.406,7.406,0,1,1,9.068-11.664,7.165,7.165,0,0,1,2.44,5.4A7.334,7.334,0,0,1,590.11,169.156Zm-4.163,1.228c-.275.016-.608.017-.937.057a8.592,8.592,0,0,0-7.425,6.735.394.394,0,0,0,.2.489,15,15,0,0,0,16.433,0,.4.4,0,0,0,.2-.486A8.612,8.612,0,0,0,585.947,170.384ZM586,157.6a5.392,5.392,0,1,0,5.386,5.394A5.372,5.372,0,0,0,586,157.6Z" transform="translate(0 0)" fill="#fff" stroke="#fff" stroke-width="1" />
                                                </g>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </a>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar;