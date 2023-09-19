
import React, { useState } from 'react';

import Link from 'next/link';

const UserDeleteForm: React.FC = () => {
    const [userId, setUserId] = useState<string>(''); // State to store the ID of the user to delete
    const [deletedUserData, setDeletedUserData] = useState<any>([]); // Initialize as an empty array
  
    // Function to handle the deletion of a user
    const handleDeleteUser = () => {
      // Make a DELETE request to the API route with the user ID
      fetch(`http://localhost:3090/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
      })
        .then(async (response) => {
          if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}\n${errorMessage}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); // Log the response from the API
          setDeletedUserData(data); // Update the state with the updated user data
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    };

    console.log({deletedUserData})
  return (
    <div>
     
      <input
        type="text"
        placeholder="User ID to delete"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Link href="http://localhost:3000" >   
         <button  onClick={handleDeleteUser}>
        Delete User
      </button>
      </Link>

      
      {/* Display updated user data after deletion if available */}
      {deletedUserData && (
        <div >
          <h2>Updated User Data after Deletion:</h2>
            <div key={deletedUserData.id}>
              <p>ID: {deletedUserData.id}</p>
              <p>Name: {deletedUserData.name}</p>
              <p>Email: {deletedUserData.email}</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default UserDeleteForm;

