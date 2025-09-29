import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Images from '../../Images'
import Portfolio1 from "../../assets/protful 01.png"
import Portfolio2 from "../../assets/Portful 02.png"
import Portfolio3 from "../../assets/Portfolio 3.png"
import Portfolio4 from "../../assets/Portfolio 4.png"
import Portfolio5 from "../../assets/Portfolio 5.png"
import Portfolio6 from "../../assets/Portfolio 6.png"
import Portfolio7 from "../../assets/Portfolio 7.png"
import Portfolio8 from "../../assets/Portfolio 8.png"
const Portfolio = () => {
  return (
   <>
   <div className="bg-blue-900">
    <Container>
        <h3 className=" font-inter font-bold text-[40px] text-cyan-50 text-center">Our Work Portfolio</h3>
        <p className=" font-inter text-base text-cyan-50 pt-[10px] text-center">There are many variations of passages of Lorem Ipsum available, but <br></br> the majority have suffered alteration in some form.</p>
        <Flex className={"flex-col md:flex-row flex-wrap"}>
             <div className="relative pt-[5%] group"> 
                   <Images ImgSrc={Portfolio1} AltSrc={"Portfoliol"} className={"h-[420px]  md:w-[280px] rounded-[10px]"}/>
                    <div className="absolute px-6 py-6 bg-blue-500 bottom-6 left-10 rounded-[10px] opacity-0 group-hover:opacity-100">
                      <h5 className=" font-inter font-semibold text-[20px] text-[#FFFFFF]">Graphic Design</h5>
                      <p className="font-inter text-4 text-[#FFFFFF] pl-4">See Details<span className="pl-2"><i className="fa-solid fa-arrow-right"></i></span></p>
                    </div>
                </div>
                 <div className="pt-[5%]"> 
                   <Images ImgSrc={Portfolio2} AltSrc={"Portfolio2"} className={"h-[420px] md:w-[280px] rounded-[10px]"}/>
                </div>
                 <div className="pt-[5%]"> 
                   <Images ImgSrc={Portfolio3} AltSrc={"Portfolio3"} className={"h-[420px] md:w-[280px] rounded-[10px]"}/>
                </div>
                 <div className="pt-[5%]"> 
                   <Images ImgSrc={Portfolio4} AltSrc={"Portfolio4"} className={"h-[420px] md:w-[280px] rounded-[10px]"}/>
                </div>
             <div className="relative pt-[5%] group"> 
                   <Images ImgSrc={Portfolio5} AltSrc={"Portfolio5"} className={"h-[420px] md:w-[280px] rounded-[10px]"}/>
                </div>
                 <div className="pt-[5%]"> 
                   <Images ImgSrc={Portfolio6} AltSrc={"Portfolio6"} className={"h-[420px] md:w-[280px] rounded-[10px]"}/>
                </div>
                 <div className="pt-[5%]"> 
                   <Images ImgSrc={Portfolio7} AltSrc={"Portfolio7"} className={"h-[420px] md:w-[280px] rounded-[10px]"}/>
                </div>
                 <div className="pt-[5%]"> 
                   <Images ImgSrc={Portfolio8} AltSrc={"Portfolio8"} className={"h-[420px] md:w-[280px] rounded-[10px]"}/>
                </div>
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Portfolio