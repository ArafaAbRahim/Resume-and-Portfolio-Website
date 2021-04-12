import { Grid, Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Typography, Grow, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import React, { useState } from 'react'
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import resumeData from '../../utils/resumeData';
import './Portfolio.css';



const Portfolio = () => {
    const [tabValue, setTabValue] = useState("All");
    const [projectDailog, setProjectDailog] = useState(false)         

        return (        

        <Grid container spacing={2} className="section pb_45 pt_45">
           <Grid item className="section_title mb_30">                    
                <h6 className="title_text">
                    Portfolio
                </h6>
                <span></span>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue} indicatorColor="white" className="customTabs" onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab label="All" value="All" className={tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'} />

                    {[...new Set(resumeData.projects.map((item) => item.tag))].map((tag) => (
                        <Tab label={tag} value={tag} className={tabValue == tag ? 'customTabs_item active' : 'customTabs_item'} />
                    ))}
                </Tabs>
            </Grid>

            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {resumeData.projects.map((project) => (
                        <> 
                        {tabValue == project.tag || tabValue == 'All' ? ( 
                            <Grid item xs={12} sm={6} md={4}>
                                <Grow in timeout={1000}>
                                    <Card className="customCard" onClick={() => setProjectDailog(project)}> 
                                        <CardActionArea>
                                            <CardMedia className="customCard_image" image={project.images} title={project.title} />
                                            <CardContent>
                                                <Typography variant="body2" className="customCard_title">{project.title}</Typography>
                                                <Typography variant="body2" className="customCard_caption" variant="body2">{project.caption}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grow>                            
                            </Grid>
                        ) : null}
 
                        </>                        
                    ))}
                </Grid>
            </Grid>

            <Dialog open={Boolean(projectDailog)} onClose={() => setProjectDailog(false)} className="projectDialog" maxWidth={"lg"} fullWidth>
                <DialogTitle onClose={() => setProjectDailog(false)}>
                    {projectDailog.title}
                </DialogTitle>

                <DialogContent >              
                    {projectDailog.images && (                                                
                        <ImageGallery images={projectDailog.images} />
                    )}
                    
                    <Typography className="projectDialog_description">
                        {projectDailog.description}
                    </Typography>
                </DialogContent>

                <DialogActions className="projectDialog_actions">
                    {projectDailog?.links?.map((link) => (
                        <a href={link.link} target="_blank" className="projectDialog_icon">{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>
       </Grid>
       
    )
    
}

export default Portfolio
