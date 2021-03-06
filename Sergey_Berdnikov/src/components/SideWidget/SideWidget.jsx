import './SideWidget.css';

//React импортируем в каждом файле
import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

export default function SideWidget() {
    return (
        <div className="SideWidget">
            <Card>
                <CardHeader tag="h5">Side Widget</CardHeader>
                <CardBody>
                    <CardText>
                        You can put anything you want inside of these side widgets. They are easy to use, and
                        feature the new Bootstrap 4 card containers!
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};
    
