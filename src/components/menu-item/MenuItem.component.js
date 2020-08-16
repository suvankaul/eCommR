import React, { Component } from 'react';
import './MenuItem.style.scss';

import { Card } from 'react-bootstrap'

class MenuItem extends Component{
    render(){
        const { title, imgUrl } = this.props;
        return (
            <Card className="menu-item">
                <div className="background-img" style={{backgroundImage:`url(${imgUrl})`}}></div>
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="subtitle">SHOP NOW</div>
                </div>
            </Card>
        )
    }
}

export default MenuItem;