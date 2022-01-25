import React from 'react'

function Comments(props) {
    function handleSubmit(event){
        event.preventDefault();
        const comments = event.target.elements.comment.value
        props.addComment(comments, props.id)
        event.target.elements.comment.value = ''
    }
    return (
        <div className='comment'>
            {
                props.comments.map((comment, index) => {
                    return(
                        <p key={index}> {comment}</p>
                    )
                })
            }
            <form className='comment-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='comment' name='comment'/>
                <input type="submit" hidden/>
            </form>

        </div>
    )
}

export default Comments