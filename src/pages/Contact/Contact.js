import { Grid, Icon, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import resumeData from '../../utils/resumeData';
import './Contact.css';
import CustomButton from '../../components/Button/Button';

const Contact = () => {
    return (
        <>
            {/* Contact */}
            <Grid container spacing={6} className="section pb_45">
                {/* Contact Form */}
                <Grid item xs={12} lg={7}>
                    <Grid container>                        
                        <Grid item className="section_title mb_30">
                            <h6 className="title_text">Contact Form</h6>
                            <span></span>
                        </Grid>
                    </Grid>
                
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name="name" label="Name" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name="email" label="E-mail" />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField fullWidth name="message" label="Message" multiline rows={4} />
                            </Grid>
                            <Grid item xs={12} >
                                <CustomButton text="Submit" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                {/* Contact Info*/}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className="section_title mb_30">
                            <h6 className="title_text">Contact Information</h6>
                            <span></span>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Address:</span> {resumeData.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Phone:</span> {resumeData.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Email:</span> {resumeData.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Address:</span> {resumeData.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="contactInfo_item">
                                    <span>Address:</span> {resumeData.email}
                                </Typography>
                            </Grid>                        
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container className="contactInfo_socialContainer">
                            {Object.keys(resumeData.socials).map((Key) => (
                                <Grid item className="contactInfo_social">
                                    <a href={resumeData.socials[Key].link}>
                                        {resumeData.socials[Key].icon}
                                    </a>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

            </Grid> 
 
        </>
    )
}

export default Contact
