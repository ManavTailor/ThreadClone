// Your imports and other code...

import { useState } from "react";

const UserUpdateForm = () => {
    const [userId, setUserId] = useState(''); 
    const [userName, setUserName] = useState(''); 
    const [userEmail, setUserEmail] = useState(''); 
    const [updatedUserData, setUpdatedUserData] = useState(null); 
   
    const handleUpdateUser = () => {
     
      fetch(`http://localhost:3090/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId, name: userName, email: userEmail }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); 
          setUpdatedUserData(data); 
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Updated Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Updated Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button onClick={handleUpdateUser}>Update User</button>
        
        {updatedUserData && (
          <div>
            <h2>Updated User Data:</h2>
            <p>ID: {updatedUserData.userId}</p>
            <p>Name: {updatedUserData.name}</p>
            <p>Email: {updatedUserData.email}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default UserUpdateForm;
  