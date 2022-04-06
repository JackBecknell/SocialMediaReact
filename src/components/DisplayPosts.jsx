import React from "react";
import LikeDislikeButton from "./LikeDislikeButton";
import Post from "./Post"
import './styles/styles.css'

const DisplayPosts = (props) => {
    //This number is used by addBar
    let posts = props.actualPosts.length

    //This function uses length of actualPosts to return a grey divider
    //style at the bottom of each post as long as it isn't the last post
    function addBar (asdf){
        posts = (posts - 1)
        if (posts > 0){
            return 'post-divider'
        }else{
            return ''
        }
    }

    //Set to return a set of divs containing each post fully structured
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
                        <LikeDislikeButton/>
                    </div>
                </div>
                <div className={addBar(posts)}></div>
            </div>
            );
        })}
    </div>
)}
export default DisplayPosts;