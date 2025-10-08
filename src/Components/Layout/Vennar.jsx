import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import VennarJpg from "../../assets/kamrul.png"
const Vennar = () => {
  return (
    <>
    <div className="py-7 bg-blue-900">
        <Container>
            <Flex className={"flex-col md:flex-row"}>
                <div className="md:w-[590px]">
                     <h1 className="font-inter font-semibold text-[80px] text-cyan-50 leading-[100px] md:font-inter md:font-bold text-2xl md:text-[55px] md:text-cyan-50 md:leading-[80px]">We Are Digital Product Design Agency</h1>
                     <p className="font-inter text-[36px] leading-[50px] text-cyan-50 py-4 md:font-inter md:text-[18px] md:leading-[27px] md:text-cyan-50 md:py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <div className="sm:text-center md:text-left pt-4">
                        <a href="#" className=" px-4 py-4 bg-white rounded-lg font-inter font-medium text-18 text-cyan-950 hover:bg-blue-500">Get Started</a>
                    </div>
                </div>
                {/* <div className="md:w-[585px] "> */}
                    <img src={VennarJpg} alt={"VennarJpg"} className={"h-[450px] sm:w-[500px] mt-10  md:h-[590px]  rounded-2xl"}></img>
                {/* </div> */}
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Vennar