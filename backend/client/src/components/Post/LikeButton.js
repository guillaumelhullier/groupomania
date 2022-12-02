import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UidContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { likePost } from "../../actions/post.actions";
import { unlikePost } from "../../actions/post.actions";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likePost(post._id, uid));
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikePost(post._id, uid));
    setLiked(false);
  };

  useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, post.likers, liked]);

  return (
    <div className="like-container">
      {uid === null && (
        <Popup
          trigger={<img src="./img/icons/heart.svg" alt="like" />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick
        >
          <h6>Installer icone du coeur dans Like Button</h6>
          <div>Connectez vous pour aimer un post</div>
        </Popup>
      )}
      {uid && liked === false && (
        <img src="./img/icons/heart.svg" onClick={like} alt="like" />
      )}
      {uid && liked && (
        <img src="./img/icons/heart-filled.svg" onClick={unlike} alt="unlike" />
      )}
      <h6>Installer icone du coeur dans Like Button</h6>
      <span>{post.likers.length}</span>
    </div>
  );
};

export default LikeButton;
