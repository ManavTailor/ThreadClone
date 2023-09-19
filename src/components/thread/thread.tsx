/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Styles from "./thread.module.css"
import Image from 'next/image'
type ThreadProps = {
  profile: string;
  username: string;
  comment: string;
  likeCount: number;
  commentCount: number; // Add this property
  rethreadCount: number;
  threadcontent: string,
};

const Thread: React.FC<ThreadProps> = ({
  profile,
  username,
  comment,
  likeCount,
  commentCount,
  rethreadCount,
  threadcontent,
}) => {
  return (
    <div className={Styles.thread}>
      <div className={Styles.threadContent}>
        <div className={Styles.name}>
          <div className={Styles.logo}>
          <Image 
          width="52" 
          height="52" 
          src="https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png" 
          alt="profile"/>
          </div>
          <h3>{username}</h3>
          
        </div>
        <div className={Styles.comment}>
          
            <p>{comment}</p>
          </div>

        
        <div className={Styles.threadText}>{threadcontent}</div>
        <div className={Styles.react}>
        
          <div className={Styles.likes}>
            <Image
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/like--v1.png"
              alt="like--v1"
            />
            <p>{likeCount}</p>
          </div>
          <div className={Styles.comment}>
            <Image
              width="20"
              height="20"
              src="https://img.icons8.com/fluency-systems-regular/48/retweet.png"
              alt="comment"
            />
            <p>{commentCount}</p>
          </div>
          
          <div className={Styles.rethread}>
            <Image
              width="20"
              height="20"
              src="https://img.icons8.com/fluency-systems-regular/48/retweet.png"
              alt="rethread"
            />
            <p>{rethreadCount}</p>
          </div>
          
          <div className={Styles.share}>
            <Image
              width="20"
              height="20"
              src="https://img.icons8.com/windows/32/share-3.png"
              alt="share-3"
            />
            
          </div>
        </div>
      </div>
      <hr/>
      {/* <div className={Styles.react1}>
        <button className={Styles.reactlike}>Like</button>
        <button className={Styles.reactcomment}>Comment</button>
      </div> */}
      {/* <div className={Styles.input}>
        <div className={Styles.logo}>M</div>
        <input
          className={Styles.input1}
          placeholder="Write a comment..."
          type="text"
        /> */}
        {/* <img className={Styles.icon} width="24" height="24" src="/Tlogo.jpg" alt="sent"/> */}
      {/* </div> */}
    </div>
  );
};
export default Thread
