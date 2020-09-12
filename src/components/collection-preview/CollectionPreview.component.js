import React, { Component } from 'react';
import './CollectionPreview.style.scss';
import { withRouter } from 'react-router-dom';
import CollectionCard from '../collection-card/CollectionCard.component';

class PreviewCollection extends Component{
    render(){
        const { title, items, history, match } = this.props;
        // console.log(history, match)
        return(
            <div className="collection-preview">
                <div className="collection-title" onClick = {() => history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</div>
                <div className="collection">
                    {
                        items.filter((item, index) => index < 4).map((item) => (
                            <CollectionCard key={item.id} item={item}></CollectionCard>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(PreviewCollection);