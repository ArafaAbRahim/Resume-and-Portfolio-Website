import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { AssignmentIndOutlined, WebOutlined } from '@material-ui/icons';

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
    ]
     

}