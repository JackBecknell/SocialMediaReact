import React from "react";
import LikeDislikeButton from "./LikeDislikeButton";
import './styles/styles.css'

const DisplayPosts = (props) => {

    
    return (
    <div>
        {props.actualPosts.map((post) => {
            return (
            <div >
                <div className='displayed-post'>
                    <h2><b>{post.name}</b></h2>
                    <p className="post-text">{post.post}</p>
                    <div className="date-and-button">
                        <p className="grey-text">{post.date}</p>
                        <LikeDislikeButton type="toggle"/>
                    </div>
                </div>
                <div className="post-divider"></div>
            </div>
            
            );
        })}
    </div>
)}
export default DisplayPosts;