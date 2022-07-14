import styled from "@emotion/styled";

export const TemplateBackground = styled.div`
  width: 100%;
  min-width: 400px;
  display: flex;
  ${'' /* background-image: url('images/bgsmoke.jpg');
  background-size: cover; */}
  flex-direction: column;
`

export const TemplatePage = styled.div`
  width: 60%;
  height: 100%;
  min-width: 400px;
  max-width: 1200px;
  height: inherit;
  background-color: rgba(255, 255, 255, 0.281) ;
  place-self: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0 10px 3px rgba(255, 255, 255, 0.6);
  clip-path: inset(0px -13px 0px -13px);
`
