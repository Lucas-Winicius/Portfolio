import styled from "styled-components";

export const landing = styled.section`
  background-color: #070707;
  height: calc(100vh - 50px);
`;

export const primary = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;

  p {
    color: white;
    width: 100%;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }

  h1 {
    display: block;
    margin: auto;
    width: min-content;
    text-align: center;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #f02d3a, #b496e0);
    font-size: 65px;
    font-weight: 600;
  }
`;

export const arrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    color: #fffa;
    text-align: center;
    margin-bottom: 10px;
  }

  img {
    display: block;
    margin: auto;
    transform: scale(0.7);
    animation: arrow infinite 3s;
  }

  @keyframes arrow {
    0% {
      transform: translateY(0px) scale(0.7);
    }
    50% {
      transform: translateY(25px) scale(0.7);
    }
  }
`;
