import React from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import Images from "../../Images";
import LogoPng from "../../assets/Logo.png";
const Futter = () => {
  return (
    <>
<div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
  <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-600">
       <div className="py-4 bg-blue-400">
        <Container>
          <Flex className={"flex-col md:flex-row"}>
            <div className="">
              <Images
                ImgSrc={LogoPng}
                AltSrc={"LogoPng"}
                className={"h-[50px] w-[80px] "}
              />
            </div>
            <div className="">
              <h3 className=" font-inter font-semibold text-cyan-50 text-xl">
                Company
              </h3>
              <p className=" font-inter text-[16px] text-cyan-50">About Us</p>
              <p className=" font-inter text-[16px] text-cyan-50">Work</p>
              <p className=" font-inter text-[16px] text-cyan-50">Latest News</p>
              <p className=" font-inter text-[16px] text-cyan-50">Careers</p>
            </div>
            <div className="">
              <h3 className=" font-inter font-semibold text-cyan-50 text-xl">
                Product
              </h3>
              <p className=" font-inter text-[16px] text-cyan-50">Prototype</p>
              <p className=" font-inter text-[16px] text-cyan-50">
                Plans & Pricing
              </p>
              <p className=" font-inter text-[16px] text-cyan-50">Customers</p>
              <p className=" font-inter text-[16px] text-cyan-50">Integrations</p>
            </div>
            <div className="">
              <h3 className=" font-inter font-semibold text-cyan-50 text-xl">
                Support
              </h3>
              <p className=" font-inter text-[16px] text-cyan-50">Help Desk</p>
              <p className=" font-inter text-[16px] text-cyan-50">Sales</p>
              <p className=" font-inter text-[16px] text-cyan-50">
                Become a Partner
              </p>
              <p className=" font-inter text-[16px] text-cyan-50">Developers</p>
            </div>
            <div className="">
              <h3 className=" font-inter font-semibold text-cyan-50 text-xl">
                Contact
              </h3>
              <p className=" font-inter text-[16px] text-cyan-50">
                524 Broadway,NYC
              </p>
              <p className=" font-inter text-[16px] text-cyan-50">
                {" "}
                +1 777 - 978 - 5570{" "}
              </p>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  </div>
    </>
  );
};

export default Futter;
