import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: Black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $29.99</Container>;
};

export default Announcement;