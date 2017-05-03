import React from 'react';
import { Card, CardImg, CardTitle, 
    CardSubtitle, CardBlock } from 'reactstrap';


const ChartImage = ({ src, alt, title, subtitle }) => (
    <Card className="text-center">
    <CardImg top width="100%" src={src} alt={alt} />
        <CardBlock>
          <CardTitle>{title}</CardTitle> 
          <CardSubtitle>{subtitle}</CardSubtitle>       
        </CardBlock>
    </Card>
);

export default ChartImage;