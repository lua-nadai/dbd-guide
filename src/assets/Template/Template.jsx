import React from "react";
import Navbar from "../../components/NavBar";
import { TemplateBackground, TemplatePage } from "./styles";

const Template = (props) => {
  const {
    children,
  } = props
  
  return (
    <TemplateBackground>
      <Navbar />
      <TemplatePage>
        {children}
      </TemplatePage>
    </TemplateBackground>
  )
}

export default Template
