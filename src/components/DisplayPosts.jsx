import React from "react";
import LikeDislikeButton from "./LikeDislikeButton";
import './styles/styles.css'

const DisplayPosts = (props) => {

    
    return (
    <div>
        {props.actualPosts.map((post) => {
            return (
            <div className='defaultStyle'>
                <h2><b>{post.name}</b></h2>
                <p>{post.post}</p>
                <p>{post.date}</p>
                <div>
                    <LikeDislikeButton type="toggle"/>
                </div>
            </div>
            );
        })}
    </div>
)}
export default DisplayPosts;