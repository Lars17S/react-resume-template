import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
  MailIcon,
} from '@heroicons/react/outline';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Efren Garibaldi | Resume',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Efren Garibaldi`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Oracle</strong> as Software Developer II in cloud database services team.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume-efrengaribaldi.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` I love to play videogames (Zelda, GTA, and Minecraft), and spend time with my family.
  My favorite bands are Pink Floyd, The Killers and Coldplay. I like to read things
  about science and computers and also watching movies with my friends.`,
  aboutItems: [
    {label: 'Location', text: 'Mexico City', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Interests', text: 'Software Development, Games, Music.', Icon: SparklesIcon},
    {label: 'Study', text: 'Monterrey Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Oracle', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages (proficient)',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
    ],
  },
  {
    name: 'Languages (familiar)',
    skills: [
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'C/C++',
        level: 7,
      },
      {
        name: 'Swift',
        level: 6,
      },
    ],
  },
 
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Lars17S',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Lars17S',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Lars17S',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Lars17S',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Lars17S',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2022',
    location: 'Monterrey Institute of Technology',
    title: 'B.S. Computer Science and Technology',
    content: <p>Cumulative GPA: 3.75/4.00. <br></br> Relevant Coursework: Object-Oriented Programming, Algorithms, Data Structures, Operating Systems,
    Software Design-Architecture, Artificial Intelligence, Cloud Application Development, Discrete Mathematics.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2022 - Present',
    location: 'Oracle',
    title: 'Software Engineer',
    content: (
      <p>
        • Developed patches and updates in Exadata Databases servers in order to meet new requirements requested
        by customers, written with Python and maintained by Linux services running through systemd.
      </p>
    ),
  },
  {
    date: 'April 2022 - November 2022',
    location: 'Oracle',
    title: 'Software Engineer Intern',
    content: (
      <p>
        • Designed RESTful backend server enabling automated tests operations in Exadata Databases which reduced
        time consumed in testing, by using Shell Scripts, Linux cronjobs and NoSQL Buckets in Oracle Cloud.
        • Developed Python modules to run more easily operations such as update SSH keys, scale CPUs, memory,
        and storage, start and reboot multiple Exadata Infrastructures at once, by using the SDK provided in Oracle.
      </p>
    ),
  },
  {
    date: 'May 2021 - November 2021',
    location: 'DiDi',
    title: 'Data Engineer Intern',
    content: (
      <p>
        • Automated the extraction and calculation of business metrics from database tables used for big data analysis
        and weekly reports required in the business intelligence team, by using Apache Hive SQL and Bash scripts.
        • Assisted in creating presentations and statistical dashboards by using Tableau and Python libraries.
      </p>
    ),
  },
  {
    date: 'January 2020 - June 2020',
    location: 'Banorte Bank',
    title: 'Cybersecurity Intern',
    content: (
      <p>
        • Designed and deployed a dashboard to help assess cybersecurity risks that affect the institution on a day-to-
        day basis, written with ReactJS and built by Electro framework to be used as a desktop application.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can ask anything you want to know about me, I will be glad to answer.',
  items: [
    {
      type: ContactType.Email,
      text: 'efren.garibaldi@gmail.com',
      href: 'mailto:efren.garibaldi@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Mexico City, Mexico',
    },
    {
      type: ContactType.Github,
      text: 'Lars17S',
      href: 'https://github.com/Lars17S',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Lars17S'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/efrengaribaldi/'},
  {label: 'Email', Icon: MailIcon, href: 'mailto:efren.garibaldi@gmail.com'},
];
