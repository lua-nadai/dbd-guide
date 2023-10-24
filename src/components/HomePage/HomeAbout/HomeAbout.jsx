import React from "react";
import { SectionHomePage, DivHomeAbout, Title } from "../styles";

const HomeAbout = (props) => { 
  const {
    data,
    imgSize
  } = props

  return (
    <SectionHomePage>
      <DivHomeAbout className={imgSize}>
        <Title>{data.title}</Title>
        <img
          src={data.imgSrc}
          alt={`${data.title}-img`}
        />
        <div>
          {data.p2 ? 
            <>
              <p>{data.p1}</p>
              <p>{data.p2}</p> 
            </> :
            <p>{data.p1}</p> 
          }
        </div>
      </DivHomeAbout>
    </SectionHomePage>
  )
}

export default HomeAbout
