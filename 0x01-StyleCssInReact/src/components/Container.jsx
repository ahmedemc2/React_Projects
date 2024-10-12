import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  color: white;

  h1 {
    font-size: 20px;
  }

  &:hover {
    background-color: ${({ bg }) => bg};
  }

  button {
    background-color: dodgerblue;
  }
`;
export default Container;
