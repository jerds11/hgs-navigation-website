import styled from "styled-components";
import { useRef, useState } from "react";
import { GiPlayButton, GiPauseButton } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = (props) => {
  const videoRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    setVideoStatus(!videoStatus);
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoStatus(!videoStatus);
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <ModalContainer>
      <MainContentContainer>
        <video ref={videoRef} className="shadow">
          <source src={props.videoLink} type="video/mp4" />
        </video>
        <ButtonContainer>
          {videoStatus ? (
            <button onClick={handlePause} className="btn-pause">
              <GiPauseButton />
            </button>
          ) : (
            <button onClick={handlePlay} className="btn-success">
              <GiPlayButton />
            </button>
          )}

          <button
            onClick={() => {
              handleStop();
              props.modal();
            }}
            className="btn-danger"
          >
            <IoMdCloseCircleOutline />
          </button>
        </ButtonContainer>
      </MainContentContainer>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: absolute;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContentContainer = styled.div`
  video {
    height: 650px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
  button {
    padding: 4px 40px;
    cursor: pointer;
    text-align: center;
    align-items: center;
    font-size: 20px;
  }
`;
