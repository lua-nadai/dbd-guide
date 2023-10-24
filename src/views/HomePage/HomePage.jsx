import React from "react";
import { textHomeInfo } from "../../constants";
import Template from "../../assets/Template";
import HomeAbout from "../../components/HomePage/HomeAbout";
import HomeInfo from "../../components/HomePage/HomeInfo";
import HomeObjectives from "../../components/HomePage/HomeObjectives/HomeObjectives";

const HomePage = () => {
  
  return (
    <Template>
      <HomeAbout
        data={textHomeInfo[0]}
        imgSize={textHomeInfo[0].imgSize}
      />
      <HomeObjectives />
      {textHomeInfo.slice(1).map((data, index) => (
        <HomeInfo key={index} data={data} imgSize={data.imgSize}/>
      ))}
    </Template>
  )
}

export default HomePage
