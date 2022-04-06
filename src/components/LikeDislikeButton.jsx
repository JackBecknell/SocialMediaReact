import { useState } from "react";
import './styles/styles.css'

const LikeDislikeButton = (props) => {
    
    const[likeButtonClass, setLikeButtonClass] = useState('unclicked')
    const[dislikeButtonClass, setDislikeButtonClass] = useState('unclicked')

    function handleClick (type) {
        if (type === 'like'){
            if(likeButtonClass === 'unclicked'){
                setLikeButtonClass('liked')
                setDislikeButtonClass('unclicked')
            }else if(likeButtonClass === 'liked'){
                setLikeButtonClass('unclicked')
                setDislikeButtonClass('unclicked')
            }
        }else if (type === 'dislike'){
            if(dislikeButtonClass === 'unclicked'){
                setDislikeButtonClass('disliked')
                setLikeButtonClass('unclicked')
            }else if(dislikeButtonClass === 'disliked'){
                setDislikeButtonClass('unclicked')
                setLikeButtonClass('unclicked')
            }
        }
    }

        return (
            <div className="like-and-dislike">
                <button className={"invisible-edge"} onClick={() => handleClick('like')}><span className={likeButtonClass} ><i class="fas fa-thumbs-up fa-lg"></i></span></button>
                <button className={"invisible-edge"} onClick={() => handleClick('dislike')}><span className={dislikeButtonClass}><i class="fas fa-thumbs-down fa-lg"></i></span></button>
            </div>
        )
}

export default LikeDislikeButton