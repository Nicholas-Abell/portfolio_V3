import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiPrisma,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiGooglesheets,
  SiUnity,
  SiSass,
  SiCsharp,
  SiSquarespace,
  SiGithub,
  SiGit,
  SiMysql,
} from "react-icons/si";

export const frontEnd = [
  {
    name: "NextJs/React",
    icon: <TbBrandNextjs size={50} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript style={{ color: "blue" }} size={50} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss style={{ color: "blue" }} size={50} />,
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui style={{ color: "lime" }} size={50} />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap style={{ color: "blue" }} size={50} />,
  },
  {
    name: "SCSS",
    icon: <SiSass style={{ color: "pink" }} size={50} />,
  },
];

export const backEnd = [
  {
    name: "firebase",
    icon: <IoLogoFirebase style={{ color: "orange" }} size={50} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "green" }} size={50} />,
  },
  {
    name: "MySql",
    icon: <SiMysql style={{ color: "blue" }} size={50} />,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs style={{ color: "green" }} size={50} />,
  },
  {
    name: "Mongoose",
    icon: <SiMongoose style={{ color: "darkred" }} size={120} />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={50} />,
  },
];

export const otherSkills = [
  {
    name: "Git",
    icon: <SiGit style={{ color: "darkorange" }} size={50} />,
  },
  {
    name: "Github",
    icon: <SiGithub size={50} />,
  },
  {
    name: "Google Sheets",
    icon: <SiGooglesheets style={{ color: "green" }} size={50} />,
  },
  {
    name: "C#",
    icon: <SiCsharp size={50} />,
  },
  {
    name: "Unity",
    icon: <SiUnity size={50} />,
  },
  {
    name: "SquareSpace",
    icon: <SiSquarespace size={50} />,
  },
];
