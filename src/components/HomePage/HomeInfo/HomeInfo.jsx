import React from "react";
import { SectionHomePage, DivInfo, Title } from "../styles";

const HomeInfo = (props) => { 
  const {
    data,
    imgSize
  } = props

  return (
    <SectionHomePage>
      <DivInfo className={imgSize}>
        <div>
            { data.imgSrc2 ? 
              <div className='flex-wrap'>
                <img
                  src={data.imgSrc}
                  alt={`${data.title}-img`}
                />
                <img 
                  src={data.imgSrc2}
                  alt={`${data.title}-img`}
                />
              </div> : 
              <img 
                src={data.imgSrc}
                alt={`${data.title}-img`}
              />
            }
        </div>
        <div>
          <Title>{data.title}</Title>
          {data.p2 ?
            <>
              <p>{data.p1}</p>
              <p>{data.p2}</p>
            </> :
            <p>{data.p1}</p>
          }
        </div>
      </DivInfo>
    </SectionHomePage>
  )
}

export default HomeInfo
