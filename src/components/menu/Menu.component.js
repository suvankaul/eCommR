import React, { Component } from 'react';
import './Menu.style.scss';

import MenuItem from '../menu-item/MenuItem.component';

class Menu extends Component{
    constructor(){
        super();
        this.state = {
            sections: [{
                title: 'HATS',
                imgUrl: `https://image.freepik.com/free-photo/summer-women-s-clothes-flat-lay-fashion-photo-blue-jeans-sun-hat-wooden-background-copy-space_78677-1080.jpg`,
                id: 1
            },{
                title: 'JACKETS',
                imgUrl: `https://img.freepik.com/free-photo/brown-woolen-coat-wooden-background_134398-411.jpg?size=626&ext=jpg`,
                id: 2
            },{
                title: 'SNEAKERS',
                imgUrl: `https://t3.ftcdn.net/jpg/01/90/65/48/240_F_190654818_ezc3Q7pfBd7n7GV2QF8ANCAZMLr3rJ9L.jpg
                `,
                id: 3
            },{
                title: 'WOMEN',
                imgUrl: `https://mocah.org/uploads/posts/1112499-face-sunlight-women-model-portrait-long-hair-brunette-looking-at-viewer-photography-necklace-dress-smiling-fashion-hair-spring-Person-girl-beauty-smile-woman-lady-photo.jpg`,
                id: 4
            },{
                title: 'MEN',
                imgUrl: `https://www.thestatesman.com/wp-content/uploads/2019/05/mens-fashion.jpg`,
                id: 5
            }]
        }
    }
    render(){
        return (
            <div className="menu">
                {
                    this.state.sections.map(({ title, imgUrl, id}) => (
                        <MenuItem title={title} imgUrl={imgUrl} key={id} ></MenuItem>
                    ))
                }
            </div>
        )
    }
}

export default Menu;