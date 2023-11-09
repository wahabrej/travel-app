import React, { useState } from 'react';

function DestinationDetails() {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const handleVideoPopup = () => {
    // Handle video popup logic
  };

  return (
    <div>
      <h1>Destination Details Page</h1>
      {/* Display destination details */}
      <div>
        <img src="destination-image.jpg" alt="Destination" onClick={handleVideoPopup} />
        <p>Destination Description</p>
      </div>
      {/* Video Popup */}
      {showVideoPopup && (
        <div>
          {/* Add video player */}
          <video controls>
            <source src="destination-video.mp4" type="video/mp4" />
          </video>
          {/* Close button */}
          <button onClick={() => setShowVideoPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default DestinationDetails;
