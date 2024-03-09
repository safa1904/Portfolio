import {starbucks} from "../assets/images";
import {walmart} from "../assets/images";
import {HelloFresh} from "../assets/images";
import {Macewan} from "../assets/images";
import {
 
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    python,
    react,
} from "../assets/icons";

export const skills = [
    {   
        imageUrl: python,
        name: "python",
        type: "Beckend",
        
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
];
export const experiences = [
    {
        title: "Barista",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#b7e4c7",
        date: "Oct 2017 - May 2018",
        points: [
            "Pleasantly interacted with customers during hectic periods to promote fun, positive environment.",
            "Created wide variety of hot and cold drinks in average shifts with consistently positive customer satisfaction scores.",
            "Controlled line and crowd with quick, efficient service.",
            "Memorized recipes for specialty coffee beverages and seasonal offerings.",
            "Recommended products based on solid understanding of individual customer needs and preferences.",
        ],
    },
    {
        title: "customer experience",
        company_name: "walmart",
        icon: walmart,
        iconBg: "#accbe1",
        date: "Nov 2019 - July 2020",
        points: [
            "Asked customers questions to determine, verify and solve common problems.",
            "Looked for additional ways to expand products to customers by upselling new products and services",
            "Responded to high volume of incoming calls utilizing listening and communication skills to identify customer problems, needs and opportunities.",
            "Documented customer interactions in internal database to maintain customer service history details.",
        ],
    },
    {
        title: "Line lead",
        company_name: "HelloFresh",
        icon: HelloFresh,
        iconBg:"#b7e4c7",
        date: "Jan 2021 - Jan 2022 ",
        points: [
            "Managed team of 10+ employees in fast-paced environment.",
            "Coordinated with team members to meet daily production goals.",
            "Trained new employees on company procedures and equipment operation.",
            "Monitored production operations for compliance with safety and quality standards.",
        ],
    },
    
    {
        title: "Grader",
        company_name: "MacEwan University",
        icon: Macewan,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - present",
        points: [
            "Graded assignments, quizzes.",
            "Provided feedback to students.",
            "Monitored student progress.",
            "Provided support to the instructor.",
            "Maintained confidentiality of student records.",

        ],
    },

];
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/safa1904',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saphia-mohamed-729608236/',
    },
];
export const projects = [
        {
            
            theme: 'btn-back-red',
            name: 'Sushi website',
            description: 'Developed a website for a sushi restaurant, including a menu, contact information, and a reservation form.', 
            link: 'https://www.websushi.online/',
        },
        {
            
            theme: 'btn-back-green',
            name: 'MACSHackathon',
            description: 'Developed a game for the Hackathon',
            link: 'https://github.com/safa1904/MACSHackathon',
        },
];