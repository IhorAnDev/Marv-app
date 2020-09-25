import React from 'react';
import './StoriesContent.css';
import {ListGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";

function StoriesContent(props){
    const {story: {title, resourceURI}} = props;
    return(
        // <div className="background_image_stories">
<ListGroup.Item>
<h3 className="title_hero">{title}</h3>
<Link className="link_hero" to={resourceURI}>{resourceURI}</Link>
</ListGroup.Item>
// </div>

    )
}
export default StoriesContent;