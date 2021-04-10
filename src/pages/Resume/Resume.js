import { Grid, Icon, Paper, Typography } from '@material-ui/core';
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/CustomTimeline';
import resumeData from '../../utils/resumeData';
import './Resume.css';
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolIcon from '@material-ui/icons/School';
import TimelineDot from '@material-ui/lab/TimelineDot';

const Resume = () => {
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

            {/* Education & experience */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">                    
                    <h6 className="title_text">
                        Resume
                    </h6>
                    <span></span>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        {/* Experience */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Work Experience" 
                             icon={<WorkIcon />}>
                                 {resumeData.experiences.map((experience) => (
                                     <TimelineItem>
                                         <CustomTimelineSeparator />

                                         <TimelineContent className="timeline_content">
                                             <Typography className="timeline_title">{experience.title}</Typography>
                                             <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                             <Typography variant="body2" className="timeline_description">{experience.description}</Typography>
                                         </TimelineContent>
                                     </TimelineItem>
                                 ))}
                             </CustomTimeline>
                        </Grid>

                        {/* Education  */} 
                        <Grid item sm={12} md={6}>
                        <CustomTimeline title="Education" 
                             icon={<SchoolIcon />}>
                                 {resumeData.educations.map((education) => (
                                     <TimelineItem>
                                         <CustomTimelineSeparator />

                                         <TimelineContent className="timeline_content">
                                             <Typography className="timeline_title">{education.title}</Typography>
                                             <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                             <Typography variant="body2" className="timeline_description">{education.description}</Typography>
                                         </TimelineContent>
                                     </TimelineItem>
                                 ))}
                             </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            
            </Grid>

            {/* Services */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">                    
                    <h6 className="title_text">
                        Services
                    </h6>
                    <span></span>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify="space-between">
                        {resumeData.services.map((service) => (
                            <Grid item xs={12} sm={6} md={3}>
                               <div className="service">
                                    <Icon className="service_icon">{service.icon}</Icon> 
                                    <Typography className="service_title" variant="h6">{service.title}</Typography>  
                                    <Typography className="service_description" variant="body2">{service.description}</Typography>
                                </div> 
                            </Grid>
                        ))}
                    </Grid>
                </Grid>                        
            </Grid>

            {/* Skills */}
            <Grid container className="section pb_45">
                <Grid  className="section_title">                    
                    <h6 className="title_text">
                        Skills
                    </h6>
                    <span></span>
                </Grid> 
            </Grid>
            
            <Grid container className="section graybg pb_45 p_50">                                            
                <Grid item xs={12}>
                    <Grid container justify="space-between" spacing={3}>
                        {resumeData.skills.map((skill) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper elevation={0} className="skill">
                                    <Typography variant="h6" className="skill_title">{skill.title}</Typography>
                                    {skill.description.map((element) => (
                                        <Typography variant="body2" className="skill_description">
                                            <TimelineDot variant="outlined" className="timeline_dot" />
                                            {element}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>                                                          
            </Grid> 

            {/* Contact */}
            <Grid container className="">

            </Grid> 

        </>
    )
}

export default Resume

