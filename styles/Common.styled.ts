import styled from "styled-components";
import { device } from "./Breakpoint";

export const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
`;

export const MoreLink = styled.div`
  a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    color: ${({ theme }) => theme.black};
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
    svg {
      margin-left: 10px;
      transition: 0.3s;
    }
    &:hover {
      svg {
        transform: translateX(6px);
        stroke: ${({ theme }) => theme.primary};
      }
    }
  }
`;

export const Padding = styled.div`
  padding: 100px 0;
  @media ${device.mobileL} {
    padding: 30px 0;
  }
`;

export const Infotitle = styled.h2`
  font-weight: 600;
  font-size: 50px;
  line-height: 150%;
  text-align: center;
  @media ${device.laptop} {
    font-size: 2em;
  }
  @media ${device.mobileL} {
    font-size: 1.5em;
  }
`;

export const Infopara = styled.p`
  width: 80%;
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  max-width: 758px;
`;
