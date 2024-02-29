import React, { useEffect, useRef, useState } from 'react';

const WebcamDisplay: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function setupWebcam() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error('Error accessing the webcam', error);
        }
      }
    }

    setupWebcam();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <video ref={videoRef} className="rounded-lg" autoPlay playsInline></video>
    </div>
  );
};

export default WebcamDisplay;
