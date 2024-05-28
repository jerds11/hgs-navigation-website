import styled from "styled-components";
import Category from "./components/Category";

function App() {
  return (
    <MainContainer className="App">
      <ContentContainer>
        <WhiteImageContainer
          src={process.env.PUBLIC_URL + "/logo/hgs white logo.svg"}
          alt=""
        />
        <CategoryContainer>
          <Category />
        </CategoryContainer>
      </ContentContainer>
    </MainContainer>
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
  height: 220px;
  width: 600px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
