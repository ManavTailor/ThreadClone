import React, { useState, useEffect } from 'react';
import Styles from './threadb.module.css';
import Image from 'next/image';
import Thread from '@/components/thread/thread';
import Link  from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"

// Define the type for a single tweet
type ThreadType = {
  profile: string;
  threadContent: string;
  rethreadCount: number;
  name: string;
  likeCount: number;
  commentCount: number; // Add this property
};


const ThreadBody = () => {
  // const [threads, setThreads] = useState<ThreadType[]>([]);
  // const [error, setError] = useState();

  const router = useRouter();
  const { data: session } = useSession(); // Destructure the session object
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const [thread, setThread] = useState('');
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3090/users/get' , {mode:'cors'})
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: ThreadType[]) =>{console.log(data); setThreads(data)})
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);
  useEffect(() => {   
    if (thread.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [thread]);
  
  const handleThreadsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setThread(e.target.value);
  };

  const handlePostThreads = () => {
    const username = session?.user?.name;
    const threadContent = thread;
    const date = new Date();
    const newDate = date.toISOString();
    const res = fetch('http://localhost:3090/users/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, threadContent, newDate, profilePicture })
    });
    setThread('');
    setDisable(true);
    router.reload();
  };


  return (
    
    
    <div className={`${Styles.body} bg-black text-white`}>
      <div style={{height: '60px'}}>

</div>
      <div className={Styles.header}>
      
        <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md ">
          <div className="flex-shrink-0">
            <Image src="/pf.png" width={50} height={50} alt="pf" />
          </div>
        </div>
        <div className="space-x-2 text-blue-500 bg-gray-100 border border-blue-500 rounded-md">
          <span className="font-bold text-gray-50">Start a thread...</span>
        </div>
        <Link href="/adduser">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Post
        </button>
      </Link>
      <Link href="/updateuser">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Update Post
        </button>
      </Link>
      </div>
      <div className="threadbody">
        {threads.map((thread, index) => (
          <Thread 
          key={index}
          profile={thread.profile}
          username={thread.name}
          comment={thread.comment}
          likeCount={thread.likeCount}
          commentCount={thread.commentCount}
          rethreadCount={thread.rethreadCount}
          threadcontent={thread.threadContent}
          />
        ))}
         <Link href="/deleteuser">
          <button>
              Delete Post
          </button>
        </Link>     
        </div>
      
    </div>
  );
};

export default ThreadBody;
