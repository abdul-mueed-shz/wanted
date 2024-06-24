import { FaReact, FaFigma } from "react-icons/fa";

export const DATA = Object.freeze({
  NAME: "Abdul Mueed",
  PROFESSION: "Software Engineer",
  APP_TITLE: "WANTED",
  TAGLINE: "Available for work",
  ABOUT:
    "Mikhail Petrovski is a dynamic product designer known for his passion and creativity in translating innovative ideas into tangible, user-centric designs. With a sharp eye for detail and a commitment to pushing the boundaries of innovation, he consistently delivers market-leading solutions that seamlessly blend aesthetics and functionality. Petrovski's track record highlights his ability to transform abstract concepts into compelling and cutting-edge products.",
  EXPERIENCE: [
    {
      topic: "Freelance Web Designer",
      topicId: 1,
      era: "Innovate Tech Inc.",
      locale: "2020 - present",
      details: (
        <p>
          Currently, Mikhail is a freelance web designer, working with clients
          from different industries, and enjoying the freedom to bring creative
          ideas to life.
        </p>
      ),
    },
    {
      topic: "Freelance Web Designer",
      topicId: 2,
      era: "Innovate Tech Inc.",
      locale: "2020 - present",
      details: (
        <p>
          Currently, Mikhail is a freelance web designer, working with clients
          from different industries, and enjoying the freedom to bring creative
          ideas to life.
        </p>
      ),
    },
    {
      topic: "Freelance Web Designer",
      topicId: 3,
      era: "Innovate Tech Inc.",
      locale: "2020 - present",
      details: (
        <p>
          Currently, Mikhail is a freelance web designer, working with clients
          from different industries, and enjoying the freedom to bring creative
          ideas to life.
        </p>
      ),
    },
  ],
  SERVICES: (
    <ol>
      <li>1. Brand Identity</li>
      <li>2. User Interface (UI) Design</li>
      <li>3. Print and Graphic Design</li>
    </ol>
  ),
  TESTIMONIALS: [
    {
      topicId: 1,
      topic: "Mei Tanaka",
      era: "TechPro Solutions",
      details: (
        <p>
          "Mikhail's web design skills transformed our outdated website into a
          modern and user-friendly platform. His attention to detail and
          dedication to understanding our brand made the process smooth and
          enjoyable. We're thrilled with the results!"
        </p>
      ),
    },
    {
      topicId: 2,
      topic: "Emily Carter",
      era: "TechPro Solutions",
      details: (
        <p>
          "Mikhail's web design skills transformed our outdated website into a
          modern and user-friendly platform. His attention to detail and
          dedication to understanding our brand made the process smooth and
          enjoyable. We're thrilled with the results!"
        </p>
      ),
    },
  ],
  SKILLS: [
    {
      skillId: 1,
      skill: "Framer",
      rating: 4,
      icon: FaFigma,
      link: "https://chatgpt.com/c/adec0a9d-15d4-4f23-bc7b-47c4698dc879",
    },
    {
      skillId: 2,
      skill: "React",
      rating: 7,
      icon: FaReact,
      link: "https://ozzie.sh/passing-icons-as-props-in-a-consistent-way-using-react",
    },
  ],
  CONTACT: {
    DEFAULT_ICON_SIZE: 20,
    TAGLINE: (
      <p>
        After thorough investigations, we have gathered more fascinating clues
        about Abdul. Whether you want to connect with him professionally,
        collaborate on an exciting project, or simply send a friendly message,
        you’re in the right place. Check below for more details and feel free to
        reach out!
      </p>
    ),
    FORM_HEADING: "Have a Project Idea?",
    SOCIAL_DETAILS: {
      LINKEDIN: "https://ozzie.sh/",
      GITHUB: "https://ozzie.sh/",
      TWITTER: "https://ozzie.sh/",
      STACKOVERFLOW: "https://ozzie.sh/",
    },
    CONTACT_DETAILS: {
      EMAIL: "abdulmueedshahbaz@gmail.com",
      PHONE: "+92-3234942960",
      ADDRESS: "Islampura, Lahore",
    },
  },
});
