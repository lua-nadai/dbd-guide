import React from "react";
import { SectionObjectives, Title } from "./styles";

const HomeObjectives = (props) => { 
  const {
    data,
    imgSize
  } = props

  return (
    <SectionObjectives>
      <div>
        <Title>Objectives <br/> as a survivor</Title>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <h2></h2>
        </div>
        <p></p>
      </div>
    </SectionObjectives>
  )
}

export default HomeObjectives
