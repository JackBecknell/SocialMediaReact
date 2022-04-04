import React from "react";
import LikeDislikeButton from "./LikeDislikeButton";
import {clickLike} from "./LikeDislikeButton"
import './styles/default-syle.css'

const DisplayPosts = (props) => {

    function clickLike () {
        console.log('You like this')
        let like = true
        let dislike = false
        while (like = true){
            
        }
    }
    function clickDislike () {
        console.log('You Dislike this')
        let like = false
        let dislike = true
    }
    return (
    <div>
        {props.actualPosts.map((post) => {
            return (
            <div className='defaultStyle'>
                <h2><b>{post.name}</b></h2>
                <p>{post.post}</p>
                <div>
                    <button id='like' type='button' onClick={clickLike}>Like</button>
                    <button id='dislike' type='button' onClick={clickDislike}>Dislike</button>
                </div>
            </div>
            );
        })}
    </div>
)}
export default DisplayPosts;