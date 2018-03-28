import React from 'react';
import { Card, CardImg, CardTitle, 
    CardSubtitle, CardBlock } from 'reactstrap';


const ChartImage = ({ src, alt, title, subtitle, link }) => {
    return (
        <Card className="text-center">
    <CardImg top width="100%" src={src} alt={alt} />
        <CardBlock>
          <CardTitle>{title}</CardTitle> 
          <CardSubtitle>{subtitle}</CardSubtitle>    
          <a className="btn btn-sm btn-block btn-outline-primary" href={link} target="_blank" style={{marginTop: "1rem"}}>View Large Image</a>   
        </CardBlock>       
    </Card>
       )
}

export default ChartImage;