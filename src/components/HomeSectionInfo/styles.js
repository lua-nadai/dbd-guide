import styled from "@emotion/styled";

export const Section = styled.section`
  width: 90%;
  height: 600px;
  align-self: center;
  text-align: center;
  margin: 20px;
  border-bottom: 2px solid rgba(0,0,0, .3);

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1 {
      text-transform: uppercase;
      margin: 5px auto;
      font-size: 32px;
    }

    img {
      width: 90%;
      margin: 10px auto;
    }
    
    p {
      width: 80%;
      min-width: 80%;
      font-size: 20px;
    }
  }

  .left {
    flex-direction: row;

    img {
      width: 40%;
    }
  }
`
