'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#0a0b1e]">
     <header className="border-[#ffffff26] relative flex items-center justify-center border-b border-solid py-3">
      <div className="max-w-[1120px] px-[150px] mx-auto flex w-full items-center justify-between gap-5">
         <Image src="/images/img_header_logo.png" className="w-[38px] h-[38px] object-contain" alt="Google" width={24} height={24} />
         <div className="rounded-[20px] border-[#ffffff26] w-[62%] flex justify-center border border-solid p-2">
          <ul className="gap-[30px] flex items-center">
            <li>
              <div className="flex cursor-pointer items-center gap-0.5">
                <p className=" text-[13px] !text-[#ffffff99] font-normal " >Features</p>
                <Image src="/images/img_arrow_down.svg" className="w-[14px] h-[14px]" alt="Google" width={14} height={14} />
              </div>
            </li>
            <li>
              <Link href="/terms">
                <p className=" text-[13px] !text-[#ffffff99] font-normal  ">
                  Developers
                </p>
              </Link>{' '}
            </li>
            <li>
              <Link href="/terms">
                <p className=" text-[13px] !text-[#ffffff99] font-normal  ">
                Company
                </p>
              </Link>{' '}
            </li>
            <li>
              <Link href="/terms">
                <p className=" text-[13px] !text-[#ffffff99] font-normal  ">
                Blog
                </p>
              </Link>{' '}
            </li>
            <li>
              <Link href="/terms">
                <p className=" text-[13px] !text-[#ffffff99] font-normal  ">
                Changelog
                </p>
              </Link>{' '}
            </li>
          </ul>
         </div>
         <div className="rounded-[12px] border-[#ffffff26] flex border border-solid p-1.5">
          <Link href="/signin" className="min-w-[108px] border-[#ffffff26] px-[13px] rounded-lg border border-solid flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[30px] px-3.5 text-[14px] bg-[#8c45ff66] text-[#ffffff]">
            Join waitlist
          </Link>
         </div>
      </div>
     </header>

     <div className="flex flex-col items-center gap-3">
      <div className="max-w-[1120px] mt-[90px] mx-auto flex w-full flex-col items-center px-14">
        <div className="rounded-[20px] bg-[#000000] border-[#ffffff26] flex flex-wrap items-center gap-1.5 border border-solid p-1.5">
          <h1 className=" bg-[#9855ff] text-[10px] !text-[#000000] rounded-lg p-0.5 font-bold ">NEW</h1>
          <p className=" text-[16px] !text-[#9855ff] self-end font-normal  ">Latest integration just arrived</p>
        </div>
      </div>
      <div className="h-[1020px] relative self-stretch">
        <div className="max-w-[1120px] absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full">
          <div className="z-[1] mx-[266px] relative flex flex-col items-center gap-4">
            <h1 className="leading-[84px] to-[#b372cf] from-[#ffffff] text-[82px] tracking-[-4.15px] bg-gradient-to-b bg-clip-text text-center font-medium !text-transparent ">
              Boost your <br /> rankings with AI.
            </h1>
            <p className=" leading-[31px] text-[20px] !text-[#ffffff] self-stretch text-center font-normal  ">
            Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
            </p>
            <div className="rounded-[12px] border-[#ffffff19] flex border border-solid px-1.5 py-2">
              <button className="min-w-[120px] tracking-[-0.15px] rounded-lg px-3.5 font-medium flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[38px] px-3.5 text-[14px] bg-[#ffffff] text-[#000000]">
                Start for free
              </button>
            </div>
          </div>
          <div className="mt-[-268px] h-[970px] relative content-center">
            <div className="rounded-[412px] blur-[534.00px] backdrop-opacity-[0.5] bg-[#602a9a] w-[74%] m-auto flex flex-col items-center justify-center px-14 py-32">
              <div className="rounded-[284px] blur-[224.00px] backdrop-opacity-[0.5] bg-[#622a9a] w-[568px] h-[568px]">              </div>
            </div>
            <Image src="/images/img_circles_bac_ground.svg" className="w-[92%] h-[970px] absolute bottom-0 left-0 right-0 top-0 m-auto object-contain" alt="Google" width={1032} height={970} />
            <div className="rounded-[10px] shadow-[0_-19px_70px_0_#8c45ff66] to-[#0b0614] via-[#0e081b00] from-[#0d0717] border-[#ffffff19] bottom-[0.12px] absolute left-0 right-0 mx-auto flex-1 border border-solid bg-gradient-to-l px-2.5">
             <Image src="/images/img_app_wide_2x_1.png" className="h-[656px] mt-2.5 w-full rounded-lg object-cover md:h-auto" alt="Appwide2xone" width={1098} height={656} />
            </div>
          </div>
        </div>
        <div className="to-[#050208] from-[#00000000] h-[308px] absolute bottom-0 left-0 right-0 mx-auto flex-1 bg-gradient-to-b">
        </div>
      </div>
     </div>

    <div className="max-w-[1120px] mx-auto flex w-full justify-center px-14 py-14">
      <div className="gap-[52px] w-[92%] flex flex-col items-center">
          <div className="gap-[26px] w-[46%] flex flex-col items-center">
            <div className="flex flex-col items-center gap-5 self-stretch">
              <h2 className="text-[56px] tracking-[-0.84px] !text-[#ffffff] font-medium ">Pricing</h2>
              <p className=" leading-[31px] text-[20px] !text-[#ffffff] self-stretch text-center font-normal  "> Choose the right plan to meet your SEO needs and start optimizing today.</p>
            </div>
          </div>
          <div className="flex gap-2.5 self-stretch">
            <div className="transition-all duration-300 ease-in-out hover:shadow-[0_10px_74px_10px_#4e00bf68] rounded-[10px] bg-[#0000000f] border-[#ffffff26] gap-[178px] w-[32%] flex cursor-pointer flex-col border border-solid p-5">
              <div className="flex flex-col gap-10 self-stretch">
                <div className="flex flex-col items-start justify-center gap-1.5">
                  <p className=" text-[24px] tracking-[-0.01px] !text-[#ffffff] font-medium  ">Pricing</p>
                  <p className=" text-[16px] !text-[#ffffffb2] font-normal  "> $29/mo</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">Keyword optimization</p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">Automated meta tags</p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">SEO monitoring</p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">Monthly reports</p>
                  </div>
                </div>
              </div>
              <Link href='/' className="transition-all duration-300 ease-in-out hover:bg-[rgba(140,69,255,0.4)] hover:border hover:border-[rgba(255,255,255,0.15)] hover:shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] hover:backdrop-blur-[7px] rounded-[10px] border-[#ffffff26] px-[33px] self-stretch border border-solid sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[38px] text-[14px] bg-[#3d3d3d66] text-[#ffffff]">
                Join waitlist
                </Link>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:shadow-[0_10px_74px_10px_#4e00bf68] rounded-[10px] bg-[#0000000f] border-[#ffffff26] gap-[178px] w-[32%] flex cursor-pointer flex-col border border-solid p-5">
              <div className="flex flex-col gap-10 self-stretch">
                <div className="flex flex-col items-start justify-center gap-1.5">
                  <p className=" text-[24px] tracking-[-0.01px] !text-[#ffffff] font-medium  ">Pro</p>
                  <p className=" text-[16px] !text-[#ffffffb2] font-normal  ">$79/mo</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">Keyword optimization</p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">Automated meta tags</p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">SEO monitoring</p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">Monthly reports</p>
                  </div>
                </div>
              </div>
              <Link href='/' className="transition-all duration-300 ease-in-out hover:bg-[rgba(140,69,255,0.4)] hover:border hover:border-[rgba(255,255,255,0.15)] hover:shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] hover:backdrop-blur-[7px] rounded-[10px] border-[#ffffff26] px-[33px] self-stretch border border-solid sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[38px] text-[14px] bg-[#3d3d3d66] text-[#ffffff]">
                Join waitlist
              </Link>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:shadow-[0_10px_74px_10px_#4e00bf68] rounded-[10px] bg-[#0000000f] border-[#ffffff26] gap-[178px] w-[32%] flex cursor-pointer flex-col border border-solid p-5">
              <div className="flex flex-col gap-10 self-stretch">
                <div className="flex flex-col items-start justify-center gap-1.5">
                  <p className=" text-[24px] tracking-[-0.01px] !text-[#ffffff] font-medium  ">Business</p>
                  <p className=" text-[16px] !text-[#ffffffb2] font-normal  ">$149/mo</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">Keyword optimization</p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">Automated meta tags</p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">SEO monitoring</p>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5">
                    <Image src="/images/img_icons.svg" className="h-[14px]" alt="" width={16} height={16} />
                    <p className="text-[14px] !text-[#ffffff] font-normal  ">Monthly reports</p>
                  </div>
                </div>
              </div>
              <Link href='/' className="transition-all duration-300 ease-in-out hover:bg-[rgba(140,69,255,0.4)] hover:border hover:border-[rgba(255,255,255,0.15)] hover:shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] hover:backdrop-blur-[7px] rounded-[10px] border-[#ffffff26] px-[33px] self-stretch border border-solid sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[38px] text-[14px] bg-[#3d3d3d66] text-[#ffffff]">
                Join waitlist
              </Link>
            </div>
          </div>
      </div>
    </div>

    </div>
  );
}
