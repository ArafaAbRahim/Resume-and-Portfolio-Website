import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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

}