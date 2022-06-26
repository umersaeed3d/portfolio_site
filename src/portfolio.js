/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
    isSplash: true, // Change this to true if you want to use the splash screen.
    useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
    title: "Hello 👋.",
    title2: "Umer Saeed",
    logo_name: "umer.s()",
    nickname: "umer / nulled_ragin",
    full_name: "Muhammad Umer Saeed",
    subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
    resumeLink: "https://drive.google.com/file/d/1L_O7bmCryZ-aktu5Vngu7OnWUbpzm1eW/view?usp=sharing",
    mail: "mailto:umersaeed3d@gmail.com",
};

const socialMediaLinks = {
    /* Your Social Media Link */
    github: "https://github.com/umersaeed3d",
    linkedin: "https://www.linkedin.com/in/umer-saeed-4b834814b/",
    gmail: "umersaeed3d@gmail.com",
    facebook: "https://www.facebook.com/extrovertix.cyber/",
    instagram: "https://www.instagram.com/nulled_ragin/",
};

const skills = {
    data: [
        {
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, NestJS and Laravel",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
            softwareSkills: [
                {
                    skillName: "HTML5",
                    fontAwesomeClassname: "simple-icons:html5",
                    style: {
                        color: "#E34F26",
                    },
        },
                {
                    skillName: "CSS3",
                    fontAwesomeClassname: "fa-css3",
                    style: {
                        color: "#1572B6",
                    },
        },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "simple-icons:javascript",
                    style: {
                        backgroundColor: "#FFFFFF",
                        color: "#F7DF1E",
                    },
        },
                {
                    skillName: "PHP",
                    fontAwesomeClassname: "simple-icons:php",
                    style: {
                        color: "#7377AD",
                    },
        },
                {
                    skillName: "Laravel",
                    fontAwesomeClassname: "simple-icons:laravel",
                    style: {
                        color: "#3DDC84",
                    },
        },
                {
                    skillName: "ReactJS",
                    fontAwesomeClassname: "simple-icons:react",
                    style: {
                        color: "#61DAFB",
                    },
        },
                {
                    skillName: "NodeJS",
                    fontAwesomeClassname: "simple-icons:node-dot-js",
                    style: {
                        color: "#339933",
                    },
        },
                {
                    skillName: "NPM",
                    fontAwesomeClassname: "simple-icons:npm",
                    style: {
                        color: "#CB3837",
                    },
        },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "simple-icons:mongodb",
                    style: {
                        color: "#439743",
                    },
        },
                {
                    skillName: "MySQL",
                    fontAwesomeClassname: "simple-icons:mysql",
                    style: {
                        color: "#4479A1",
                    },
        },
                {
                    skillName: "jQuery",
                    fontAwesomeClassname: "simple-icons:jquery",
                    style: {
                        color: "#0865A6",
                    },
        },

                {
                    skillName: "Apache",
                    fontAwesomeClassname: "simple-icons:apache",
                    style: {
                        color: "#CA1A22",
                    },
        },
                {
                    skillName: "Git",
                    fontAwesomeClassname: "simple-icons:git",
                    style: {
                        color: "#E94E32",
                    },
        },

                {
                    skillName: "Python",
                    fontAwesomeClassname: "simple-icons:python",
                    style: {
                        color: "#3776AB",
                    },
        },

                {
                    skillName: "Django",
                    fontAwesomeClassname: "simple-icons:django",
                    style: {
                        color: "#029FCE",
                    },
        },
      ],
    },
        {
            title: "Cloud Infra-Architecture",
            fileName: "CloudInfraImg",
            skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
            softwareSkills: [
                {
                    skillName: "AWS",
                    fontAwesomeClassname: "simple-icons:amazonaws",
                    style: {
                        color: "#FF9900",
                    },
        },
                {
                    skillName: "Netlify",
                    fontAwesomeClassname: "simple-icons:netlify",
                    style: {
                        color: "#38AFBB",
                    },
        },
                {
                    skillName: "Heroku",
                    fontAwesomeClassname: "simple-icons:heroku",
                    style: {
                        color: "#6863A6",
                    },
        },
                {
                    skillName: "Firebase",
                    fontAwesomeClassname: "simple-icons:firebase",
                    style: {
                        color: "#FFCA28",
                    },
        },
                {
                    skillName: "PostgreSQL",
                    fontAwesomeClassname: "simple-icons:postgresql",
                    style: {
                        color: "#336791",
                    },
        },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "simple-icons:mongodb",
                    style: {
                        color: "#47A248",
                    },
        },
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "simple-icons:docker",
                    style: {
                        color: "#1488C6",
                    },
        },
                {
                    skillName: "GitHub Actions",
                    fontAwesomeClassname: "simple-icons:githubactions",
                    style: {
                        color: "#5b77ef",
                    },
        },
      ],
    },
  ],
};

const degrees = {
    degrees: [
        {
            title: "N.E.D University Of Engineering & Technology",
            subtitle: "B.E in Computer & Information System Engineering",
            logo_path: "ned.png",
            alt_name: "SETI",
            duration: "2017 - 2021",
            descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering degree. ",
      ],
            website_link: "https://www.neduet.edu.pk/",
    },
  ],
};

const certifications = {
    certifications: [
        {
            title: "Vue 3 and Laravel: A Practical Guide with Docker",
            subtitle: "Udemy",
            logo_path: "laravel.png",

            alt_name: "Udemy",
            // color_code: "#2AAFED",
            color_code: "#47A048",
    },
        {
            title: "React - The Complete Guide with React Hook Redux 2021",
            subtitle: "Udemy",
            logo_path: "react.png",

            alt_name: "udemy",
            color_code: "#E2405F",
    },
        {
            title: "Complete NodeJS course with express, socket io and MongoDB",
            subtitle: "Udemy",
            logo_path: "nodejs.png",
            alt_name: "Udemy",
            // color_code: "#F6B808",
            color_code: "#47A048",
    },
        {
            title: "Ultimate AWS Certified Developer Associate 2022",
            subtitle: "Udemy",
            logo_path: "AWS.jpg",
            alt_name: "Udemy",
            color_code: "#2AAFED",
    },
        {
            title: "NestJS Zero to Hero - Modern TypeScript Back-end Development",
            subtitle: "Udemy",
            logo_path: "nest.jpg",
            alt_name: "Udemy",
            color_code: "#fe0037",
    },
        {
            title: "Web Penetration & Security",
            subtitle: "TryHackMe",
            logo_path: "tryhackme.png",
            alt_name: "Udemy",
            color_code: "#2AAFED",
    },

        {
            title: "Postman Student Expert",
            subtitle: "Postman",
            logo_path: "postman.png",
            alt_name: "Postman",
            // color_code: "#f36c3d",
            color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
    title: "Experience",
    subtitle: "Work, Internship and Volunteership",
    description: "I've completed one internship and three jobs. I was also actively involved in volunteership during my university days.",
    header_image_path: "experience.svg",
    sections: [
        {
            title: "Work Experience",
            experiences: [
                {
                    title: "Web Developer (Intern)",
                    company: "Kreatix",
                    logo_path: "kreatix.jpg",
                    duration: "Feb 2018 - Apr 2018",
                    location: "Office",
                    description: "Responsibilities include implementing design and develop multivendor E-commerce website with dashboard under the guidance of Senior Developer.",
                    color: "#0071C5",
        },
                {
                    title: "Junior PHP Developer",
                    company: "Kreatix",
                    logo_path: "kreatix.jpg",
                    duration: "May 2018 - May 2019",
                    location: "Office",
                    description: "Responsibilities include plan, design and develop application backend on PHP programming language.",
                    color: "#0071C5",
        },
                {
                    title: "Freelancer",
                    company: "Upwork",
                    logo_path: "upwork.png",
                    duration: "May 2019 - May 2020",
                    location: "Office",
                    description: "Responsibilities include plan, design and develop application backend on PHP programming language.",
                    color: "#0071C5",
        },
                {
                    title: "Software Engineer",
                    company: "Pecan LLC",
                    logo_path: "upwork.png",
                    duration: "July 2020  - Jan 2021",
                    location: "Remote",
                    description: "Responsibilities include plan, design and develop application backend in form of microservices architecture. Also took part in developing some functionalities on React Web Interface",
                    color: "#ee3c26",
        },
                {
                    title: "Custom Development Team Lead",
                    company: "Shot Technologies",
                    logo_path: "shot.jpeg",
                    duration: "Feb 2022  - June 2022",
                    location: "Remote",
                    description: "Responsibilities include plan and lead the custom development team along with client's dealing. ",
                    color: "#ee3c26",
        },
      ],
    },
        {
            title: "Volunteerships",
            experiences: [
                {
                    title: "Volunteer",
                    company: "Cyber Secure Pakistan 2020",
                    logo_path: "cybersecure.jpg",
                    duration: "A week",
                    location: "NIC at NED University",
                    description: "",
                    color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
    title: "Projects",
    description: "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Laravel Projects and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
    avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
    contactSection: {
        title: "Contact Me",
        profile_image_path: "umer.jpg",
        description: "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
    },
};

const projects = {
    data: [
        {
            id: "0",
            name: "erp-system",
            url: "http://erp-system-laravel.herokuapp.com/",
            description: "This is a ERP System having common ERP features. Developed on Laravel framework.",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "vscode-icons:file-type-html",
        },
                {
                    name: "CSS3",
                    iconifyClass: "vscode-icons:file-type-css",
        },
                {
                    name: "PHP",
                    iconifyClass: "logos-php",
        },
                {
                    name: "Laravel",
                    iconifyClass: "logos-laravel",
        },
                {
                    name: "MySQL",
                    iconifyClass: "logos-mysql",
        },
      ],
    },
        {
            id: "1",
            name: "payroll-system",
            url: "#",
            description: "A complete payroll system implemented on Laravel framework",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "vscode-icons:file-type-html",
        },
                {
                    name: "CSS3",
                    iconifyClass: "vscode-icons:file-type-css",
        },
                {
                    name: "PHP",
                    iconifyClass: "logos-php",
        },
                {
                    name: "Laravel",
                    iconifyClass: "logos-laravel",
        },
                {
                    name: "MySQL",
                    iconifyClass: "logos-mysql",
        },
      ],
    },
        {
            id: "2",
            name: "pos-laravel",
            url: "#",
            description: "A POS system with Inventory Management implemented on Laravel framework",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "vscode-icons:file-type-html",
        },
                {
                    name: "CSS3",
                    iconifyClass: "vscode-icons:file-type-css",
        },
                {
                    name: "PHP",
                    iconifyClass: "logos-php",
        },
                {
                    name: "Laravel",
                    iconifyClass: "logos-laravel",
        },
                {
                    name: "MySQL",
                    iconifyClass: "logos-mysql",
        },
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
        },
      ],
    },
        {
            id: "3",
            name: "order-and-product-microservices",
            url: "https://store-web-interface-test.herokuapp.com/",
            description: "Secure microservices for a food order startup implemented on Node.js",
            languages: [
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
        },
                {
                    name: "NodeJS",
                    iconifyClass: "logos-nodejs",
        },
                {
                    name: "MySQL",
                    iconifyClass: "logos-mysql",
        },
      ],
    },
        {
            id: "4",
            name: "food-order-web-interface",
            url: "https://store-web-interface-test.herokuapp.com/",
            description: "A React and TypeScript web interface of the food order app",
            languages: [
                {
                    name: "React",
                    iconifyClass: "logos-react",
        },
                {
                    name: "TypeScript",
                    iconifyClass: "logos-typescript",
        },
      ],
    },
        {
            id: "5",
            name: "food-order-customer-app",
            url: "#",
            description: "A react native food order app in beta version",
            languages: [
                {
                    name: "React-Native",
                    iconifyClass: "logos-react",
        },
      ],
    },
        {
            id: "8",
            name: "trello-gamification",
            url: "#",
            description: "A game based on trello scores for employees.",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "vscode-icons:file-type-html",
        },
                {
                    name: "CSS3",
                    iconifyClass: "vscode-icons:file-type-css",
        },
                {
                    name: "PHP",
                    iconifyClass: "logos-php",
        },
                {
                    name: "Laravel",
                    iconifyClass: "logos-laravel",
        },
                {
                    name: "MySQL",
                    iconifyClass: "logos-mysql",
        },
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
        },
      ],
    },
        {
            id: "7",
            name: "ai-fitness-trainer",
            url: "#",
            description: "A semester project for learning. It generates machine learning based workout plans. Dashboard is implemented on Django",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "vscode-icons:file-type-html",
        },
                {
                    name: "CSS3",
                    iconifyClass: "vscode-icons:file-type-css",
        },
                {
                    name: "Python",
                    iconifyClass: "logos-python",
        },
                {
                    name: "Django",
                    iconifyClass: "logos-django",
        },
      ],
    },
        {
            id: "8",
            name: "protonic-nutrition",
            url: "#",
            description: "An e-commerce site implemented on Django framework",
            languages: [
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
        },
                {
                    name: "Python",
                    iconifyClass: "logos-python",
        },
                {
                    name: "Python",
                    iconifyClass: "logos-django",
        },
      ],
    },
  ],
};

export {
    settings,
    greeting,
    socialMediaLinks,
    skills,
    degrees,
    certifications,
    experience,
    projectsHeader,
    contactPageData,
    projects,
};
