import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import AboutCard1 from "/src/assets/icons/AboutCard1.svg?react";
import AboutCard2 from "/src/assets/icons/AboutCard2.svg?react";
import TechStack from "/src/assets/icons/TechStack.svg?react";
import Timezone from "/src/assets/icons/Timezone.svg?react";
import MyPassion from "/src/assets/icons/MyPassion.svg?react";
import ContactOptions from "/src/assets/icons/ContactOptions.svg?react";
import MyPassionSeparator from "/src/assets/icons/MyPassionSeparator.svg?react";
import LinkedIn from "/src/assets/icons/LinkedIn.svg?react";
import Github from "/src/assets/icons/Github.svg?react";
import Gmail from "/src/assets/icons/Gmail.svg?react";
import SectionTitle from "../components/SectionTitle.jsx";
import { contact } from "../constants";

const About = () => {
  const globeEl = useRef();

  useEffect(() => {
    globeEl.current.pointOfView({ lat: 22, lng: -51, altitude: 2 });
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().enableZoom = false;
  }, []);

  const contactIcons = {
    linkedin: { component: LinkedIn, className: "mt-[2px]" },
    github: { component: Github },
    gmail: { component: Gmail, className: "mt-[6px] ml-[2px]" },
  };

  return (
    <section
      className="mb-8 mt-[50rem] relative pb-5
      lg:mb-20 md:px-10"
      id="about"
    >
      <SectionTitle title="About Me" />
      <div
        className="flex flex-col justify-center
        xl:flex-row
        max-lg:gap-6
        xl:gap-4"
      >
        <div
          className="grid  h-full gap-5
          grid-rows-2
          grid-cols-1
          lg:grid-cols-2
          xl:grid-rows-4 xl:px-0 xl:gap-4"
        >
          <div
            className="order-0 justify-items-center content-center h-[28rem]
              col-span-1 row-span-1
              xl:row-span-2 xl:!content-start"
          >
            <div
              className="flex flex-col max-w-[23rem]
              max-sm:max-w-80"
            >
              <div className="ml-8 mt-8 mr-8 relative z-10 justify-items-center">
                <img
                  data-blobity
                  data-blobity-offset-y="10"
                  data-blobity-magnetic="false"
                  src="assets/avatar.png"
                  alt="Avatar"
                  className="h-[175px] object-contain"
                />

                <div
                  className="mx-7 mt-4
                max-sm:mx-1 "
                >
                  <p
                    className="text-xl font-semibold mb-2 text-white font-ubuntumono"
                    data-blobity
                    data-blobity-magnetic="false"
                  >
                    Hi, I'm Gabriel Martínez
                  </p>
                  <p
                    className="text-[#afb0b6] text-base font-ubuntumono"
                    data-blobity
                    data-blobity-magnetic="false"
                  >
                    With more than 6 years of experience, I have honed my skills
                    in both frontend and backend dev, creating reliable and
                    scalable products with the best user experience.
                  </p>
                </div>
              </div>

              <AboutCard1
                className="absolute h-[27.5rem]
                max-sm:max-w-80"
              />
            </div>
          </div>

          <div
            className="relative col-span-1 xl:row-span-2 justify-items-center content-center
            h-[27rem]
            xl:content-start"
          >
            <div
              className="flex flex-col max-w-[24rem] 
              max-sm:max-w-80"
            >
              <div
                className="ml-7 mt-8 mr-8 relative z-10 flex flex-col flex-wrap gap-2 h-full
              max-sm:px-2"
              >
                <TechStack
                  alt="Tech Stack"
                  className="w-full px-9 mt-8 h-fit object-contain"
                />

                <div className="ml-10 mr-10 pt-4">
                  <p
                    className="text-xl font-semibold mb-2 text-white font-ubuntumono"
                    data-blobity
                    data-blobity-magnetic="false"
                  >
                    Tech Stack
                  </p>
                  <p
                    className="text-[#afb0b6] text-base font-ubuntumono"
                    data-blobity
                    data-blobity-magnetic="false"
                  >
                    I specialize in a variety of languages, frameworks, and
                    tools that allow me to build robust and scalable
                    applications
                  </p>
                </div>
              </div>

              <AboutCard2
                className="absolute h-[28.5rem] top-3
                max-sm:max-w-80 
                lg:top-3
                xl:top-[-0.75rem]"
              />
            </div>
          </div>

          <div
            className="justify-self-center relative
            lg:h-[29rem] lg:col-span-2
            xl:row-span-3
            max-lg:w-[328px] max-lg:h-[544px]"
          >
            <div className="w-full h-full sm:pb-7 flex flex-col gap-5 items-center">
              <div
                className=" align-self-center z-10 flex flex-row flex-nowrap gap-0 h-full
                lg:pl-7 lg:mt-8 lg:pr-8"
              >
                <div
                  className="flex flex-col
                  lg:w-[40rem] lg:justify-center lg:items-end"
                >
                  <div
                    className="w-[284px] relative lg:bottom-[22px] 
                    max-lg:top-20 max-lg:w-60"
                  >
                    <p
                      className="text-xl font-semibold mb-2 text-white font-ubuntumono"
                      data-blobity
                      data-blobity-magnetic="false"
                    >
                      Driven by Code
                    </p>
                    <p
                      className="text-[#afb0b6] text-base font-ubuntumono lg:hidden"
                      data-blobity
                      data-blobity-magnetic="false"
                    >
                      I love solving problems and building things through code.
                      Programming isn't just my profession—it's my passion. I
                      enjoy exploring new technologies, and enhancing my skills.
                    </p>
                    <p
                      className="text-[#afb0b6] text-base font-ubuntumono max-lg:hidden"
                      data-blobity
                      data-blobity-magnetic="false"
                    >
                      I'm passionate about building software that solves real
                      problems and makes people's lives easier. From designing
                      clean, efficient code to constantly learning new
                      technologies, I enjoy every part of the development
                      process. What drives me most is the opportunity to create,
                      collaborate, and contribute to meaningful projects that
                      have an impact.
                    </p>
                  </div>
                </div>
              </div>

              <MyPassion
                className="absolute h-[28.5rem] w-[50rem]
                max-lg:h-[20.5rem] max-lg:top-[8.25rem] max-lg:rotate-270 max-lg:w-[34rem]"
              />
            </div>
          </div>
        </div>

        <div
          className=" 
            flex flex-col items-center
            xl:px-0 
            lg:max-xl:flex-row lg:max-xl:place-content-evenly lg:max-xl:flex-wrap
            max-xl:gap-0
            xl:gap-4"
        >
          <div className="justify-self-center">
            <div
              className="flex flex-col max-md:relative max-w-[23rem] items-center
            max-md:max-w-76"
            >
              <div className="pl-7 pt-8 pr-8 relative flex flex-col flex-wrap h-full">
                <div className="rounded-3xl w-full z-10 h-fit flex justify-center items-center">
                  <Globe
                    atmosphereColor={"green"}
                    ref={globeEl}
                    height={300}
                    width={300}
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

                <div
                  className="pt-0 h-[12rem] z-10
                  max-lg:max-w-70 
                  max-lg:w-80 max-lg:pl-7
                  lg:px-6"
                >
                  <p
                    className="text-xl font-semibold mb-2 text-white font-ubuntumono"
                    data-blobity
                    data-blobity-magnetic="false"
                  >
                    Time Zone Advantage
                  </p>
                  <p
                    className="text-[#afb0b6] text-base font-ubuntumono"
                    data-blobity
                  >
                    Located in GMT-4, I overlap well with U.S. time zones,
                    enabling smooth, real-time collaboration with American
                    teams.
                  </p>
                </div>
              </div>

              <Timezone
                className="absolute 
                w-89
                max-xl:max-w-80
                xl:top-30"
              />
            </div>
          </div>

          <div
            className="justify-self-center content-center
          max-lg:max-w-76"
          >
            <div className="relative flex flex-row">
              <div
                className="left-22 bottom-3 absolute justify-center content-center flex flex-wrap gap-2 h-full
              max-lg:left-17"
              >
                {contact.map((item) => {
                  const { component: IconComponent, className } =
                    contactIcons[item.icon.toLowerCase()];
                  return (
                    <a
                      data-blobity
                      data-blobity-offset-x="2"
                      data-blobity-magnetic="false"
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-10"
                    >
                      {IconComponent && <IconComponent className={className} />}
                    </a>
                  );
                })}
              </div>
              <ContactOptions className=" h-[24rem] w-[363px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
