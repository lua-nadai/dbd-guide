import styled from "@emotion/styled";
import { device } from "../../styles";

export const Title = styled.h1`
  background-image: linear-gradient(to bottom, rgba(62,0,0,1) 10%, rgba(152,0,0,1) 50%, rgba(62,0,0,1) 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  text-transform: uppercase;
  margin: 5px;
  font-size: 2.5em;
  text-align: center;
`

export const SectionHomePage = styled.section`
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid rgba(0,0,0, .3);
  
  .small {
    img {
      @media ${device.sm} {
        max-width: 150px;
      }
    }
  }

  .medium {
    img {
      @media ${device.xs} {
        max-width: 300px;
      }

      @media ${device.md} {
        max-width: 450px;
      }
    }
  }

  .large {
    img {
      width: 1000px;
      
      @media ${device.xs} {
        max-width: 380px;
      }

      @media ${device.sm} {
        max-width: 550px;
      }

      @media ${device.md} {
        max-width: 700px;
      }

      @media ${device.lg} {
        max-width: 850px;
      }

      @media ${device.xl} {
        max-width: 1000px;
      }
    }
  }

`

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  flex-direction: column;
  
  @media ${device.lg} {
    flex-direction: row;
  }
  
  div {
    width: 45%;
  }
  
  div:first-of-type {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    img {
      margin: 20px;
    }
  }

  div:nth-child(2) {
    width: 100%;
  }

  p {
    font-size: 1.2em;
    text-align: center;
  }
`

export const DivHomeAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  
  div {
    width: 80%;

    p {
      font-size: 1.2em;
      text-align: center;
    }
  }
`