import React from "react";
import { Section } from "./styles";

const HomeSectionInfo = (props) => { 
  const {
    data,
    sizeImg,
  } = props

  return (
    <Section>
      <div className={sizeImg}>
        <h1>{data.title}</h1>
        <img 
          src={data.imgSrc}
          alt={`${data.title}-img`}
        />
        <p>{data.p1}</p>
        <p>{data.p2 ? data.p2 : null }</p>
      </div>
    </Section>
  )
}

export const HomeSectionInfoLeft = (props) => { 
  const {
    data,
    sizeImg,
    code,
  } = props

  return (
    <Section>
      <div className={sizeImg}>
      <div>
          <img 
            src={data.imgSrc}
            alt={`${data.title}-img`}
          />
          { data.imgSrc2 ? 
            <img 
              src={data.imgSrc2}
              alt={`${data.title}-img`}
            /> : null
          }
      </div>
        <div>
          <h1>{data.title}</h1>
          <p>{data.p1}</p>
          <p>{data.p2 ? data.p2 : null }</p>
        </div>
      </div>
    </Section>
  )
}

export default HomeSectionInfo
