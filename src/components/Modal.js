import styled from "styled-components";
import { useRef, useState } from "react";

const Modal = () => {
  const videoRef = useRef(null);
  const [useButtons, setUseButtons] = useState({
    play: false,
    pause: true,
    stop: false,
  });

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    setUseButtons((prevState) => ({
      ...prevState,
      play: !prevState.play,
      pause: !prevState.pause,
    }));
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setUseButtons((prevState) => ({
      ...prevState,
      play: !prevState.play,
      pause: !prevState.pause,
    }));
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setUseButtons((prevState) => ({
      ...prevState,
      stop: !prevState.stop,
    }));
  };

  return (
    <ModalContainer>
      <MainContentContainer>
        <video ref={videoRef}>
          <source
            src={process.env.PUBLIC_URL + "/videos/v1.mp4"}
            type="video/mp4"
          />
        </video>
        <ButtonContainer>
          <button onClick={handlePlay} disabled={useButtons.play}>
            Play
          </button>
          <button onClick={handlePause} disabled={useButtons.pause}>
            Pause
          </button>
          <button onClick={handleStop} disabled={useButtons.stop}>
            Stop
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
  background-color: rgb(128, 128, 128, 0.5);
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
    padding: 10px 25px;
    cursor: pointer;
  }
`;
