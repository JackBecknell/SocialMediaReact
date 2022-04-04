import React, { useState } from "react";
import './styles/default-syle.css'

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        props.addNewPost(newEntry)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event)=>setName(event.target.value)}/>
            <label>Post</label>
            <input type='text' value={name} onChange={(event)=>setPost(event.target.value)}/>
            <button type='submit'>Create</button>
        </form>
    );
}

export default CreatePost;