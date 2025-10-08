import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Images from '../../Images'
import MemberJpg1 from "../../assets/teem member pexel.jpg"
import MemberJpg2 from "../../assets/teem member pexel-2 .jpg"
import MemberJpg3 from "../../assets/teem member pexel-3.jpg"
const Member = () => {
  return (
    <>
    <div className="bg-blue-900">
        <Container>
            <h3 className=" font-inter font-bold text-[40px] text-cyan-50 text-center pt-5">Our Expert Team Member</h3>
            <p className=" font-inter text-base text-cyan-50 text-center">There are many variations of passages of Lorem Ipsum available, but <br></br>the majority have suffered alteration in some form.</p>
            <Flex className={"flex-col md:flex-row"}>
                <div className="pt-[4%]">
                     <Images ImgSrc={MemberJpg1} AltSrc={"MemberJpg"} className={"h-full md:h-[420px]  md:w-[370px] rounded-[10px]"}/>
                </div>
                <div className="pt-[4%]">
                     <Images ImgSrc={MemberJpg2} AltSrc={"MemberJpg2"} className={"h-full md:h-[420px] md:w-[370px] rounded-[10px]"}/>
                </div>
                <div className="pt-[4%]">
                     <Images ImgSrc={MemberJpg3} AltSrc={"MemberJpg3"} className={"h-full md:h-[420px] md:w-[370px] rounded-[10px]"}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Member