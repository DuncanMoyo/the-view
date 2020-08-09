import React from 'react';
import Fade from 'react-reveal/Fade'
import websiteData from '../WebsiteData'

const {highlightDescription} = websiteData

const Description = () => {
  return (
    <Fade>
      <div className='center_wrapper'>
        <h2>Highlights</h2>
        <div className='highlight_description'>
          {highlightDescription}
        </div>
      </div>
    </Fade>
  );
};

export default Description;