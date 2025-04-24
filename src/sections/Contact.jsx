import { contact } from "../constants/index.js";
import SectionTitle from "../components/SectionTitle.jsx";
import LinkedIn from "/src/assets/icons/LinkedIn.svg?react";
import Github from "/src/assets/icons/Github.svg?react";
import Gmail from "/src/assets/icons/Gmail.svg?react";
import ContactOptions from "/src/assets/icons/ContactOptions.svg?react";

const Contact = () => {
  const contactIcons = {
    linkedin: { component: LinkedIn, className: "mt-[2px]" },
    github: { component: Github },
    gmail: { component: Gmail, className: "mt-[6px] ml-[2px]" },
  };

  return (
    <section className="content-center c-space relative" id="contact">
      <SectionTitle title="Contact Me" className={""} />
      <div className="ml-104 mt-12">
        <div
          className="font-supermarioworld text-[#05FF4D] h-100"
        >
          <ContactOptions className="z-0 rotate-90 absolute mt-[-30px] h-[22rem] w-[363px]" />
          <div className=" justify-center content-center flex flex-wrap gap-2 w-[370px] h-[280px]">
            {contact.map((item) => {
              const { component: IconComponent, className } =
                contactIcons[item.icon.toLowerCase()];
              return (
                <a
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
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
