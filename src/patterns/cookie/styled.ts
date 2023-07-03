import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 15px;
  bottom: 15px;
  background-color: white;
  padding: 15px;
  width: 270px;
  border-radius: 3px;

  h1 {
    font-size: 1em;
  }

  p {
    font-size: 0.7em;
    text-align: justify;
    padding: 15px 0px;
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 40px;
    font-weight: bolder;
    border: 2px solid #070707;
    transition: 0.3s;
  }

  button:hover {
    background-color: #070707;
    color: white;
  }
`;
