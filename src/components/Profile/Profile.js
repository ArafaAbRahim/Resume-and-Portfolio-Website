import { Typography } from '@material-ui/core' 
import img from '../../assets/img/arafa1.jpg'
import React from 'react'
import './Profile.css';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/CustomTimeline';
import resumeData from '../../utils/resumeData';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({title, icon , text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">            
            {link ? (
            <Typography className="timelineItem_text">
                <span>{title}:</span> <a href={link} target='_blank'>{text}</a>
            </Typography>) : (
                <Typography className="timelineItem_text">
                    <span>{title}:</span>{text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            
            <figure className="profile_image">
                <img src={img} alt="" />
            </figure>

            <div className="profile_info">
                <CustomTimeline icon={<PersonOutlineIcon />}>
                    
                    <CustomTimelineItem title='Name' text={resumeData.name} />
                    <CustomTimelineItem title='Title' text={resumeData.title} />
                    <CustomTimelineItem title='Date of Birth' text={resumeData.birthday} />
                    <CustomTimelineItem title='Email' text={resumeData.email} />
                
                    {Object.keys(resumeData.socials).map((Key) => (
                        <CustomTimelineItem 
                          title={Key} 
                          text={resumeData.socials[Key].text} 
                          link={resumeData.socials[Key].text} 
                        />
                    ))}
                </CustomTimeline>
                
                <div className="btn_container">
                    <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
                </div>
            </div>
        </div>
    )
}

export default Profile
