import React, { useCallback, useRef } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import video from "../assets/pexels-kampus-production-6761351.mp4"

export default function Media() {
  const videoRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    videoRef.current.pause();
  }, []);

  return (
    <MDBContainer>
      <video
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={videoRef}
        src={video}
        type="video/mp4"
        loop
        className="w-100"
      ></video>
    </MDBContainer>
  );
}