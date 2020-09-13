import React, { Component } from 'react';
import './Menu.style.scss';

import MenuItem from '../menu-item/MenuItem.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectMenuSections }  from '../../redux/menu/menu.selector';
class Menu extends Component{

    render(){
        const { sections } = this.props;
        return (
            <div className="menu">
                {
                    sections.map(({ id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} ></MenuItem>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    sections: selectMenuSections
})

export default connect(mapStateToProps)(Menu);