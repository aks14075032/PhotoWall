import { render } from "@testing-library/react";
import React, {Component} from "react";
import {useParams} from 'react-router-dom'
import Photo from "./Photo";
import Comments from "./Comments";

function Single(props){
    const id = useParams()
    const {match, posts} = props
    const post = posts.find((post) => post.id === id.id)
    const comments = props.comments[id.id] || []
    const index = props.posts.findIndex((post) => post.id === id.id)
    console.log(post)
    return <div className="single-photo">
                <Photo post={post} {...props} index={index}/>
                <Comments addComment = {props.addComment} comments = {comments} id={id.id}/>
           </div>
}

export default Single