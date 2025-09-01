import {
  type About,
  Blog,
  Gallery,
  type Home,
  type Newsletter,
  type Person,
  type Social,
  type Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Teach",
  lastName: "Akarachat",
  name: "Teach",
  role: "Product Engineer",
  avatar: "/images/avatar-01.avif",
  email: "teach.akarachat@gmail.com",
  location: "Asia/Bangkok", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Thai", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  //title: <>CTA {person.name}</>,
  title: <>ยินดีพูดคุยและร่วมออกแบบไปด้วยกัน</>,
  description: (
    <>
      🚀 “เพราะ Design ไม่ใช่แค่ความสวยงาม แต่ยังเป็นการสร้างประสบการณ์ที่มีความหมายให้กับผู้ใช้
      หากต้องการให้งานของคุณโดดเด่นและแตกต่าง เรายินดีที่จะพูดคุยและออกแบบไปด้วยกัน”
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Tcher911",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://www.tiktok.com/@tcher.co",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.avif",
  label: "หน้าแรก",
  title: `Portfolio of ${person.name}`,
  description: `มากกว่าการออกแบบคือความสำเร็จของทุกโปรเจกต์ ${person.role}`,
  headline: <>BEYOND DESIGN IT&apos;S YOUR SUCCESS</>,
  featured: {
    display: true,
    title: (
      <>
        ผลงานล่าสุด: <strong className="ml-4">TCHER Portfolio</strong>
      </>
    ),
    href: "/work/222parts-website",
  },
  subline: <>มากกว่าการออกแบบคือความสำเร็จของทุกโปรเจกต์</>,
};

const about: About = {
  path: "/about",
  label: "เกี่ยวกับเรา",
  title: `About – ${person.name}`,
  description: `I'm ${person.name} ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "About Me",
    description: (
      <>
        ด้วยพื้นฐานการทำงานด้าน UX Designer / UX Engineer ทำให้เรามี มุมมองที่ครอบคลุมด้านการออกแบบและพัฒนา
        สามารถเปลี่ยนความต้องการ ทางธุรกิจให้เป็น Design ที่ใช้งานได้จริง ลดช่องว่างระหว่างทีมออกแบบ กับทีมพัฒนา
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "devsmith 4289 co. ltd",
        timeframe: "2023 - ปัจจุบัน",
        role: "UX/UI Engineer",
        achievements: [
          "ออกแบบ UX/ UI, จัดทำ Design system และพัฒนา Website ด้วย Low code Platform",
          "นำการรวมเครื่องมือ AI เข้ากับเวิร์กโฟลว์การออกแบบ ทำให้สามารถทำ Advance Prototype ได้เร็วขึ้นและสมจริง",
        ],
      },
      {
        company: "KOS Design",
        timeframe: "2021 - 2023",
        role: "UX/UI Designer",
        achievements: [
          "ออกแบบ UX/UI Website, Application เกี่ยวกับ Web3, Crypto, NFT, Blockchain",
          "ออกแบบ UX/UI Game และทำ Game Design",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Kasetsart University",
        description: <>Bachelor of Software Engineering</>,
      },
      {
        name: "Sripatum University",
        description: <>Bachelor of Digital media Interactive and Game design</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Figma",
        description: <>สามารถใช้ออกแบบ UX /UI และทำ Design System, Prototype ได้อย่างเชี่ยวชาญ</>,
      },
      {
        title: "Framer",
        description: <>สามารถสร้าง Website ที่มี Animation, Motion, Effect และมี Performance ที่ดี</>,
      },
      {
        title: "Webflow",
        description: <>สามารถสร้าง Website ได้อย่างรวดเร็ว รองรับ SEO ที่ดี</>,
      },
      {
        title: "Adobe Creative",
        description: <>สามารถใช้โปรแกรม Adobe Photoshop, Illustrator ได้ร่วมกับงานออกแบบ</>,
      },
      {
        title: "V0, ChatGPT, Claude, Gemini, Grok",
        description: <>สามารถประยุกต์ใช้งาน AI เพื่อสร้างต้นแบบในงานออกแบบได้ เพื่อลดเวลาในการทำงาน</>,
      },
      {
        title: "Next.js & Cursor",
        description: <>สร้าง Web-App ด้วย Next.js + Shadcn/ui + Supabase</>,
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "ผลงาน",
  title: `Projects – ${person.name}`,
  description: `โปรเจกต์การออกแบบและพัฒนาโดย ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
