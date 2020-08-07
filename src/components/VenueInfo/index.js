import React from "react";
import Calendar from "../../assets/images/icons/calendar.png";
import Location from "../../assets/images/icons/location.png";
import Zoom from 'react-reveal/Zoom'

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red"></div>
                <div
                  className="vn_icon"
                  style={{ background: `url(${Calendar})` }}
                ></div>
                <div className='vn_title'>
                  Event Date & Time
                </div>
                <div className='vn_desc'>
                  16 December 2020
                </div>
              </div>
            </div>
          </div>
          </Zoom>
          <Zoom delay={500} duration={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_yellow"></div>
                <div
                  className="vn_icon"
                  style={{ background: `url(${Location})` }}
                ></div>
                <div className='vn_title'>
                  Event Location
                </div>
                <div className='vn_desc'>
                  Daniel's Room
                </div>
              </div>
            </div>
          </div>
          </Zoom>
         
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
