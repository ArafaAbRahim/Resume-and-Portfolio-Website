import { Grid, Icon, Typography, Paper } from '@material-ui/core';
import React from 'react'
import resumeData from '../../utils/resumeData';
import './Home.css';


const Home = () => {
    return (
        <>
            {/* About Me */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">                    
                    <h6 className="title_text">
                        About Me
                    </h6>
                    <span></span>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" className="aboutme_text"> 
                        {resumeData.about}
                    </Typography>
                </Grid>

            </Grid>

            {/* Services */}
            <Grid container className="section pb_45">
                <Grid  className="section_title">                    
                    <h6 className="title_text">
                        Services
                    </h6>
                    <span></span>
                </Grid> 
            </Grid>

            <Grid container className="section graybg pb_45 p_50">                                
                <Grid item xs={12}>
                    <Grid container spacing={3} justify="space-between">
                        {resumeData.services.map((service) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper  elevation={0} className="skill">
                                    <div className="service">
                                        <Icon className="service_icon">{service.icon}</Icon> 
                                        <Typography className="service_title" variant="h6">{service.title}</Typography>  
                                        <Typography className="service_description" variant="body2">{service.description}</Typography>
                                    </div> 
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>                        
            </Grid>

        </>
    )
}

export default Home
