import styled from "@emotion/styled";
import { device } from "../../styles";

export const TemplateBackground = styled.div`
  width: 100%;
  min-width: 400px;
  display: flex;
  ${'' /* background-image: url('./images/bgsmoke.jpg');
  background-size: cover; */}
  flex-direction: column;
`

export const TemplatePage = styled.div`
  background-color: rgba(255, 255, 255, 0.281) ;
  place-self: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0 10px 3px rgba(255, 255, 255, 0.6);
  clip-path: inset(0px -13px 0px -13px);

  @media ${device.xs} {
    max-width: 400px;
  }

  @media ${device.sm} {
    max-width: 600px;
  }

  @media ${device.md} {
    max-width: 750px;
  }
  
  @media ${device.lg} {
    max-width: 900px;
  }
  
  @media ${device.xl} {
    max-width: 1100px;
  }
`
