import React from 'react'
import './education.css'

const Timeline = (props) => {
    const {qualification,year,institute,mark} = props.props;
    console.log(qualification);
  return (
    <div className="timeline-item">
                <div className="circle"></div>
                <h3 className="timeline-date">
                  <i className="uil uil-calendar-alt"></i> {year}
                </h3>
                <h4 className="timeline-title">{qualification}</h4>
                <p className="timeline-text">
                  {institute}
                </p>
                <p>percentage :<span>{mark}</span> </p>
              </div>
  )
}

export default Timeline