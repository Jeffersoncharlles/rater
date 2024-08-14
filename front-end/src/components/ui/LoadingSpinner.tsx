import styled from "styled-components";


const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: ${({theme})=>theme.COLORS.GRAY_100};
  width: .625rem;
  height: .625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: .125rem;
    height: .125rem;
    border-radius: 50%;
    background: ${({theme})=>theme.COLORS.GRAY_100};
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    0%{
       transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export {Loader}
