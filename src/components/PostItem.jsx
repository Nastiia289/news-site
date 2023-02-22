import React from "react";
import '../styles/App.css'

function PostItem (props){
    return(
        <div className='post'>
        <div className='post__content'>
          <strong>{props.id}. {props.name}</strong>
          <div>
            {props.description}
          </div>
        </div>
        <div className='post__btns'>
          <button>Видалити</button>
        </div>
      </div>
    )
}

export default PostItem;

