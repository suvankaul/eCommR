import React, { Component } from 'react';
import './Homepage.style.scss';

//Component imports
import Menu from '../../components/menu/Menu.component'

class Homepage extends Component{
    render(){
        return(
            <div className="homepage">
                {/* <Navigation></Navigation> */}
                <Menu></Menu>
            </div>
        )
    }
}

export default Homepage;