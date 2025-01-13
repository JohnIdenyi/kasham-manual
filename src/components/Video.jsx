import { useRef } from "react";
import video1 from "../assets/videos/video-1.mp4";
import video2 from "../assets/images/video-2.png";
import video3 from "../assets/images/video-3.png";

export default function Video() {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="video">
      <div className="container">
        <h3 className="video__header">Video documentary</h3>
        <div className="video__cards flex">
          <div className="video__card">
            <video
              className="video__image"
              ref={videoRef}
              src={video1}
              controls
              onClick={handlePlayVideo}
            >
              Your browser does not support the video tag.
            </video>
            <div className="video__card-text">
              <p className="video__subheader">
                Video / <span className="video__location">Kano</span>
              </p>
              <div className="video__watch flex align-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11V7.5C17 7.23478 16.8946 6.98043 16.7071 6.79289C16.5196 6.60536 16.2652 6.5 16 6.5H4C3.73478 6.5 3.48043 6.60536 3.29289 6.79289C3.10536 6.98043 3 7.23478 3 7.5V17.5C3 17.7652 3.10536 18.0196 3.29289 18.2071C3.48043 18.3946 3.73478 18.5 4 18.5H16C16.2652 18.5 16.5196 18.3946 16.7071 18.2071C16.8946 18.0196 17 17.7652 17 17.5V14L21 18V7L17 11Z"
                    fill="black"
                  />
                </svg>
                <span>Gender Based Awareness</span>
              </div>
            </div>
          </div>
          <div className="video__card">
            <img className="video__image" src={video2} alt="" />
            <div className="video__card-text">
              <p className="video__subheader">
                Video / <span className="video__location">Kano</span>
              </p>
              <div className="video__watch flex align-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11V7.5C17 7.23478 16.8946 6.98043 16.7071 6.79289C16.5196 6.60536 16.2652 6.5 16 6.5H4C3.73478 6.5 3.48043 6.60536 3.29289 6.79289C3.10536 6.98043 3 7.23478 3 7.5V17.5C3 17.7652 3.10536 18.0196 3.29289 18.2071C3.48043 18.3946 3.73478 18.5 4 18.5H16C16.2652 18.5 16.5196 18.3946 16.7071 18.2071C16.8946 18.0196 17 17.7652 17 17.5V14L21 18V7L17 11Z"
                    fill="black"
                  />
                </svg>
                <span>Gender Inclusion</span>
              </div>
            </div>
          </div>
          <div className="video__card">
            <img className="video__image" src={video3} alt="" />
            <div className="video__card-text">
              <p className="video__subheader">
                Video / <span className="video__location">Kano</span>
              </p>
              <div className="video__watch flex align-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11V7.5C17 7.23478 16.8946 6.98043 16.7071 6.79289C16.5196 6.60536 16.2652 6.5 16 6.5H4C3.73478 6.5 3.48043 6.60536 3.29289 6.79289C3.10536 6.98043 3 7.23478 3 7.5V17.5C3 17.7652 3.10536 18.0196 3.29289 18.2071C3.48043 18.3946 3.73478 18.5 4 18.5H16C16.2652 18.5 16.5196 18.3946 16.7071 18.2071C16.8946 18.0196 17 17.7652 17 17.5V14L21 18V7L17 11Z"
                    fill="black"
                  />
                </svg>
                <span>Gender Inclusion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
