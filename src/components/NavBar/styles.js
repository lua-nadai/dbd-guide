import styled from "@emotion/styled";

export const NavbarContainer = styled.nav`
  background-color: black;
  box-sizing: content-box;
  width: 100vw;
  height: 50px;
  ${'' /* margin: 0 20px; */}
  display: flex;
  justify-content: space-between;

  img {
    height: 100%;
    background-color: pink;
  }

  div {
    color: white;
    text-decoration: none;
    text-align: center;
    height: 100%;
    width: 30vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`
