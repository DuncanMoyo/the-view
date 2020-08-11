import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.475263969843!2d18.461782650612147!3d-33.98032433219154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc42d1ecf4aa85%3A0x14b22393a5adf154!2sDreyer%20St%2C%20Claremont%2C%20Cape%20Town%2C%207708!5e0!3m2!1sen!2sza!4v1597056962961!5m2!1sen!2sza"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
