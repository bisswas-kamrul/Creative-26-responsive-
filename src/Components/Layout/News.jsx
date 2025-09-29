import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Images from '../../Images'
import stander from "../../assets/news 01.png"
import stander2 from "../../assets/news 02.png"
import stander3 from "../../assets/news 03.png"
const News = () => {
  return (
    <>
    <div className="bg-blue-900">
        <Container>
            <h3 className=" font-bold font-inter text-[40px] text-cyan-50 text-center">Our Letest News</h3>
            <p className="font-inter text-[16px] text-cyan-50 pt-[10px] text-center">There are many variations of passages of Lorem Ipsum available, but <br></br>the majority have suffered alteration in some form.</p>
            <Flex className={"flex-col gap-y-3 md:flex-row mt-5"}>
                 <div className=" w-[360px] bg-white rounded-2xl drop-shadow-sm border-2 border-transparent hover:border-2 hover:border-blue-500 transition-[0.4s]">
                        <div className="text-center">
                            <Images ImgSrc={stander} AltSrc={"stander"} className={" rounded-[10px] ml-3"}/>
                                    <p className=" py-3">23/03/2025</p>                           
                            <div className="">
                                <h4 className=" font-inter font-semibold text-xl text-[#181818]">Business Plans That Fit <br></br> Your Best Blog</h4>
                                <p className=" font-inter text-[16px] text-[#5D5D5D]">There are many variations of passages <br></br>  of Lorem Ipsum , but the majority have <br></br>suffered alteration in some form.</p>
                                <h5 className=" font-inter font-semibold text-xl text-[#5956E8]">Learn More</h5>
                            </div>
                        </div>
                    </div>
                 <div className=" w-[360px] bg-white rounded-2xl drop-shadow-sm border-2 border-transparent hover:border-2 hover:border-blue-500 transition-[0.4s]">
                        <div className="text-center">
                            <Images ImgSrc={stander2} AltSrc={"stander2"} className={" rounded-[10px] ml-3"}/>
                                    <p className=" py-3">23/03/2025</p>                           
                            <div className="">
                                <h4 className=" font-inter font-semibold text-xl text-[#181818]">Business Plans That Fit <br></br> Your Best Blog</h4>
                                <p className=" font-inter text-[16px] text-[#5D5D5D]">There are many variations of passages <br></br>  of Lorem Ipsum , but the majority have <br></br>suffered alteration in some form.</p>
                                <h5 className=" font-inter font-semibold text-xl text-[#5956E8]">Learn More</h5>
                            </div>
                        </div>
                    </div>
                 <div className=" w-[360px] bg-white rounded-2xl drop-shadow-sm border-2 border-transparent hover:border-2 hover:border-blue-500 transition-[0.4s]">
                        <div className="text-center">
                            <Images ImgSrc={stander3} AltSrc={"stander3"} className={" rounded-[10px] ml-3"}/>
                                    <p className=" py-3">23/03/2025</p>                           
                            <div className="">
                                <h4 className=" font-inter font-semibold text-xl text-[#181818]">Business Plans That Fit <br></br> Your Best Blog</h4>
                                <p className=" font-inter text-[16px] text-[#5D5D5D]">There are many variations of passages <br></br>  of Lorem Ipsum , but the majority have <br></br>suffered alteration in some form.</p>
                                <h5 className=" font-inter font-semibold text-xl text-[#5956E8]">Learn More</h5>
                            </div>
                        </div>
                    </div>
               
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default News