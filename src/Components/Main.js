import React, {Component} from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall.js"
import AddPhoto from "./AddPhoto";
import {Route, Routes, Link} from 'react-router-dom'
import TitlePhotoWall from "./TitlePhotoWall";
import OnAddPhoto from "./OnAddPhoto";
import {removePost} from '../redux/actions'

class Main extends Component {
    constructor() {
      super()
    } 

    render(){
      console.log(this.props.posts)
      return (
            <>
                <h1>
                  <Link to='/'>Photowall</Link>
                </h1>
                <Routes>
                  <Route exact path = "/" element = {<TitlePhotoWall {...this.props}/>}/>  
                  <Route path = "/AddPhoto" element = {<OnAddPhoto {...this.props} /> } />
                </Routes>
            </>
      )
    }
  }
{/* element = {<TitlePhotoWall posts={this.state.posts} removePhoto={this.removePhoto}/>} */}
export default Main