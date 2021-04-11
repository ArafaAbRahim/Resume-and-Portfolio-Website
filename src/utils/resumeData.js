import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { AssignmentIndOutlined, Language, WebOutlined } from '@material-ui/icons';




export default {
    name: "Arafah Ab Rahim",
    title: "Full stack developer",
    birthday: "23rd march 1994",
    email: "arafaarahim@gmail.com",
    address: "2/5/C Dhaka",
    phone: "123 456 7890",

    socials: {  
        Facebook: {
            link: "https://www.facebook.com",
            text: "MyFacebook",
            icon: <FacebookIcon />,
        },           
        LinkedIn: {
            link: "https://www.linkedin.com",
            text: "MyLinkedIn",
            icon: <LinkedInIcon />,
        },
        Github: {
            link: "https://www.github.com",
            text: "MyGithub",
            icon: <GitHubIcon />,
        }
    },

    about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. \n\n vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi, Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat",
    
    experiences: [
        {
            title: "Work 1",
            date: "2019 - Present",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        },
        {
            title: "Work 2",
            date: "2018 - 2019",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        },
        {
            title: "Work 3",
            date: "2017 - 2018",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        }
    ],

    educations: [
        {
            title: "Work 1",
            date: "2019 - Present",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        },
        {
            title: "Work 2",
            date: "2018 - 2019",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        },
        {
            title: "Work 3",
            date: "2017 - 2018",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        }
    ],

    services: [
        {
            title: "Wev Devlopment",  
            description: "I have been working as a web developer for 3 years",
            icon: <WebOutlined />
        },
        {
            title: "Branding Identity",  
            description: "We will make you a brand that is catchy and leaves a trace.",
            icon: <AssignmentIndOutlined />
        },
        {
            title: "Illustrator ",  
            description: "I have been working on Illustration design for 1.5 years",
            icon: <WebOutlined />
        },
        {
            title: "PhotoShop",  
            description: "I have been working on PhotoShop for 1.5 years",
            icon: <WebOutlined />
        },
    ],

    skills: [
        {
            title: "FRONT-END",
            description: ["ReactJs","JavaScript","TypeScript","Bootstrap","Material UI","Laravel"]
        },
        {
            title: "BACK-END",
            description: ["NodeJs","Java","Python"]
        },
        {
            title: "DATABASE",
            description: ["MySQL","Ms SQL Server"]
        },
        {
            title: "SOURCE CONTROL",
            description: ["Git","GitHub"]
        },
    ],

    projects: [
        {
            tag: "React",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "project 1",
            caption: "A short description",
            description: "This is my project description",
            links: [
                {link: "https://www.google.com", icon: <FacebookIcon />},
                {link: "https://www.google.com", icon: <GitHubIcon />},
                {link: "https://www.google.com", icon: <Language />},
            ],
        },
        {
            tag: "React",
            image: "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1tZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "project 2",
            caption: "A short description",
            description: "This is my project description",
            links: [
                {link: "https://www.google.com", icon: <FacebookIcon />},
                {link: "https://www.google.com", icon: <GitHubIcon />},
                {link: "https://www.google.com", icon: <Language />},
            ],
        },
        {
            tag: "Laravel",
            image: "https://media.gettyimages.com/videos/the-programmer-writes-the-code-for-the-development-of-the-website-video-id1193269492?s=640x640",
            title: "project 3",
            caption: "A short description",
            description: "This is my project description",
            links: [
                {link: "https://www.google.com", icon: <FacebookIcon />},
                {link: "https://www.google.com", icon: <GitHubIcon />},
                {link: "https://www.google.com", icon: <Language />},
            ],
        },
        {
            tag: "Laravel",
            image: "https://as2.ftcdn.net/jpg/02/16/66/67/500_F_216666796_QS63jbmHtGaPe56mYTN7wSwlnVnmOxbf.jpg",
            title: "project 2",
            caption: "A short description",
            description: "This is my project description",
            links: [
                {link: "https://www.google.com", icon: <FacebookIcon />},
                {link: "https://www.google.com", icon: <GitHubIcon />},
                {link: "https://www.google.com", icon: <Language />},
            ],
        },
        {
            tag: "WordPress",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80",
            title: "project 1",
            caption: "A short description",
            description: "This is my project description",
            links: [
                {link: "https://www.google.com", icon: <FacebookIcon />},
                {link: "https://www.google.com", icon: <GitHubIcon />},
                {link: "https://www.google.com", icon: <Language />},
            ],
        },
        {
            tag: "WordPress",
            image: "https://i.pinimg.com/originals/64/53/41/645341cbe8b2bab955200f47fe5f1f21.png",
            title: "project 2",
            caption: "A short description",
            description: "This is my project description",
            links: [
                {link: "https://www.google.com", icon: <FacebookIcon />},
                {link: "https://www.google.com", icon: <GitHubIcon />},
                {link: "https://www.google.com", icon: <Language />},
            ],
        },
    ]
     

}