import React, { useState } from "react";
import './styles/styles.css'

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [date, setDate] = useState('')

    function handleSubmit (event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post,
            date: date
        };
        props.addNewPostProperty(newEntry)
    }

    return (                                                // V un-used currently
        <form onSubmit={handleSubmit} className='feed-box create-post'>
            <div className="create-post-row">
                <label className="create-post-row-item">Name</label>
                <input className="post-input" type='text' value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div className="create-post-row">
                <label className="create-post-row-item">Post</label>
                <textarea className="post-input  big-input" type='text' value={post} onChange={(event)=>setPost(event.target.value)}/>
            </div>
            <div className="create-post-date-create">
                <div className="close-together">
                    <label className="create-post-row-item">Date</label>
                    <input className="post-input-date" type='date' value={date} onChange={(event)=>setDate(event.target.value)}/>
                </div>
                <button type='submit' className="create-button">Create</button>
            </div>
        </form>
    );
}

export default CreatePost;