import styled from "@emotion/styled";

export const NavbarContainer = styled.nav`
  background-color: black;
  width: 100%;
  ${'' /* min-width:400px; */}
  height: 50px;

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  
    img {
      height: 50px;
      margin-left: 10px;
      box-sizing: content-box;
    }
  
    div {
      height: 50px;
      width: 300px;
      min-width: 100px;
      margin: 0 30px;
      padding: 0 20px;
      justify-content: space-evelyn;
      align-items: center;
    
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`
