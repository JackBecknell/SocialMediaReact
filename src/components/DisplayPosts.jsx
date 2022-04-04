import React from "react";
import './styles/default-syle.css'

const DisplayPosts = (props) => {
    return (
    <div>
        {props.actualPosts.map((post) => {
            return (
            <div className='defaultStyle'>
                <h2><b>{post.name}</b></h2>
                <p>{post.post}</p>
                <button type='button'>Like/Dislike</button>
            </div>
            );
        })};
    </div>
)}
export default DisplayPosts;