import React,{Component} from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

function PhotoWall(props){
    return <div>
                <Link to="/AddPhoto"><img className="add-icon" src="https://png.pngtree.com/png-vector/20191004/ourmid/pngtree-additional-plus-icon-png-image_1788619.jpg"/></Link>
                <div className="photo-grid">
                    {props.posts.map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
                </div>
           </div> 
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall