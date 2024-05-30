import styled from "styled-components";

function Category(props) {
  return (
    <>
      <CardContainer className="shadow">
        <ButtonAndIconContainer>
          <IconContainer src={props.icon} />
          <ButtonContainer></ButtonContainer>
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
  border-radius: 5px;
  margin: 10px;
  background-color: #1f2937;
`;

const ButtonAndIconContainer = styled.div`
  width: 100px;
`;

const IconContainer = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ButtonContainer = styled.div``;

const CardTitleContainer = styled.div``;

const CardTitle = styled.h5`
  color: white;
  padding: 10px;
`;
