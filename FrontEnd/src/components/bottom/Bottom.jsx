import React from 'react'
import './bottom.css'
import Fb from "../../assets/img/facebook.png";
import Wa from "../../assets/img/whatsapp.png";
import Ins from "../../assets/img/instagram.png";
import Tw from "../../assets/img/twitter.png";

function Bottom() {
    return (
        <div className="bottom">
            <span >
                - Follow Us -
            </span>
            <div className="icons" style={{ display: 'flex', gap: '15px' }}>
                <img style={{ width: '40px', height: '40px' }} alt="" src={Fb}></img>
                <img style={{ width: '40px', height: '40px' }} alt="" src={Wa}></img>
                <img style={{ width: '40px', height: '40px' }} alt="" src={Ins}></img>
                <img style={{ width: '40px', height: '40px' }} alt="" src={Tw}></img>
            </div>
            <span >
                Copyright @ 2022 Easy Car Rental (Pvt) Ltd.
            </span>
        </div>
    )
}

export default Bottom
