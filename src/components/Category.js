import styled from "styled-components";

function Category(props) {
  return (
    <>
      <CardContainer>
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
  border-radius: 5px;
  margin: 10px;
  background-color: #1f2937;
  position: relative;
  border: 1px solid #dbdbdb;
`;

const ButtonAndIconContainer = styled.div`
  position: relative;
`;

const IconContainer = styled.img`
  width: 100%;
  height: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
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
`;

const CardTitleContainer = styled.div`
  padding: 9px 10px 10px 10px;
`;

const CardTitle = styled.h5`
  color: white;
`;

const IconContainer2 = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
  background-color: rgba(150, 150, 150, 0.5);
  cursor: pointer;
  transition: all 1000ms;
  &:hover {
    background-color: rgba(150, 150, 150, 0.9);
  }
`;
