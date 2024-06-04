import { useState } from "react";
import styled from "styled-components";
import Category from "./components/Category";
import { links } from "./components/Links";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Modal from "./components/Modal";

function App() {
  const [showAllButton, setShowAllButton] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  const handleShowButton = () => {
    setShowAllButton(!showAllButton);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
    console.log("clicked");
  };

  return (
    <>
      <MainContainer>
        <ContentContainer>
          <WhiteImageContainer
            src={process.env.PUBLIC_URL + "/logo/hgs white logo.svg"}
            alt=""
          />

          {showModal && (
            <Modal videoLink={videoLink} modal={() => handleShowModal()} />
          )}

          <CategoryContainer showAllButton={showAllButton}>
            {!showAllButton
              ? links.map((link, index) => {
                  if (index < 6) {
                    return (
                      <Category
                        key={index}
                        title={link.title}
                        icon={link.icon}
                        play={link.play}
                        clicked={() => {
                          handleShowModal();
                          setVideoLink(link.link);
                        }}
                        modal={() => handleShowModal()}
                      />
                    );
                  }
                  return false;
                })
              : links.map((link, index) => {
                  return (
                    <Category
                      key={index}
                      title={link.title}
                      icon={link.icon}
                      play={link.play}
                      clicked={() => {
                        handleShowModal();
                        setVideoLink(link.link);
                      }}
                      modal={() => handleShowModal()}
                    />
                  );
                })}
          </CategoryContainer>

          {showAllButton ? (
            <UpButton size={50} onClick={handleShowButton} className="jump" />
          ) : (
            <DownButton size={50} onClick={handleShowButton} className="jump" />
          )}
        </ContentContainer>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  position: absolute;
  background-image: url(${process.env.PUBLIC_URL + "/GIF/BG.gif"});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteImageContainer = styled.img`
  height: 90px;

  @media screen and (max-width: 900px) {
    & {
      height: 70px;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      height: 50px;
    }
  }
`;

const CategoryContainer = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${(props) => (props.showAllButton ? "normal" : "center")};
  margin: 30px 0;
  height: ${(props) => (props.showAllButton ? "540px" : "200px")};
  transition: height 0.7s ease;
  overflow: ${(props) => (props.showAllButton ? "auto" : "hidden")};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;

const DownButton = styled(MdKeyboardArrowDown)`
  color: white;
  cursor: pointer;
`;

const UpButton = styled(MdKeyboardArrowUp)`
  color: white;
  cursor: pointer;
`;
