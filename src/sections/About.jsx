import { useEffect, useRef } from "react";
import clsx from "clsx";
import Globe from "react-globe.gl";
import { useMediaQuery } from "react-responsive";
import AboutCard1 from "/src/assets/icons/AboutCard1.svg?react";
import AboutCard2 from "/src/assets/icons/AboutCard2.svg?react";
import TechStack from "/src/assets/icons/TechStack.svg?react";
import Timezone from "/src/assets/icons/Timezone.svg?react";
import MyPassion from "/src/assets/icons/MyPassion.svg?react";
import ContactOptions from "/src/assets/icons/ContactOptions.svg?react";
import MyPassionSeparator from "/src/assets/icons/MyPassionSeparator.svg?react";
import Keyboard from "/src/assets/icons/Keyboard.svg?react";
import LinkedIn from "/src/assets/icons/LinkedIn.svg?react";
import Github from "/src/assets/icons/Github.svg?react";
import Gmail from "/src/assets/icons/Gmail.svg?react";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const About = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isLG = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ maxWidth: 1280 });
  const isXL = useMediaQuery({ minWidth: 1280 });

  console.log("window.innerWidth", window.innerWidth);
  console.log("isSmall, isMobile, isTablet", isSmall, isMobile, isTablet);

  const globeEl = useRef();

  useEffect(() => {
    globeEl.current.pointOfView({ lat: 22, lng: -51, altitude: 2 });
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().enableZoom = false;
  }, []);

  return (
    <section className="c-space my-20 mt-[50rem] relative pb-5" id="about">
      <SectionTitle title="About Me" />
      <div
        className={clsx(
          "grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full",
          { "order-0": true, "w-full px-20": isTablet }
        )}
      >
        <div
          className={clsx("col-span-1 xl:row-span-3 justify-items-center", { "order-0 row-span-2": isXL, })}
        >
          <div className="grid-container max-w-[23rem]">
            <div className="pl-8 pt-8 pr-8 relative z-10">
              <img
                src="assets/avatar.png"
                alt="grid-1"
                className="w-full sm:h-[175px] h-fit object-contain"
              />

              <div className="px-7 pt-4">
                <p className="grid-headtext">Hi, I’m Gabriel Martínez</p>
                <p className="grid-subtext">
                  With +5 years of experience, I have honed my skills in both
                  frontend and backend dev, creating reliable and scalable
                  products with the best user experience.
                </p>
              </div>
            </div>

            <AboutCard1 className="absolute h-[27.5rem]" />
          </div>
        </div>

        <div
        className={clsx(
          "col-span-1 xl:row-span-3 justify-items-center" ,
          { "order-1": true, }
        )}
        >
          <div className="grid-container max-w-[23rem]">
            <div className="pl-7 pt-8 pr-8 relative z-10 flex flex-col flex-wrap gap-2 h-full">
              <TechStack
                alt="grid-1"
                className="w-full pl-7 mt-6 sm:h-[150px] sm:w-[280px] h-fit object-contain"
              />

              <div className="pl-10 pr-10 pt-4">
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  I specialize in a variety of languages, frameworks, and tools
                  that allow me to build robust and scalable applications
                </p>
              </div>
            </div>

            <AboutCard1 className="absolute h-[27.5rem]" />
          </div>
        </div>

        <div
          className={clsx("col-span-1 xl:row-span-4 justify-self-center", {
            "order-2": isXL,
            "order-3 ": isTablet,
          })}
        >
          <div className="grid-container max-w-[23rem]">
            <div className="pl-7 pt-8 pr-8 relative z-10 flex flex-col flex-wrap h-full">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  atmosphereColor={"green"}
                  ref={globeEl}
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="/textures/earth-night.jpg"
                  bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
                  labelsData={[
                    {
                      lat: 40,
                      lng: -100,
                      text: "Rjieka, Croatia",
                      color: "white",
                      size: 15,
                    },
                  ]}
                />
              </div>

              <div className="px-4 pt-0">
                <p className="grid-headtext">
                  I’m very flexible with time zone communications & locations
                </p>
                <p className="grid-subtext">
                  I&apos;m based in Santa Cruz, Bolivia and open to remote work
                  worldwide.
                </p>
              </div>
            </div>

            <Timezone className="absolute " />
          </div>
        </div>

        <div
          className={clsx("justify-self-center xl:col-span-2 xl:row-span-3 mt-3", {
            "order-3 mt-7": isXL,
            "order-2 col-span-2 h-[29rem]": isTablet,
          })}
        >
          <div className="grid-container items-center">
            <div
            className={clsx("w-[50rem] align-self-center z-10 flex flex-row flex-nowrap gap-0 h-full", {
              "pl-7 pt-8 pr-8": isXL,
            })}
            >
              <Keyboard alt="grid-1" className="w-[38rem] ml-0 mt-18" />
              {/* <MyPassionSeparator className="h-full w-full left-[334px]" /> */}
              <div className="w-[40rem] ml-20 mr-12 mt-28">
                <p className="grid-headtext">My Passion for Coding</p>
                <p className="grid-subtext">
                  I love solving problems and building things through code.
                  Programming isn&apos;t just my profession—it&apos;s my
                  passion. I enjoy exploring new technologies, and enhancing my
                  skills.
                </p>
              </div>
            </div>
            
            <MyPassion className="absolute h-[28.5rem] w-[50rem]" />
          </div>
        </div>

        {/* <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  gamartinezayala@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className={clsx("xl:col-span-1 xl:row-span-2 justify-self-center content-center", {
            "order-4": true,
            // "order-3": isTablet,
          })}
        >
          <div className="relative flex flex-row">
            <div className="left-22 bottom-3 absolute h-auto justify-center content-center flex flex-wrap gap-2 h-full">
              <LinkedIn className="mt-[2px]" />
              <Github />
              <Gmail className="mt-[6px] ml-[2px]" />
            </div>

            <ContactOptions className="mt-[-30px] h-[22rem] w-[363px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
