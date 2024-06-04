import styled from "styled-components";

function Category(props) {
  return (
    <>
      <CardContainer onClick={props.clicked} className="shadow">
        <ButtonAndIconContainer>
          <IconContainer src={props.icon} />
          <ButtonContainer>
            <IconContainer2 src={props.play} />
          </ButtonContainer>
        </ButtonAndIconContainer>
        <CardTitleContainer>
          <CardTitle>{props.title}</CardTitle>
        </CardTitleContainer>
      </CardContainer>
    </>
  );
}

export default Category;

const CardContainer = styled.div`
  width: 120px;
  height: 180px;
  margin: 10px;
  background-color: #1f2937;
  border: 1px solid #dedede;
  position: relative;

  @media screen and (max-width: 900px) {
    & {
      width: 100px;
      height: 160px;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      width: 80px;
      height: 140px;
    }
  }
`;

const ButtonAndIconContainer = styled.div`
  position: relative;
  background-color: #dedede;
`;

const IconContainer = styled.img`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    img {
      display: inline;
    }
  }
`;

const CardTitleContainer = styled.div`
  padding: 9px 10px 10px 10px;
`;

const CardTitle = styled.h5`
  color: white;
`;

const IconContainer2 = styled.img`
  display: none;
  width: 100px;
  height: 100px;
`;
