import { Typography } from '@material-ui/core';
import React from 'react'
import resumeData from '../../utils/resumeData';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_copyright">
                    Designed and Develpoed by 
                    <a href="/" target="_blank">
                        Arafah Ab Rahim
                    </a>
                </Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyright">                   
                    Clone idea from{""}
                    <a href="https://themeforest.net/user/tavonline" target="_blank">
                        Travonline
                    </a>
                </Typography>
            </div>
        </div>
    )
}

export default Footer
