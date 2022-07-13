import React from "react";
import PropTypes from "prop-types"
import Navbar from "../components/NavBar";
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

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
}

export default Template
