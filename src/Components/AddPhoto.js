import react, {Component} from "react";
import {useNavigate} from "react-router-dom"
import PropTypes from "prop-types";

function AddPhoto(props) {
    let navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault();
        const imageLink =  event.target.elements.link.value
        const description =  event.target.elements.description.value
        const post = {
            id: 0,
            description: description,
            imageLink: imageLink
        }
        if (imageLink && description){
            props.addPhoto(post);
            navigate('/');
        }
    }
    return (
        <div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
}


export default AddPhoto