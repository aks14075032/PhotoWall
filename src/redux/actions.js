export function removePost (index){
    return{
        type:'REMOVE_POST',
        index
    }
}

export function addPhoto(post) {

    return{
        type: 'ADD_POST',
        post
    }
}