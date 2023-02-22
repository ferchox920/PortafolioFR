import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>
      <div className="content">
        <h1>Lic. Fernando Ramones</h1>
      </div>
    </div>
  );
}

export default LandingPage;