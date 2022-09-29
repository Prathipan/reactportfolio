import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectCard = (project) => {
    const {title,description,url,img} = project.project;

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
  return (
    <Card className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button style={{backgroundColor:"#bd5d38"}} onClick={() => openInNewTab(url)}>demo <i className="uil uil-angle-right"></i></Button>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard