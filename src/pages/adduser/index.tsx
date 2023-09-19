// components/AddUser.tsx
import { useState } from 'react';
import styles from './adduser.module.css';
import Link from 'next/link';

const AddUser = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = async () => {
    console.log('User added:', { id, name,comment, image, email });

    try{
      const response = await fetch("http://localhost:3090/users/post", {
        method:"POST",
        headers:{
          'content-Type':'application/json',
        },
        body:JSON.stringify({id, name, comment, image, email})
        
      })
      // console.log(comment)
      const data = await response.json()
    } 
    catch(error)
    {
      console.log(error)
    }
  };
  fetch("http://localhost:3090/users/get", {
    method:"GET",
    headers:{
      'content-Type':'application/json',
      },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      }
      )
      .then((data) => {
        console.log(data);
      }
      )
      .catch((error) => {
        console.error('Fetch error:', error);
      }
      );



  return (
    <div className={styles.container}>
    <h1>Add Post</h1>
    <label>
      ID:
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
    </label>
    <br />
    <label>
      Name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <br />
    <label>
      Comment: 
      <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
    </label>
    <label>
      Image upload:
      <input type='file' value={image} onChange={(e) => setImage(e.target.value)} />
    </label>
    <label>
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <br />
    <Link href="http://localhost:3000">
    <button className={styles.addButton} onClick={handleAddUser}>
      Add Post
    </button>
    </Link>
  </div>
  
  );
};

export default AddUser;
