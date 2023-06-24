import styled from "styled-components";

export const header = styled.header`
  background-color: #070707;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

export const nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.3rem;
  }

  button {
    @keyframes blur-animation {
      0% {
        transform: scale(1) rotate(0deg);
      }
      50% {
        transform: scale(1.3) rotate(-5deg);
      }
      100% {
        transform: scale(1) rotate(0deg);
      }
    }
    background-color: transparent;

    #blur {
      display: none;
      animation: blur-animation 3s infinite alternate;
    }

    span {
      cursor: pointer;
      font-size: 2em;
      filter: grayscale(100%);
      transition: 0.3s;
    }

    &:hover {
      #blur {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 2.2em;
        filter: blur(10px);
      }

      span {
        filter: grayscale(0%);
        position: relative;
        z-index: 1;
      }
    }
  }

  li {
    position: relative;

    a {
      text-decoration: none;
      color: white;
      border-radius: 5px;
      position: relative;
      font-weight: 500;
      padding-bottom: 3px;

      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #f02d3a;
        transition: width 0.3s ease-in-out;
      }

      &:hover::after,
      &:focus::after {
        width: 100%;
        left: 0;
        transition: width 0.4s ease-in-out;
      }
    }
  }
`;
