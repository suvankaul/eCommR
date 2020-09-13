import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.style.scss';

import { Card } from 'react-bootstrap'

class MenuItem extends Component{
    render(){
        const { title, imgUrl, history, linkUrl, match } = this.props;
        return (
            <Card className="menu-item" onClick = {() => history.push(`${match.url}${linkUrl}`)}>
                <div className="background-img" style={{backgroundImage:`url(${imgUrl})`}}></div>
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="subtitle">SHOP NOW</div>
                </div>
            </Card>
        )
    }
}

export default withRouter(MenuItem);